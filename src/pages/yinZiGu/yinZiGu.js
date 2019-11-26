import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'

import './yinZiGu.scss'

import StockList from '../../components/StockList/StockList'

export default class YinZiGu extends Component{
  config = {
    navigationBarTitleText: '科创板影子股'
  }
  constructor(props){
    super(props)
    this.state = {
      stockListArr: [
        {
          title: {name:'康美药业',daiMa: 600518,price: 6.42,upsAndDowns: '-0.45%'},
          list:[
            {title: '西部超导材料科技股份有限公司', text: '有色金属治炼'},
            {title: '天津就日新材料股份有限公司', text: '化学原料和化学制品'},
            {title: '烟台创维纳技术股份有限公司', text: '计算机、通信和其他电子设备制造'},
            {title: '苏州泽燕生物制药股份有限公司', text: '医药制造业'},
          ]
        },
        {
          title: {name:'康美药业',daiMa: 600518,price: 4.02,upsAndDowns: '+0.45%'},
          list:[
            {title: '西部超导材料科技股份有限公司', text: '有色金属治炼'},
            {title: '天津就日新材料股份有限公司', text: '化学原料和化学制品'},
            {title: '烟台创维纳技术股份有限公司', text: '计算机、通信和其他电子设备制造'},
            {title: '苏州泽燕生物制药股份有限公司', text: '医药制造业'},
          ]
        },
        {
          title: {name:'康美药业',daiMa: 600518,price: 6.42,upsAndDowns: '-0.45%'},
          list:[
            {title: '西部超导材料科技股份有限公司', text: '有色金属治炼'},
            {title: '天津就日新材料股份有限公司', text: '化学原料和化学制品'},
            {title: '烟台创维纳技术股份有限公司', text: '计算机、通信和其他电子设备制造'},
            {title: '苏州泽燕生物制药股份有限公司', text: '医药制造业'},
          ]
        },
        {
          title: {name:'康美药业',daiMa: 600518,price: 6.42,upsAndDowns: '+0.45%'},
          list:[
            {title: '西部超导材料科技股份有限公司', text: '有色金属治炼'},
            {title: '天津就日新材料股份有限公司', text: '化学原料和化学制品'},
            {title: '烟台创维纳技术股份有限公司', text: '计算机、通信和其他电子设备制造'},
            {title: '苏州泽燕生物制药股份有限公司', text: '医药制造业'},
          ]
        },
      ],
      // 默认显示多少个
      defaultShow: 2,
      // 每次加载多少个？
      howMuchShow: 1,
    }
  }
  
  showMoreFn=()=>{
    const num = this.state.stockListArr.length - this.state.howMuchShow
    if(num >= this.state.howMuchShow){
      this.state.defaultShow += this.state.howMuchShow
    }else{
      this.state.defaultShow += num     
    }
    this.setState(this.state)
  }
  
  render(){
    const { stockListArr, howMuchShow, defaultShow } = this.state
    const isMore = stockListArr.length - defaultShow >0
    const arr = stockListArr.slice(0,defaultShow)
    return (
      <View className='yinzigu-root'>
        {/* 头部 */}
        <View className='yinzigu-root-top'>
          <Text className='yinzigu-root-top-title'>A股影子股</Text>
          <View className='yinzigu-root-top-content'>
            <Text className='yinzigu-root-top-content-text'>
              与已申购创业板上市企业相关的A股
            </Text>
            <Text className='yinzigu-root-top-content-num'>150支</Text>
          </View>
        </View>
          {/* 渲染列表 */}
          {
            arr.map(item=>
              <View 
                className='yinzigu-root-list'
                key={item.title.title}
              >
                <StockList 
                  title={item.title}
                  list={item.list}
                />
              </View> 
            )
          }
          {/* 底部加载更多 */}
          <View
            className='yinzigu-root-footer'
            onClick={this.showMoreFn}
          >
            {
              isMore?'加载更多':'没有更多'
            }
          </View>
      </View>
    )
  }
}