import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
//科创版动态组件
// 传参 data => 用于渲染组件的数据 格式参照defaultProps
//依赖的样式
import './index.scss'

class ScienceActive extends Component {

  static defaultProps = {
    data:{
      id:1,
      handle:127,
      pass:4,
      haveHandle:28,
      haveAsk:81,
      meetingAdopted:29,
      stop1:5,
      stop2:0,
      register:10,
      registerSubmit:16
    }
  }

  render () {
    let data = this.props.data
    return (
      <View className='science-active'>
        <View className='header'>
          <View className='title'>科创板动态</View>
          <View className='handle'><Text className='num'>{data.handle}</Text>家受理</View>
          <View className='pass'><Text className='num'>{data.pass}</Text>家通过</View>
        </View>
        <View className='body'>
          <View className='have-handle  body-item'>
            <Text className='title'>已受理</Text>
            <Text className='num'>{data.haveHandle}家</Text>
          </View>
          <View className='have-ask body-item'>
            <Text className='title'>已询问</Text>
            <Text className='num'>{data.haveAsk}家</Text>
          </View>
          <View className='meeting-adopted body-item'>
            <Text className='title'>会议通过</Text>
            <Text className='num'>{data.meetingAdopted}家</Text>
          </View>
          <View className='stop body-item'>
            <Text className='title'>终止</Text>
            <Text className='title'>中止</Text>
            <Text className='num'>{data.stop1}家</Text>
            <Text className='num'>{data.stop2}家</Text>
          </View>
          <View className='register body-item'>
            <Text className='title'>注册生效</Text>
            <Text className='num'>{data.register}家</Text>
          </View>
          <View className='submit-register body-item'>
            <Text className='title'>提交注册</Text>
            <Text className='num'>{data.registerSubmit}家</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default ScienceActive