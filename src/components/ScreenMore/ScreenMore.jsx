import Taro, { Component } from '@tarojs/taro'
import { View ,Text, Image, ScrollView } from '@tarojs/components'

// 图片资源
import resetImg from './images/reset.png'
import './ScreenMore.scss'
import { isObservableMap } from 'mobx';

//使用方式：会在本地缓存中设置一个data
// 在返回后的页面使用componentDidShow(){}获取本地缓存 
// 获取方式 Taro.getStorageSync('data')

// 需要在父组件路由中传入筛选项list参数，是一个数组，将其转换为JSON
// url={`/components/ScreenMore/ScreenMore?list=${list}`}
// const list = JSON.stringify([
//   {
//     title: '注册地',
//     value: [
//       {name: '安徽', howMuch: 26},
//       {name: '广东', howMuch: 42},
//       {name: '江苏', howMuch: 24},
//       {name: '上海', howMuch: 25},
//       {name: '浙江', howMuch: 6},
//       {name: '山东', howMuch: 16},
//       {name: '湖北', howMuch: 5},
//       {name: '江苏', howMuch: 15},
//       {name: '湖南', howMuch: 61},
//       {name: '河南', howMuch: 53},

//     ]
//   },
//   {
//     title: '保荐机构',
//     value: [
//       {name: '中信建投机构', howMuch: 15},
//       {name: '中国国际机构', howMuch: 15},
//       {name: '中心证券机构', howMuch: 15},
//       {name: '国泰君安', howMuch: 15},
//       {name: '招商证券', howMuch: 15},
//       {name: '国信证券', howMuch: 15},
//       {name: '光大证券', howMuch: 15},
//       {name: '中信建投机构', howMuch: 15},
//     ]
//   },
//   {
//     title: '律师事务所',
//     value: [
//       {name: '北京市中心律师事务所', howMuch: 15},
//       {name: '北京市中心律师事务所', howMuch: 15},
//       {name: '北京市中心律师事务所', howMuch: 15},
//       {name: '北京市中心律师事务所', howMuch: 15},
//       {name: '北京市中心律师事务所', howMuch: 15},
//       {name: '北京市中心律师事务所', howMuch: 15},
//       {name: '北京市中心律师事务所', howMuch: 15},
//       {name: '北京市中心律师事务所', howMuch: 15},
//     ]
//   },
//   {
//     title: '会计实务所',
//     value: [
//       {name: '立信会计事务所',howMuch: 26},
//       {name: '立信会计事务所',howMuch: 26},
//       {name: '立信会计事务所',howMuch: 26},
//       {name: '立信会计事务所',howMuch: 26},
//       {name: '立信会计事务所',howMuch: 26},
//       {name: '立信会计事务所',howMuch: 26},
//       {name: '立信会计事务所',howMuch: 26},
//       {name: '立信会计事务所',howMuch: 26},
//     ]
//   }
// ])
export default class ScreenMore extends Component{
  constructor(props){
    super(props)
    this.state = {
      data: [],
      showHowMuch: 8,
    }
  }

  componentDidShow () {
    let data = Taro.getStorageSync('data')
    data.map((item1,index)=>
      item1.value.map(item2=>
        this.state.list[index].value.map(item3=>{
          if(item3.name === item2){
            item3.className = 'screen-more-root-box-list-box-every-select'
          }
        })
      )
    )
    this.setState(this.state)
  }
  componentWillMount () {
    this.state.list = JSON.parse(this.$router.params.list)
    this.setState(this.state)
  }

  componentDidMount () {
    this.state.list.map(item=>
      {
        item.showHowMuch = 8
        // 初始化this.state.data
        this.state.data.push({title: '',value:[]})
      }
    )
    this.setState(this.state) 
  }

  showAllFn=(index)=>{
    // 判断是展开开始收起
    // showHowMuch<=8就应该展开
    if(this.state.list[index].showHowMuch<=8){
      this.state.list[index].showHowMuch = 29
    }else{this.state.list[index].showHowMuch = 8}
    this.setState(this.state)
  }

