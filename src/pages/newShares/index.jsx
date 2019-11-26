import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

//依赖的样式
import './index.scss'
//依赖的组件
import ShareBlock from '../../components/ShareBlock'

class newShares extends Component {

  state = {
    menuList:['近期上市', '即将上市', '即将发行'],
    //当前展示的menu-item索引
    activeIndex:0,
    //渲染所需的数据
    data:{
      recentListing:{
        tableHeader:['股票代码', '当前价', '涨跌幅', '发行价'],
        tableInfo:[
          {
            id:1,
            name:'康美药业',
            code:'SH',
            num:'600518',
            price:'6.27',
            percentage:'+10.00%',
            otherInfo:'4.67'
          },
          {
            id:2,
            name:'光峰科技',
            code:'SH',
            num:'600518',
            price:'6.27',
            percentage:'-7.15%',
            otherInfo:'14.67'
          },
          {
            id:3,
            name:'安集科技',
            code:'SH',
            num:'600518',
            price:'6.27',
            percentage:'-8.26%',
            otherInfo:'10.67'
          },
          {
            id:4,
            name:'康美药业',
            code:'SH',
            num:'600518',
            price:'6.27',
            percentage:'+10.00%',
            otherInfo:'4.67'
          },
          {
            id:5,
            name:'光峰科技',
            code:'SH',
            num:'600518',
            price:'6.27',
            percentage:'-7.15%',
            otherInfo:'14.67'
          },
          {
            id:6,
            name:'安集科技',
            code:'SH',
            num:'600518',
            price:'6.27',
            percentage:'-8.26%',
            otherInfo:'10.67'
          },
          {
            id:7,
            name:'康美药业',
            code:'SH',
            num:'600518',
            price:'6.27',
            percentage:'+10.00%',
            otherInfo:'4.67'
          },
          {
            id:8,
            name:'光峰科技',
            code:'SH',
            num:'600518',
            price:'6.27',
            percentage:'-7.15%',
            otherInfo:'14.67'
          },
          {
            id:9,
            name:'安集科技',
            code:'SH',
            num:'600518',
            price:'6.27',
            percentage:'-8.26%',
            otherInfo:'10.67'
          },
          {
            id:10,
            name:'康美药业',
            code:'SH',
            num:'600518',
            price:'6.27',
            percentage:'+10.00%',
            otherInfo:'4.67'
          },
          {
            id:11,
            name:'光峰科技',
            code:'SH',
            num:'600518',
            price:'6.27',
            percentage:'-7.15%',
            otherInfo:'14.67'
          },
          {
            id:12,
            name:'安集科技',
            code:'SH',
            num:'600518',
            price:'6.27',
            percentage:'-8.26%',
            otherInfo:'10.67'
          }
        ]
      },
      listedSoon:{
        tableHeader:['股票代码', '当前价', '发行市盈率', '上市日期'],
        tableInfo:[
          {
            id:1,
            name:'康美药业',
            code:'SH',
            num:'600518',
            price:'6.27',
            percentage:'56.67',
            otherInfo:'07-23'
          },
          {
            id:2,
            name:'光峰科技',
            code:'SH',
            num:'600518',
            price:'6.27',
            percentage:'52.42',
            otherInfo:'07-23'
          },
          {
            id:3,
            name:'安集科技',
            code:'SH',
            num:'600518',
            price:'6.27',
            percentage:'52.45',
            otherInfo:'07-24'
          }
        ]
      },
      issuedSoon:{
        tableHeader:['股票代码', '当前价', '发行市盈率', '申购日期'],
        tableInfo:[
          {
            id:1,
            name:'康美药业',
            code:'SH',
            num:'600518',
            price:'6.27',
            percentage:'56.67',
            otherInfo:'07-23'
          },
          {
            id:2,
            name:'光峰科技',
            code:'SH',
            num:'600518',
            price:'6.27',
            percentage:'52.42',
            otherInfo:'07-23'
          },
          {
            id:3,
            name:'安集科技',
            code:'SH',
            num:'600518',
            price:'6.27',
            percentage:'52.45',
            otherInfo:'07-24'
          }
        ]
      } 
    }
  }

  config = {
    navigationBarTitleText: '新股申购',
    onReachBottomDistance:0
  }

  changeIndex = (index) => {
    this.setState({
      activeIndex:index
    })
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
    let newData = [
      {
        id:this.state.data.recentListing.tableInfo.length,
        name:'康美药业',
        code:'SH',
        num:'600518',
        price:'6.27',
        percentage:'+10.00%',
        otherInfo:'4.67'
      },
      {
        id:this.state.data.recentListing.tableInfo.length+1,
        name:'光峰科技',
        code:'SH',
        num:'600518',
        price:'6.27',
        percentage:'-7.15%',
        otherInfo:'14.67'
      },
      {
        id:this.state.data.recentListing.tableInfo.length+2,
        name:'安集科技',
        code:'SH',
        num:'600518',
        price:'6.27',
        percentage:'-8.26%',
        otherInfo:'10.67'
      },
    ]
    let temp = this.state.data
    temp.recentListing.tableInfo = [...temp.recentListing.tableInfo, ...newData]
    this.setState({
      data:temp
    })
  }
  render () {
    return (
      <View className='new-shares'>
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
            this.state.activeIndex == 0 &&
            <ShareBlock 
              title='近期上市'
              hiddenTitle 
              showArrow
              tableHeader={this.state.data.recentListing.tableHeader}
              data={this.state.data.recentListing.tableInfo}
            />
          }
          {
            this.state.activeIndex == 1 &&
            <ShareBlock 
              title='即将上市' 
              hiddenTitle
              showArrow
              tableHeader={this.state.data.listedSoon.tableHeader}
              data={this.state.data.listedSoon.tableInfo}
            />
          }
          {
            this.state.activeIndex == 2 &&
            <ShareBlock 
              title='即将发行' 
              hiddenTitle
              showArrow
              tableHeader={this.state.data.issuedSoon.tableHeader}
              data={this.state.data.issuedSoon.tableInfo}
            />
          }
          <View className='load-more'>加载更多</View>
        </View>
      </View>
    )
  }

}

export default newShares