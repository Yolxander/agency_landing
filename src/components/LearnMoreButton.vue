<template>
    <button class="custom-btn btn-9">
      Learn More
    </button>
</template>


<script>
export default {
    name: 'LearnMoreButton',
};
</script>

<style scoped>
.custom-btn {
    width: 40%;
    height: 40px;
    padding: 10px 25px;
    border: 2px solid #fff; /* Changed border color to white */
    border-radius: 5px;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    background: transparent;
    color: #fff; /* Changed text color to white */
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
    background: #000; /* Set a default background to ensure visibility */
}

.btn-9:hover {
    box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.5), -4px -4px 6px 0 rgba(116, 125, 136, 0.2), inset -4px -4px 6px 0 rgba(255, 255, 255, 0.5), inset 4px 4px 6px 0 rgba(116, 125, 136, 0.3);
    color: #000; /* Changed text color to black for contrast */
    font-size: 15px;
}

.btn-9:hover:after {
    transform: scale(2) rotate(180deg);
    background: #fff; /* Changed background to white for contrast */
    box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.5), -4px -4px 6px 0 rgba(116, 125, 136, 0.2), inset -4px -4px 6px 0 rgba(255, 255, 255, 0.5), inset 4px 4px 6px 0 rgba(116, 125, 136, 0.3);
}

/* Responsive adjustments for smaller screens */
@media (max-width: 768px) {
    .custom-btn {
        margin-top: 10px;
    }
}
</style>