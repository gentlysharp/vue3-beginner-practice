<template>
  <h1>Job Detils</h1>
  <div>
    The Job Id is {{id}}
  </div>  
</template>

<script>
// router 에서 props로 설정이 되어있으므로, 다음과 같이 설정할 수 있다.
export default {
  props:{
    id:String
  },
}
</script>

<style>

</style>