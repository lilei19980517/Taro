import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

//依赖的样式
import './index.scss'

//依赖的组件
import LastestUpadateItem from '../../components/LastestUpadateItem'
import Screen from '../../components/Screen/Screen'

class IPO extends Component {

  config = {
    navigationBarTitleText: '科创板IPO申请企业',
    onReachBottomDistance:0
  }

  state = {
    //渲染所需数据
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
      {
        id:3,
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
      {
        id:4,
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
      {
        id:5,
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
      {
        id:6,
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

  componentDidShow(){
    const data = Taro.getStorageSync('data')
    for(let val of data){
      if(val.value.length !== 0){
        this.screening(data);
        break;
      }
    }
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
    let temp = [
      {
        id:this.state.data.length,
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
        id:this.state.data.length + 1,
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
    this.setState({
      data:[...this.state.data,...temp]
    })
  }

  screening(data){
    console.log(data)
    Taro.showToast({
      title: '正在筛选',
      icon: 'loading',
      duration: 1000
    })
  }

  screen(data){
    this.screening(data)
  }

  render () {
    const screenList = [
      {
        title: '审核状态',
        value: [
          {title: '全部状态'},
          {title: '已受理', howMuch: 15},
          {title: '以询问', howMuch: 13},
          {title: '上市委会议通过', howMuch: 43},
          {title: '上市委会议未通过', howMuch: 15},
          {title: '提交注册', howMuch: 34},
          {title: '注册结果', howMuch: 55},
          {title: '中止', howMuch: 25},
          {title: '终止', howMuch: 51},
          {title: '全部状态', howMuch: 15},
          {title: '已受理', howMuch: 45},
          {title: '以询问', howMuch: 2},
          {title: '上市委会议通过', howMuch: 55},
          {title: '注册结果', howMuch: 12},
        ],
      },
      {
        title: '全部行业',
        value: [
          {title: '全部行业' },
          {title: '农林牧渔业', howMuch: 15},
          {title: '采矿业', howMuch: 15},
          {title: '制造业', howMuch: 15},
          {title: '交通运输', howMuch: 15},
          {title: '金融业', howMuch: 15},
          {title: '房地产业', howMuch: 15},
        ],
      },
      {
        title: '筛选',
      }
    ]
    const list = JSON.stringify([
      {
        title: '注册地',
        value: [
          {name: '安徽', howMuch: 26},
          {name: '广东', howMuch: 42},
          {name: '江苏', howMuch: 24},
          {name: '上海', howMuch: 25},
          {name: '浙江', howMuch: 6},
          {name: '山东', howMuch: 16},
          {name: '湖北', howMuch: 5},
          {name: '江苏', howMuch: 15},
          {name: '湖南', howMuch: 61},
          {name: '河南', howMuch: 53},
    
        ]
      },
      {
        title: '保荐机构',
        value: [
          {name: '中信建投机构', howMuch: 15},
          {name: '中国国际机构', howMuch: 15},
          {name: '中心证券机构', howMuch: 15},
          {name: '国泰君安', howMuch: 15},
          {name: '招商证券', howMuch: 15},
          {name: '国信证券', howMuch: 15},
          {name: '光大证券', howMuch: 15},
          {name: '中信建投机构', howMuch: 15},
        ]
      },
      {
        title: '律师事务所',
        value: [
          {name: '北京市中心律师事务所1', howMuch: 15},
          {name: '北京市中心律师事务所2', howMuch: 15},
          {name: '北京市中心律师事务所3', howMuch: 15},
          {name: '北京市中心律师事务所4', howMuch: 15},
          {name: '北京市中心律师事务所5', howMuch: 15},
          {name: '北京市中心律师事务所6', howMuch: 15},
          {name: '北京市中心律师事务所7', howMuch: 15},
          {name: '北京市中心律师事务所8', howMuch: 15},
        ]
      },
      {
        title: '会计实务所',
        value: [
          {name: '立信会计事务所1',howMuch: 26},
          {name: '立信会计事务所2',howMuch: 26},
          {name: '立信会计事务所3',howMuch: 26},
          {name: '立信会计事务所4',howMuch: 26},
          {name: '立信会计事务所5',howMuch: 26},
          {name: '立信会计事务所6',howMuch: 26},
          {name: '立信会计事务所7',howMuch: 26},
          {name: '立信会计事务所8',howMuch: 26},
        ]
      }
    ])
    return (
      <View className='IPO'>
        <View className='header'>
          <Screen list={screenList} onGetData={this.screen} url={`/components/ScreenMore/ScreenMore?list=${list}`} />
        </View>
        <View className='body'>
          {
            this.state.data.map((item) => {
              return (
                <View className='item' key={item.id} >
                  <LastestUpadateItem data={item} />  
                </View>
              )
            })
          }
          <View className='load-more'>加载更多</View>
        </View>
      </View>
    )
  }

}

export default IPO