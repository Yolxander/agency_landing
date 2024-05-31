<template>
    <div class="e-c">
        <div class="e"></div>
        <div class="e"></div>
    </div>
</template>

<script>
export default {
    name: 'EyeAnimation'
}
</script>

<style scoped>
.e {
    width: 30vw;
    height: 30vw;
    position: relative;
    border-radius: 50%;
    background-color: #FFA800;
    overflow: hidden;
    animation: eye 3.5s infinite;
}

.e::after {
    content: "";
    width: 65%;
    height: 65%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    border-radius: 50%;
    background: #000;
    animation: eyeglobe 17.5s infinite;
}

.e-c {
    width: calc(30vw * 2 + 5vw);
    display: flex;
    justify-content: space-between;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
}

@keyframes eye {
    0%, 5%, 30%, 37%, 100% {
        height: 30vw;
        transform: translate3d(0, 0, 0);
    }
    3%, 33% {
        height: 0;
        transform: translate3d(0, -50%, 0);
    }
}

@keyframes eyeglobe {
    0%, 20% {
        transform: translate3d(-100%, -50%, 0);
    }
    21%, 40%, 81%, 100% {
        transform: translate3d(-50%, -50%, 0);
    }
    41%, 60% {
        transform: translate3d(0%, -50%, 0);
    }
    61%, 80% {
        transform: translate3d(-50%, 0%, 0);
    }
}
</style>