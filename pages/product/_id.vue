<template>
  <h1>{{ id }}</h1>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    }
  },
  created() {
    const id = this.$route
    console.log(id)
  },
}
</script>
