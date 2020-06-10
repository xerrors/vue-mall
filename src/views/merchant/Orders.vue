<template>
  <div class="orders">
    <div class="order-card">
      <div class="item" @click="filter=[0, 7]">
        <img src="/svg/all.svg" class="svg" />
        <div class="title">全部订单</div>
        <div class="text">1290</div>
      </div>
      <div class="item" @click="filter=[1, 2]">
        <img src="/svg/waiting.svg" class="svg" />
        <div class="title">等待接单</div>
        <div class="text">29</div>
      </div>
      <div class="item" @click="filter=[2, 5]">
        <img src="/svg/check.svg" class="svg" />
        <div class="title">等待审核</div>
        <div class="text">10</div>
      </div>
      <div class="item" @click="filter=[5, 7]">
        <img src="/svg/pay.svg" class="svg" />
        <div class="title">等待付款</div>
        <div class="text">18</div>
      </div>
      <div class="item" @click="filter=[0, 1]">
        <img src="/svg/cancel.svg" class="svg" />
        <div class="title">已取消</div>
        <div class="text">4</div>
      </div>
    </div>
    <div class="my-order" v-for="order in orders" :key="order.id" @click="lookupOrder(order.id)">
      <div class="price">{{ order.deal_price }} ¥</div>
      <div class="status">{{ status[order.status] }}</div>
      <div class="right">
        <div style="padding: 1rem">
          <span>{{ order.model }}</span>
          <span style="float: right;">
            <i class="el-icon-star-on" v-for="_ in order.evaluation" :key="_"></i>
          </span>
        </div>
        <div class="tags">
          <span v-for="(tag, ind) in order.tags" :key="ind">{{ tag }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      filter: [0, 10],
      status: [
        '已取消',
        '等待接单', // （商家接单进入下一状态）
        '等待发货', // （用户发货进入下一状态）
        '运输中', // （用户发货进入下一状态）
        '检验中', // （商家给出最终价格进入下一状态）
        '核价中', // （用户接受此价格）
        '等待支付', // （商户支付钱款）
        '等待用户确认',
        '交易完成'
      ]
    }
  },
  computed: {
    /*
     * 订单的状态
     * 0. 订单已取消
     * 1. 等待接单（商家接单进入下一状态）
     * 2. 等待发货（用户发货进入下一状态）
     * 3. 运输中 （用户发货进入下一状态）
     * 4. 检验中（商家给出最终价格进入下一状态）
     * 5. 核价中（用户接受此价格）
     * 6. 等待支付（商户支付钱款）
     * 7. 等待用户确认（20天自动确认）
     * 8. 交易完成
     *
     */
    orders () {
      const orders = this.getOrdersFromServer()
      return orders.filter(order => {
        return order.status >= this.filter[0] && order.status < this.filter[1]
      })
    }
  },
  methods: {
    getOrdersFromServer () {
      // TODO 向服务器获取数据
      return [
        {
          id: '45263949',
          deal_price: 2030,
          status: 2,
          model: 'Vivo NEX 3',
          evaluation: 2,
          tags: [
            '无法开机或者进入桌面',
            '32G',
            '可正常退出',
            '外壳无瑕疵',
            '碎裂、边角破损',
            '显示漏液，或闪烁/横竖线/花屏',
            '屏 幕和主板皆有维修'
          ]
        },

        {
          id: '45263950',
          deal_price: 2030,
          status: 5,
          model: '小米 10 Pro',
          evaluation: 5,
          tags: [
            '正常进入桌面',
            '64G',
            '不可退出',
            '外壳裂缝、变形',
            '碎裂、边角破损',
            '显示烧屏，或有透图/透字',
            '屏幕和主板皆有维修'
          ]
        },

        {
          id: '45263951',
          deal_price: 2420,
          status: 6,
          model: '小米 10 Pro',
          evaluation: 3,
          tags: [
            '无法开机或者进入桌面',
            '128G',
            '不可退出',
            '外壳无瑕疵',
            '划伤、脱胶、小缺角',
            '完美无瑕疵',
            '屏幕和主板皆有维修'
          ]
        },

        {
          id: '45263952',
          deal_price: 3860,
          status: 5,
          model: '华为 Mate30 Pro',
          evaluation: 3,
          tags: [
            '正常进入桌面',
            '256G',
            '可正常退出',
            '外壳裂缝、变形',
            '细微划痕',
            '显示漏液，或闪烁/横竖线/花屏',
            '屏幕和主板皆有维修'
          ]
        },

        {
          id: '45263953',
          deal_price: 2060,
          status: 7,
          model: 'Nokia 8',
          evaluation: 2,
          tags: [
            '无法开机或者进入桌面',
            '32G',
            '不可退出',
            '磕碰掉漆、边框磨损',
            '碎裂、边角破损',
            '显示漏液，或闪烁/横竖线/花屏',
            '屏幕维修'
          ]
        },

        {
          id: '45263954',
          deal_price: 2810,
          status: 3,
          model: '华为 Mate30 Pro',
          evaluation: 5,
          tags: [
            '正常进入桌面',
            '128G',
            '不可退出',
            '磕碰掉漆、边框磨损',
            '划伤、脱胶、小缺角',
            '显示色差，或轻微泛黄/亮坏点',
            ' 屏幕维修'
          ]
        },

        {
          id: '45263955',
          deal_price: 2960,
          status: 5,
          model: 'Vivo NEX 3',
          evaluation: 5,
          tags: [
            '无法开机或者进入桌面',
            '128G',
            '不可退出',
            '外壳无瑕疵',
            '碎裂、边角破损',
            '完美无瑕疵',
            '屏幕维修'
          ]
        },

        {
          id: '45263956',
          deal_price: 2330,
          status: 6,
          model: '华为 Mate30 Pro',
          evaluation: 2,
          tags: [
            '无法开机或者进入桌面',
            '32G',
            '可正常退出',
            '外壳裂缝、变形',
            '碎裂、边角破损',
            '完美无瑕疵',
            '屏幕和主板皆有维 修'
          ]
        },

        {
          id: '45263957',
          deal_price: 3380,
          status: 2,
          model: '华为 Mate30 Pro',
          evaluation: 4,
          tags: [
            '全新未拆封',
            '64G',
            '不可退出',
            '外壳裂缝、变形',
            '完美使用无划痕',
            '显示色差，或轻微泛黄/亮坏点',
            '无维修情况'
          ]
        },

        {
          id: '45263958',
          deal_price: 3650,
          status: 1,
          model: 'iPhone 11',
          evaluation: 3,
          tags: [
            '无法开机或者进入桌面',
            '64G',
            '不可退出',
            '外壳无瑕疵',
            '细微划痕',
            '显示烧屏，或有透图/透字',
            '屏幕和主板皆有维修'
          ]
        },

        {
          id: '45263959',
          deal_price: 2990,
          status: 0,
          model: '华为 P30 Pro',
          evaluation: 4,
          tags: [
            '全新未拆封',
            '32G',
            '不可退出',
            '磕碰掉漆、边框磨损',
            '细微划痕',
            '显示烧屏，或有透图/透字',
            '主板维修或功能故障'
          ]
        },

        {
          id: '45263960',
          deal_price: 3620,
          status: 0,
          model: 'Nokia 8',
          evaluation: 2,
          tags: [
            '全新未拆封',
            '128G',
            '不可退出',
            '细微划痕无磕碰',
            '划伤、脱胶、小缺角',
            '显示烧屏，或有透图/透字',
            '屏幕和主板 皆有维修'
          ]
        },

        {
          id: '45263961',
          deal_price: 2300,
          status: 6,
          model: '华为 P30 Pro',
          evaluation: 2,
          tags: [
            '正常进入桌面',
            '128G',
            '可正常退出',
            '细微划痕无磕碰',
            '完美使用无划痕',
            '显示色差，或轻微泛黄/亮坏点',
            '无维修 情况'
          ]
        },

        {
          id: '45263962',
          deal_price: 3110,
          status: 4,
          model: '华为 P30 Pro',
          evaluation: 4,
          tags: [
            '正常进入桌面',
            '128G',
            '可正常退出',
            '磕碰掉漆、边框磨损',
            '碎裂、边角破损',
            '显示烧屏，或有透图/透字',
            '屏幕维 修'
          ]
        },

        {
          id: '45263963',
          deal_price: 3740,
          status: 3,
          model: '华为 P30 Pro',
          evaluation: 5,
          tags: [
            '全新未拆封',
            '32G',
            '可正常退出',
            '外壳无瑕疵',
            '划伤、脱胶、小缺角',
            '显示漏液，或闪烁/横竖线/花屏',
            '无维修情 况'
          ]
        },

        {
          id: '45263964',
          deal_price: 3260,
          status: 3,
          model: '华为 P30 Pro',
          evaluation: 2,
          tags: [
            '无法开机或者进入桌面',
            '256G',
            '可正常退出',
            '外壳裂缝、变形',
            '划伤、脱胶、小缺角',
            '显示漏液，或闪烁/横竖线/花屏',
            '主板维修或功能故障'
          ]
        },

        {
          id: '45263965',
          deal_price: 2300,
          status: 7,
          model: 'Nokia 8',
          evaluation: 3,
          tags: [
            '全新未拆封',
            '256G',
            '可正常退出',
            '外壳无瑕疵',
            '碎裂、边角破损',
            '显示色差，或轻微泛黄/亮坏点',
            '屏幕和主板皆 有维修'
          ]
        },

        {
          id: '45263966',
          deal_price: 3590,
          status: 0,
          model: 'Vivo NEX 3',
          evaluation: 3,
          tags: [
            '正常进入桌面',
            '32G',
            '可正常退出',
            '外壳无瑕疵',
            '细微划痕',
            '显示烧屏，或有透图/透字',
            '无维修情况'
          ]
        },

        {
          id: '45263967',
          deal_price: 3950,
          status: 0,
          model: '小米 10 Pro',
          evaluation: 5,
          tags: [
            '无法开机或者进入桌面',
            '64G',
            '不可退出',
            '外壳无瑕疵',
            '碎裂、边角破损',
            '显示烧屏，或有透图/透字',
            '无维修情况'
          ]
        },

        {
          id: '45263968',
          deal_price: 2930,
          status: 3,
          model: '华为 Mate30 Pro',
          evaluation: 5,
          tags: [
            '全新未拆封',
            '64G',
            '不可退出',
            '外壳无瑕疵',
            '碎裂、边角破损',
            '完美无瑕疵',
            '无维修情况'
          ]
        },

        {
          id: '45263969',
          deal_price: 2090,
          status: 6,
          model: '小米 10 Pro',
          evaluation: 3,
          tags: [
            '无法开机或者进入桌面',
            '128G',
            '可正常退出',
            '外壳无瑕疵',
            '划伤、脱胶、小缺角',
            '显示色差，或轻微泛黄/亮坏点',
            '主板维修或功能故障'
          ]
        },

        {
          id: '45263970',
          deal_price: 2150,
          status: 0,
          model: 'Nokia 8',
          evaluation: 3,
          tags: [
            '无法开机或者进入桌面',
            '128G',
            '可正常退出',
            '细微划痕无磕碰',
            '完美使用无划痕',
            '显示漏液，或闪烁/横竖线/花屏',
            '主板维修或功能故障'
          ]
        },

        {
          id: '45263971',
          deal_price: 3710,
          status: 2,
          model: '小米 10 Pro',
          evaluation: 5,
          tags: [
            '无法开机或者进入桌面',
            '32G',
            '不可退出',
            '外壳裂缝、变形',
            '完美使用无划痕',
            '显示烧屏，或有透图/透字',
            '屏幕维修'
          ]
        },

        {
          id: '45263972',
          deal_price: 3680,
          status: 6,
          model: 'Nokia 8',
          evaluation: 5,
          tags: [
            '正常进入桌面',
            '32G',
            '可正常退出',
            '外壳裂缝、变形',
            '完美使用无划痕',
            '显示烧屏，或有透图/透字',
            '屏幕和主板皆有维修'
          ]
        },

        {
          id: '45263973',
          deal_price: 3440,
          status: 6,
          model: '魅族 17 Pro',
          evaluation: 4,
          tags: [
            '正常进入桌面',
            '32G',
            '不可退出',
            '外壳裂缝、变形',
            '划伤、脱胶、小缺角',
            '显示烧屏，或有透图/透字',
            '主板维修或功能故障'
          ]
        },

        {
          id: '45263974',
          deal_price: 3800,
          status: 6,
          model: 'Vivo NEX 3',
          evaluation: 5,
          tags: [
            '无法开机或者进入桌面',
            '64G',
            '不可退出',
            '外壳裂缝、变形',
            '细微划痕',
            '显示烧屏，或有透图/透字',
            '屏幕维修'
          ]
        },

        {
          id: '45263975',
          deal_price: 3860,
          status: 0,
          model: '华为 Mate30 Pro',
          evaluation: 3,
          tags: [
            '全新未拆封',
            '128G',
            '不可退出',
            '细微划痕无磕碰',
            '划伤、脱胶、小缺角',
            '显示烧屏，或有透图/透字',
            '屏幕和主板 皆有维修'
          ]
        },

        {
          id: '45263976',
          deal_price: 2420,
          status: 6,
          model: '魅族 17 Pro',
          evaluation: 5,
          tags: [
            '正常进入桌面',
            '32G',
            '可正常退出',
            '外壳无瑕疵',
            '完美使用无划痕',
            '显示漏液，或闪烁/横竖线/花屏',
            '屏幕和主板 皆有维修'
          ]
        },

        {
          id: '45263977',
          deal_price: 3500,
          status: 4,
          model: '华为 Mate30 Pro',
          evaluation: 4,
          tags: [
            '无法开机或者进入桌面',
            '64G',
            '可正常退出',
            '磕碰掉漆、边框磨损',
            '细微划痕',
            '显示色差，或轻微泛黄/亮坏点',
            '无维修情况'
          ]
        },

        {
          id: '45263978',
          deal_price: 2720,
          status: 6,
          model: 'Nokia 8',
          evaluation: 4,
          tags: [
            '正常进入桌面',
            '128G',
            '不可退出',
            '外壳无瑕疵',
            '细微划痕',
            '显示烧屏，或有透图/透字',
            '无维修情况'
          ]
        },

        {
          id: '45263979',
          deal_price: 2030,
          status: 5,
          model: '华为 P30 Pro',
          evaluation: 2,
          tags: [
            '正常进入桌面',
            '64G',
            '不可退出',
            '细微划痕无磕碰',
            '划伤、脱胶、小缺角',
            '显示漏液，或闪烁/横竖线/花屏',
            '屏幕 维修'
          ]
        },

        {
          id: '45263980',
          deal_price: 3860,
          status: 7,
          model: '魅族 17 Pro',
          evaluation: 3,
          tags: [
            '正常进入桌面',
            '256G',
            '不可退出',
            '细微划痕无磕碰',
            '完美使用无划痕',
            '显示漏液，或闪烁/横竖线/花屏',
            '无维修情况'
          ]
        },

        {
          id: '45263981',
          deal_price: 2120,
          status: 4,
          model: 'OPPO Find X2',
          evaluation: 5,
          tags: [
            '正常进入桌面',
            '128G',
            '可正常退出',
            '外壳裂缝、变形',
            '细微划痕',
            '显示漏液，或闪烁/横竖线/花屏',
            '屏幕维修'
          ]
        },

        {
          id: '45263982',
          deal_price: 3650,
          status: 5,
          model: 'Vivo NEX 3',
          evaluation: 2,
          tags: [
            '正常进入桌面',
            '256G',
            '不可退出',
            '外壳裂缝、变形',
            '完美使用无划痕',
            '显示烧屏，或有透图/透字',
            '屏幕和主板皆 有维修'
          ]
        },

        {
          id: '45263983',
          deal_price: 2690,
          status: 0,
          model: 'Nokia 8',
          evaluation: 4,
          tags: [
            '全新未拆封',
            '64G',
            '不可退出',
            '外壳裂缝、变形',
            '细微划痕',
            '完美无瑕疵',
            '主板维修或功能故障'
          ]
        },

        {
          id: '45263984',
          deal_price: 2870,
          status: 0,
          model: '华为 P30 Pro',
          evaluation: 4,
          tags: [
            '无法开机或者进入桌面',
            '128G',
            '可正常退出',
            '磕碰掉漆、边框磨损',
            '细微划痕',
            '显示色差，或轻微泛黄/亮坏点',
            ' 主板维修或功能故障'
          ]
        },

        {
          id: '45263985',
          deal_price: 2420,
          status: 5,
          model: 'iPhone 11 Pro',
          evaluation: 5,
          tags: [
            '正常进入桌面',
            '256G',
            '不可退出',
            '外壳裂缝、变形',
            '划伤、脱胶、小缺角',
            '显示烧屏，或有透图/透字',
            '无维修情 况'
          ]
        },

        {
          id: '45263986',
          deal_price: 3140,
          status: 0,
          model: '小米 10 Pro',
          evaluation: 3,
          tags: [
            '正常进入桌面',
            '256G',
            '可正常退出',
            '外壳无瑕疵',
            '划伤、脱胶、小缺角',
            '显示烧屏，或有透图/透字',
            '主板维修或 功能故障'
          ]
        },

        {
          id: '45263987',
          deal_price: 2270,
          status: 1,
          model: 'Nokia 8',
          evaluation: 2,
          tags: [
            '全新未拆封',
            '128G',
            '不可退出',
            '外壳裂缝、变形',
            '划伤、脱胶、小缺角',
            '显示漏液，或闪烁/横竖线/花屏',
            '无维修情况'
          ]
        },

        {
          id: '45263988',
          deal_price: 2600,
          status: 4,
          model: 'Nokia 8',
          evaluation: 2,
          tags: [
            '无法开机或者进入桌面',
            '256G',
            '不可退出',
            '外壳裂缝、变形',
            '碎裂、边角破损',
            '显示色差，或轻微泛黄/亮坏点',
            ' 屏幕维修'
          ]
        },

        {
          id: '45263989',
          deal_price: 3050,
          status: 6,
          model: '魅族 17 Pro',
          evaluation: 2,
          tags: [
            '正常进入桌面',
            '128G',
            '可正常退出',
            '外壳无瑕疵',
            '细微划痕',
            '完美无瑕疵',
            '无维修情况'
          ]
        },

        {
          id: '45263990',
          deal_price: 3140,
          status: 4,
          model: 'OPPO Find X2',
          evaluation: 4,
          tags: [
            '全新未拆封',
            '32G',
            '不可退出',
            '外壳无瑕疵',
            '划伤、脱胶、小缺角',
            '显示漏液，或闪烁/横竖线/花屏',
            '主板维修或 功能故障'
          ]
        },

        {
          id: '45263991',
          deal_price: 3560,
          status: 7,
          model: '华为 P30 Pro',
          evaluation: 2,
          tags: [
            '无法开机或者进入桌面',
            '256G',
            '可正常退出',
            '磕碰掉漆、边框磨损',
            '完美使用无划痕',
            '显示色差，或轻微泛黄/亮坏 点',
            '屏幕维修'
          ]
        },

        {
          id: '45263992',
          deal_price: 2720,
          status: 5,
          model: '魅族 17 Pro',
          evaluation: 3,
          tags: [
            '正常进入桌面',
            '32G',
            '不可退出',
            '外壳裂缝、变形',
            '完美使用无划痕',
            '显示色差，或轻微泛黄/亮坏点',
            '无维修情况'
          ]
        },

        {
          id: '45263993',
          deal_price: 2060,
          status: 4,
          model: 'iPhone 11 Pro',
          evaluation: 2,
          tags: [
            '无法开机或者进入桌面',
            '32G',
            '可正常退出',
            '磕碰掉漆、边框磨损',
            '完美使用无划痕',
            '完美无瑕疵',
            '主板维修或功 能故障'
          ]
        },

        {
          id: '45263994',
          deal_price: 3110,
          status: 6,
          model: 'iPhone 11',
          evaluation: 5,
          tags: [
            '全新未拆封',
            '32G',
            '不可退出',
            '外壳裂缝、变形',
            '完美使用无划痕',
            '显示漏液，或闪烁/横竖线/花屏',
            '主板维修或 功能故障'
          ]
        },

        {
          id: '45263995',
          deal_price: 2240,
          status: 7,
          model: 'iPhone 11 Pro',
          evaluation: 5,
          tags: [
            '正常进入桌面',
            '256G',
            '不可退出',
            '细微划痕无磕碰',
            '完美使用无划痕',
            '显示漏液，或闪烁/横竖线/花屏',
            '无维修情况'
          ]
        },

        {
          id: '45263996',
          deal_price: 3710,
          status: 5,
          model: 'Vivo NEX 3',
          evaluation: 4,
          tags: [
            '无法开机或者进入桌面',
            '64G',
            '可正常退出',
            '磕碰掉漆、边框磨损',
            '碎裂、边角破损',
            '完美无瑕疵',
            '主板维修或功 能故障'
          ]
        },

        {
          id: '45263997',
          deal_price: 3590,
          status: 6,
          model: '华为 Mate30 Pro',
          evaluation: 3,
          tags: [
            '全新未拆封',
            '128G',
            '不可退出',
            '磕碰掉漆、边框磨损',
            '划伤、脱胶、小缺角',
            '显示烧屏，或有透图/透字',
            '屏幕维 修'
          ]
        },

        {
          id: '45263998',
          deal_price: 3350,
          status: 7,
          model: '小米 10 Pro',
          evaluation: 3,
          tags: [
            '正常进入桌面',
            '32G',
            '可正常退出',
            '外壳无瑕疵',
            '划伤、脱胶、小缺角',
            '显示色差，或轻微泛黄/亮坏点',
            '主板维修或功能故障'
          ]
        },

        {
          id: '45263999',
          deal_price: 2870,
          status: 4,
          model: 'OPPO Find X2',
          evaluation: 3,
          tags: [
            '全新未拆封',
            '128G',
            '不可退出',
            '磕碰掉漆、边框磨损',
            '碎裂、边角破损',
            '显示烧屏，或有透图/透字',
            '主板维修或 功能故障'
          ]
        },

        {
          id: '45264000',
          deal_price: 3650,
          status: 5,
          model: 'Vivo NEX 3',
          evaluation: 4,
          tags: [
            '全新未拆封',
            '64G',
            '不可退出',
            '外壳无瑕疵',
            '划伤、脱胶、小缺角',
            '显示色差，或轻微泛黄/亮坏点',
            '屏幕维修'
          ]
        },

        {
          id: '45264001',
          deal_price: 2930,
          status: 4,
          model: 'iPhone 11',
          evaluation: 4,
          tags: [
            '正常进入桌面',
            '32G',
            '不可退出',
            '细微划痕无磕碰',
            '划伤、脱胶、小缺角',
            '显示烧屏，或有透图/透字',
            '无维修情况'
          ]
        },

        {
          id: '45264002',
          deal_price: 3410,
          status: 4,
          model: 'Nokia 8',
          evaluation: 2,
          tags: [
            '正常进入桌面',
            '64G',
            '不可退出',
            '磕碰掉漆、边框磨损',
            '完美使用无划痕',
            '显示色差，或轻微泛黄/亮坏点',
            '主板维修或功能故障'
          ]
        },

        {
          id: '45264003',
          deal_price: 2810,
          status: 4,
          model: '华为 P30 Pro',
          evaluation: 3,
          tags: [
            '全新未拆封',
            '128G',
            '不可退出',
            '外壳无瑕疵',
            '完美使用无划痕',
            '显示漏液，或闪烁/横竖线/花屏',
            '主板维修或功能故障'
          ]
        },

        {
          id: '45264004',
          deal_price: 2300,
          status: 2,
          model: 'Vivo NEX 3',
          evaluation: 5,
          tags: [
            '无法开机或者进入桌面',
            '128G',
            '不可退出',
            '磕碰掉漆、边框磨损',
            '完美使用无划痕',
            '显示烧屏，或有透图/透字',
            ' 无维修情况'
          ]
        },

        {
          id: '45264005',
          deal_price: 2870,
          status: 7,
          model: 'iPhone 11 Pro',
          evaluation: 5,
          tags: [
            '正常进入桌面',
            '32G',
            '可正常退出',
            '细微划痕无磕碰',
            '碎裂、边角破损',
            '显示烧屏，或有透图/透字',
            '屏幕维修'
          ]
        },

        {
          id: '45264006',
          deal_price: 2330,
          status: 4,
          model: 'iPhone 11 Pro',
          evaluation: 3,
          tags: [
            '无法开机或者进入桌面',
            '64G',
            '可正常退出',
            '磕碰掉漆、边框磨损',
            '碎裂、边角破损',
            '显示漏液，或闪烁/横竖线/花 屏',
            '无维修情况'
          ]
        },

        {
          id: '45264007',
          deal_price: 2990,
          status: 4,
          model: 'Vivo NEX 3',
          evaluation: 4,
          tags: [
            '正常进入桌面',
            '256G',
            '不可退出',
            '外壳无瑕疵',
            '碎裂、边角破损',
            '显示漏液，或闪烁/横竖线/花屏',
            '屏幕维修'
          ]
        },

        {
          id: '45264008',
          deal_price: 2330,
          status: 5,
          model: 'iPhone 11 Pro',
          evaluation: 5,
          tags: [
            '正常进入桌面',
            '256G',
            '不可退出',
            '外壳裂缝、变形',
            '完美使用无划痕',
            '显示烧屏，或有透图/透字',
            '屏幕和主板皆 有维修'
          ]
        },

        {
          id: '45264009',
          deal_price: 3080,
          status: 7,
          model: 'Nokia 8',
          evaluation: 5,
          tags: [
            '正常进入桌面',
            '32G',
            '可正常退出',
            '细微划痕无磕碰',
            '碎裂、边角破损',
            '完美无瑕疵',
            '屏幕维修'
          ]
        },

        {
          id: '45264010',
          deal_price: 2420,
          status: 1,
          model: '华为 P30 Pro',
          evaluation: 5,
          tags: [
            '全新未拆封',
            '64G',
            '不可退出',
            '外壳无瑕疵',
            '划伤、脱胶、小缺角',
            '显示色差，或轻微泛黄/亮坏点',
            '屏幕和主板皆有维修'
          ]
        },

        {
          id: '45264011',
          deal_price: 3950,
          status: 3,
          model: '华为 P30 Pro',
          evaluation: 2,
          tags: [
            '无法开机或者进入桌面',
            '256G',
            '可正常退出',
            '细微划痕无磕碰',
            '细微划痕',
            '显示漏液，或闪烁/横竖线/花屏',
            '主板维修或功能故障'
          ]
        },

        {
          id: '45264012',
          deal_price: 3410,
          status: 0,
          model: '魅族 17 Pro',
          evaluation: 3,
          tags: [
            '正常进入桌面',
            '128G',
            '可正常退出',
            '细微划痕无磕碰',
            '完美使用无划痕',
            '显示色差，或轻微泛黄/亮坏点',
            '主板维 修或功能故障'
          ]
        },

        {
          id: '45264013',
          deal_price: 3440,
          status: 0,
          model: 'iPhone 11 Pro',
          evaluation: 3,
          tags: [
            '正常进入桌面',
            '256G',
            '不可退出',
            '外壳无瑕疵',
            '划伤、脱胶、小缺角',
            '显示色差，或轻微泛黄/亮坏点',
            '无维修情 况'
          ]
        },

        {
          id: '45264014',
          deal_price: 3050,
          status: 3,
          model: 'Nokia 8',
          evaluation: 2,
          tags: [
            '无法开机或者进入桌面',
            '256G',
            '可正常退出',
            '外壳无瑕疵',
            '划伤、脱胶、小缺角',
            '显示漏液，或闪烁/横竖线/花屏',
            '无维修情况'
          ]
        },

        {
          id: '45264015',
          deal_price: 2600,
          status: 0,
          model: '锤子 T1',
          evaluation: 4,
          tags: [
            '无法开机或者进入桌面',
            '64G',
            '不可退出',
            '磕碰掉漆、边框磨损',
            '划伤、脱胶、小缺角',
            '显示色差，或轻微泛黄/亮坏点',
            '无维修情况'
          ]
        },

        {
          id: '45264016',
          deal_price: 3350,
          status: 7,
          model: '小米 10 Pro',
          evaluation: 2,
          tags: [
            '全新未拆封',
            '64G',
            '不可退出',
            '外壳无瑕疵',
            '细微划痕',
            '显示漏液，或闪烁/横竖线/花屏',
            '屏幕和主板皆有维修'
          ]
        },

        {
          id: '45264017',
          deal_price: 2030,
          status: 5,
          model: 'Nokia 8',
          evaluation: 3,
          tags: [
            '正常进入桌面',
            '64G',
            '不可退出',
            '磕碰掉漆、边框磨损',
            '碎裂、边角破损',
            '显示漏液，或闪烁/横竖线/花屏',
            '无维 修情况'
          ]
        },

        {
          id: '45264018',
          deal_price: 3560,
          status: 7,
          model: '华为 Mate30 Pro',
          evaluation: 4,
          tags: [
            '全新未拆封',
            '256G',
            '不可退出',
            '磕碰掉漆、边框磨损',
            '完美使用无划痕',
            '完美无瑕疵',
            '主板维修或功能故障'
          ]
        },

        {
          id: '45264019',
          deal_price: 3860,
          status: 1,
          model: '锤子 T1',
          evaluation: 2,
          tags: [
            '全新未拆封',
            '64G',
            '可正常退出',
            '细微划痕无磕碰',
            '划伤、脱胶、小缺角',
            '显示漏液，或闪烁/横竖线/花屏',
            '屏幕 维修'
          ]
        },

        {
          id: '45264020',
          deal_price: 2600,
          status: 2,
          model: '华为 Mate30 Pro',
          evaluation: 2,
          tags: [
            '正常进入桌面',
            '128G',
            '不可退出',
            '外壳无瑕疵',
            '完美使用无划痕',
            '显示色差，或轻微泛黄/亮坏点',
            '屏幕和主板皆 有维修'
          ]
        },

        {
          id: '45264021',
          deal_price: 3170,
          status: 5,
          model: '锤子 T1',
          evaluation: 4,
          tags: [
            '全新未拆封',
            '128G',
            '不可退出',
            '磕碰掉漆、边框磨损',
            '细微划痕',
            '显示漏液，或闪烁/横竖线/花屏',
            '主板维修或功能故障'
          ]
        },

        {
          id: '45264022',
          deal_price: 2630,
          status: 5,
          model: '锤子 T1',
          evaluation: 5,
          tags: [
            '全新未拆封',
            '128G',
            '不可退出',
            '外壳无瑕疵',
            '完美使用无划痕',
            '显示漏液，或闪烁/横竖线/花屏',
            '屏幕和主板皆有维修'
          ]
        },

        {
          id: '45264023',
          deal_price: 3800,
          status: 7,
          model: 'Vivo NEX 3',
          evaluation: 4,
          tags: [
            '无法开机或者进入桌面',
            '64G',
            '可正常退出',
            '细微划痕无磕碰',
            '细微划痕',
            '完美无瑕疵',
            '主板维修或功能故障'
          ]
        },

        {
          id: '45264024',
          deal_price: 2270,
          status: 1,
          model: '锤子 T1',
          evaluation: 2,
          tags: [
            '全新未拆封',
            '64G',
            '可正常退出',
            '外壳无瑕疵',
            '划伤、脱胶、小缺角',
            '显示色差，或轻微泛黄/亮坏点',
            '无维修情况'
          ]
        },

        {
          id: '45264025',
          deal_price: 2240,
          status: 6,
          model: '魅族 17 Pro',
          evaluation: 2,
          tags: [
            '无法开机或者进入桌面',
            '64G',
            '不可退出',
            '外壳无瑕疵',
            '划伤、脱胶、小缺角',
            '完美无瑕疵',
            '主板维修或功能故障'
          ]
        },

        {
          id: '45264026',
          deal_price: 3860,
          status: 1,
          model: 'Nokia 8',
          evaluation: 2,
          tags: [
            '全新未拆封',
            '64G',
            '可正常退出',
            '细微划痕无磕碰',
            '完美使用无划痕',
            '显示烧屏，或有透图/透字',
            '屏幕维修'
          ]
        },

        {
          id: '45264027',
          deal_price: 2270,
          status: 1,
          model: '锤子 T1',
          evaluation: 2,
          tags: [
            '无法开机或者进入桌面',
            '256G',
            '不可退出',
            '外壳裂缝、变形',
            '完美使用无划痕',
            '完美无瑕疵',
            '主板维修或功能故障'
          ]
        },

        {
          id: '45264028',
          deal_price: 3020,
          status: 1,
          model: '魅族 17 Pro',
          evaluation: 5,
          tags: [
            '全新未拆封',
            '32G',
            '不可退出',
            '外壳裂缝、变形',
            '完美使用无划痕',
            '显示色差，或轻微泛黄/亮坏点',
            '屏幕和主板皆有维修'
          ]
        },

        {
          id: '45264029',
          deal_price: 2630,
          status: 0,
          model: '华为 Mate30 Pro',
          evaluation: 5,
          tags: [
            '全新未拆封',
            '128G',
            '可正常退出',
            '细微划痕无磕碰',
            '细微划痕',
            '显示漏液，或闪烁/横竖线/花屏',
            '无维修情况'
          ]
        },

        {
          id: '45264030',
          deal_price: 3980,
          status: 2,
          model: 'iPhone 11',
          evaluation: 4,
          tags: [
            '无法开机或者进入桌面',
            '128G',
            '可正常退出',
            '外壳裂缝、变形',
            '细微划痕',
            '显示漏液，或闪烁/横竖线/花屏',
            '屏幕和主板皆有维修'
          ]
        },

        {
          id: '45264031',
          deal_price: 2570,
          status: 1,
          model: 'OPPO Find X2',
          evaluation: 4,
          tags: [
            '全新未拆封',
            '256G',
            '不可退出',
            '外壳裂缝、变形',
            '碎裂、边角破损',
            '完美无瑕疵',
            '无维修情况'
          ]
        },

        {
          id: '45264032',
          deal_price: 2840,
          status: 7,
          model: '魅族 17 Pro',
          evaluation: 2,
          tags: [
            '无法开机或者进入桌面',
            '32G',
            '不可退出',
            '外壳裂缝、变形',
            '细微划痕',
            '显示色差，或轻微泛黄/亮坏点',
            '无维修情况'
          ]
        },

        {
          id: '45264033',
          deal_price: 2300,
          status: 3,
          model: 'OPPO Find X2',
          evaluation: 3,
          tags: [
            '正常进入桌面',
            '32G',
            '不可退出',
            '外壳裂缝、变形',
            '完美使用无划痕',
            '显示色差，或轻微泛黄/亮坏点',
            '屏幕和主板皆有维修'
          ]
        },

        {
          id: '45264034',
          deal_price: 2120,
          status: 0,
          model: '华为 Mate30 Pro',
          evaluation: 4,
          tags: [
            '全新未拆封',
            '128G',
            '可正常退出',
            '外壳裂缝、变形',
            '碎裂、边角破损',
            '显示烧屏，或有透图/透字',
            '主板维修或功 能故障'
          ]
        },

        {
          id: '45264035',
          deal_price: 3980,
          status: 6,
          model: 'Nokia 8',
          evaluation: 5,
          tags: [
            '无法开机或者进入桌面',
            '128G',
            '可正常退出',
            '外壳裂缝、变形',
            '完美使用无划痕',
            '显示色差，或轻微泛黄/亮坏点',
            '屏幕和主板皆有维修'
          ]
        },

        {
          id: '45264036',
          deal_price: 3170,
          status: 5,
          model: '锤子 T1',
          evaluation: 3,
          tags: [
            '正常进入桌面',
            '32G',
            '可正常退出',
            '细微划痕无磕碰',
            '划伤、脱胶、小缺角',
            '显示烧屏，或有透图/透字',
            '屏幕和主板皆有维修'
          ]
        },

        {
          id: '45264037',
          deal_price: 2360,
          status: 0,
          model: 'Vivo NEX 3',
          evaluation: 4,
          tags: [
            '全新未拆封',
            '64G',
            '不可退出',
            '外壳无瑕疵',
            '细微划痕',
            '显示烧屏，或有透图/透字',
            '无维修情况'
          ]
        },

        {
          id: '45264038',
          deal_price: 2930,
          status: 7,
          model: '小米 10 Pro',
          evaluation: 2,
          tags: [
            '全新未拆封',
            '256G',
            '不可退出',
            '外壳无瑕疵',
            '碎裂、边角破损',
            '显示色差，或轻微泛黄/亮坏点',
            '屏幕和主板皆有 维修'
          ]
        },

        {
          id: '45264039',
          deal_price: 2210,
          status: 7,
          model: 'iPhone 11 Pro',
          evaluation: 4,
          tags: [
            '无法开机或者进入桌面',
            '256G',
            '不可退出',
            '细微划痕无磕碰',
            '划伤、脱胶、小缺角',
            '显示色差，或轻微泛黄/亮坏点',
            '屏幕和主板皆有维修'
          ]
        },

        {
          id: '45264040',
          deal_price: 2780,
          status: 2,
          model: '小米 10 Pro',
          evaluation: 2,
          tags: [
            '全新未拆封',
            '128G',
            '可正常退出',
            '外壳裂缝、变形',
            '划伤、脱胶、小缺角',
            '显示烧屏，或有透图/透字',
            '主板维修 或功能故障'
          ]
        },

        {
          id: '45264041',
          deal_price: 2270,
          status: 5,
          model: '小米 10 Pro',
          evaluation: 3,
          tags: [
            '无法开机或者进入桌面',
            '64G',
            '不可退出',
            '磕碰掉漆、边框磨损',
            '划伤、脱胶、小缺角',
            '显示色差，或轻微泛黄/亮坏点',
            '屏幕和主板皆有维修'
          ]
        },

        {
          id: '45264042',
          deal_price: 2120,
          status: 0,
          model: '华为 Mate30 Pro',
          evaluation: 2,
          tags: [
            '全新未拆封',
            '32G',
            '不可退出',
            '磕碰掉漆、边框磨损',
            '完美使用无划痕',
            '完美无瑕疵',
            '主板维修或功能故障'
          ]
        },

        {
          id: '45264043',
          deal_price: 3980,
          status: 5,
          model: '小米 10 Pro',
          evaluation: 4,
          tags: [
            '正常进入桌面',
            '64G',
            '不可退出',
            '外壳裂缝、变形',
            '碎裂、边角破损',
            '显示烧屏，或有透图/透字',
            '屏幕和主板皆有维修'
          ]
        },

        {
          id: '45264044',
          deal_price: 2450,
          status: 0,
          model: 'iPhone 11',
          evaluation: 4,
          tags: [
            '全新未拆封',
            '32G',
            '不可退出',
            '磕碰掉漆、边框磨损',
            '碎裂、边角破损',
            '显示漏液，或闪烁/横竖线/花屏',
            '主板维 修或功能故障'
          ]
        },

        {
          id: '45264045',
          deal_price: 2960,
          status: 3,
          model: '华为 Mate30 Pro',
          evaluation: 5,
          tags: [
            '无法开机或者进入桌面',
            '32G',
            '不可退出',
            '磕碰掉漆、边框磨损',
            '完美使用无划痕',
            '显示色差，或轻微泛黄/亮坏点',
            '屏幕和主板皆有维修'
          ]
        },

        {
          id: '45264046',
          deal_price: 3170,
          status: 3,
          model: '华为 Mate30 Pro',
          evaluation: 2,
          tags: [
            '无法开机或者进入桌面',
            '32G',
            '可正常退出',
            '外壳无瑕疵',
            '划伤、脱胶、小缺角',
            '显示漏液，或闪烁/横竖线/花屏',
            '无维修情况'
          ]
        },

        {
          id: '45264047',
          deal_price: 2570,
          status: 5,
          model: 'iPhone 11',
          evaluation: 4,
          tags: [
            '全新未拆封',
            '128G',
            '不可退出',
            '细微划痕无磕碰',
            '完美使用无划痕',
            '显示色差，或轻微泛黄/亮坏点',
            '屏幕和主板 皆有维修'
          ]
        },

        {
          id: '45264048',
          deal_price: 3110,
          status: 7,
          model: 'OPPO Find X2',
          evaluation: 2,
          tags: [
            '无法开机或者进入桌面',
            '32G',
            '可正常退出',
            '外壳裂缝、变形',
            '划伤、脱胶、小缺角',
            '完美无瑕疵',
            '主板维修或功 能故障'
          ]
        }
      ]
    },
    lookupOrder (id) {
      this.$router.push('/order/' + id)
    }
  }
}
</script>

