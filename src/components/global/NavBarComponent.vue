<template>
    <div class="navbar">
        <div class="logo-container">
            <div class="logo">
                <div class="icon">S</div>
            </div>
<!--            <div class="brand-name">SEMPRE studios</div>-->
        </div>
        <div class="menu">
            <a href="#" class="menu-item">
                <span class="menu-item-text">Company</span>
            </a>
            <a href="#" class="menu-item">
                <span class="menu-item-text">Services</span>
            </a>
            <a href="#" class="menu-item">
                <span class="menu-item-text">Resources</span>
            </a>
        </div>
        <button class="contact-button">
            <span class="contact-text">Contact</span>
        </button>
    </div>
</template>

<script>
export default {
    name: "NavBarComponent",
    components: {}
}
</script>

<style scoped>
.navbar {
    width: 100%;
    height: 92px;
    background: rgba(15.30, 15.30, 15.30, 0.40);
    -webkit-backdrop-filter: blur(18px);
    backdrop-filter: blur(18px);
    justify-content: space-between;
    align-items: center;
    display: flex;
    z-index: 5;
    position: fixed;
}

.logo-container {
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    display: flex;
    margin-left: 20px;
}

.logo {
    width: 38px;
    height: 42px;
    position: relative;
}

.logo-background {
    width: 37.98px;
    height: 42.01px;
    position: absolute;
    background: linear-gradient(253deg, #9DE8EE 0%, #9DE8EE 0%, #FA7C0B 49%, #9F8CED 100%);
}


.logo {
    width: 38.475px; /* 28.5px * 1.35 */
    height: 38.475px; /* 28.5px * 1.35 */
    position: relative;
    background: rgba(0, 0, 0, 0.20);
    border-radius: 74.81px; /* 55.415px * 1.35 */
    overflow: hidden;
    border: 0.96px #645959 solid; /* 0.71px * 1.35 */
    backdrop-filter: blur(18.72px);
}

.icon {
    width: 20.23275px; /* 15.365px * 1.35 */
    height: 23.29425px; /* 17.255px * 1.35 */
    position: absolute;
    left: 8.65875px; /* 6.415px * 1.35 */
    top: 7.695px; /* 5.7px * 1.35 */
    background: transparent;
    font-family: 'Gugi', sans-serif;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}

.brand-name {
    color: white;
    font-size: 16px;
    font-family: 'Gugi', sans-serif;
    font-weight: 700;
    text-align: center;
    transition: all 0.2s ease-in-out;
    word-wrap: break-word;
    margin: 0;
}

.menu {
    flex: 1 1 0;
    height: 44px;
    padding-right: 16px;
    justify-content: flex-end;
    align-items: center;
    display: flex;
    gap: 10px;
}

.menu-item {
    padding: 10.8px 21.6px; /* 8px * 1.35, 16px * 1.35 */
    background: rgba(50.71, 50.71, 50.71, 0.20);
    border-radius: 67.5px; /* 50px * 1.35 */
    border: 0.675px #FFA800 solid; /* 0.5px * 1.35 */
    backdrop-filter: blur(20px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 4;
    cursor: pointer;
    color: white;
    font-size: 10.8px; /* 8px * 1.35 */
    font-family: Agrandir;
    font-weight: 800;
    text-transform: uppercase;
    line-height: 10.8px; /* 8px * 1.35 */
    word-wrap: break-word;
    text-decoration: none;
    border: none;
    outline: none;
}

.menu-item:hover {
    background: #FFA800;
}

.menu-item:hover .menu-item-text {
    color: black;
    text-decoration: none;
}

.contact-button {
    padding: 10.8px 21.6px; /* 8px * 1.35, 16px * 1.35 */
    background: rgba(50.71, 50.71, 50.71, 0.20);
    border-radius: 67.5px; /* 50px * 1.35 */
    border: 0.675px #FFA800 solid; /* 0.5px * 1.35 */
    backdrop-filter: blur(20px);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    z-index: 4;
    cursor: pointer;
    color: white;
    font-size: 10.8px; /* 8px * 1.35 */
    font-family: Agrandir;
    font-weight: 800;
    text-transform: uppercase;
    line-height: 10.8px; /* 8px * 1.35 */
    word-wrap: break-word;
    border: none;
    outline: none;
    color: #FFA800;
}

.contact-button:hover {
    background: #FFA800;
}

.contact-button:hover .contact-text {
    color: black;
    text-decoration: none;
}

.contact-button{
    border: 1px solid #FFA800;
}

@media (max-width: 768px) {
    nav {
        height: 10vh; /* Smaller height for mobile */
        padding-right: 20px; /* Less padding on the sides */
        padding-left: 30px;
        z-index: 3;
        position: absolute;
    }

    .right-side {
        width: 40%; /* Increase width to accommodate smaller icons */
    }

    svg {
        display: none;
    }
}
</style>
