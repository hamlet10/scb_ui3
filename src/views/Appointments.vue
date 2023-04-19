<template>
    <nav>
        <div class="column">
            <router-link :to="{name:'create'}">Reservacion</router-link>
        </div>
        <p class="before-link"> / </p>
        <div class="column">
            <router-link :to="{name:'list'}">Historial de reservaciones</router-link>
        </div>
    </nav>
    <router-view></router-view>
</template>
<style scoped>
nav {
    justify-content: left;
    display: flex;
    padding: 20px;
    margin-top: 15px;
    margin-bottom: 15px;
    background-color: #000;
}
.column{
}
.before-link{
    box-sizing: border-box;
    display: block;
    color: #fff;
    margin: 0px 20px 0px 20px;
}
nav a {
    font: 0.8em sans-serif;
    color: #fff;
    display: block;
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
</style>