<style lang="stylus" scoped>
.orders {
  width: 80%;
  max-width: 1000px;
  min-width: 750px;
  margin: 0 auto;
}

.order-card {
  padding: 1rem;
  margin: 0 auto;
  // // box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  align-items: center;

  .item {
    &:not(:last-child) {
      border-right: 1px dashed #e2e3e4;
      margin-right: 10px;
    }

    text-align: center;
    line-height: 1.7;
    display: grid;
    grid-template-columns: 50px auto;
    grid-template-rows: repeat(2, 1fr);
    cursor: pointer;

    &:hover {
      .title {
        color: color-primary;
      }
    }

    .svg {
      width: 35px;
      height: 35px;
      align-self: center;
      justify-self: center;
      border-radius: 5px;
      grid-area: 1 / 1 / 3 / 2;
    }

    .title {
      text-align: left;
      padding-left: 1rem;
      font-size: 16px;
      grid-area: 1 / 2 / 2 / 4;
    }

    .text {
      padding-left: 1rem;
      text-align: left;
      font-weight: 600;
      grid-area: 2 / 2 / 3 / 4;
    }
  }
}

.my-order {
  position: relative;
  border-radius: 6px;
  box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.05);
  margin: 30px 0;
  height: 100px;
  padding: 1rem;
  display: flex;
  cursor: pointer;

  .status {
    position: absolute;
    left: 1rem;
    top: 1rem;
    font-size: small;
  }

  .price {
    width: 80px;
    height: 100%;
    color: #ffa426;
    font-size: 20px;
    margin: 0 1rem;
    display: flex;
    align-items: center;
  }

  .right {
    width: 100%;

    .tags {
      padding: 0 1rem;

      >span {
        color: #909399;
        display: inline-block;
        padding: 0.3rem 0.5rem;
        border-radius: 3px;
        background: #f1f1f1;
        font-size: small;
        margin-right: 1rem;
      }
    }
  }
}
</style>

<style lang="stylus">
.el-icon-star-on {
  margin-right: 7px;
  color: #ffa426;
}
</style>
