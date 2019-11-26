import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
//行业分类页面

//依赖的样式
import './index.scss'

//依赖的组件
import RankList from '../../components/RankList/RankList'

class Trade extends Component {

  config = {
    navigationBarTitleText: '行业分类'
  }

  onReachBottom(){
    Taro.showToast({
      title: '正在加载',
      icon: 'loading',
      duration: 1000
    })
    setTimeout(() => {
      this.loadMore()
    }, 1000)
  }
  //加载更多
  loadMore = () => {
    let newData1 = ['计算机', '制造业']
    let newData2 = ['4家', '4家']
    let temp = this.state.list
    temp.left.value = [...temp.left.value, ...newData1]
    temp.right[0].value = [...temp.right[0].value, ...newData2]
    this.setState({
      list:temp
    })
  }

  state = {
    //渲染所需数据
    list: {
      left:{
        className:'qwer',
        value:['计算机', '制造业', '软件服务', '医药制造业', '互联网', '计算机应用', '机械设备', '通信', '通信传输设备', '电子', '交通运输', '生物', '化学'],
        numBgc:[
          '#f8cb49', 
          '#EF8A46', 
          '#E35857', 
          ]
      },
      right:[
        {
          value:['29家','27家','26家', '19家', '7家', '6家', '6家', '5家', '4家', '4家', '4家', '4家', '4家'],
        },
        {
          btnImg: null,
          onClickFn:null,
        }
      ],
      underLine:null 
    }   
  }

  render () {
    return (
      <View className='trade'>
        <RankList list={this.state.list} />
        <View className='load-more'>加载更多</View>
      </View>
    )
  }

}

export default Trade