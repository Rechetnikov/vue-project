<template>
  <div class="container">
    <div class="form-group">
      <label class="form_label">E-mail</label>
      <input 
        class="form-control w-25" 
        v-model.trim.lazy="$v.name.$model" 
        :class="{'is-invalid': $v.name.$error }" 
      />
      <div class='my-3 w-25' v-if="$v.name.$dirty">
        <div class="alert alert-danger" v-if="!$v.name.required">Field is required</div>
        <div class="alert alert-danger" v-if="!$v.name.email">Invalid email</div>
      </div>      
    </div>
    <div class="form-group">
      <label class="form_label">Password</label>
      <input 
      type="password"
        class="form-control w-25" 
        v-model.trim.lazy="$v.password.$model" 
        :class="{'is-invalid': $v.password.$error }" 
      />
      <div class='my-3 w-25' v-if="$v.password.$dirty">
        <div class="alert alert-danger" v-if="!$v.password.required">Field is required</div>
        <div class="alert alert-danger" v-if="!$v.password.minLength">Field must have at least {{$v.password.$params.minLength.min}} characters.</div>
      </div>
    </div>
    <div class="form-group">
      <label class="form_label">Confirm password</label>
      <input 
      type="password"
        class="form-control w-25" 
        v-model.trim.lazy="$v.confirm.$model" 
        :class="{'is-invalid': $v.confirm.$error }" 
      />
      <div class='my-3 w-25' v-if="$v.confirm.$dirty">
        <div class="alert alert-danger" v-if="!$v.confirm.required">Field is required</div>
        <div class="alert alert-danger" v-if="!$v.confirm.sameAsPassword">Passwords must be identical.</div>
      </div>
    </div>    
  </div>
</template>

<script>
  import {required, email, minLength, sameAs} from 'vuelidate/lib/validators'
  export default {
    data() {
      return {
        name: '',
        password: '',
        confirm: ''
      }
    },
    validations: {
      name: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(8)
      },
      confirm: {
        required,
        sameAsPassword: sameAs('password')
      }
    },
  }
</script>