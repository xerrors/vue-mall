<template>
  <div>
    <pd-card v-for="info in productInfos" :key="info.id" :info="info"/>
  </div>
</template>

<script>
import PdCard from '@/components/PdCard.vue'
import { getProductInfos } from '@/utils/fakedata.js'
export default {
  components: {
    PdCard
  },
  data () {
    return {
      productInfos: getProductInfos()
    }
  }
}
</script>
