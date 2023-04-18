<template>
  <div class="login-container">
    <h1>Acceso estudiantil a reservacion de cubiculos</h1>
    <!-- <font-awesome-icon icon="fa-solid fa-user-secret" /> -->
    <div class="login">
      <h3>
        <font-awesome-icon :icon="['fa', 'lock']" /> Iniciar Sesion

      </h3>
      <div class="login-content">
        <!-- action="/" method="post" -->
        <form onsubmit="return false;">
          <div class="control">
            <label for="ID">ID</label>
            <input class="light-border" :v-model="txtID" id="txtID" name="txtID" type="text" value="" />
            <div v-if="errors.length" class="e-input-group e-error" data-required-message="hello"></div>
          </div>
          <div class="control">
            <label for="PIN_Contrase_a">PIN/Contrase&#241;a</label>
            <input class="light-border" :v-model="txtUserPass" id="txtUserPass" name="txtUserPass" type="password" />
            <div v-if="errors.length" class="e-input-group e-error">
               
              <ul>
                <li v-for="error in errors">{{ error }}</li>
              </ul>

            </div>
          </div>
          <router-link class="router--link" :to="{ name: 'recover-pass' }">Olvide mi contrase&#241a?</router-link>
          <button @click="Authenticate" class="bg-black no-border button-square"><font-awesome-icon
              :icon="['fa', 'circle-arrow-right']" />
            Acceder
          </button>
          <!-- <p v-if="errors.length">
          <ul>
            <li v-for="error in errors">{{ error }}</li>
          </ul>
          </p> -->

        </form>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import router from "@/router";
import {FormValidator, FormValidatorModel} from '@syncfusion/ej2-inputs';

name: 'LogIn'
const errors = ref([]);
// function chekForm(e) {
//   if (!txtID) {
//     errors.value.push("Matricula Requerida")
//   } else {
//     return true
//   }
//   if (!txtUserPass) {
//     errors.value.push("Contraseña Requerida")
//   } else {
//     return true
//   }
//   e.preventDefault();
// }
// export default {

const user = {
  'id': '1059560',
  'password': 'Proyecto2023'
}

function Authenticate() {

  if (!txtID.value) {
    errors.value.push('Matricula Requerida')
    console.log(errors)
  }
  if (!txtUserPass) {
    errors.value.push('Contraseña Requerida')
    console.log(errors)
  }
  if (user.id == txtID.value) {
    if (user.password == txtUserPass.value) {
      localStorage.setItem('isAuthenticated', true)
      router.push('/appointments')
    } else {
      errors.value.push("Usuario y/o Contraseña Incorrecta")
    }
  } else {
    errors.value.push("Usuario y/o Contraseña Incorrecta")
    localStorage.setItem('isAuthenticated', false)
    console.log(errors)
  }
  // localStorage.setItem('isAuthenticated', true)
  // router.push('/appointments')

}
// return{
//   Authenticated
// };
  // data (){
  //   return{
  //     Authenticated: false
  //   }
  // },
  // mounted(){
  //   if(localStorage.isAuthenticated){
  //     this.Authenticated = localStorage.isAuthenticated
  //   }else{
  //     localStorage.setItem('isAuthenticated', false)
  //   }
  // },
  // watch:{
  //   Authenticated(newValue){
  //     localStorage.isAuthenticated = newValue
  //   }
  // },
  // methods: {
  //   Authenticate (){
  //     localStorage.setItem('isAuthenticated', true)
  //     this.$router.push('/appointments')
  //   }
  // }
// }
</script>



<style scoped>
.router--link {
  margin-right: 30px;
}

.login-container h1 {
  background-color: #F5F5F5;
  font-size: 1.3em;
  font-weight: 600;
  text-align: center;
}

.login {
  width: 350px;
  margin: 0 auto;
  margin-top: 20px;
}

.login h3 {
  padding: 5px;
  background-color: #DB332C;
  color: white;
  font-weight: 400;
  text-align: center;
}

/* 
.login a {
  color: red;
} */
.login-content {
  text-align: center;
  padding: 10px;
  line-height: 20px;
  background-color: #F5F5F5;
  padding: 10px;
}

.control {
  text-align: left;
}

.control input {
  margin: 5px;
  padding: 5px;
}

.control label {
  width: 35%;
  display: inline-block;
}

.bg-black {
  background-color: #343434;
  color: white;
}

.no-border {
  border: none;
}

.bunton-square {
  padding: 5px 10px;
}
</style>