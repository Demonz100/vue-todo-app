<template>
    <div>
        <teleport to="body">
            <div class="toast-container">
                Hello
            </div>
        </teleport>
    </div>
</template>

<style scoped>
.toast-container {
    background-color: green;
    width: 100px;
    position: absolute;
    bottom: 0;
    right: 0;
}
</style>