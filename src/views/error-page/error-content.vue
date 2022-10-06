<template>
  <div class="error-page">
    <div class="content-con">
      <img :src="src" :alt="code">
      <div class="text-con">
        <h4>{{ code }}</h4>
        <h5>{{ desc }}</h5>
      </div>
      <back-btn-group class="back-btn-group" />
    </div>
  </div>
</template>

<script>
import './error.less'
import BackBtnGroup from './back-btn-group.vue'
export default {
  name: 'ErrorContent',
  components: {
    BackBtnGroup,
  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    code: String,
    // eslint-disable-next-line vue/require-default-prop
    desc: String,
    // eslint-disable-next-line vue/require-default-prop
    src: String,
  },
}
</script>
