import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './StockList.scss'
import shImg from './images/sh.png'
// {
//   title: {name:'康美药业',daiMa: 600518,price: 6.42,upsAndDowns: '+0.45%'},
//   list:[
//     {title: '西部超导材料科技股份有限公司', text: '有色金属治炼'},
//     {title: '天津就日新材料股份有限公司', text: '化学原料和化学制品'},
//     {title: '烟台创维纳技术股份有限公司', text: '计算机、通信和其他电子设备制造'},
//     {title: '苏州泽燕生物制药股份有限公司', text: '医药制造业'},
//   ]
// }
export default class StockList extends Component{
  render(){
    const { title, list } =this.props
    return (
      <View className='stock-list-root'>
        {/* 头部 */}
        <View className='stock-list-root-top'>
          <View className='stock-list-root-top-name'>
            <Text className='stock-list-root-top-name-top'>
              {title.name}
            </Text>
            <View className='stock-list-root-top-name-bottom'>
              <Image
                src={shImg}
                className='stock-list-root-top-name-bottom-img'
              />
              <Text className='stock-list-root-top-name-bottom-text'>{title.daiMa}</Text>
            </View>
          </View>
          {/* 现价 根据涨跌条件渲染类名*/}
          {
            parseFloat(title.upsAndDowns)>0?
            <View className='stock-list-root-top-data'>
              <Text className='stock-list-root-top-data-price'>
                {title.price}
              </Text>
              <Text className='stock-list-root-top-data-up'>
                {title.upsAndDowns}
              </Text>
            </View>
            :
            <View className='stock-list-root-top-data'>
              <Text className='stock-list-root-top-data-price-green'>
                {title.price}
              </Text>
              <Text className='stock-list-root-top-data-down'>
                {title.upsAndDowns}
              </Text>
            </View>
          }
        </View>
        {/* 列表部分 */}
        <View className='stock-list-root-list'>
          {
            list.map(item=>
              <View
                key={item.title}
                className='stock-list-root-list-every'
              >
                <Text className='stock-list-root-list-every-title'>{item.title}</Text>
                <Text className='stock-list-root-list-every-text'>{item.text}</Text>
              </View>
            )

          }
        </View>
      </View>
    )
  }
}