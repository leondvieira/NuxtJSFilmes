<template>
  <div class="login">
    <h3>Login</h3>
    <form @submit.prevent="login">
      <div class="login">
        <b-input type="text" placeholder="login" v-model="email">
        </b-input>
      </div>
      <div class="password">
        <b-input type="password" placeholder="password" v-model="password">
        </b-input>
      </div>
      <b-button @click="login" variant="primary">Login</b-button>
    </form>
    <div class="error" v-if="error">{{ error.message }}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    login () {
      this.$fire.auth.signInWithEmailAndPassword(
        this.email,
        this.password
      ).then((data) => {
        this.$router.replace({ name: 'favorites' })
      }).catch((error) => {
        this.error = error
      })
    }
  }
}
</script>

<style  scoped>
.login {
  margin-top: 50px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
div {
  color: inherit;
}
form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
input {
  width: 400px;
  padding: 30px;
  margin: 20px;
  font-size: 21px;
}
button {
  width: 400px;
  height: 75px;
  font-size: 100%;
}
.error {
  color: red;
}
</style>
