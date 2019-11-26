import Taro,{ Component, chooseInvoiceTitle } from '@tarojs/taro'
import { View, Text, Image, ScrollView } from '@tarojs/components'

import ScreenMore from './ScreenMore/ScreenMore'

import triangle from './images/triangle.png'
import more from './images/1.png'
import yes from './images/yes.png'
import './Screen.scss'
import { runInThisContext } from 'vm';

// 使用方式：请在父组件state中定义一个变量为空，例this.state={data: null}
// 然后提供一个onGetData方法修改this.state.data传给本组件
// 例：
// getDataFn=(data)=>{
//   this.state.data = data
//   this.setState(this.state)
// }
// 修改后的data就是筛选结果
// onGetData={this.getDataFn}
// list={
//   [
//     {
//       title: '审核状态',
//       value: [
//         {title: '全部状态'},
//         {title: '已受理', howMuch: 15},
//         {title: '以询问', howMuch: 13},
//         {title: '上市委会议通过', howMuch: 43},
//         {title: '上市委会议未通过', howMuch: 15},
//         {title: '提交注册', howMuch: 34},
//         {title: '注册结果', howMuch: 55},
//         {title: '中止', howMuch: 25},
//         {title: '终止', howMuch: 51},
//         {title: '全部状态', howMuch: 15},
//         {title: '已受理', howMuch: 45},
//         {title: '以询问', howMuch: 2},
//         {title: '上市委会议通过', howMuch: 55},
//         {title: '注册结果', howMuch: 12},
//       ],
//     },
//     {
//       title: '全部行业',
//       value: [
//         {title: '全部行业' },
//         {title: '农林牧渔业', howMuch: 15},
//         {title: '采矿业', howMuch: 15},
//         {title: '制造业', howMuch: 15},
//         {title: '交通运输', howMuch: 15},
//         {title: '金融业', howMuch: 15},
//         {title: '房地产业', howMuch: 15},
//       ],
//     },
//     {
//       title: '筛选',
//     }
//   ]
// } 
// 然后本组件内部会调用该方法修改掉父组件的this.state.data
// 返回的结果例：{title: "审核状态", result: "以询问"}

export default class Screen extends Component{
  constructor(props){
    super(props)
    this.state = {
      tab: this.props.list,
      showOptionClass: '',
      showScrollClass: [ '', '' ],
      tabActiveClass: [ '', '', '' ],
    }
  }

  componentWillMount () {
    this.props.list.map((item,index)=>
      {
        if(index !== this.props.list.length - 1){
          item.btnImg = triangle
        }else{
          item.btnImg = more
        }
      } 
    )
  }

  showMyScroll(index){
    // 设置选中状态类名
    this.state.tabActiveClass.map((i,index)=>
      this.state.tabActiveClass[index] = ''
    )
    this.state.tabActiveClass[index] = 'screen-root-default-box-title-text-active'      
    if(this.state.showOptionClass === ''){
      this.state.showOptionClass = 'screen-root-option-box-show'
    }else if(this.state.showScrollClass[index] !== ''){
      // 判断是不是重复点击，重复点击就是隐藏
      // 获取showScrollClass[index]类名，如果等于不是空值则是重复点击
      this.state.showOptionClass = ''
    }else{
      this.state.showScrollClass[index] = 'screen-root-option-box-scroll-show'
    }     
    // 设置scroll的类名，需要遍历排他
    this.state.showScrollClass.map((item,index)=>
      this.state.showScrollClass[index] = ''
    )
    this.state.showScrollClass[index] = 'screen-root-option-box-scroll-show'
    this.setState(this.state)
    // 如果index是最后一个，则证明点击的事筛选更多的按钮
    if(index === this.state.tab.length - 1){
      this.state.showOptionClass = ''
      Taro.navigateTo({
        url: this.props.url
      })
    }
  }

  scrollItemClick=(indexOne,indexTwo)=>{
    // 排他 
    // 遍历this.state.tab下面所有含velue的属性
    let a = this.state.tab.filter(item=> item.value)
    a.map(item=> item.value.map(item=>
        item.activeClassName = ''
      )
    )
    this.state.tab[indexOne].value[indexTwo].activeClassName
    = ' screen-root-option-box-scroll-every-text-active'
    this.state.showOptionClass = ''
    this.setState(this.state)
    // 返回给父组件的data
    let data = {}
    data.title = this.state.tab[indexOne].title
    data.result = this.state.tab[indexOne].value[indexTwo].title
    // console.log(data)
    this.props.onGetData(data)
  }

  render(){
    const a =this.state.tab
    const { 
      tabActiveClass,
      showScrollClass } = this.state
    return (
      <View className='screen-root'>
        <View className='screen-root-default-box'>
          {
            a.map((item,index)=>
              <View
                onClick={()=>this.showMyScroll(index)}
                key={item.title}
                className='screen-root-default-box-title'
              >
                <Text className={`screen-root-default-box-title-text ${tabActiveClass[index]}`}>
                  {item.title}
                </Text>
                <Image 
                  className='screen-root-default-box-title-btn'
                  src={item.btnImg}
                />
              </View>  
            )
          }
        </View>
        {/* 下面弹出层 */}
        <View className={`screen-root-option-box ${this.state.showOptionClass}`}>
            {
              a.map((item,indexOne)=>
              // 最后一个不渲染
              indexOne !== a.length-1 &&
                <ScrollView 
                  key={item.title}
                  className={`screen-root-option-box-scroll ${showScrollClass[indexOne]}`}      
                  scrollY
                > 
                  {
                    item.value.map((item,indexTwo)=>
                      <View
                        onClick={this.scrollItemClick.bind(this,indexOne,indexTwo)}
                        key={item}
                        className='screen-root-option-box-scroll-every'
                      >
                        <Text className={`screen-root-option-box-scroll-every-text ${item.activeClassName}`}>
                          {`${item.title} `}
                          {item.howMuch && item.howMuch}
                        </Text>
                        <Image 
                          src={yes}
                          className='screen-root-option-box-scroll-every-yes'
                        />
                      </View>
                    )
                  }
                </ScrollView>
              )
            } 
        </View>
      </View>
    )
  }
}