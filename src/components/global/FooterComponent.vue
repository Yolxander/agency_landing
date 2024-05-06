<template>
    <footer class="footer">
        <div class="container row">
            <div class="footer-col">
                <h4>company</h4>
                <ul>
                    <li><router-link to="/">home</router-link></li>
                    <li><router-link to="/services">our services</router-link></li>
                    <li><router-link to="/about-us">about us</router-link></li>
                    <!-- <li><router-link to="/privacy-policy">privacy policy</router-link></li> -->
                    <!-- <li><router-link to="/visit">visit website</router-link></li> -->
                </ul>
            </div>
            <div class="footer-col">
                <h4>get help</h4>
                <ul>
                    <li><router-link to="/faq">FAQ</router-link></li>
                    <!-- <li><router-link to="/shipping">shipping</router-link></li> -->
                    <!-- <li><router-link to="/returns">returns</router-link></li> -->
                    <!-- <li><router-link to="/order-status">order status</router-link></li> -->
                    <!-- <li><router-link to="/payment-options">payment options</router-link></li> -->
                </ul>
            </div>
            <div class="footer-col">
                <h4>download info</h4>
                <ul>
                    <li><router-link to="/pdf">get pdf</router-link></li>
                    <!-- <li><router-link to="/changelog">changelog</router-link></li> -->
                    <!-- <li><router-link to="/github">github</router-link></li> -->
                    <!-- <li><router-link to="/versions">all versions</router-link></li> -->
                </ul>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterComponent'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

/* Add all your CSS here */
.footer {
    background-color: black;
    padding: 80px 0;
    border-top: 1px solid gray;
    height: 20vh;
    z-index:1;
}
/* Add the rest of your CSS styles */
.container {
    max-width: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
}

.row {
    display: flex;
    flex-wrap: wrap;
}

ul {
    list-style: none;
}

.footer-col {
    width: 21%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.footer-col ul{
    padding: unset;
}

.footer-col h4 {
    font-size: 18px;
    color: #FFF;
    text-transform: capitalize;
    font-weight: 500;
    position: relative;
}

.footer-col ul li:not(:last-child) {
    margin-bottom: 10px;
}

.footer-col ul li a {
    color: #DDD;
    display: block;
    font-size: 1rem;
    font-weight: 300;
    text-transform: capitalize;
    text-decoration: none;
    transition: all 0.3s ease;
}

.footer-col ul li a:hover {
    color: #FFF;
    padding-left: 7px;
}

.footer-col .social-links a {
    color: #FFF;
    background-color: #616161;
    display: inline-block;
    height: 40px;
    width: 100%;
    border-radius: 50%;
    text-align: center;
    margin: 0 10px 10px 0;
    line-height: 40px;
    transition: all 0.5s ease;
}

.footer-col .social-links a:hover {
    color: #151515;
    background-color: #FFF;
}

@media(max-width: 767px) {
    .footer-col {
        width: 90%;
        margin-bottom: 30px;
    }

    .footer{
        height: 100%;
    }


}

@media(max-width: 574px) {
    .footer-col {
        width: 100%;
    }
}
</style>