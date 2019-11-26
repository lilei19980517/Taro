import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
//资讯组件
//传参 img => 控制是否显示图片
//     data => 渲染所需的数据

//依赖的样式
import './index.scss'

class Information extends Component {

  static defaultProps = {
    //判断当前组件是不是最后一个
    judge:null,
    //控制是否显示图片
    img: true,
    //渲染所需要的数据
    data:{
      id: 1,
      title: '科创板真正芯片第一股：兰起科技：15年5.7亿美元市场终成龙头',
      tag: {
        tagType:'北京文化',
        increase: '+5.86%',
        isUp:true,
      },
      infoType: {
        webSite: '赢商网',
        time : '3分钟前'
      },
      imgSrc: 'http://img1.imgtn.bdimg.com/it/u=3667678122,3437809409&fm=26&gp=0.jpg'
    },
  }
  render () {
    const {img, data, judge} = this.props
    return (
      <View className={`information ${judge.index === judge.length ? 'no-border' : ''}`}>
        <View className={`left ${img ? '' : 'only-left'}`}>
          <View className='info-title'>{data.title}</View>
          {
            data.tag && 
            <View className='info-tags'>
              <View className='tag1'>
                  <Text className='tag-type'>{data.tag.tagType}</Text>
                  <Text className={data.tag.isUp ? 'grow' : 'low'}>{data.tag.increase}</Text>
              </View>
            </View>
          }
          <View className='info-type'>
            <Text className='type-item'>{data.infoType.webSite}</Text>
            <Text className='type-item'>|</Text>
            <Text className='type-item'>{data.infoType.time}</Text>
          </View>
        </View>
        {
          img && 
          <View className='right' style={{background:`url(${data.imgSrc})`}}></View>
        }
      </View>
    )
  }

}

export default Information