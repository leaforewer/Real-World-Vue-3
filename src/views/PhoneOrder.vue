<template>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
    integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
    crossorigin="anonymous"
  />

  <div class="order-form col-4 offset-4">
    <form method="POST">
      <h3>Please fill in your information</h3>
      <br />
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        required/>
        <small id="emailHelp" class="form-text text-muted"
          >We'll never share your email with anyone else.</small
        >
      </div>
      <div class="form-row">
        <div class="form-group col-md-5">
          <label for="Address">Address</label>
          <input type="text" class="form-control" id="Address"  required/>
        </div>
        <div class="form-group col-md-2">
          <label for="HouseNumber">Housenumber</label>
          <input type="text" class="form-control" id="HouseNumber" required/>
        </div>
        <div class="form-group col-md-5">
          <label for="PostCode">Postcode</label>
          <input type="text" class="form-control" id="PostCode" required/>
        </div>
      </div>
      
      <div class="form-group">
          <label for="OrderedLabel">You have ordered</label>
          <label style="float:left;" for="Title">Model</label>
          <input class="form-control" type="text" :placeholder="phone.title" readonly>
          <label style="float:left;" for="Desc">Description</label>
          <input class="form-control" type="text" :placeholder="phone.description" readonly>
          <label style="float:left;" for="Price">Price</label>
          <input class="form-control" type="text" :placeholder="phone.price" readonly>
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" required />
        <label class="form-check-label" for="exampleCheck1">I agree to accept Terms and Conditions</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import PhoneService from '@/services/PhoneService.js'
export default {
  props: ['id'],
  data() {
    return {
      phone: null,
    }
  },
  created() {
    PhoneService.getPhone(this.id)
      .then((response) => {
        this.phone = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
</script>