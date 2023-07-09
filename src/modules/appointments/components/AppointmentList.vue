<template>
    <div class="list">
      <input type="text" v-model="busqueda" placeholder="Buscar por Id" />
    </div>
    <div class="list">
    <table>
        <tr>
            <th>Fecha</th>
            <th>ID Estudiante</th>
            <th>Cubiculo</th>
            <th>Estado</th>
            <th>Opciones</th>
        </tr>
        <tr v-for="post in registrosFiltrados" :key="post.id">
            <td>{{ post.dateTime }}</td>
            <td>{{ post.studentId }}</td>
            <td>{{ post.roomId }}</td>
            <td>
                <p v-if="post.status != 1">Aprovechada</p>
                <p v-else>Cancelada</p>
            </td>
            <td v-if="post.status != 1">
                <button class="button-cancel" v-on:click="$event =>clickCancel(post)">Cancelar</button>
            </td>
        </tr>
    </table>
</div>
  </template>
  
  <script>
  import PostAppoiments from './services/PostAppoiments';

    export default {
        data() {
        return {
            busqueda: '',
            registros: []
        };
        },
        computed: {
        registrosFiltrados() {
            if (this.busqueda) {
            return this.registros.filter(registro =>
                registro.studentId === parseInt(this.busqueda)
            );
            } else {
            return this.registros;
            }
        },
    },
    methods:{
        clickCancel(post){
            let service = new PostAppoiments()
            service.fetchAll()
            post.status = 1
            service.updateStatusAppointment(post)
            console.log(post.status)
    }
    },
    mounted() {

        fetch('https://localhost:44324/api/Appointment')
        .then(response => response.json())
        .then(data => {
            if (Array.isArray(data.data)) {
            this.registros = data.data;
            } else {
            throw new Error('La respuesta de la API no contiene un arreglo de registros');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
        }    
};
  </script>
  

<!-- <template>
    <div class="list">
      <input type="text" v-model="busqueda" placeholder="Buscar por Id" />
    </div>
    <div class="list">
    <table>
        <tr>
            <th>Fecha</th>
            <th>ID Estudiante</th>
            <th>Cubiculo</th>
            <th>Estado</th>
            <th>Opciones</th>
        </tr>
        <tr v-for="post in registrosFiltrados" :key="post.id">
            <td>{{ post.dateTime }}</td>
            <td>{{ post.studentId }}</td>
            <td>{{ post.roomId }}</td>
            <td>
                <p v-if="post.status != 1">Aprovechada</p>
                <p v-else>Cancelada</p>
            </td>
            <td v-if="post.status != 1">
                <button class="button-cancel" v-on:click="$event =>clickCancel(post)">Cancelar</button>
            </td>
        </tr>
    </table>
</div>
  </template>-->

<!-- <script setup>
import PostAppoiments from './services/PostAppoiments';
import { onMounted, ref, computed } from 'vue';

    let service = new PostAppoiments();
    let postsS = service.Posts;
    const busqueda = ref('');
    let registros = ref([]);
    let found = ref([]);
    
    onMounted(async () => {
        await service.fetchAll()
        .then(registros.value = service.value)
    })
    
    const registrosFiltrados = computed(() => {
        console.log('bus', busqueda)
        if (busqueda.value) {
            found = registros.value.filter(element => element.studentId === parseInt(busqueda.value))
            if (found === undefined) {
                return registros
            } else {
                return found
            }
        } else {
            return console.log(registros.value);
        }
    });

    function clickCancel(post){
        post.status = 1
        service.updateStatusAppointment(post)
        console.log(post.status)
    }
</script> -->

  
<!-- <template>
    <div class="list">
        <input type="text" :v-model="textId" name="textId" id="textId" value="">
        <button class="button-search" v-on:click="search">Buscar</button>
    </div>
    <div class="list">
        <table>
            <tr>
                <th>Fecha</th>
                <th>ID Estudiante</th>
                <th>Cubiculo</th>
                <th>Estado</th>
                <th>Opciones</th>
            </tr>
            <tr v-for="post in posts.data">
                <td>{{ post.dateTime }}</td>
                <td>{{ post.studentId }}</td>
                <td>{{ post.roomId }}</td>
                <td>
                    <p v-if="post.status != 1">Aprovechada</p>
                    <p v-else>Cancelada</p>
                </td>
                <td v-if="post.status != 1">
                    <button class="button-cancel" v-on:click="$event =>clickCancel(post)">Cancelar</button>
                </td>
            </tr>
        </table>
    </div>
    <ListRegister>

    </ListRegister>
</template>
<script setup>
    // import ListRegister from './ListRegister.vue'
    import PostAppoiments from './services/PostAppoiments';
    import { onMounted, ref } from 'vue';
    const service = new PostAppoiments()
    const postsS = service.Posts
    let posts = ref(postsS)
    let found = {}
    let isSearch = true
    onMounted(async () => {
        await service.fetchAll()
        console.log(posts.value.data)
    })
    function clickCancel(post){
        post.status = 1
        service.updateStatusAppointment(post)
        console.log(post.status)
    }
    function search(){
        isSearch = false
        // found = postsS.value.data.find(element => element.studentId === parseInt(textId.value));

        // posts = []

        // posts.value = found
        // console.log(posts.value)
        // console.log(isSearch)
        fetch(`https://localhost:44324/api/Appointment?studentId=0`)
        .then(response => response.json())
        .then(data => {
            // ${parseInt(textId.value)} Aquí puedes hacer algo con el registro obtenido, por ejemplo:
            console.log(data); // Imprime el registro en la consola
            // Manipula los datos según tus necesidades
        })
        .catch(error => {
            console.error('Error:', error);
  });
    }
</script> -->
<style scoped>
.list{
    display: flex;
    width: 100%;
    justify-content: center;
}
table{
    margin: 20px;
    width: 70%;
    border-bottom: 1px solid red;
    font-family: sans-serif;
}
table th{
    background-color: brown;
    color: #fff;
    font-weight: initial;
    padding: 10px;
}
td{
    padding: 10px;
}
table, th, td {
    border-left: 1px solid red;
    border-right: 1px solid red;
    border-collapse: collapse;
    text-align: center;
}
.button-cancel{
    background-color: red;
    border: none;
    border-radius: 5px;
    color: #fff;
    padding: 5px;
}
.button-cancel:hover{
    background-color: brown;
}
.button-search{
    background-color: red;
    border: none;
    border-radius: 5px;
    color: #fff;
    padding: 5px;
    margin-left: 2%;
}
.button-seacrh:hover{
    background-color: brown;
}
</style>
