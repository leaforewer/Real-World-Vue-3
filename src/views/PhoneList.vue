<template>
  <h1>Good Quality Phones!</h1>

  <div class="phones">
    <PhoneCard v-for="phone in phones" :key="phone.id" :phone="phone" />
  </div>
</template>

<script>
import PhoneCard from '@/components/PhoneCard.vue'
import PhoneService from '@/services/PhoneService.js'

export default {
  name: 'PhoneList',
  components: {
    PhoneCard,
  },
  data() {
    return {
      phones: null,
    }
  },
  created() {
   PhoneService.getPhones()
      .then(response => {
        this.phones = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style scoped>
.phones {
  display: flex;
  justify-content: center;
  padding: 1.5em;
}

</style>