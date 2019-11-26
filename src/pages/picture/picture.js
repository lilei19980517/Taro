import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
// 图片素材
import bg from '../picture/images/bg.jpg'
import lineLeft from '../picture/images/line_left.png'
import lineRight from '../picture/images/line_right.png'
import bg2 from '../picture/images/bg2.jpg'
import dot from '../picture/images/dot.svg'
import icon1 from '../picture/images/icon_1.png'
import icon2 from '../picture/images/icon_2.png'
import icon3 from '../picture/images/icon_3.png'
import icon4 from '../picture/images/icon_4.png'
import icon5 from '../picture/images/icon_5.png'
import icon6 from '../picture/images/icon_6.png'
import sj from '../picture/images/sj.png'
import irregularTop from '../picture/images/bg_top.png'
import irregularMid from '../picture/images/bg_mid.png'
import irregularBottom from '../picture/images/bg_bottom.png'

import './picture.scss'
import { url } from 'inspector';

class Picture extends Component {

  config = {
    navigationBarTitleText: '一张图看懂'
  }

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='picture-root'>
        {/* 上面简介板块 */}
        <Image
          className='picture-root-one'
          src={bg}
        >
          <View className='picture-root-title'>
            <Image
              className='picture-root-title-left'
              src={lineLeft}
            />
            <Text
              className='picture-root-title-text'
            >
              科创板简介
            </Text>
            <Image
              className='picture-root-title-right'
              src={lineRight}
            />
          </View>
          <Text className='picture-root-one-text'>
            创板是独立于现有主板市场的新设板块,
            由国家主席习近平宣布设立，
            主要服务于突破关键核心技术、
            市场认可度高的科技创新企业。
            首批科创板股票预计上市时间在今年7月份左右
          </Text>
        </Image>
        {/* 中间日期介绍 */}
        <View className='picture-root-two'>
          {/* 六个圆点，写在里面为了好定位 */}
          <Image 
            className='picture-root-two-bg'
            src={bg2}
            mode='aspectFill'
          />
          <View className='picture-root-two-mid-line'>
            <Image
              className='picture-root-two-mid-dot-one'
              src={dot}
            />
            <Image
              className='picture-root-two-mid-dot-two'
              src={dot}
            />
            <Image
              className='picture-root-two-mid-dot-three'
              src={dot}
            />
            <Image
              className='picture-root-two-mid-dot-four'
              src={dot}
            />
            <Image
              className='picture-root-two-mid-dot-five'
              src={dot}
            />
            <Image
              className='picture-root-two-mid-dot-six'
              src={dot}
            />
            <Image
              className='picture-root-two-mid-dot-seven'
              src={dot}
            />
            {/* 开始文字部分，还是写在里面方面定位 */}
            <View className='picture-root-two-mid-content'>
              <Text className='picture-root-two-mid-content-date'>
                2019年3月2日
              </Text>
              <Text className='picture-root-two-mid-content-title'>
                规则发布
              </Text>
              <Text className='picture-root-two-mid-content-text'>
                中国证监会正式发布
                《科创板首次公开发行股票注册管理办(试行) 》和
                《科创板上市公司持续监管办法(试行)》，
                自公布之日起实施。经证监会批准。上交所、
                中国结算相关业务规则随之发布。
              </Text>
            </View>
            {/* 第二个 */}
            <View className='picture-root-two-mid-content'>
              <Text className='picture-root-two-mid-content-date'>
                2019年3月14日
              </Text>
              <Text className='picture-root-two-mid-content-title'>
                首批企业亮相
              </Text>
              <Text className='picture-root-two-mid-content-text'>
                首批科创板上市辅导企业亮相
                启明医疗、新光光电两家企业明确表态谋求科创板.上市
              </Text>
            </View>
            {/* 第三个 */}
            <View className='picture-root-two-mid-content'>
              <Text className='picture-root-two-mid-content-date'>
                2019年3月18日
              </Text>
              <Text className='picture-root-two-mid-content-title'>
                审核系统开放
              </Text>
              <Text className='picture-root-two-mid-content-text'>
                上市审核系统正式对外受理科创板项目申报
              </Text>
            </View>
            {/* 第四个 */}
            <View className='picture-root-two-mid-content'>
              <Text className='picture-root-two-mid-content-date'>
                2019年3月22日
              </Text>
              <Text className='picture-root-two-mid-content-title'>
                首批申报企业名单出炉
              </Text>
              <Text className='picture-root-two-mid-content-text'>
                上交所系统显示首批9家已受理公司名单，
                包括睿创微纳、江苏北人、容百新能源等
              </Text>
            </View>
            {/* 第五个 */}
            <View className='picture-root-two-mid-content'>
              <Text className='picture-root-two-mid-content-date'>
                2019年3月底
              </Text>
              <Text className='picture-root-two-mid-content-title'>
                3月累计28家
              </Text>
              <Text className='picture-root-two-mid-content-title'>
                申请已受理
              </Text>
              <Text className='picture-root-two-mid-content-text'>
                截至3月底，累计28家公司的科创板 申请已获受理
              </Text>
            </View>
            {/* 第六个 */}
            <View className='picture-root-two-mid-content'>
              <Text className='picture-root-two-mid-content-date'>
                2019年7月
              </Text>
              <Text className='picture-root-two-mid-content-title'>
                开板
              </Text>
              <Text className='picture-root-two-mid-content-text'>
                第一批申报企业通过审核，预期中旬开板
                预期2019全年科创板上市企业或在150家左右，
                募资规模500-1000亿元
              </Text>
            </View>
            {/* 第七个 */}
            <View className='picture-root-two-mid-content'>
              <Text className='picture-root-two-mid-content-date'>
                2020年
              </Text>
              <Text className='picture-root-two-mid-content-title'>
                目标
              </Text>
              <Text className='picture-root-two-mid-content-text'>
                2020年阶段性成熟成果可期，
                未来科创板有望吸引体量更大的海外中概股或独角兽企业上市
              </Text>
            </View>
          </View>   
        </View>
        {/* 科创板亮点 */}
        <View className='picture-root-title'>
          <Image
            className='picture-root-title-left'
            src={lineLeft}
          />
          <Text
            className='picture-root-title-text'
          >
            科创板亮点
          </Text>
          <Image
            className='picture-root-title-right'
            src={lineRight}
          />
        </View>
        <View className='picture-root-bright-spot'>
        {/* 每一个图片与文字的父盒子 */}
        {/* 第一个 */}
        <View className='picture-root-bright-spot-box'>
          <Image
            src={icon1}
            className='picture-root-bright-spot-box-img'
          />
          <Text className='picture-root-bright-spot-box-title'>
            上市条件
          </Text>
          <Text className='picture-root-bright-spot-box-text'>
            允许符合科创板定位、
            尚未盈利或存在累计来弥补亏损的企业上市
          </Text>
        </View>
        {/* 第二个 */}
        <View className='picture-root-bright-spot-box'>
          <Image
            src={icon2}
            className='picture-root-bright-spot-box-img'
          />
          <Text className='picture-root-bright-spot-box-title'>
            上市审核及注册
          </Text>
          <Text className='picture-root-bright-spot-box-text'>
            上交所负责发行上市审核证监会作出准予注册决定
          </Text>
        </View>
        {/* 第三个 */}
        <View className='picture-root-bright-spot-box'>
          <Image
            src={icon3}
            className='picture-root-bright-spot-box-img'
          />
          <Text className='picture-root-bright-spot-box-title'>
            定价机制
          </Text>
          <Text className='picture-root-bright-spot-box-text'>
            取消直接定价方式，
            全面采用市场化的询价定价方式
          </Text>
        </View>
        {/* 第四个 */}
        <View className='picture-root-bright-spot-box'>
          <Image
            src={icon4}
            className='picture-root-bright-spot-box-img'
          />
          <Text className='picture-root-bright-spot-box-title'>
            交易机制
          </Text>
          <Text className='picture-root-bright-spot-box-text'>
            涨跌幅限制放宽至20%，
            新股上市后前5个交易日不设涨跌幅限制
          </Text>
        </View>
        {/* 第五个 */}
        <View className='picture-root-bright-spot-box'>
          <Image
            src={icon5}
            className='picture-root-bright-spot-box-img'
          />
          <Text className='picture-root-bright-spot-box-title'>
            持续监管
          </Text>
          <Text className='picture-root-bright-spot-box-text'>
            减持和股权激励制度创新，
            并购需与主业协同，实施注册制，
            募集资金应重点投向科技创新领域，
            退市标准程序执行更严
          </Text>
        </View>
        {/* 第六个 */}
        <View className='picture-root-bright-spot-box'>
          <Image
            src={icon6}
            className='picture-root-bright-spot-box-img'
          />
          <Text className='picture-root-bright-spot-box-title'>
            允许分拆上市
          </Text>
          <Text className='picture-root-bright-spot-box-text'>
            上交所负责发行上市审核证监会作出准予注册决定
          </Text>
        </View>