  // 每一个选中状态
  everyClickFn=(indexOne,indexTwo)=>{
    if(!this.state.list[indexOne].value[indexTwo].className){
      this.state.list[indexOne].value[indexTwo].className 
      = 'screen-more-root-box-list-box-every-select'
      // 同步设置this.state.data
      // 如果有相同的title了就不用添加title了，title代表大类别，里面的value才是选中的值
      if(!this.state.data[indexOne].title){
        this.state.data[indexOne].title =this.state.list[indexOne].title
      }
      // 设置this.state.data.value代表选中的值
      this.state.data[indexOne].value.push(
        this.state.list[indexOne].value[indexTwo].name
      )
    }else{
      // 如果已经点击过了就取消掉
      this.state.list[indexOne].value[indexTwo].className = ''
      //同步更改this.state.data
      const name = this.state.list[indexOne].value[indexTwo].name
      this.state.data[indexOne].value = this.state.data[indexOne].value.filter(
        function(item){
          return item !== name
        }
      )
    }
    this.setState(this.state)
  }

  // 底部重置按钮
  // 所有选中的都清除
  resetFn=()=>{ 
    this.state.list.map((item,index)=>{
      item.value.map(item=>{
        item.className=''
      })
    })
    // 同步清空this.state.data所有的value
    this.state.data.map(item=>
      {
        item.title = ''
        item.value = []  
      }
    )
    this.setState(this.state)
  }

  // 底部确定按钮
  navigateBackFn(){
    Taro.setStorageSync('data', this.state.data)
    Taro.navigateBack({
      delta: 1
    })
  }

  render(){
    return (
      <View className='screen-more-root'>
        <View
          className='screen-more-root-box'
        >
          {
            this.state.list.map((item1,index1)=>
              <View
                key={item1.title}
                className='screen-more-root-box-list'
              >
                <View className='screen-more-root-box-list-title'>
                  {item1.title}
                </View>
                <View className='screen-more-root-box-list-box'>
                  { item1.showHowMuch<=8?
                    item1.value.map((item2,index2)=>
                    index2<8&&
                      <View 
                        key={item2.name}
                        className={`screen-more-root-box-list-box-every ${item2.className}`}
                        onClick={()=>this.everyClickFn(index1,index2)}
                      >
                        <Text className='screen-more-root-box-list-box-every-text'>{item2.name}</Text>
                        <Text className='screen-more-root-box-list-box-every-num'>{item2.howMuch}</Text>
                      </View>   
                    )
                    :
                    item1.value.map((item2,index2)=>
                    index2<29&&
                      <View 
                        className={`screen-more-root-box-list-box-every ${item2.className}`}
                        onClick={()=>this.everyClickFn(index1,index2)}
                      >
                        <Text className='screen-more-root-box-list-box-every-text'>{item2.name}</Text>
                        <Text className='screen-more-root-box-list-box-every-num'>{item2.howMuch}</Text>
                      </View>   
                    )
                  }
                  <View 
                    className='screen-more-root-box-list-box-every-last'
                    onClick={()=>this.showAllFn(index1)}
                  >
                    {
                      item1.showHowMuch<=8?
                      <Text className='screen-more-root-box-list-box-every-text'>全部</Text>
                      :
                      <Text className='screen-more-root-box-list-box-every-text'>收起</Text>
                    }
                  </View>
                </View>
              </View>
            )
          }
        </View>
        {/* 底部按钮 */}
        <View
          className='screen-more-root-footer'
        > 
          <View 
            className='screen-more-root-footer-reset'
            onClick={this.resetFn}
          >
            <Image
              className='screen-more-root-footer-reset-img'
              src={resetImg}
            /> 
            <Text className='screen-more-root-footer-reset-text'>重置</Text>
          </View>
          <View 
            className='screen-more-root-footer-ok'
            onClick={this.navigateBackFn}
          > 
            确定
          </View>
        </View>
      </View>
    )
  }
}