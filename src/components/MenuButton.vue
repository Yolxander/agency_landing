<template>
    <div id="container-nav-menu" @click.stop="toggleMenu" :style="{ width: this.showMenu ? '300px' : '75px', transition: 'width 1s ease-out' }">
        <div class="lines" id="container_nav_menu_top_line" :style="{ width: this.showMenu ? '100%' : '', transition: 'width 1s ease-out' }"></div>
        <div class="lines" id="container_nav_menu_middle_line" :style="{ width: this.showMenu ? '100%' : '', transition: 'width 1s ease-out' }"></div>
        <div class="lines" id="container_nav_menu_bottom_line" :style="{ width: this.showMenu ? '100%' : '', transition: 'width 1s ease-out' }"></div>
    </div>
</template>

<script>
export default  {
    name: "MenuButton",
    data() {
        return {
            showMenu: false,
            showLinks: false
        }
    },
    methods: {
        toggleMenu() {
            this.showMenu = !this.showMenu;
            setTimeout(() => {
                this.showLinks = true;
            }, 1000);
        },
        closeMenu() {
            this.showMenu = false;
            this.showLinks = false;
        }

    },
}
</script>

<style scoped>

#container-nav-menu{
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: relative;
    cursor: pointer;
}
.lines{
    border: 2px solid white;
    border-radius: 15px;
    transition: width 5s ease-out;
}
#container_nav_menu_top_line{
    width: 100%;
}
#container_nav_menu_bottom_line{
    width: 20%;
}

#container_nav_menu_middle_line{
    width: 50%;
}


#menu_links li{
    text-decoration: none;
    text-align: center;
    width: 40%;
    padding:5px 0;
    transition: background 1s ease-in-out, color 1s ease-in-out;
}

/* Add hover effects */
#container-nav-menu:hover #container_nav_menu_top_line{
    width: 20%; /* Reduce width to 50% on hover */
}

#container-nav-menu:hover #container_nav_menu_middle_line{
    width: 50%; /* Reduce width to 50% on hover */
}

#container-nav-menu:hover #container_nav_menu_bottom_line{
    width: 100%; /* Maintain width at 100% on hover */
}

#menu_links li:hover{
    background: black;
    color: white;
}



</style>