import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
//最新更新item组件
// 传参 data => 用于渲染组件的数据 格式参照defaultProps

//依赖的样式
import './index.scss'

class LastestUpadateItem extends Component {

  static defaultProps = {
    data:{
      id:1,
      type:'已受理',
      date:'06-26',
      title:'江苏吉贝尔药业股份有限公司',
      trade:'医药制造业',
      financing:{
        num:'6.90',
        unit:'亿'
      },
      publishShare:{
        num:'2934.00',
        unit:'万'
      },
      shareList:['大众公用', '红豆股份']
    }
  }

  render () {
    let data = this.props.data
    return (
      <View className='lastest-upadate-item'>
        <View className='main'>
          <View className='main-left'>
            <View 
              className={`type ${data.type === '中止'||data.type === '终止' ? 'red' : ''}`}
            >{data.type}</View>
            <View className='date'>{data.date}</View>
          </View>
          <View className='main-right'>
            <View className='item-title'>{data.title}</View>
            <View className='trade'>{data.trade}</View>
            <View className='company-info'>
              <View className='key'>融资金额</View>
              <View className='value'>{data.financing.num}<Text className='unit'>{data.financing.unit}</Text></View>
              <View className='key'>发行股本</View>
              <View className='value'>{data.publishShare.num}<Text className='unit'>{data.publishShare.unit}</Text></View>
            </View>
          </View>
        </View>
        <View className='bottom'>
          <View className='shares'>相关A股</View>
          {
            data && data.shareList && data.shareList.map((val) => {
              return <View className='shares-item' key={val+data.id} >{val}</View>
            })
          }
        </View>
      </View>
    )
  }

}

export default LastestUpadateItem