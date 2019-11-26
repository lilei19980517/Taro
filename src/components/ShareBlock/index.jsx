import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
/*新股申购子模块组件
传参  title => 表示该模块的标题    
      tableHeader => 表示当前表格的表头
      data => 表示该模块渲染所需数据
      hiddenTitle =>是否隐藏标题
      showArrow => 是否显示header上的小三角
*/

//依赖的样式
import './index.scss'
//依赖的静态资源


//依赖的组件
import ShareItem from '../ShareItem'

class ShareBlock extends Component {

  static defaultProps = {
    title:'我是标题',
    tableHeader:['股票代码', '当前价', '涨跌幅', '发行价'],
    //是否隐藏标题
    hiddenTitle:false,
    //是否显示header上的小三角
    showArrow:false
  }
  render () {
    let {title, data, tableHeader, hiddenTitle, showArrow} = this.props
    return (
      <View className='share-block'>
        <View className={`share-block-title ${hiddenTitle ? 'hidden' : ''}`} >{title}</View>
        <View className='share-table'>
          <View className='share-table-header'>
            <View className='left'>
              <View className='header-item'>{tableHeader[0]}</View>
            </View>
            <View className='right'>
              <View className='header-item'>
                {tableHeader[1]}
                {
                  showArrow && 
                  <View className='arrow'></View>
                }
              </View>
              <View className='header-item'>
                {tableHeader[2]}
                {
                  showArrow && 
                  <View className='arrow'></View>
                }
              </View>
              <View className='header-item'>
                {tableHeader[3]}
                {
                  showArrow && 
                  <View className='arrow'> </View>
                }
              </View>
            </View>
          </View>
          <View className='share-table-body'>
            {
              data && data.map(val => {
                return <ShareItem key={val.id} data={val} />
              })
            }
          </View>
        </View>
      </View>
    )
  }

}

export default ShareBlock