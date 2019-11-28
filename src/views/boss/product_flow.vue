<template>
  <div>
    <pd-card v-for="info in product_infos" :key="info.id" :info="info"/>
  </div>
</template>

<script>
import PdCard from '@/components/PdCard.vue'
export default {
  components: {
    PdCard
  },
  data () {
    return {

    }
  },
  methods: {

  },
  computed: {
    product_infos () {
      // 向服务器获取商品信息
      var infos = [{
        // seller 应该只获取得到 ID，然后再向服务器获取
        id: 12138,
        seller: {
          seller_id: 12138,
          name: '黄玉川',
          avatar: 'http://src.xerrors.fun/blog/20191021/CcFV3DJYgi0B.jpg?imageslim'
        },
        date: '2019-11-29',
        model: {
          label: '华为 Mate30 Pro',
          value: 'Huawei Mate30 Pro'
        },
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
        description: '换了新款手机了，这个不想使用了，没有任何问题，打算卖掉，入手渠道:专卖店全款购买的，有发票；使用感受:功能一切正常运行流畅，大型游戏不卡顿，使用起来没有任何问题，拍照清晰，吊打全球一亿像素的手机。'
      }]
      return infos
    }
  }
}
</script>