        </View>
         {/* 科创板细则 */}
         <View className='picture-root-title'>
          <Image
            className='picture-root-title-left'
            src={lineLeft}
          />
          <Text
            className='picture-root-title-text'
          >
            科创板细则
          </Text>
          <Image
            className='picture-root-title-right'
            src={lineRight}
          />
        </View>
        {/* 带三角形的标题  第一个*/}
        <View className='picture-root-triangle-title'>    
          <View className='picture-root-triangle-title-box'>
          <Image
            className='picture-root-triangle-title-left' 
            src={sj}
          />
          <Text className='picture-root-triangle-text'>
            投资者门槛
          </Text>
          <Image
            className='picture-root-triangle-title-right' 
            src={sj}
          />
          </View>
        </View>
        {/* 带三角形的标题下面盒子 */}
        <View className='picture-root-irregular-figure'>
          <Image 
            className='picture-root-irregular-figure-top'
            src={irregularTop}
          />
          <Image 
            className='picture-root-irregular-figure-mid'
            src={irregularMid}
          />
          <Text className='picture-root-irregular-figure-mid-text'>
            个人投资者参与科创板股票交易，证券账户及资金账户的资产不低于人民币
            <Text className='picture-root-irregular-figure-mid-text-blod'>
              50万元
            </Text>
            并参与证券交易满
            <Text className='picture-root-irregular-figure-mid-text-blod'>
              24个月
            </Text>
            。未满足适当性要求的投资者，可通过购买公募基金等方式参与科创板。
          </Text>
          <Image 
            className='picture-root-irregular-figure-bottom'
            src={irregularBottom}
          />
        </View>
        {/* 带三角形的标题 第二个 */}
        <View className='picture-root-triangle-title'>    
          <View className='picture-root-triangle-title-box'>
          <Image
            className='picture-root-triangle-title-left' 
            src={sj}
          />
          <Text className='picture-root-triangle-text'>
            注册流程制
          </Text>
          <Image
            className='picture-root-triangle-title-right' 
            src={sj}
          />
          </View>
        </View>
        {/* 带三角形的标题下面盒子 */}
        <View className='picture-root-irregular-figure'>
          <Image 
            className='picture-root-irregular-figure-top'
            src={irregularTop}
          />
          <Image 
            className='picture-root-irregular-figure-mid'
            src={irregularMid}
          />
          <Text className='picture-root-irregular-figure-mid-text'>
            上交所负责上市审核，
            <Text className='picture-root-irregular-figure-mid-text-blod'>
              预审核周期在6-9个月
            </Text>
            。证监会在上交所
            <Text className='picture-root-irregular-figure-mid-text-blod'>
              审核通过后20个工作日内完成注册
            </Text>
          </Text>
          <Image 
            className='picture-root-irregular-figure-bottom'
            src={irregularBottom}
          />
        </View>
        {/* 带三角形的标题 第三个 */}
        <View className='picture-root-triangle-title'>    
          <View className='picture-root-triangle-title-box'>
          <Image
            className='picture-root-triangle-title-left' 
            src={sj}
          />
          <Text className='picture-root-triangle-text'>
            上市公司门槛门槛
          </Text>
          <Image
            className='picture-root-triangle-title-right' 
            src={sj}
          />
          </View>
        </View>
        {/* 带三角形的标题下面盒子 */}
        <View className='picture-root-irregular-figure'>
          <Image 
            className='picture-root-irregular-figure-top'
            src={irregularTop}
          />
          <Image 
            className='picture-root-irregular-figure-mid picture-root-irregular-figure-mid-three'
            src={irregularMid}
          />
          <Text className='picture-root-irregular-figure-mid-text'>
            1预计市值不低于人民币
            <Text className='picture-root-irregular-figure-mid-text-blod'>
              10亿元
            </Text>
            ，最近两年净利润均为正且累计净利润不低于人民币5000万元，
            或者预计市值不低于人民币10亿元，
            最近- -年净利润为正且营业收入不低于人民币1亿元;
            2.预计市值不低于人民币
            <Text className='picture-root-irregular-figure-mid-text-blod'>
              15亿元
            </Text>
            ，最近一年营业收入不低于人名币2亿元，
            而最近三年累计研发投入占最近三年累计营业收入的比例不低于15%
          </Text>
          <Image 
            className='picture-root-irregular-figure-bottom'
            src={irregularBottom}
          />
        </View>
        {/* 带三角形的标题 第四个 */}
        <View className='picture-root-triangle-title'>    
          <View className='picture-root-triangle-title-box'>
          <Image
            className='picture-root-triangle-title-left' 
            src={sj}
          />
          <Text className='picture-root-triangle-text'>
            上市定价
          </Text>
          <Image
            className='picture-root-triangle-title-right' 
            src={sj}
          />
          </View>
        </View>
        {/* 带三角形的标题下面盒子 */}
        <View className='picture-root-irregular-figure'>
          <Image 
            className='picture-root-irregular-figure-top'
            src={irregularTop}
          />
          <Image 
            className='picture-root-irregular-figure-mid'
            src={irregularMid}
          />
          <Text className='picture-root-irregular-figure-mid-text'>
            交易机制 T+1,
            <Text className='picture-root-irregular-figure-mid-text-blod'>
              引入盘后固定价格交易。
            </Text>
          </Text>
          <Image 
            className='picture-root-irregular-figure-bottom'
            src={irregularBottom}
          />
        </View>
        {/* 带三角形的标题 第五个 */}
        <View className='picture-root-triangle-title'>    
          <View className='picture-root-triangle-title-box'>
          <Image
            className='picture-root-triangle-title-left' 
            src={sj}
          />
          <Text className='picture-root-triangle-text'>
            涨跌幅限制
          </Text>
          <Image
            className='picture-root-triangle-title-right' 
            src={sj}
          />
          </View>
        </View>
        {/* 带三角形的标题下面盒子 */}
        <View className='picture-root-irregular-figure'>
          <Image 
            className='picture-root-irregular-figure-top'
            src={irregularTop}
          />
          <Image 
            className='picture-root-irregular-figure-mid'
            src={irregularMid}
          />
          <Text className='picture-root-irregular-figure-mid-text'>
            涨跌幅限制
            <Text className='picture-root-irregular-figure-mid-text-blod'>
              涨跌幅限制20%
            </Text>
            ，上市后的前5个交易日不设涨跌幅限制
          </Text>
          <Image 
            className='picture-root-irregular-figure-bottom'
            src={irregularBottom}
          />
        </View>
        {/* 带三角形的标题 第七个 */}
        <View className='picture-root-triangle-title'>    
          <View className='picture-root-triangle-title-box'>
          <Image
            className='picture-root-triangle-title-left' 
            src={sj}
          />
          <Text className='picture-root-triangle-text'>
            交易数量
          </Text>
          <Image
            className='picture-root-triangle-title-right' 
            src={sj}
          />
          </View>
        </View>
        {/* 带三角形的标题下面盒子 */}
        <View className='picture-root-irregular-figure'>
          <Image 
            className='picture-root-irregular-figure-top'
            src={irregularTop}
          />
          <Image 
            className='picture-root-irregular-figure-mid'
            src={irregularMid}
          />
          <Text className='picture-root-irregular-figure-mid-text'>
            手笔申报数量应当
            <Text className='picture-root-irregular-figure-mid-text-blod'> 
              不少于200股
            </Text>
            ，可按1股交易数量 为单位进行增地。限价申报最大不超过10万股，市价申报最大不超过5万股
          </Text>
          <Image 
            className='picture-root-irregular-figure-bottom'
            src={irregularBottom}
          />
        </View>
        {/* 带三角形的标题 第八个 */}
        <View className='picture-root-triangle-title'>    
          <View className='picture-root-triangle-title-box'>
          <Image
            className='picture-root-triangle-title-left' 
            src={sj}
          />
          <Text className='picture-root-triangle-text'>
            保荐跟投
          </Text>
          <Image
            className='picture-root-triangle-title-right' 
            src={sj}
          />
          </View>
        </View>
        {/* 带三角形的标题下面盒子 */}
        <View className='picture-root-irregular-figure'>
          <Image 
            className='picture-root-irregular-figure-top'
            src={irregularTop}
          />
          <Image 
            className='picture-root-irregular-figure-mid'
            src={irregularMid}
          />
          <Text className='picture-root-irregular-figure-mid-text'>
            保荐机构通过子公司使用自有资金进行跟投，
            <Text className='picture-root-irregular-figure-mid-text-blod'>
              跟投比例为2%-5%，锁定期为2年
            </Text>
            。
          </Text>
          <Image 
            className='picture-root-irregular-figure-bottom'
            src={irregularBottom}
          />
        </View>
        {/* 带三角形的标题 第九个 */}
        <View className='picture-root-triangle-title'>    
          <View className='picture-root-triangle-title-box'>
          <Image
            className='picture-root-triangle-title-left' 
            src={sj}
          />
          <Text className='picture-root-triangle-text'>
            网下配售
          </Text>
          <Image
            className='picture-root-triangle-title-right' 
            src={sj}
          />
          </View>
        </View>
        {/* 带三角形的标题下面盒子 */}
        <View className='picture-root-irregular-figure'>
          <Image 
            className='picture-root-irregular-figure-top'
            src={irregularTop}
          />
          <Image 
            className='picture-root-irregular-figure-mid'
            src={irregularMid}
          />
          <Text className='picture-root-irregular-figure-mid-text'>
            将网下初始发行比例调高10%，
            并降低网网下配售  
            下初始发行量向网上回拨的力度，
            回拨后网下发行比例不少于60%。
          </Text>
          <Image 
            className='picture-root-irregular-figure-bottom'
            src={irregularBottom}
          />
        </View>
        {/* 带三角形的标题 第十个 */}
        <View className='picture-root-triangle-title'>    
          <View className='picture-root-triangle-title-box'>
          <Image
            className='picture-root-triangle-title-left' 
            src={sj}
          />
          <Text className='picture-root-triangle-text'>
            网上申购
          </Text>
          <Image
            className='picture-root-triangle-title-right' 
            src={sj}
          />
          </View>
        </View>
        {/* 带三角形的标题下面盒子 */}
        <View className='picture-root-irregular-figure'>
          <Image 
            className='picture-root-irregular-figure-top'
            src={irregularTop}
          />
          <Image 
            className='picture-root-irregular-figure-mid'
            src={irregularMid}
          />
          <Text className='picture-root-irregular-figure-mid-text'>
            不低于20%，申购单位从1000股/手降至网_上申购
            <Text className='picture-root-irregular-figure-mid-text-blod'>
              500股/手
            </Text>
            ，对应市值要求从1万元降至，
            <Text className='picture-root-irregular-figure-mid-text-blod'>
              5000元
            </Text>
            。
          </Text>
          <Image 
            className='picture-root-irregular-figure-bottom'
            src={irregularBottom}
          />
        </View>
        <View className='picture-root-footer'>
        </View>
      </View>
      
    )
  }
}

export default Picture
