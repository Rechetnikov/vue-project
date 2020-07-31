<template>
  <div class="container">
    <div class="form-group">
      <label class="form_label">Name</label>
      <input 
        class="form-control" 
        v-model.trim.lazy="$v.name.$model" 
        :class="{'is-invalid': $v.name.$error }" 
      />
    </div>
    <div v-if="$v.name.$dirty">
      <div class="alert alert-danger" v-if="!$v.name.required">Field is required</div>
      <div class="alert alert-danger" v-if="!$v.name.email">Invalid email</div>
    </div>
  </div>
</template>

<script>
  import {required, email} from 'vuelidate/lib/validators'
  export default {
    data() {
      return {
        name: ''
      }
    },
    validations: {
      name: {
        required,
        email
      }
    },
  }
</script>