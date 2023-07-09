<template>
      <Popup>
        <Regulation>

        </Regulation>
    </Popup>
  <div class="container">
    <img class="home-image" src="https://biblioteca.intec.edu.do//templates/yootheme/cache/17/fachada-nueva-17530efb.jpeg" alt="Bliblioteca">
    <nav>
        <router-link to="/home"  class="home-button card focus">
          <span class="e-icons e-medium e-settings home-logo-options"></span>
          Ajustes
        </router-link>
        <router-link to="/appointments/create" class="home-option card focus">
          <span class="e-icons e-large e-timeline-today home-logo-options"></span>
          Reservacion
        </router-link>

        <router-link to="/appointments/list" class="home-option card focus">
          <span class="e-icons e-large e-paragraph-2 home-logo-options"></span>
          Historial
        </router-link>

        <router-link to="/appointments/regulations" class="home-option card focus">
          <span class="e-icons e-large e-page-column-one home-logo-options"></span>
          Reglamento
        </router-link>
        
        <router-link to="#" class="home-option card focus">
          <span class="e-icons e-large e-chart-3d-clustered-column home-logo-options"></span>
          Reportes
        </router-link>
    </nav>
    <router-view></router-view>
  </div>
  
</template>
<script setup>
  import Regulation from '@/modules/libraryRegulation/Regulations.vue';
  import Popup from '@/modules/Popups/Popup.vue'
</script>
<style scoped>
.container{
  border-top: 1px red solid;
}
nav{
  margin: 0%;
  width: 25%;
  height: 100%;
}
.home-image{
  float: right;
  width: 75%;
  height: 50rem;
}
.home-button{
  width: 20%;
  padding: 5px;
  margin: 1.5% 1.5% 3%;
}
.home-option{
  width: 30%;
  margin: 0% auto 10%;
  padding: 10px;
}
.card{
  background-color: #fff;
  /* border: 1px red solid; */
  text-align: center;
  display: block;
}
.home-option:last-of-type{
  margin-bottom: 0px;
}
.focus:hover{
  box-shadow: 12px 12px 15px rgba(0,0,0,0.2);
  color: red;
}
div{
  text-transform: uppercase;
  font-family: Lato;
  font-weight: 600;
  font-size: 0.8rem;
}
a{
  text-decoration: none;
  color: gray;
}
.home-logo-options{
  color: red;
  display: block;
  margin:  0px auto 20px;
}
.home-button .home-logo-options{
  margin: 0px 0px 10px 0px;
}
</style>
