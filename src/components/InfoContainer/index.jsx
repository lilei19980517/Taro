import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
//资讯公告研报的container组件
//传参 data => 参考defaultProps

//依赖的样式
import './index.scss'
//依赖的组件
import Information from '../Information'

class InfoContainer extends Component {

  state = {
    menuList:['资讯', '公告', '研报'],
    //当前展示的menu-item索引
    activeIndex:0
  }

  static defaultProps = {
    //渲染所需要的数据
    data:{
      information:[
        {
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
        {
          id: 2,
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
          imgSrc: null
        },
        {
          id: 3,
          title: '科创板真正芯片第一股：兰起科技：15年5.7亿美元市场终成龙头',
          tag: null,
          infoType: {
            webSite: '赢商网',
            time : '3分钟前'
          },
          imgSrc: null
        },
      ]
    }
  }
  changeIndex = (index) => {
    this.setState({
      activeIndex:index
    })
  }

  render () {
    let {data} = this.props
    return (
      <View className='info-container'>
        <View className='menu-list'>
          {
            this.state.menuList.map((val, index) => {
              return (
                <View 
                  className={`menu-item ${this.state.activeIndex === index ? 'active' : ''}`} 
                  onClick={() => this.changeIndex(index)}
                  key={val}
                >{val}</View>
              )
            })
          }
        </View>
        <View className='content'>
          {
            this.state.activeIndex === 0 &&
            <View className='information-container'>
              {
                data.information.map((val,index,self) => {
                  return <Information data={val} key={val.id} img={val.imgSrc === null ? false : true} judge={{index,length:self.length-1}} />
                })
              }
            </View>
          }
          {
            this.state.activeIndex === 1 &&
            <View>公告</View>
          }
          {
            this.state.activeIndex === 2 &&
            <View>资讯</View>
          }
        </View>
      </View>
    )
  }

}

export default InfoContainer