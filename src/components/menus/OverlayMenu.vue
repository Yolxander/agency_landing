<template>
    <div class="header">
        <div class="header-row row">
            <button class="hamburger-toggle" @click="toggleOffcanvas">
                <span class="hamburger-menu">
                    <span class="line line--top"></span>
                    <span class="line line--middle"></span>
                    <span class="line line--bottom"></span>
                </span>
            </button>
        </div>
    </div>

    <div class="Site-interface" :class="{'has-offcanvas': isOffcanvasOpen}">
        <div class="offcanvas">
            <nav class="offcanvas-nav">
                <ul class="offcanvas-nav__list">
                    <li class="offcanvas-nav__item">
                        <a href="#" class="offcanvas-nav__link">Home</a>
                    </li>
                    <!-- The rest of your links -->
                </ul>
            </nav>
        </div>

        <div class="toggle-circle">
            <div class="row">
                <svg class="hamburger-toggle__circle" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="16" r="16"/>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "OverlayMenu",
    data() {
        return {
            isOffcanvasOpen: false,
        };
    },
    methods: {
        toggleOffcanvas() {
            this.isOffcanvasOpen = !this.isOffcanvasOpen;
        },
    },
};
</script>

<style scoped>
*, *:after, *:before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box; }

a {
    text-decoration: none;

    &:active,
    &:focus,
    &:hover,
    &:visited {
        text-decoration: none;
    }
}

.has-offcanvas {
    position: fixed;
}

.row {
    margin-left: auto;
    margin-right: auto;
    padding-right: 30px;
    padding-left: 30px;
    width: 1150px;
    max-width: 100%;
}

.header {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 2;

    width: 100%;
    padding: 15px 0;
}

.header-row {
    position: relative;

    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.hamburger-toggle {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 60px;
    height: 60px;
    appearance: none;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    outline: none;
}

.hamburger-menu {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;

    width: 30px;
    height: 20px;
}

.line {
    display: block;
    width: 100%;
    height: 2px;
    background-color: #fff;
}

.line--middle {
    width: 80%;
}

.line--bottom {
    width: 60%;
}

.hamburger-toggle__circle {
    width: 60px;
    height: 60px;

    fill: #F6595D;
    pointer-events: none;
    transform: scale(1) translateZ(1%, 1%, 0);
    transform-origin: center;
    transition: transform .5s;

    .has-offcanvas & {
        transform: scale(75) translate3d(1%, 1%, 0);
    }
}

.offcanvas {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    min-height: 100vh;
    pointer-events: none;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity .5s, transform .3s;

    .has-offcanvas & {
        pointer-events: auto;
        opacity: 1;
        transform: none;
    }
}

.offcanvas-nav__list {
    list-style: none;
    margin: 0;
    padding: 0;
}

.offcanvas-nav__item {
    font-family: 'Bree Serif', serif;
    font-size: 32px;
    text-align: center;
    text-transform: uppercase;

    @media screen and (min-width: 1400px) {
        font-size: 64px;
    }

    & + & {
        margin-top: 15px;
    }
}

.offcanvas-nav__link {
    color: #fff;
    text-decoration: none;
}

.toggle-circle {
    position: fixed;
    left: 0;
    top: 0;
    z-index: -1;

    width: 100%;
    height: 90px;
    padding: 15px 0;

    .row {
        text-align: end;
    }
}
</style>