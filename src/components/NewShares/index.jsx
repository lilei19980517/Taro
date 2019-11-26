import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
//新股申购组件
// 传参 data => 用于渲染组件的数据 格式参照defaultProps

//依赖的组件
import ShareBlock from '../ShareBlock'

//依赖的样式
import './index.scss'

class NewShares extends Component {

  static defaultProps = {
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

  render () {
    let {data} = this.props
    return (
      <View className='new-shares'>
        <View className='title'>新股申购</View>
        <ShareBlock 
          title='近期上市' 
          tableHeader={data.recentListing.tableHeader}
          data={data.recentListing.tableInfo}
        />
        <ShareBlock 
          title='即将上市' 
          tableHeader={data.listedSoon.tableHeader}
          data={data.listedSoon.tableInfo}
        />
        <ShareBlock 
          title='即将发行' 
          tableHeader={data.issuedSoon.tableHeader}
          data={data.issuedSoon.tableInfo}
        />
      </View>
    )
  }

}

export default NewShares