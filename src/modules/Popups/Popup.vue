<template>
    <div class="popup">
        <div class="popup-inner">
            <slot />
            <button class="popup-close">
                Cerrar
            </button>
        </div>
    </div>
</template>
<script>

</script>
<style>
.popup {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background-color: rgba(0,0,0,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    .popup-inner{
        background: #fff;
        padding: 32px;
    }
}
</style>