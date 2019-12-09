<template>
  <div>
    <el-form ref="newAddress" :model="newAddress" label-width="80px">
      <el-form-item label="收件人" required>
        <el-input v-model="newAddress.receiver"></el-input>
      </el-form-item>
      <el-form-item label="地址" required>
        <area-select type='all' :level='2' v-model="newAddress.area" :data="pcaa"></area-select>
      </el-form-item>
      <el-form-item label="详细地址" required>
        <el-input
          type="textarea"
          autosize
          placeholder="具体到门牌号"
          v-model="newAddress.address">
        </el-input>
      </el-form-item>
      <el-form-item label="邮编" required>
        <el-input v-model="newAddress.code"></el-input>
      </el-form-item>
      <el-form-item label="联系方式" required>
        <el-input v-model="newAddress.phone"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="createNewAddress">立即创建</el-button>
      </el-form-item>
    </el-form>
    <el-table
      class="area-table"
      :data="addresses"
      border
      style="width: 100%">
      <el-table-column
        prop="receiver"
        label="收货人"
        width="80">
      </el-table-column>
      <el-table-column
        prop="area.toString()"
        label="所在地区">
      </el-table-column>
      <el-table-column
        prop="address"
        label="详细地址">
      </el-table-column>
      <el-table-column
        prop="code"
        width="80"
        label="邮编">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="手机"
        width="130">
      </el-table-column>
      <el-table-column
        prop="address"
        label="操作"
        width="120">
        <template slot-scope="scope">
        <el-button @click="handleRemove(scope.row)" type="text">删除</el-button>
        <el-button type="text" @click="handleSetDeafult(scope.row)">设为默认</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { pca, pcaa } from 'area-data' // v5 or higher
import { AreaSelect } from 'vue-area-linkage'
import 'vue-area-linkage/dist/index.css' // v2 or higher
export default {
  components: { AreaSelect },
  data () {
    return {
      pcaa: pcaa,
      pca: pca,
      newAddress: {
        receiver: '',
        area: '',
        address: '',
        code: '',
        phone: '',
        default: false
      },
      testAddr: [
        {
          receiver: '黄玉川',
          area: [
            { 320000: '江苏省' },
            { 320200: '无锡市' },
            { 320211: '滨湖区' }
          ],
          address: '蠡湖大道1800号江南大学',
          code: '214122',
          phone: '17681352667',
          default: true
        }
      ]
    }
  },
  computed: {
    addresses () {
      let addrs = []
      let addr
      let item
      for (addr in this.testAddr) {
        let tmpAddr = {}
        for (item in addr) {
          tmpAddr.receiver = item.receiver
          tmpAddr.address = item.address
          tmpAddr.code = item.code
          tmpAddr.phone = item.phone
          tmpAddr.default = item.default
          let tmpArea = ''
          for (var i = 0; i < item.area.length; i++) {
            tmpArea = tmpArea + Object.values(item.area[i])[0]
          }
          tmpAddr.area = tmpArea
        }
        addrs.push(tmpAddr)
      }
      return addrs
    }
  },
  methods: {
    handleRemove (item) {
      console.log(item)
    },
    handleSetDefault (item) {
      console.log(item)
    },
    createNewAddress () {
      console.log(this.newAddress)
    }
  }
}
</script>

<style lang="stylus">
// 修改组件的样式
.area-selectable-list .area-select-option.selected
  color color-primary
.area-select .area-selected-trigger
  line-height 100%
</style>
