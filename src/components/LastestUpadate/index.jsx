import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
//最新更新组件
// 传参 data => 用于渲染组件的数据 格式参照defaultProps

import LastestUpadateItem from '../LastestUpadateItem'
//依赖的样式
import './index.scss'


class LastestUpadate extends Component {

  static defaultProps = {
    data:[
      {
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
      },
      {
        id:2,
        type:'中止',
        date:'06-26',
        title:'九号机器人有限公司',
        trade:'互联网服务',
        financing:{
          num:'3.50',
          unit:'亿'
        },
        publishShare:{
          num:'2934.00',
          unit:'万'
        },
        shareList:['博彦科技']
      },
    ]
  }

  render () {
    let data = this.props.data
    return (
      <View className='lastest-update'>
        <View className='title'>最新更新</View>
        <View className='item-container'>
          {
            data && data.map((val) => {
              return <LastestUpadateItem data={val} key={val.id} />  
            })
          }
          
        </View>
      </View>
    )
  }

}

export default LastestUpadate