<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>

  <form @submit.prevent="onSubmit" class="m-3">
    <div class="mb-3 row">
      <label for="" class="col-sm-2 col-form-label"> Username </label>
      <div class="col-sm-10">
        <input type="text" class="form-control" v-model="user.username" />
      </div>
    </div>
    <div class="mb-3 row">
      <label for="" class="col-sm-2 col-form-label"> Password </label>
      <div class="col-sm-10">
        <input type="password" class="form-control" v-model="user.password" />
      </div>
    </div>
   
   <div class="row mb-3">
      <label for="" class="col-form-label col-sm-2">Positions</label>
      <div class="col-sm-10">
        <select name="" id="" class="form-select" v-model="user.position">
          <option disabled value="">Select Your Position</option>
          <option v-for="(position,i) in positions" :key="'position'+i" :value="position">{{position}}</option>
        </select>
      </div>
    </div>
    
    <!-- <div class="col-sm-2 m-2">
      <div class="form-check">
        <input type="checkbox" id="check1" class="form-check-input">
        <label for="check1" class="form-check-label">Keep Login</label>
      </div>
    </div> -->
    
    <div class="col-auto">
      <button type="submit" class="btn btn-primary mb-3">Register</button>
    </div>
  
  </form>

  <div class="row m-3">
    <div class="col-sm-3" v-for="(u, i) in users" :key="'user'+i">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{u.username}}</h5>
          <p class="card-text">{{u.position}}</p>
        </div>
        <button class="btn btn-secondary m-3" @click="removeUser(i)">Remove User</button>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity'

export default {
  name: 'Home',
  setup(){
    let users = ref([{username:"first",password:"first",position:'developer'}]);
    let positions = ref(['developer','designer','manager']);
    const user = reactive({
      username:'',
      password:'',
      position:''
    });

    function onSubmit(e){
      if(!users.value.find(u => u.username === user.username)){
        users.value.push({...user});
      } else {
        alert("username is already in used")
      }
      user.username = ''
      user.password = ''
      user.position = ''
    }

    function removeUser(index){
      if(index > -1){
        users.value = users.value.filter((u,i) => i !== index);
      } 
    }

    return {
      user,
      users,
      positions,
      onSubmit,
      removeUser
    }
  }
}
</script>
