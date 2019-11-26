import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input, Image } from '@tarojs/components'
// 组件
import ScienceActive from '../../components/ScienceActive/index'
import LastestUpadate from '../../components/LastestUpadate/index'
import NewShares from '../../components/NewShares/index'
import InfoContainer from '../../components/InfoContainer/index'
// 图片资源
import bannerImg from './images/banner.jpg'
import ziXunImg1 from './images/ziXunImg1.png'

import './index.scss'

class Index extends Component {
  config = {
    navigationBarTitleText: '科创板专题'
  }
  constructor(props){
    super(props)
    this.state={
      infoContainer:{
        // 默认显示多少个
        defaultShow: 3,
        // 每次加载多少个
        howMuchShow: 1,
        list:[
          {
            id: 1,
            title: '利元享过会：科创板获批第23家，民生证券已通过1家',
            tag: {
              tagType:'北京文化',
              increase: '+5.86%',
              isUp:true,
            },
            infoType: {
              webSite: '猎云昂',
              time : '16：21'
            },
            imgSrc: null,
          },
          {
            id: 2,
            title: '科创板真正芯片第一股：兰起科技：15年5.7亿美元市场终成龙头',
            tag: {
              tagType:'兰起科技',
              increase: '+1.12%',
              isUp:true,
            },
            infoType: {
              webSite: '网易财经',
              time : '15:23'
            },
            imgSrc: ziXunImg1
          },
          {
            id: 3,
            title: '首支科创板新股申购，您准备好打新了吗？',
            tag: null,
            infoType: {
              webSite: '猎云网',
              time : '10:21'
            },
            imgSrc: null
          },
          {
            id: 4,
            title: '就在周四！7.5亿市值顶格申购科创板第一股',
            tag: null,
            infoType: {
              webSite: '财经在线',
              time : '10:21'
            },
            imgSrc: null
          },
          {
            id: 5,
            title: '上交所科创板投教长图文系列（七）：聚焦科创板投资者保护',
            tag: null,
            infoType: {
              webSite: '猎云网',
              time : '10:21'
            },
            imgSrc: null
          },
          {
            id: 6,
            title: '科创板真正芯片第一股：兰起科技：15年5.7亿美元市场终成龙头',
            tag: {
              tagType:'兰起科技',
              increase: '+1.12%',
              isUp:true,
            },
            infoType: {
              webSite: '网易财经',
              time : '15:23'
            },
            imgSrc: ziXunImg1
          },
          {
            id: 7,
            title: '科创板真正芯片第一股：兰起科技：15年5.7亿美元市场终成龙头',
            tag: {
              tagType:'兰起科技',
              increase: '+1.12%',
              isUp:true,
            },
            infoType: {
              webSite: '网易财经',
              time : '15:23'
            },
            imgSrc: ziXunImg1
          },
        ]
      }
    }
  }
  
  
  componentWillMount () { }
  
  componentWillReact () { }
  
  componentDidMount () { }
  
  componentWillUnmount () { }
  
  componentDidShow () { }
  
  componentDidHide () { }
  
  LastestUpadateFn=()=>{
    Taro.navigateTo({url: '/pages/IPO/index'})
    
  }
  shareItemMoreFn=()=>{
    Taro.navigateTo({url: '/pages/newShares/index'})
  }
  goYiZiGuFn=()=>{
    Taro.navigateTo({url: '/pages/yinZiGu/yinZiGu'})
  }
  goScienceActiveRulesFn=()=>{
    Taro.navigateTo({url: '/pages/scienceActiveRules/index'})
  }
  goDataStatisticsFn=()=>{
    Taro.navigateTo({url: '/pages/dataStatistics/index'})
  }
  bannerFn=()=>{
    Taro.navigateTo({url: '/pages/picture/picture'})
  }
  // 加载更多
  getMoreInfoContainerFn=()=>{
    const { defaultShow, howMuchShow, list } = this.state.infoContainer
    const num = list.length - defaultShow
    // 如果还有数据
    if(num > howMuchShow){
      this.state.infoContainer.defaultShow += howMuchShow
    }else{this.state.infoContainer.defaultShow += num}
    this.setState(this.state)
  }
  render () {
    const{ list, defaultShow } =this.state.infoContainer
    const infoContainerArr = list.slice(0,defaultShow)
    const isMore = list.length > defaultShow
    return (
      <View className='index'>
        <View className='index-search'>
          <View className='index-search-img' />
          <Input 
            placeholder='搜索科创板'
            className='index-search-input' 
          />
        </View>
        {/* banner */}
        <View 
          className='index-bannder'
          onClick={this.bannerFn}
        >
          <Image 
            mode='widthFix'
            className='index-bannder-img'
            src={bannerImg}
          />
        </View>
        <View className='index-science-active'>
          <ScienceActive 
            data={{id:1,
              handle:127,
              pass:4,
              haveHandle:28,
              haveAsk:81,
              meetingAdopted:29,
              stop1:5,
              stop2:0,
              register:10,
              registerSubmit:16
            }}            
          />
        </View>
        <View className='index-lastest-upadate'>
          <LastestUpadate
            date={[
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
            ]}   
          />
          <View 
            className='index-lastest-upadate-more'
            onClick={this.LastestUpadateFn}
          >
            查看更多 >
          </View>
        </View>
        <View className='index-share-item'>
          <NewShares />
          <View 
            className='index-share-item-more'
            onClick={this.shareItemMoreFn}
          >
            查看更多 >
          </View>
        </View>
        {/* start:中间数据统计、影子股，科创板跳转按钮部分 */}
        <View className='index-go'>
          <View
            className='index-go-one'
            onClick={this.goDataStatisticsFn}
          >
            <Text className='index-go-one-top'>数据统计</Text>
            <View className='index-go-one-bottom'>
              <Text className='index-go-one-bottom-text'>科创板数据信息一目了然</Text>
              <Text className='index-go-one-bottom-more'>查看详情 ></Text>
            </View>
          </View>
          <View
            onClick={this.goYiZiGuFn}
            className='index-go-two'
          >
            <Text className='index-go-two-top'>科创板影子股</Text>
            <Text className='index-go-two-bottom'>查看详情 ></Text>
          </View>
          <View
            onClick={this.goScienceActiveRulesFn}
            className='index-go-three'
          >
            <Text className='index-go-three-top'>科创板Q&A</Text>
            <Text className='index-go-three-bottom'>查看详情 ></Text>
          </View>
        </View>
        {/* end:中间数据统计、影子股，科创板跳转按钮部分 */}
        <View className='index-Info-container'>
          <InfoContainer 
            data={{information:infoContainerArr}}
          />
          <View 
            className='index-Info-container-more'
            onClick={this.getMoreInfoContainerFn}
          >
            {isMore?'加载更多':'没有更多'}
          </View>
        </View>
      </View>
    )
  }
}

export default Index 