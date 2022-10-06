<template>
  <error-content code="500" desc="Oh~~鬼知道服务器经历了什么~" :src="src" />
</template>

<script>
import error404 from '@/assets/images/error-page/error-500.svg'
import ErrorContent from './error-content.vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Error500',
  components: {
    ErrorContent,
  },
  data() {
    return {
      src: error404,
    }
  },
  created() {
    console.log('11111111111111111111')
  },
}
</script>
