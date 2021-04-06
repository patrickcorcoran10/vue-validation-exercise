<template>
<div>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
            <!-- Here is some filters which can be referenced in main.js -->
            Thank you {{firstName | upperFirstChar}} {{lastName | upperFirstChar}}
        </slot>
      </header>

      <section class="modal-body">
        <slot name="body">
            <!-- Here is some filters which can be referenced in main.js -->
          <p>Please review your purchase of ${{amount | toCurrency}}</p>
          <!-- Here's the mailto: trick. -->
          <a :href="'mailto:' + email" >{{email}}</a>
        </slot>
       </section>
      <footer class="modal-footer">
        <slot name="footer">
        </slot>
        <button
          @click="submitPayment"
          type="button"
          class="btn-green"
        >Submit Payment</button>
        <br>
        <button
          type="button"
          class="btn-green"
          @click="back"
        >
          Back
        </button>
      </footer>
    </div>
  </div>
  <SuccessModal v-show="modalOn"/>
    </div>
</template>

<script>
import SuccessModal from './SuccessModal'
  export default {
    name: 'ReviewPage',
    components: {
      SuccessModal
    },
    data: () => {
      return {
        modalOn: false
      }
    },
    props: ["firstName", "lastName", "email", "amount"],  
    methods: {
      back() {
        this.$emit('close');
      },
      submitPayment() {
          console.log("success")
          this.modalOn = true
      },
    
    },
  };
</script>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }
</style>