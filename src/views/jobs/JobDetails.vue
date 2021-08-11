<template>
  <h1>Job Detils</h1>
  <div>
    The Job Id is {{route.params.id}}
  </div>  
</template>

<script>
import { useRoute } from 'vue-router'
// import { ref, watch } from 'vue'
export default {
  setup(){
    const route = useRoute()
    // id에 따라 비동기 요청을 원하게 된다면 아래 코드와 같이 watch를 사용하여 
    // 구현할 수 있다. 
    // const userData = ref()

    // watch(
    //   () => route.params.id,
    //   async newId => {
    //     userData.value = await fetchUser(newId)
    //   }
    // )
    

    return {
      route
    }
  }
}
</script>

<style>

</style>