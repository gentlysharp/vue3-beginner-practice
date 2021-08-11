<template>
  <h1>Jobs</h1>  
   <div class="row m-3">
    <div class="col-sm-3 mb-3" v-for="(job, i) in jobs" :key="'jobs'+i">
       <router-link :to="{name: 'JobDetails',params:{id:job.id}}">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{job.title}}</h5>
            <p class="card-text">{{job.details}}</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  setup(){
    const jobs = ref([
      {title: 'Designer', id:1,details:'lorem'},
      {title: 'Backend Developer', id:2,details:'lorem'},
      {title: 'Frontend Deveploer', id:3,details:'lorem'},
    ])

    return {
      jobs
    }
  }
}
</script>

<style>

</style>