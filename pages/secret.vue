<template>
  <div>
    <h1>This is a secret info</h1>
  </div>
</template>

<script>
export default {
  name: 'SecretPage',
  beforeCreate () {
    const user = this.$fire.auth.currentUser
    if (!user) {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
