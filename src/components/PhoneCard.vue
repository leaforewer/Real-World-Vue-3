<template> 

  <router-link class="event-link" :to="{name: 'PhoneDetails', params: {id: phone.id}}">
    <div class="event-card">
      <!-- Display event data -->
      <img :src="phone.image" alt="" width="200" height="200">
      <br>
      <h4>{{ phone.title }}</h4>
      <p>€ {{phone.price}}</p>
      <span>Click for more Details</span>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'PhoneCard',
  props: {
    phone: Object,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  margin: 1.5em;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.event-link{
  color: #2c3e50;
  text-decoration: none;
  }
</style>
