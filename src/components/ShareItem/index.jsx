import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
/*新股申购 股票组件
传参  
    data => 表示该模块渲染所需数据
*/
//依赖的样式
import './index.scss'

class ShareItem extends Component {

  static defaultProps = {
    data:{
      name:'康美药业',
      code:'SH',
      num:'600518',
      price:'6.27',
      percentage:'+10.00%',
      otherInfo:'4.67'
    }
  }

  render () {
    let {data} = this.props
    return (
      <View className='share-item'>
        <View className='item-left'>
          <View className='name'>{data.name}</View>
          <View className='share-info'>
            <Text className='code'>{data.code}</Text>
            <Text className='num'>{data.num}</Text>
          </View>
        </View>
        <View className='item-right'>
          <View className='price'>{data.price}</View>
          <View 
            className={`percentage ${data.percentage[0] === '+' ? 'red' : ''} ${data.percentage[0] === '-' ? 'green' : ''}`}
          >{data.percentage}</View>
          <View className='other-info'>{data.otherInfo}</View>
        </View>
      </View>
    )
  }

}

export default ShareItem