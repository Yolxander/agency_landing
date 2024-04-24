<template>
    <button class="custom-btn btn-9" @click="$emit('click')">
        {{ title }}
    </button>
</template>

<script>
export default {
    name: 'SeeAllButton',
    props: {
        title: {
            type: String,
            default: 'See All'
        }
    }
};
</script>

<style scoped>
.custom-btn {
    width: 40%;
    height: 40px;
    padding: 10px 25px;
    border: 2px solid #fff; /* Border color is white */
    border-radius: 5px;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    background: transparent;
    color: #fff; /* Text color is white */
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;

}

.btn-9 {
    z-index: 2;
    transition: all 0.3s ease;
    overflow: hidden;
}

.btn-9:after {
    position: absolute;
    content: " ";
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease;
    background: #000; /* Default background for visibility */
}

.btn-9:hover {
    box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.5), -4px -4px 6px 0 rgba(116, 125, 136, 0.2), inset -4px -4px 6px 0 rgba(255, 255, 255, 0.5), inset 4px 4px 6px 0 rgba(116, 125, 136, 0.3);
    color: #000; /* Text color changes to black for contrast */
    font-size: 15px;
}

.btn-9:hover:after {
    transform: scale(2) rotate(180deg);
    background: #fff; /* Background changes to white for contrast */
    box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.5), -4px -4px 6px 0 rgba(116, 125, 136, 0.2), inset -4px -4px 6px 0 rgba(255, 255, 255, 0.5), inset 4px 4px 6px 0 rgba(116, 125, 136, 0.3);
}
</style>