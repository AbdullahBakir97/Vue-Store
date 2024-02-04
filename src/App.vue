<template>
  <header>

    <Navbar />
    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script >
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';

export default {
        name: 'App',
        components:{
        Navbar
        }
    }

</script>