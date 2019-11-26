import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

//依赖的样式
import './index.scss'

//依赖的组件
import RankList from '../../components/RankList/RankList'
import Radar from '../../components/Radar/Radar'
import AnnularList from '../../components/AnnularList/AnnularList'

import ziXunImg1 from '../../components/RankList/images/triangle.png'
import chartImg from '../../components/RankList/images/chartImg.png'

import annular1 from '../../components/AnnularList/images/1.png'
import annular2 from '../../components/AnnularList/images/2.png'
import annular3 from '../../components/AnnularList/images/3.png'
import annular4 from '../../components/AnnularList/images/4.png'
import radar from '../../components/Radar/images/radar.png'

class DataStatistics extends Component {
  
  config = {
    navigationBarTitleText: '数据统计',
  }
  goMore=()=>{
    Taro.navigateTo({url: '/pages/trade/index'})
  }
  goMore1=()=>{
    Taro.navigateTo({url: '/pages/registeredAddress/index'})
  }
  goMore2=()=>{
    Taro.navigateTo({url: '/pages/registeredAddress/index'})
  }

  render () {
    const tradeList = {
      chart:{
      title: [
        {title:'行业分类'},
        {title:'更多'},
        {btnImg:'ziXunImg1'}
      ],
      img:chartImg,
      type:'pie',
      data:[
        {name:'计算机', value: 17},
        {name:'制造业', value: 17},
        {name:'软件服务', value: 17},
        {name:'医药制造业', value: 17},
        {name:'互联网', value: 17},
      ]
    },
      left:{
        title:'行业分类',
        className:'qwer',
        value:['计算机', '制造业', '软件服务', '医药制造业', '互联网'],
        numBgc:[
          '#f8cb49', 
          '#EF8A46', 
          '#E35857', 
          '#4E8BAE', 
          '#407CD5', 
          '#4B5FB2',
          '#48718C']
      },
      right:[
        {
          title:'更多',
          value:['17%','60%','2%'],
        },
        {
          btnImg: ziXunImg1,
          onClickFn:this.goMore,
        }
      ],
      underLine:true  
    }
    const registerLocation = [
      {name: '上海', value: '210家', img: annular1},
      {name: '广东', value: '324家', img: annular2},
      {name: '江苏', value: '624家', img: annular3},
      {name: '北京', value: '29家', img: annular4}
    ]
    const financingList = [
      {name: '<=5亿元', value: '49家'},
      {name: '5-10亿元', value: '63家'},
      {name: '10-25亿元', value: '28家'},
      {name: '25-50亿元', value: '5家'},
      {name: '>50亿元', value: '1家'},
    ] 
    
    return (
      <View className='data-statistics'>
        <RankList list={tradeList} chart />
        <AnnularList  title={{text:'注册地', moreBtn: '更多', moreBtnImg: ziXunImg1, moreFn: this.goMore1}} list={registerLocation} />
        <Radar list={financingList} title={{text:'融资金额'}} img={radar} />
      </View>
    )
  }

}

export default DataStatistics