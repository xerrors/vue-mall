<template>
  <div>
    <el-form ref="newAddress" label-position='left' :model="newAddress" label-width="80px">
      <el-form-item label="收件人" required>
        <el-input v-model="newAddress.receiver"></el-input>
      </el-form-item>
      <el-form-item label="地址" required>
        <area-select type='text' :level='2' v-model="newAddress.area" :data="pcaa"></area-select>
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
        <el-button type="primary" @click="createNewAddress" plain>创建</el-button>
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
        prop="tel"
        label="手机"
        width="130">
      </el-table-column>
      <el-table-column
        prop="address"
        label="操作"
        width="120">
        <template slot-scope="scope">
        <el-button @click="handleRemove(scope.row.addr_id)" type="text">删除</el-button>
        <el-button type="text" v-if="scope.row.default" disabled>默认地址</el-button>
        <el-button type="text" v-else @click="handleSetDefault(scope.row)">设为默认</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { pca, pcaa } from 'area-data' // v5 or higher
import { AreaSelect } from 'vue-area-linkage'
import 'vue-area-linkage/dist/index.css' // v2 or higher
import { addAddr, delAddr, setDefault, getInfo } from '@/api/user'
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
      }
    }
  },
  computed: {
    addresses () {
      if (localStorage.addresses) {
        return JSON.parse(localStorage.addresses)
      }
      return []
    }
  },
  methods: {
    handleRemove (item) {
      console.log(item)
      return new Promise((resolve, reject) => {
        delAddr(item).then(res => {
          this.getInfo()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    handleSetDefault (item) {
      // 具有服务器后台的实现思路应该是，我向服务端发送请求，服务端处理相应之后返还新的地址
      return new Promise((resolve, reject) => {
        setDefault(item).then(res => {
          getInfo()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 添加新的收货地址
    createNewAddress () {
      this.newAddress.area = this.newAddress.area.join('')
      console.log(this.newAddress)
      return new Promise((resolve, reject) => {
        addAddr(this.newAddress).then(res => {
          this.$store.dispatch('GetInfo')
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    refrashAddr (addr) {
      this.newAddress = {
        receiver: '',
        area: '',
        address: '',
        code: '',
        phone: '',
        default: false
      }
      // TODO: 这里还要根据API进行修改
      localStorage.addresses = addr
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
