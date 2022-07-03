<template>
  <div>
    <b-navbar class="navbar" toggleable="lg" type="dark">
      <b-navbar-brand to="/">Filmes Legais</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/secret">Secret</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-button squared style="background-color: #004166;" @click="search">Pesquisar
          </b-button>
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
      loggedIn: false,
      currentUrl: "",
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
    search(){
      this.$router.push('/search')
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
.navbar {
  background-color: #004166;;
}
</style>
