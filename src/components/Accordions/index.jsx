import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
//手风琴组件
// 传参  data => 组件渲染所需数据   格式参照defaultProps

//依赖的样式
import './index.scss'
//依赖的静态资源
import up from './chevron-up.png'
import right from './chevron-right.png'

class Accordions extends Component {

  state ={
    //当前活跃的是哪个item 默认为全关闭-1 
    activeIndex:-1
  }

  static defaultProps = {
    data:[
      {
        id:1,
        title:'科创板投资者门槛？',
        content:[`1.预计市值不低于人民币10亿元，最近两年净利润均为正且累计净利润不低于人民币5000万元，或者预计市值不低于人民币10亿元，最近- -年净利润为正且营业收入不低于人民币1亿元;`,
        `2.预计市值不低于人民币15亿元，最近一年营业收入不低于人民币2亿元，且最近三年累计研发投入占最近三年累计营业收入的比例不低于15%;`,
        `3.预计市值不低于人民币20亿元，最近一年营业上市公司门槛  收入不低于人民币3亿元，且最近三年经营活动产生的现金流量净额累计不低于人民币1亿元;`,
        `4.预计市值不低于人民币30亿元，且最近-年营业收入不低于人民币3亿元;`,
        `5.预计市值不低于人民币40亿元，主要业务或产品需经国家有关部门]批准,市场空间大，目前已取得阶段性成果。医药行业企业需至少有一项核心产品获准开展二期临床试验，其他符合科创板定位的企业需具备明显的技术优势并满足相应条件。`]
      },
      {
        id:2,
        title:'科创板投资者门槛？',
        content:[`1.预计市值不低于人民币10亿元，最近两年净利润均为正且累计净利润不低于人民币5000万元，或者预计市值不低于人民币10亿元，最近- -年净利润为正且营业收入不低于人民币1亿元;`,
        `2.预计市值不低于人民币15亿元，最近一年营业收入不低于人民币2亿元，且最近三年累计研发投入占最近三年累计营业收入的比例不低于15%;`,
        `3.预计市值不低于人民币20亿元，最近一年营业上市公司门槛  收入不低于人民币3亿元，且最近三年经营活动产生的现金流量净额累计不低于人民币1亿元;`,
        `4.预计市值不低于人民币30亿元，且最近-年营业收入不低于人民币3亿元;`,
        `5.预计市值不低于人民币40亿元，主要业务或产品需经国家有关部门]批准,市场空间大，目前已取得阶段性成果。医药行业企业需至少有一项核心产品获准开展二期临床试验，其他符合科创板定位的企业需具备明显的技术优势并满足相应条件。`]
      },
      {
        id:3,
        title:'科创板投资者门槛？',
        content:[`1.预计市值不低于人民币10亿元，最近两年净利润均为正且累计净利润不低于人民币5000万元，或者预计市值不低于人民币10亿元，最近- -年净利润为正且营业收入不低于人民币1亿元;`,
        `2.预计市值不低于人民币15亿元，最近一年营业收入不低于人民币2亿元，且最近三年累计研发投入占最近三年累计营业收入的比例不低于15%;`,
        `3.预计市值不低于人民币20亿元，最近一年营业上市公司门槛  收入不低于人民币3亿元，且最近三年经营活动产生的现金流量净额累计不低于人民币1亿元;`,
        `4.预计市值不低于人民币30亿元，且最近-年营业收入不低于人民币3亿元;`,
        `5.预计市值不低于人民币40亿元，主要业务或产品需经国家有关部门]批准,市场空间大，目前已取得阶段性成果。医药行业企业需至少有一项核心产品获准开展二期临床试验，其他符合科创板定位的企业需具备明显的技术优势并满足相应条件。`]
      }
    ]
  }

  changeActive = (index) => {
    let tempI = index === this.state.activeIndex ? -1 : index
    this.setState({
      activeIndex: tempI
    })
  }

  render () {
    let {data} = this.props
    return (
      <View className='accordions'>
        {
          data.map((item, index) => {
            return (
              <View className='accordions-item' key={item.id}>
                <View className='item-header'>
                  <View className='title'>{item.title}</View>
                  <Image 
                    src={index === this.state.activeIndex ? up : right}
                    className={`${index === this.state.activeIndex ? 'icon-up' : 'icon-right'}`}
                    onClick={() => this.changeActive(index)} 
                  />
                </View>
                <View className={`item-body ${index === this.state.activeIndex ? 'active' : ''}`}>
                  {
                    data && item.content.map((v, i) => {
                      return <View className='paragraph' key={v[0]+i}>{v}</View>
                    })
                  }
                </View>
              </View>
            )
          })
        }
      </View>
    )
  }

}

export default Accordions