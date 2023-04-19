<template>
    <div class="list">
        <table>
            <tr>
                <th>Fecha</th>
                <th>Estudiante</th>
                <th>Cubiculo</th>
                <th>Estado</th>
                <th>Opciones</th>
            </tr>
            <tr v-for="post in posts.data">
                <td>{{ post.dateTime }}</td>
                <td>{{ post.studentName + " " + post.studentLastName }}</td>
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

<script setup>
    
    import PostAppoiments from './services/PostAppoiments';
    import { onMounted } from 'vue';
    name: 'list'
    const service = new PostAppoiments()
    const posts = service.Posts
    onMounted(async () => {
        await service.fetchAll()
    })
    function clickCancel(post){
        console.log(post.dateTime + 'hola')
        post.Status = "Cancelada"
        post.Options = false
    }
</script>
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
</style>
