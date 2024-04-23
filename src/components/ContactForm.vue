<template>
    <div class="container" :class="{ 'thank-you-active': submitted }">
        <h3 class="signup">{{ message }}</h3>
        <form v-if="!submitted" ref="form" @submit.prevent="sendEmail" class="contact-form row">
            <div  class="form-field col x-50">
                <input id="name" class="input-text js-input" type="text" name="name" required>
                <label class="label" for="name">Name</label>
            </div>
            <div class="form-field col x-50">
                <input id="email" class="input-text js-input" type="email" name="email" required>
                <label class="label" for="email">E-mail</label>
            </div>
            <div class="form-field col x-100 select-field">
                <select id="services" class="input-text js-input" name="services" required>
                    <option value="">Select Service</option>
                    <option value="web-development-design">Web Development and Design</option>
                    <option value="hosting-domain-services">Hosting and Domain Services</option>
                    <option value="booking-scheduling">Booking and Scheduling</option>
                    <option value="online-lead-generation">Online Lead Generation</option>
                    <option value="project-management-tracking">Project Management and Tracking</option>
                    <option value="inventory-work-order-management">Inventory and Work Order Management</option>
                </select>
            </div>
            <div class="form-field col x-100">
                <input id="message" class="input-text js-input" type="text" name="message" required>
                <label class="label" for="message">Message</label>
            </div>
            <div class="form-field col x-100 align-center">
                <button type="submit" class="white">{{ buttonText }}</button>
            </div>
        </form>
        <div id="thankYouContainer" v-if="submitted" >
        <!-- Displayed after form submission -->
            <p>We will get back to you soon. A confirmation email has been sent to your email address.</p>
        </div>
    </div>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
    name: "ContactForm",
    data() {
        return {
            submitted: false,
            buttonText: 'Send',
            message: 'Contact Us'
        };
    },
    methods: {
        sendEmail() {
            emailjs.sendForm('service_v98lvdp', 'template_32vbj3t', this.$refs.form, 'NxLLnhlEW3KDj2zPO')
                .then((result) => {
                    console.log('SUCCESS!', result.text);
                    this.submitted = true;
                    this.buttonText = 'Message Submitted';
                    this.message = 'Thank you for contacting us';
                }, (error) => {
                    console.log('FAILED...', error.text);
                });
        }
    }
};
</script>

<style scoped>
.thank-you-active {
    height: 55vh;
}
/* Helpers */
@mixin clearfix {
    &:after {
        content: "";
        display: table;
        clear: both;
    }
}

.align-center {
    text-align: center;
}

/* Grid */
.row {
    @include clearfix;
    margin: -20px 0;
    .col {
        padding: 0 20px;
        float: left;
        box-sizing: border-box;
        &.x-50 {
            width: 50%;
        }
        &.x-100 {
            width: 100%;
        }
    }
}


.contact-form {
    margin-bottom: 50px;
    .form-field {
        position: relative;
        margin: 32px 0;
    }
    .input-text {
        display: block;
        width: 100%;
        height: 36px;
        border-width: 0 0 2px 0;
        border-color: #fff; /* Border color changed to white */
        background-color: transparent; /* Background set to transparent */
        color: #fff; /* Text color set to white */
        font-size: 18px;
        line-height: 26px;
        font-weight: 400;

        &:focus {
            outline: none;
        }

        &:focus,
        &.not-empty {
            + .label {
                transform: translateY(-24px);
            }
        }
    }
    .label {
        position: absolute;
        left: 20px;
        bottom: 11px;
        font-size: 18px;
        line-height: 26px;
        font-weight: 400;
        color: #fff; /* Text color changed to white */
        cursor: text;
        transition: transform .2s ease-in-out;
    }

    .submit-btn {
        display: inline-block;
        background-color: #000;
        color: #fff;
        font-family: Raleway, sans-serif;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 16px;
        line-height: 24px;
        padding: 8px 16px;
        border: none;
        cursor: pointer;
    }
}

.note {
    position: absolute;
    left: 0;
    bottom: 10px;
    width: 100%;
    text-align: center;
    font-size: 16px;
    line-height: 21px;

    .link {
        color: #FFFFFF;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
}

.select-field .label {
    /* Adjust label positioning for select specifically */
    position: absolute;
    left: 20px;
    top: -20px; /* Position above the select */
    transition: transform .2s ease-in-out;
    margin-top: 0;
}

.select-field .input-text:not(:focus):not(:not(:empty)) + .label {
    /* Keep label above if the select has value(s) */
    transform: translateY(-24px);
}

button {
    display: inline-block;
    padding: .75em 2em;
    font-size: 18px;
    background: none;
    border-radius: 5px;
    border: solid 1px #000;
    border-top: solid 2px #000;
    border-bottom: solid 2px #000;
    transition: all .5s ease;
    &.white {
        border: solid 1px #fff;
        border-top: solid 2px #fff;
        border-bottom: solid 2px #fff;
        color: #fff;
        &:after {
            background-color: rgba(255, 255, 255, 0.25);
            border-bottom: solid 3px #fff;
        }
    }
    &:after {
        content: "";
        position: absolute;
        z-index: -10;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.25);
        border-bottom: solid 3px #000;
        opacity: 0;
        -webkit-transition: all 1.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        transition: all 1.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    &:hover {
        transform: scale(1.025);
        cursor: pointer;
    }
    &:hover::after {
        opacity: 1;
    }
}

@media (max-width: 568px) {
    .contact-form {
        margin-bottom: 0px;
    }

    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    #thankYouContainer{
        text-align: center;
        font-size: 20px;
        width: 90%;
    }

    h3{
        text-align: center;
    }
}

</style>

