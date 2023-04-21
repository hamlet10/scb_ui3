<template>
    <nav>
        <router-link :to="{name:'home'}">Inicio</router-link>
        <p class="before-link"> / </p>
        <router-link :to="{name:'create'}">Reservacion</router-link>
        <p class="before-link"> / </p>
        <router-link :to="{name:'list'}">Historial de reservaciones</router-link>
        <p class="before-link"> / </p>
        <router-link :to="{name:'regulations'}">Reglamento</router-link>
        <p class="before-link"> / </p>
        <router-link :to="{name:'reports'}">Reportes</router-link>
        <p class="before-link"> / </p>
        <a class="logout" href="#" v-on:click="clickLogout">Cerrar seccion</a>
    </nav>
    <router-view></router-view>
</template>

<script setup>
import router from "@/router";

    function clickLogout(){
        localStorage.setItem('isAuthenticated', false)
        router.push('/login')
    }
</script>

<style scoped>
nav {
    justify-content: left;
    display: flex;
    padding: 20px;
    margin-top: 10px;
    margin-bottom: 10px; 
    background-color: #000;
}
.before-link{
    color: #fff;
    margin: 0px 20px 0px 20px;
}
nav a {
    font: 0.8em sans-serif;
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    font: 16px Roboto;
}
nav a:hover{
  color: #960505;
  text-decoration: underline;
  font-weight: bold;
}
nav a.router-link-exact-active {
  font-weight: bold;
  color: #960505;
}
.logout{
    float: right;
}
</style>