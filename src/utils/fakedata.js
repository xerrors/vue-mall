export function getProductInfo (orderID) {
  if (orderID !== '12138') {
    // pass
  }
  return {
    // ! seller 应该只获取得到 ID，然后再向服务器获取
    id: 12138,
    seller: {
      seller_id: 12138,
      name: '黄玉川',
      avatar: 'http://src.xerrors.fun/blog/20191021/CcFV3DJYgi0B.jpg?imageslim'
    },
    date: '2019-11-29',
    // 手机的品牌
    model: {
      label: '华为 Mate30 Pro',
      value: 'Huawei Mate30 Pro'
    },
    // 用户的选项
    selected: [1, 1, 1, 1, 1, 1, 1],
    pics: [
      'http://src.xerrors.fun/blog%2F20200216%2FIHwE18Npo5vM.jpg',
      'http://src.xerrors.fun/blog/20200216/yKBvu73WOisW.jpg',
      'http://src.xerrors.fun/2.jpg',
      'http://src.xerrors.fun/3.jpg',
      'http://src.xerrors.fun/4.jpg',
      'http://src.xerrors.fun/6.jpg'
    ],
    description: '换了新款手机了，这个不想使用了，没有任何问题，打算卖掉，入手渠道:专卖店全款购买的，有发票；使用感受:功能一切正常运行流畅，大型游戏不卡顿，使用起来没有任何问题，拍照清晰，吊打全球一亿像素的手机。'
  }
}

