<template>
    <div class="recover-container">
        <h1>Reestablecimiento de contrase&#241a</h1>
        <div class="recover">
            <h3>Introdusca su correo institucional</h3>
            <form class="content" onsubmit="return false;">
                <input class="control-input" id="txtID" name="txtID" type="text" value="" />
                <button class="recover-btn" @click="sendAction"><font-awesome-icon :icon="['fa', 'circle-arrow-right']" />
                    Enviar
                </button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'recoverPass',
    data() {
        return {

        }
    },
    methods: {
        sendAction() {
            alert('Servicio no diponible por el momento!')
        }
    }
}
</script>

<style scoped>
.recover-container h1 {
    background-color: #F5F5F5;
    font-size: 1.3em;
    text-align: center;
}

.recover {
    width: 35%;
    margin: 0 auto;
    margin-top: 20px;
}

.recover h3 {
    padding: 5px;
    font-size: 1.3rem;
    background-color: #DB332C;
    color: white;
    font-weight: 400;
    text-align: center;
}

.content {
    padding: 10px;
    line-height: 20px;
    background-color: #F5F5F5;
}

.control-input {
    display: flex;
    width: 98%;
    margin: 5px;
    padding: 5px;
}

.recover-btn {
    background-color: #000;
    color: white;
    padding: 5px 10px;
    border: none;
    width: 100%;
}

.recover-btn:hover {
    background-color: grey;
}</style>