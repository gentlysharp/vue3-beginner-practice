<template>

  <div v-if="showBlock" class="block" @click="stopTimer">
    click me
    <br />
    deleying : {{deley}}
  </div>
</template>

<script>
import {onMounted, ref, toRefs} from 'vue'
export default {
  props:{
    deley:String
  },

  setup(props,{ emit }){
    const {deley} = toRefs(props);

    let showBlock = ref(false)
    let timer = ref(null)
    let reactionTime = ref(0)


    function startTimer(){
      console.log('startTimer',timer);
      timer = setInterval(() => {
        reactionTime.value += 10
      },10)
    }

    function stopTimer(){
      console.log('stopTimer',reactionTime.value); 
      clearInterval(timer)
      emit('end',reactionTime.value)
    }


    onMounted(() => {

      console.log(emit);

      setTimeout(() => {
        showBlock.value = true
        startTimer()
      },deley.value)
    })

    return {
      showBlock,
      startTimer,
      stopTimer
    }
  }
}
</script>

<style>
  .block{
    width:400px;
    border-radius: 20px;
    background-color: #0faf87;
    color:#fff;
    text-align:center;
    font-weight: 700;
    padding: 100px 0;
    margin: 40px auto;
  }
</style>