export function getProductInfos () {
  return [ {
    // ! seller 应该只获取得到 ID，然后再向服务器获取
    id: 12138,
    seller: {
      seller_id: 12138,
      name: '黄玉川',
      avatar: 'http://src.xerrors.fun/blog/20191021/CcFV3DJYgi0B.jpg?imageslim'
    },
    date: '2019-11-29',
    dealed: false, // 此订单是否已经交易
    // 手机的品牌
    model: {
      label: '华为 Mate30 Pro',
      value: 'Huawei Mate30 Pro'
    },
    // 用户的选项
    selected: [1, 1, 1, 1, 1, 1, 1],
    pics: [
      'http://src.xerrors.fun/blog%2F20200216%2FIHwE18Npo5vM.jpg',
      'http://src.xerrors.fun/blog/20200216/yKBvu73WOisW.jpg',
      'http://src.xerrors.fun/2.jpg',
      'http://src.xerrors.fun/3.jpg',
      'http://src.xerrors.fun/4.jpg',
      'http://src.xerrors.fun/6.jpg'
    ],
    // 出价记录
    values: [{
      id: 12138,
      name: '宋仁投',
      date: '2019-11-30 17:14:16',
      value: '2500'
    }, {
      id: 9527,
      name: '潘达秋',
      date: '2019-11-29 19:45:17',
      value: '2899'
    }],
    description: '换了新款手机了，这个不想使用了，没有任何问题，打算卖掉，入手渠道:专卖店全款购买的，有发票；使用感受:功能一切正常运行流畅，大型游戏不卡顿，使用起来没有任何问题，拍照清晰，吊打全球一亿像素的手机。'
  }, {
    // seller 应该只获取得到 ID，然后再向服务器获取
    id: 12138,
    seller: {
      seller_id: 12138,
      name: '黄玉川',
      avatar: 'http://src.xerrors.fun/blog/20191021/CcFV3DJYgi0B.jpg?imageslim'
    },
    date: '2019-11-29',
    dealed: false, // 此订单是否已经交易
    // 手机的品牌
    model: {
      label: '华为 Mate30 Pro',
      value: 'Huawei Mate30 Pro'
    },
    // 用户的选项
    selected: [1, 1, 1, 1, 1, 1, 1],
    pics: [
      'http://src.xerrors.fun/blog%2F20200216%2FIHwE18Npo5vM.jpg',
      'http://src.xerrors.fun/blog/20200216/yKBvu73WOisW.jpg',
      'http://src.xerrors.fun/2.jpg',
      'http://src.xerrors.fun/3.jpg',
      'http://src.xerrors.fun/4.jpg',
      'http://src.xerrors.fun/6.jpg'
    ],
    // 出价记录
    values: [{
      id: 12138,
      name: '宋仁投',
      date: '2019-11-30 17:14:16',
      value: '2500'
    }, {
      id: 9527,
      name: '潘达秋',
      date: '2019-11-29 19:45:17',
      value: '2899'
    }],
    description: '换了新款手机了，这个不想使用了，没有任何问题，打算卖掉，入手渠道:专卖店全款购买的，有发票；使用感受:功能一切正常运行流畅，大型游戏不卡顿，使用起来没有任何问题，拍照清晰，吊打全球一亿像素的手机。'
  }, {
    // seller 应该只获取得到 ID，然后再向服务器获取
    id: 12138,
    seller: {
      seller_id: 12138,
      name: '黄玉川',
      avatar: 'http://src.xerrors.fun/blog/20191021/CcFV3DJYgi0B.jpg?imageslim'
    },
    date: '2019-11-29',
    dealed: false, // 此订单是否已经交易
    // 手机的品牌
    model: {
      label: '华为 Mate30 Pro',
      value: 'Huawei Mate30 Pro'
    },
    // 用户的选项
    selected: [1, 1, 1, 1, 1, 1, 1],
    pics: [
      'http://src.xerrors.fun/blog/20191126/TiEyQCEnc6hi.png?imageslim',
      'http://src.xerrors.fun/blog/20191126/O6OBffI8bIuW.png?imageslim',
      'http://src.xerrors.fun/blog/20191126/wiafVBTwyzvD.png?imageslim',
      'http://src.xerrors.fun/blog/20191126/thMAJ0QTX489.png?imageslim',
      'http://src.xerrors.fun/blog/20191126/Oj6LnzUFkPUA.png?imageslim',
      'http://src.xerrors.fun/blog/20191126/o7Iyr9CY3s5Y.png?imageslim',
      'http://src.xerrors.fun/blog/20191126/0YFUsTWYHLaX.png?imageslim'
    ],
    // 出价记录
    values: [{
      id: 12138,
      name: '宋仁投',
      date: '2019-11-30 17:14:16',
      value: '2500'
    }, {
      id: 9527,
      name: '潘达秋',
      date: '2019-11-29 19:45:17',
      value: '2899'
    }],
    description: '换了新款手机了，这个不想使用了，没有任何问题，打算卖掉，入手渠道:专卖店全款购买的，有发票；使用感受:功能一切正常运行流畅，大型游戏不卡顿，使用起来没有任何问题，拍照清晰，吊打全球一亿像素的手机。'
  }]
}

export function getSelections () {
  return [{
    label: '手机状态',
    value: 'status',
    options: [{
      label: '正常进入桌面',
      value: 'nomal'
    }, {
      label: '无法开机或者进入桌面',
      value: 'unbootlog'
    }, {
      label: '全新未拆封',
      value: 'brandnew'
    }]
  }, {
    label: '内存、存储容量',
    value: 'status1',
    options: [{
      label: '256G',
      value: '256G'
    }, {
      label: '128G',
      value: '128G'
    }, {
      label: '64G',
      value: '64G'
    }]
  }, {
    label: '账号是否可退出',
    value: 'status2',
    options: [{
      label: '可正常退出',
      value: 'nomal'
    }, {
      label: '不可退出',
      value: 'disexit'
    }]
  }, {
    label: '磨损程度',
    value: 'status3',
    options: [{
      label: '外壳无瑕疵',
      value: 'almost_new'
    }, {
      label: '细微划痕无磕碰',
      value: 'slightly'
    }, {
      label: '磕碰掉漆、边框磨损',
      value: 'middle'
    }, {
      label: '外壳裂缝、变形',
      value: 'heavy'
    }]
  }, {
    label: '屏幕磨损',
    value: 'status4',
    options: [{
      label: '完美使用无划痕',
      value: 'almost_new'
    }, {
      label: '细微划痕',
      value: 'slightly'
    }, {
      label: '划伤、脱胶、小缺角',
      value: 'middle'
    }, {
      label: '碎裂、边角破损',
      value: 'heavy'
    }]
  }, {
    label: '屏幕显示',
    value: 'status5',
    options: [{
      label: '完美无瑕疵',
      value: 'almost_new'
    }, {
      label: '显示色差，或轻微泛黄/亮坏点',
      value: 'slightly'
    }, {
      label: '显示烧屏，或有透图/透字',
      value: 'middle'
    }, {
      label: '显示漏液，或闪烁/横竖线/花屏',
      value: 'heavy'
    }]
  }, {
    label: '维修情况',
    value: 'status6',
    options: [{
      label: '无维修情况',
      value: 'almost_new'
    }, {
      label: '屏幕维修',
      value: 'slightly'
    }, {
      label: '主板维修或功能故障',
      value: 'middle'
    }, {
      label: '屏幕和主板皆有维修',
      value: 'heavy'
    }]
  }]
}

