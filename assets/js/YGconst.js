window.AppData = {
FOOD_LIBRARY:[


  { name: "包子", minCook:10, learning:3000, preparing:2, equip: 2500, smoke: false, standardKitchen: 8,kitchenAreaPP:4, dineIn: false, takeway: 0.4, grossMargin: 0.60, revPerStaff: 500, Attraction: { Single: .1, Couple: .9, Family: 1.2, Catchup: .8, FineDining: 1.5 }, materialCost: 80, monthFactor: [0.95, 0.9, 1, 1, 1, 0.9, 0.9, 1, 1, 1, 0.95, 0.95], minArea: 15 },

  { name: "高档中餐", minCook:16, learning:15000, preparing:12, equip: 150000, smoke: true, standardKitchen: 25,kitchenAreaPP:7, dineIn: true, takeway: 0, grossMargin: 0.60, revPerStaff: 500, Attraction: { Single: .1, Couple: .9, Family: 1.2, Catchup: .8, FineDining: 1.5 }, materialCost: 80, monthFactor: [1.1, 1.1, 1, 1, 1, 1.05, 1.05, 1, 1, 1, 1.1, 1.2], minArea: 100 },

  { name: "小吃摊", minCook:10, learning:1500, preparing:2, equip: 5000, smoke: true, standardKitchen: 2,kitchenAreaPP:2, dineIn: false, takeway: 0.1, grossMargin: 0.62, revPerStaff: 800, Attraction: { Single: 1.2, Couple: .7, Family: .5, Catchup: .6, FineDining: 0 }, materialCost: 8, monthFactor: Array(12).fill(1), minArea: 2 },

  { name: "面馆", minCook:10, learning:2500, preparing:5, equip: 30000, smoke: false, standardKitchen: 8,kitchenAreaPP:5, dineIn: true, takeway: 0.2, grossMargin: 0.58, revPerStaff: 900, Attraction: { Single: 1, Couple: .6, Family: .6, Catchup: .4, FineDining: .1 }, materialCost: 12, monthFactor: Array(12).fill(1), minArea: 20 },

  { name: "小炒店", minCook:12, learning:5000, preparing:8, equip: 90000, smoke: true, standardKitchen: 15,kitchenAreaPP:7, dineIn: true, takeway: 0.15, grossMargin: 0.60, revPerStaff: 600, Attraction: { Single: .6, Couple: .8, Family: 1, Catchup: .7, FineDining: .2 }, materialCost: 25, monthFactor: [1, 1, 1, 1, 1.05, 1.05, 1.05, 1.05, 1, 1, 1, 1], minArea: 30 },

  { name: "烧烤", minCook:11, learning:4000, preparing:10, equip: 30000, smoke: true, standardKitchen: 15,kitchenAreaPP:6, dineIn: true, takeway: 0.1, grossMargin: 0.60, revPerStaff: 600, Attraction: { Single: .8, Couple: .9, Family: .5, Catchup: 1.2, FineDining: .3 }, materialCost: 30, monthFactor: [.1, .1, .3, .6, 1, 1.5, 1.4, 1.4, .8, .5, .3, .2], minArea: 80 },

  { name: "麻辣烫", minCook:10, learning:2000, preparing:7, equip: 40000, smoke: false, standardKitchen: 16,kitchenAreaPP:7, dineIn: true, takeway: 0.3, grossMargin: 0.55, revPerStaff: 750, Attraction: { Single: .7, Couple: .6, Family: .2, Catchup: .05, FineDining: 0 }, materialCost: 15, monthFactor: Array(12).fill(1), minArea: 20 },

  { name: "奶茶",  minCook:10, learning:2000, preparing:3, equip: 50000, smoke: false, standardKitchen: 10,kitchenAreaPP:4, dineIn: false, takeway: 0.6, grossMargin: 0.60, revPerStaff: 1400, Attraction: { Single: 1.1, Couple: 1.5, Family: .7, Catchup: 1, FineDining: .6 }, materialCost: 5, monthFactor: [.8, .8, .85, .9, 1, 1.1, 1.2, 1.25, 1.1, 1, .9, .85], minArea: 8 },

  { name: "火锅", minCook:11,  learning:3000, preparing:11, equip: 80000, smoke: true, standardKitchen: 30,kitchenAreaPP:8, dineIn: true, takeway: 0.02, grossMargin: 0.62, revPerStaff: 800, Attraction: { Single: .05, Couple: .5, Family: .4, Catchup: .8, FineDining: 1.1 }, materialCost: 40, monthFactor: [1.2, 1.1, 1, 1, 1, 1.1, 1.1, 1.1, 1, 1, 1.1, 1.2], minArea: 80 },

  { name: "猪脚饭", minCook:10, learning:1500, preparing:3, equip: 15000, smoke: true, standardKitchen: 10,kitchenAreaPP:4, dineIn: true, takeway: 0.2, grossMargin: 0.48, revPerStaff: 1100, Attraction: { Single: 1.1, Couple: .1, Family: .2, Catchup: .05, FineDining: 0 }, materialCost: 10, monthFactor: Array(12).fill(1), minArea: 20 },

  { name: "汉堡", minCook:10, learning:1500, preparing:5, equip: 40000, smoke: true, standardKitchen: 16,kitchenAreaPP:7, dineIn: true, takeway: 0.65, grossMargin: 0.62, revPerStaff: 800, Attraction: { Single: 1.2, Couple: .7, Family: .8, Catchup: .4, FineDining: 0 }, materialCost: 16, monthFactor: Array(12).fill(1), minArea: 20 },
],
     STREET_LIBRARY : [
      {
        name: "中小学商圈", demand: { Single: .05, Couple: .10, Family: .8, Catchup: .05, FineDining: 0 }, typicalFlow: 1500,
        weekdayFactor: [1.2, 1.2, 1.2, 1.2, 1.4, .4, .4], monthFactor: [.95, .1, .3, 1.1, .95, .9, .1, .1, 1.25, 1.15, 1.05, 1]
      },
      {
        name: "重点高中商圈", demand: { Single: .55, Couple: .10, Family: .3, Catchup: .05, FineDining: 0 }, typicalFlow: 2800,
        weekdayFactor: [0.25, 0.25, 0.25, 0.25, 2.5, 2, 1.5], monthFactor: [.95, .1, .3, 1.1, .95, .9, .1, .1, 1.25, 1.15, 1.05, 1]
      },
      {
        name: "普通高中商圈", demand: { Single: .4, Couple: .35, Family: .1, Catchup: .15, FineDining: 0 }, typicalFlow: 2200,
        weekdayFactor: [.7, .7, .7, .7, 1.2, 1.8, 1.6], monthFactor: [.95, .1, .3, 1.1, .95, .9, .1, .1, 1.25, 1.15, 1.05, 1]
      },
      {
        name: "大学商圈", demand: { Single: .45, Couple: .3, Family: .05, Catchup: .15, FineDining: .05 }, typicalFlow: 7000,
        weekdayFactor: [.7, .7, .7, .7, 1, 1.8, 1.6], monthFactor: [.95, .1, .3, 1.1, .95, .9, .1, .1, 1.25, 1.15, 1.05, 1]
      },
      {
        name: "办公楼商圈", demand: { Single: .55, Couple: .05, Family: .05, Catchup: .25, FineDining: .10 }, typicalFlow: 4800,
        weekdayFactor: [1.35, 1.35, 1.35, 1.35, 1.35, .2, .2], monthFactor: [.9, .25, .9, 1.0, 1.1, 1.15, 1.1, 1.15, 1.05, .95, .9, .95]
      },
      {
        name: "步行街", demand: { Single: .15, Couple: .35, Family: .35, Catchup: .05, FineDining: .10 }, typicalFlow: 3000,
        weekdayFactor: [.9, .9, .9, .9, 1, 1.2, 1.2], monthFactor: [.85, 1.25, .9, 1.0, 1.1, 1.15, 1.25, 1.25, 1.05, .95, .9, .9]
      },
      {
        name: "小区底商", demand: { Single: .25, Couple: .2, Family: .4, Catchup: .1, FineDining: .05 }, typicalFlow: 2800,
        weekdayFactor: [.95, .95, .95, .95, 1.05, 1.1, 1.1], monthFactor: [1, 1, 1, 1, 1.05, 1.05, 1.05, 1.05, 1, 1, 1, 1]
      },
      {
        name: "火车站", demand: { Single: .7, Couple: .15, Family: .05, Catchup: .08, FineDining: .02 }, typicalFlow: 5000,
        weekdayFactor: [.95, .95, .95, .95, 1, 1.35, 1.35], monthFactor: [1.1, 1.2, .95, 1, 1, 1, 1.05, 1.05, 1, 1.1, 1.2, 1.3]
      },
      {
        name: "风景区", demand: { Single: .2, Couple: .35, Family: .3, Catchup: .1, FineDining: .05 }, typicalFlow: 16000,
        weekdayFactor: [.6, .6, .6, .6, .8, 1.9, 1.8], monthFactor: [.7, .8, .95, 1.1, 1.2, 1.4, 1.5, 1.5, 1.3, 1.1, .9, .8]
      },
    ],
      RETAIL_LIBRARY : [
      { name: "服装店", icon: "👗" }, { name: "书店", icon: "📚" }, { name: "家电店", icon: "📺" },
      { name: "便利店", icon: "🛒" }, { name: "药店", icon: "💊" }, { name: "文具店", icon: "✏️" },
      { name: "鞋店", icon: "👟" }, { name: "手机店", icon: "📱" },
    ],
     SHOP_NAMES : [
      "太牛牛", "驾驶本", "不好吃不要钱", "钱塘", "老桂林", "今天不减肥", "碳水快乐屋", "米杀手",
      "深夜续命", "芭王", "一口上头", "沽名", "迷雪", "米镇", "来都来了", "先吃再说", "旺发",
      "吃撑算我的", "这就开饭", "真香警告", "锅里有点东西", "老板不在", "厨子很忙", "火候随缘",
      "盐多点没事", "辣到报警", "隔壁更贵", "陈记", "老赵家", "阿强", "老成都", "老街坊", "家常味",
      "邻里香", "顺口来", "福来顺", "好再来", "聚味轩", "食为先", "味之源", "香满屋", "百味堂",
      "一品香", "口口香", "饭点儿", "三碗不过", "有点味", "简单吃点", "常来坐坐", "鲜牛肉", "吃完再减肥",
    ],

    // Gossip for LOW tier (applies to all types)
    gossip_LIBRARY : [
      '老板脾气不好',
      '老板最近离婚了',
      '前任员工都被欠工资',
      '后厨卫生堪忧',
      '隔壁房租比这里便宜30%',
      '这条街最近要拆迁谣言',
      '老板娘很好看',
      '经常有城管来查',
      '通风不好，夏天热死',
      '楼上是KTV会很吵',
      '偶有发现老鼠',
      '消防队检查过但没罚款',
      '装修是十年前的风格',
      '楼上住户经常吵架',
      '水压不足',
      '回头客不少',
      '隔音很差',
      '外卖经常被差评',
      '电线老化很危险',
      '前老板恶意竞争',
      '常被进驻检查',
      '邻居夜间很吵',
      '装修时间很长',
      '周围停车位不够',
      '总是停电',
      '前员工还在门口贴小广告',
      '老板收黑钱',
      '偷偷涨价',
      '夏天特别热，冬天特别冷',
    ],

    gossip_LIBRARY_source : {
      "school": [
        "听说图书馆三楼的空调只在考试周才会变冷",
        "有人说操场跑道晚上会自动多出一圈",
        "传闻食堂阿姨其实会记住每个人点什么",
        "据说旧教学楼的钟永远慢三分钟",
        "听说某间教室的WiFi特别快但只有周五有效",
        "有人说校猫其实有固定上课时间",
        "传闻打印店老板能猜中作业截止时间",
        "听说某老师点名全靠直觉",
        "有人说自习室的椅子会认人",
        "传闻晚自习结束后灯会延迟一秒才灭",
        "听说雨天校园广播声音会变温柔",
        "有人说期末周自动贩卖机会补货更快"
      ],
      "station": [
        "听说某个站台的列车总会晚到半分钟",
        "有人说售票机更喜欢整钱",
        "传闻进站闸机会“记住”常客",
        "听说最后一班车司机会换路线看风景",
        "有人说候车室的椅子朝向会微调",
        "传闻广播员会根据天气换语气",
        "听说自动扶梯在深夜速度更慢",
        "有人说某出口总能遇到熟人",
        "传闻列车门更偏爱中间车厢",
        "听说检票口高峰期更容易刷成功",
        "有人说电子屏会提前一秒刷新",
        "传闻站内咖啡味会指引方向"
      ],
      "office": [
        "听说电梯总会在你赶时间时多停一层",
        "有人说茶水间的咖啡周一更浓",
        "传闻会议室预约系统有“隐藏优先级”",
        "听说打印机能感应到加急文件",
        "有人说空调温度下午会悄悄升高",
        "传闻某层的WiFi午饭后更稳定",
        "听说保安能记住所有加班的人",
        "有人说窗边座位更容易收到好消息",
        "传闻垃圾桶在周五更容易满",
        "听说某电梯按钮反应更快",
        "有人说绿植会在月初更精神",
        "传闻夜间灯光会自动变柔和"
      ],
      "tourism": [
        "听说某个观景点日落会多停留几秒",
        "有人说湖边的风会绕一圈再回来",
        "传闻小路尽头总有不同的景色",
        "听说瀑布在清晨声音更轻",
        "有人说石阶会根据人多少变长",
        "传闻某棵树会在固定时间掉叶子",
        "听说山顶信号时好时坏是为了让人专心",
        "有人说导览图会悄悄更新路径",
        "传闻长椅坐久了会更舒服",
        "听说某块石头拍照更显瘦",
        "有人说花期会根据游客多少变化",
        "传闻清晨的雾会避开相机镜头"
      ]
    }




};
