<template>
  <div class="modal-backdrop">
    <div class="success-modal">
      <header class="success-modal-header">
        <slot name="header">
            Success
        </slot>
        <br>
        
      </header>
      <section class="modal-body">
        <slot name="body">
        <button 
        @click="reset"
        type="button"
          class="btn-green"
        >Reset</button>
        </slot>
       </section>
    </div>
    
    </div>
</template>

<script>
export default {
    name: "SuccessModal",
    methods: {
        reset() {
          location.reload()
        }
    }
}
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
  slot {
    text-align: center;
  }
  .success-modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    width: 35%;
  }

  .success-modal-header
   {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
     text-align: center;
    padding: 15px;
  }

  

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    display: block;
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