export function getMsgs (role) {
  if (role === 'merchant') {
    return [{
      id: '112321212',
      date: '',
      readed: false,
      profucer: '12138',
      reveiver: '12139',
      msgType: 'order', // text | web page | order
      title: '你有新的订单等待接单！',
      orderID: '2019021921012138' // 订单的ID
    }, {
      id: '112321312',
      date: '',
      readed: false,
      profucer: 'admin',
      reveiver: 'everyone',
      msgType: 'text', // text | web page | order
      title: '系统测试提醒：系统将于2020年2月31日进行系统维护！',
      content: '系统测试提醒：系统将于2020年2月31日进行系统维护，届时系统将无法进入！维护时长为 1000分钟！感谢您的理解！'
    }, {
      id: '112521312',
      date: '',
      readed: true,
      profucer: 'admin',
      reveiver: 'everyone',
      msgType: 'web', // text | web page | order
      title: '第一届易传扯淡大会即将召开，点击进入主会场 >>',
      url: 'http://www.baidu.com' // 外部的链接
    }]
  } else {
    return [{
      date: '',
      readed: false,
      profucer: 'admin',
      reveiver: 'everyone',
      msgType: 'text', // text | product | web page
      title: '系统测试提醒：系统将于2020年2月31日进行系统维护！',
      content: '系统测试提醒：系统将于2020年2月31日进行系统维护，届时系统将无法进入！维护时长为 1000分钟！感谢您的理解！'
    }, {
      date: '',
      readed: false,
      profucer: '12138',
      reveiver: '12139',
      msgType: 'product', // text | product | web page
      title: '产品提醒：有人对你发布的商品感兴趣并进行了出价，请查看！',
      orderID: '12138' // 产品的ID
    }, {
      date: '',
      readed: true,
      profucer: 'admin',
      reveiver: 'everyone',
      msgType: 'web', // text | product | web page
      title: '第一届易传扯淡大会即将召开，点击进入主会场 >>',
      url: 'http://www.baidu.com' // 外部的链接
    }]
  }
}

export function getUserInfo (token) {
  // cosole.log(token)
  return {
    baseForm: {
      id: 122121,
      name: '黄玉川',
      avatar: 'http://src.xerrors.fun/blog/20191021/CcFV3DJYgi0B.jpg?imageslim',
      phone: '17685673489',
      sex: 'male'
    },
    addresses: [{
      receiver: '黄玉川',
      area: [
        { 320000: '江苏省' },
        { 320200: '无锡市' },
        { 320211: '滨湖区' }
      ],
      address: '蠡湖大道1800号江南大学',
      code: '214122',
      phone: '17685673489',
      default: true
    }, {
      receiver: '黄玉川',
      area: [
        { 340000: '安徽省' },
        { 341600: '亳州市' },
        { 341623: '利辛县' }
      ],
      address: '利辛县第一中学',
      code: '246700',
      phone: '17685673489',
      default: false
    }]
  }
}
