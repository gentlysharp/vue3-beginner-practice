<template>
  <h1>Reaction Timer</h1>
  <button @click="start" :disabled="isPlaying">play</button>

  <block v-if="isPlaying" :deley="deley" @end="endGame"/>
  <results v-if="showResults" :score="score" />
</template>

<script>
import Block from './Block.vue';
import { ref } from '@vue/reactivity'
import Results from './Results.vue';
export default {
  components: { Block, Results },
  setup(){
    let isPlaying = ref(false);
    let deley = ref(null);
    let score = ref(null);
    let showResults = ref(false);

    function start(){
      isPlaying.value = !isPlaying.value;
      deley.value += 1000 + Math.random() * 5000
    }

    function endGame(reactionTime){
      console.log("end Game",reactionTime );
      score.value = reactionTime
      isPlaying.value = false

      showResults.value = true
    }


    return {
      start,
      isPlaying,
      deley,
      endGame,
      showResults,
      score
    }


  }
}
</script>

<style>

</style>