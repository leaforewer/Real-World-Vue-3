<template>
  <h2>Order Now!</h2>
<div class="center">
  <router-link class="phone-link" :to="{name: 'PhoneOrder', params: {id: phone.id}}">
  <div class="phone-card">
    <h1>{{ phone.title }}</h1>
    <img :src="phone.image" alt="" width="200" height="200">
    <p>Details:</p>
    <span>{{ phone.description }} </span>
    <p>Price: €{{ phone.price }}</p>
  </div>
  </router-link>
</div>
</template>

<script>
import PhoneService from '@/services/PhoneService.js'
export default {
    props: ['id'],
  data() {
    return {
      phone: null
      
    }
  },
  created() {
    PhoneService.getPhone(this.id)
      .then(response => {
        this.phone = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
<style scoped>
.btn{
  width: 120px;
  height: 40px;
  background: rgb(5, 146, 189);
  border: none;
  border-radius: 10%;
  margin-bottom: 2em;
}
.btn:hover{
  background: rgb(5, 99, 128);
}
.phone-card{
  width: 250px;
  border: 1px solid #39495c;
  margin: 2em;
}
.center{
  display: flex;
  justify-content: center;
}
.phone-link{
  color: #2c3e50;
  text-decoration: none;
  }
</style>