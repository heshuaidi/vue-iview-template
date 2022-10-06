<template>
  <div>
    <h1>main</h1>
    <div id="nav">
      <button @click="jumpTo('/500')">500 page</button> |
      <button @click="jumpTo('/401')">401 page</button> |
      <button @click="jumpTo('/layout')">layout page</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  methods: {
    jumpTo(path) {
      this.$router.replace(path)
    },
  },
}
</script>

<style>

</style>
