<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <reaction-timer />
  </div>
</template>

<script>
import ReactionTimer from '../components/ReactionTimer.vue'
// @ is an alias to /src

export default {
  components: { ReactionTimer },
  name: 'Home',

}
</script>
