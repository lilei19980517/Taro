import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './AnnularList.scss'

// 实例:
//<AnnularList
// title={{text:'注册地', moreBtn: '更多', moreBtnImg: btnURL, moreFn: this.childFn}}
// list={[
//  {name: '上海', value: '210家', img: annular3},
//  {name: '广东', value: '324家', img: annular2},
//  {name: '江苏', value: '624家', img: annular1},
//  {name: '北京', value: '29家', img: annular4},
// ]}
///> 
// title属性有则渲染，无则不渲染
// title.text就是左边的标题。
//morenbtn就是按钮的文字，不传就没有更多按钮
// moreBtnImg就是按钮旁边有个图片，
// moreFn传入函数，点击执行
// list是一个数组，会自动进行排序，img是小程序端显示的图片，会根据前面value的内容自动排序
const isH5 = Taro.getEnv() === Taro.ENV_TYPE.WEB;
const Highcharts = isH5 ? require('highcharts/highstock') : null;
let num = 0

export default class AnnularList extends Component{

  // 排序this.prps.list
  componentWillMount () {
    this.props.list.map(item=>
      num += parseInt(item.value)  
    )
    this.props.list.sort((a,b)=>{
      if(parseInt(a.value) > parseInt(b.value)){
        return -1
      }else if(parseInt(a.value) < parseInt(b.value)){
        return 1
      }else return
    })
  }
  componentDidMount () {
    this.props.list.map((item,index)=>{
      Highcharts.chart(`annular-list-root-every-chart${index}`, {
        chart: {
          spacing : [0, 0 , 0, 0]
        },
        title: {
          floating:true,
          text: 
          `<div >
            <span style="color:#0077E4;font-size:1em;font-weight:500">TOP${index + 1}</span>
            <br />
            <span style="color:#666666">${item.value}</span>
          </div>`
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
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
        series: [{
          type: 'pie',
          innerSize: '80%',
          name: '市场份额',
          data: [
            {name:'one',   y: parseFloat(item.value), color: '#0077E4FF'},
            {name:'two',   y: num - parseFloat(item.value),color:'#F0F5FC'},
          ]
        }],
        credits:{
          enabled: false,
        }
      }, function(c) { // 图表初始化完毕后的会掉函数
        // 环形图圆心
        var centerY = c.series[0].center[1],
          titleHeight = parseInt(c.title.styles.fontSize);
        // 动态设置标题位置
        c.setTitle({
          y:centerY + titleHeight/2 - 10
        });
      });      
    })
  }

  render(){
    return (
      <View className='annular-list-root'>
        {/* 如果有标题 */}
        {
          this.props.title&&
          <View className='annular-list-root-title-box'>
            <Text className='annular-list-root-title-box-title'>
              {this.props.title.text}
            </Text>
            {/* 如果还有按钮 */}
            {
              this.props.title.moreBtn&&
              <View 
                className='annular-list-root-title-box-more'
                onClick={()=>this.props.title.moreFn()}
              >
                <Text className='annular-list-root-title-box-more-text'>
                  {this.props.title.moreBtn}
                </Text>
                <Image 
                  className='annular-list-root-title-box-more-img'
                  src={this.props.title.moreBtnImg}
                />
              </View>
            }
          </View>
        }
        {
          this.props.list.map((item,index)=>
            <View 
              className='annular-list-root-every'
              key={item.title}
            >
              {/* 环境判断是不是h5，不是则不能使用highchart */}
              {
                isH5?
                <View
                  className='annular-list-root-every-chart'
                  id={'annular-list-root-every-chart' + index}
                  style={{width: '5rem', height: '5rem'}}
                >
                </View>
                :
                <Image 
                  className='annular-list-root-every-img'
                  src={item.img}
                />
              }
              
              <Text className='annular-list-root-every-text'>{item.name}</Text>
            </View>
          )
        }
      </View>
    )
  }
}
