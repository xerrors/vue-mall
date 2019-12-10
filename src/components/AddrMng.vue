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
        <el-button type="primary" @click="createNewAddress" plain>立即创建</el-button>
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
        prop="area"
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
        <el-button type="text" v-if="scope.row.default" disabled>默认地址</el-button>
        <el-button type="text" v-else @click="handleSetDefault(scope.row)">设为默认</el-button>
        <!-- <el-button type="text" @click="handleSetDefault(scope.row)">设为默认</el-button> -->
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
  props: [ 'serverEndAddrs' ],
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
      testAddr: this.serverEndAddrs
    }
  },
  computed: {
    addresses () {
      let addrs = []
      let item
      for (var j = 0; j < this.testAddr.length; j++) {
        // 将数组形式的数组转换为字符串形式显示，可以在服务端完成
        item = this.testAddr[j]
        let tmpAddr = {}
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
      // 具有服务器后台的实现思路应该是，我向服务端发送请求，服务端处理相应之后返还心得地址
      for (var i = 0; i < this.addresses.length; i++) {
        this.addresses[i].default = false
      }
      item.default = true
      console.log(item)
    },
    createNewAddress () {
      console.log(this.newAddress)
      this.testAddr.push(this.newAddress)
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
