<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand to="/">Filmes Legais</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/secret">Secret</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-form class="mr-2">
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown v-if="loggedIn" right>
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item @click="logout">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item v-else href="/login">Login</b-nav-item>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>

export default {
  name: 'Navbar',
  data () {
    return {
      loggedIn: false
    }
  },
  mounted () {
    this.isLoggedIn()
  },
  methods: {
    logout () {
      this.$fire.auth.signOut().then(() => {
        this.$router.push('/')
        this.isLoggedIn = false
      })
    },
    isLoggedIn () {
      this.$fire.auth.onAuthStateChanged((user) => {
        if (user) {
          this.loggedIn = true
        } else {
          this.loggedIn = false
        }
      })
    }
  }
}
</script>

<style scoped>
</style>
