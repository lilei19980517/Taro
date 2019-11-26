import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'

import './RankList.scss'
import zi from './images/triangle.png'

const isH5 = Taro.getEnv() === Taro.ENV_TYPE.WEB;
const Highcharts = isH5 ? require('highcharts/highstock') : null;
// });
// 组件介绍
// 例：
{/* <RankList 
list={
  {
    chart:{
    title: [
      {title:'行业分类'},
      {title:'更多'},
      {btnImg:'ziXunImg1'}
    ],
    img:ziXunImg1,
    type:'pie',
    data:[
      {name:'计算机', value: 17},
      {name:'制造业', value: 17},
      {name:'软件服务', value: 17},
      {name:'医药制造业', value: 17},
      {name:'互联网', value: 17},
    ]
  },
    left:{
      title:'行业分类',
      className:'qwer',
      value:['计算机', '制造业', '软件服务', '医药制造业', '互联网'],
      numBgc:[
        '#f8cb49', 
        '#EF8A46', 
        '#E35857', 
        '#4E8BAE', 
        '#407CD5', 
        '#4B5FB2',
        '#48718C']
    },
    right:[
      {
        title:'更多',
        value:['17%','60%','2%'],
      },
      {
        btnImg: ziXunImg1,
        onClickFn:this.bannerFn,
      }
    ],
    underLine:true 
  }
}
/> */}
// 传入如上list，其中left代表左侧区域内容，right代表右侧区域内容
// left.title是头部标题，如果没有left.title就可以取消头部
// left.className支持传入类名以覆盖掉原样式，建议加上！important
// left.value代表左侧每一行的值
// right是一个数组，代表多少列数据，最多两列，right.title就是对应给left.title同一行的标题
// right.value对应left.value同一行内日你个
// 其中如果想有一个按钮，right数组中某一项写入btnImg,代表图片地址，onClickFn传入点击事件
// 最后underLine代表底部下划线，有则渲染，默认建议小于等于五行使用，超过五行则都是相同宽度

export default class RankList extends Component{
  constructor(props){
    super(props)
    this.state={
      leftClassName:''
    }
  }
  componentDidMount () {
    // 如果没有排行的线条设置左边标题类名让其居中对齐
    if(!this.props.list.underLine){
      this.setState({
        leftClassName: 'rank-list-root-list-row-left-title-line-height'
      })
    }
    const list = this.props.list
    console.log(list)
    let a = 0;
    let data=[]
    list.chart.data.map((item,index)=>{
      a+=item.value
      data.push({
          'y':item.value,
          'color':this.props.list.left.numBgc[index],
          'name':item.name
        })
    })
    if(isH5){
      Highcharts.chart('rank-list-root-chart', {
        chart: {
          type: list.chart.type
        },
        title: {
          floating:true,
          text: 
            `<div >
              <span style="color:#0077E4;font-weight:500">共计</span>
              <br />
              <span style="color:#666666">${a}家</span>
            </div>`
        },
        plotOptions: {
          pie: {
            borderWidth: 0,
            dataLabels:{
              connectorWidth: 0,
              enabled:false,
            },
          },
        },
        tooltip: {
          valueSuffix: '%'
        },
        series: [{
          data:data,
          size: '100%',
          innerSize: '65%',
        }],
        credits:{
          enabled: false,
        }
      },function(c) { // 图表初始化完毕后的会掉函数
        // 环形图圆心
        var centerY = c.series[0].center[1],
          titleHeight = parseInt(c.title.styles.fontSize);
        // 动态设置标题位置
        c.setTitle({
          y:centerY + titleHeight/2 - 10
        });
      });
    }
  }
  childFn=()=>{console.log('123')}
  render(){
    return (
      <View className='rank-list-root'>
        {/* 如果有图表 */}
        {
          this.props.list.chart&&
          <View>
            {/* 如果有标题，跟下面排行一样的标题 */}
            {
              this.props.list.chart.title&&
              <View className='rank-list-root-top-box'>
                {this.props.list.chart.title.map(item=>
                  item.title?
                  <Text className='rank-list-root-top-box-title'>
                    {item.title}
                  </Text>
                  :
                  <Image
                    className='rank-list-root-top-box-right-btn'
                    src={item.btnImg}
                    onClick={()=>item.onClickFn()}
                  />
                )}
              </View>
            }
            <View
              style={{width: '100%' ,height:'9rem'}}
              className='rank-list-root-chart'
              id='rank-list-root-chart'
            >
              {
                !isH5&&
                <Image 
                  className='rank-list-root-chart-img'
                  src={this.props.list.chart.img}
                />
              }
            </View>
          </View>
        }
        {/* 标题盒子 */}
        {
          this.props.list.left.title&&
          <View className='rank-list-root-top-box'>
            {/* 靠左边的主列 只有一个*/}
            <Text 
              className='rank-list-root-top-box-left'
            >
              {this.props.list.left.title}
            </Text>
            {/* 分别map右边的 */}
            {
              this.props.list.right.map((item,index)=>
                index !== this.props.list.right.length-1
                ?
                <Text
                  key={item.title}
                  className='rank-list-root-top-box-right'
                >
                  {item.title}
                </Text> 
                :
                <Image 
                  className='rank-list-root-top-box-right-btn'
                  src={item.btnImg}
                  onClick={()=>item.onClickFn()}
                />
              )
            }
          </View>
        }
        {/* 中间列表 */}
        <View className='rank-list-root-list'>
          {
            this.props.list.left.value.map((item,index)=>
              <View 
                key={item}
                className='rank-list-root-list-row'
              >
                {/* 左边标题内容 */}
                {/* 支持传入颜色值 */}
                <Text 
                  style={{backgroundColor: this.props.list.left.numBgc[index]}}
                  className={`rank-list-root-list-row-left-num ${this.state.leftClassName}`}
                >
                  {index+1}
                </Text>
                <Text className={`rank-list-root-list-row-left-title ${this.state.leftClassName}`}>{item}</Text>
                {/* 右边值内容 */}
                <Text 
                  key={this.props.list.right[0].title}
                  className='rank-list-root-list-row-right rank-list-root-list-row-right-0'
                >
                  {this.props.list.right[0].value[index]}
                </Text>
                {
                  this.props.list.right[1].value&&
                   <Text 
                     key={this.props.list.right[1].title}
                     className='rank-list-root-list-row-right rank-list-root-list-row-right-1'
                   >
                    {this.props.list.right[1].value[index]}
                   </Text> 
                }
                {/* 放下划线 */}
                {
                  this.props.list.underLine&&
                  <View className='rank-list-root-list-row-line' />
                }
              </View>
            )
          }
        </View>
      </View>
    )
  }
}