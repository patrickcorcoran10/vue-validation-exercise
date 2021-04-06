<template>
<div>
    <form @submit.prevent="submit">
  <div class="form-group" :class="{ 'form-group--error': $v.firstName.$error, 'form-group--error':$v.lastName.$error, 'form-group--error':$v.email.$error, 'form-group--error':$v.amount.$error }">
    <label class="form__label">First Name: </label>
    <input class="form__input" v-model.trim="$v.firstName.$model"/>
    <br>
    <label class="form__label">Last Name: </label>
    <input class="form__input" v-model.trim="$v.lastName.$model"/>
    <br>
    <label class="form__label">Email: </label>
    <input class="form__input" type="email" v-model.trim="$v.email.$model"/>
    <br>
    <label class="form__label" >Amount: </label>
    <input class="form__input" placeholder="$0.00" v-model.trim="$v.amount.$model" type="number" step=".01"/>
  </div>
  <div class="error" v-if="!$v.firstName.required">First Name is required</div>
  <div class="error" v-if="!$v.firstName.maxLength">First Name must have at least {{$v.firstName.$params.maxLength.max}} letters.</div>
  <div class="error" v-if="!$v.lastName.required">Last Name is required</div>
  <div class="error" v-if="!$v.lastName.maxLength">Last Name must have at least {{$v.lastName.$params.maxLength.max}} letters.</div>
  <div class="error" v-if="!$v.email.email">Email must be in valid format.</div>
  <div class="error" v-if="!$v.amount.required">Amount is required</div>
  <div class="error" v-if="!$v.amount.minValue">Amount must be a number greater than {{$v.amount.$params.minValue.min}}</div>
  <div class="error" v-if="!$v.amount.decimal">Please include the decimals</div>
  <div class="error" v-if="!$v.amount.decimal">Please include the decimals</div>

  <button class="button" type="submit" :disabled="submitStatus === 'PENDING'">Review Payment Details</button>
  <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
  <p class="typo__p" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
  <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
</form>
<ReviewModal 
  v-show="modalOn"
  @close="closeModal"
  :firstName="firstName"
  :lastName="lastName"
  :email="email"
  :amount="amount"
/>
<SuccessModal
        v-show="successModal"
        @close="closeSuccessModal"
    />
</div>
</template>

<script>
import { required, maxLength, email, minValue, decimal } from 'vuelidate/lib/validators'
import ReviewModal from './Modal'
import SuccessModal from './SuccessModal'

export default {
  name:"Form",
  components: {
    ReviewModal,
    SuccessModal
  },
  data() {
    return {
      successModal: false,
      modalOn: false,
      submitStatus: null,
      firstName: '',
      lastName: '',
      email: '',
      amount: '',
    }
  },
  validations: {
    firstName: {
      required,
      maxLength: maxLength(20)
    },
    lastName: {
        required,
        maxLength: maxLength(20)
    },
    email: {
        email
    },
    amount: {
        required,
        decimal,
        minValue: minValue(.00)
    }
  },
  methods: {
    submit() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
          
        }, 500)
        setTimeout(() => {
          this.propsData.firstName = this.firstName
          this.propsData.lastName = this.lastName
          this.propsData.email = this.email
          this.propsData.amount = this.amount  
          this.modalOn = true
        }, 750)
      }
      
    },
    closeModal() {
      this.modalOn = false;
    },
     close() {
        this.$emit('close');
      },
      
      closeSuccessModal() {
      this.successModal = false;
    }
  }
}
</script>

