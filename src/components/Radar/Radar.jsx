import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './Radar.scss'

const isH5 = Taro.getEnv() === Taro.ENV_TYPE.WEB;
const Highcharts = isH5 ? require('highcharts/highstock') : null;
const highchartsMore = isH5 ? require('highcharts/highcharts-more') : null;
if (highchartsMore) {
  highchartsMore(Highcharts);
}
// 实例:    
{/* <Radar 
img={radarImg}
title={{text:'注册地'}}
list={[
  {name: '<=5亿元', value: '49家'},
  {name: '5-10亿元', value: '63家'},
  {name: '10-25亿元', value: '28家'},
  {name: '25-50亿元', value: '5家'},
  {name: '>50亿元', value: '1家'},
]}
/>  */}
// img是为了支持微信放置的图片
// 如果需要title就传入
// list是下面列表，会自动生成雷达图
export default class Radar extends Component{

  componentDidMount () {
    let categories = []
    let data = []
    this.props.list.map(item=>
      {
        categories.push(item.name)
        data.push(parseInt(item.value))
      }
    )
    Highcharts.chart('radar-root-chart', {
      chart: {
        polar: true
      },
      title: {
        text: null
      },
      xAxis: {
        categories: categories
      },
      yAxis: {
        labels:{
          enabled:false
        },
        title:null
      },
      series: [
        {
          type: 'area',
          name: null,
          showInLegend: false,
          data: data,
          color:'#5082E4AD'
        }
      ],
      credits:{
        enabled: false,
      }
    });     
  }

  render(){
    return (
      <View className='radar-root'>
        {/* 如果有标题 */}
        {
          this.props.title&&
          <View className='radar-root-title-box'>
            <Text className='radar-root-title-box-title'>
              {this.props.title.text}
            </Text>
            {/* 如果还有按钮 */}
            {
              this.props.title.moreBtn&&
              <View 
                className='radar-root-title-box-more'
                onClick={()=>this.props.title.moreFn()}
              >
                <Text className='radar-root-title-box-more-text'>
                  {this.props.title.moreBtn}
                </Text>
                <Image 
                  className='radar-root-title-box-more-img'
                  src={this.props.title.moreBtnImg}
                />
              </View>
            }
          </View>
        }
        {/* 如果是h5 */}
        {
          isH5?
          <View 
            className='radar-root-chart'
            id='radar-root-chart'
            style={{width: '100%',height: '10rem'}}
          >

          </View>
          :
          <Image
            className='radar-root-chart-img'
            src={this.props.img}
          />
        }
        {/* 下面列表 */}
        <View className='radar-root-list'>
          {
            this.props.list.map(item=>
              <View className='radar-root-list-every'>
                <Text className='radar-root-list-every-name'>{item.name}</Text>
                <Text className='radar-root-list-every-value'>{item.value}</Text>
              </View>  
            )
          }
        </View>
      </View>
    )
  }
}
