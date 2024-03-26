<template>
    <form class="contact-form row">
        <div class="form-field col x-50">
            <input id="name" class="input-text js-input" type="text" required>
            <label class="label" for="name">Name</label>
        </div>
        <div class="form-field col x-50">
            <input id="email" class="input-text js-input" type="email" required>
            <label class="label" for="email">E-mail</label>
        </div>
        <div class="form-field col x-100 select-field">
            <!-- Removed multiple attribute -->
            <select id="services" class="input-text js-input" required>
                <option value="">Select Service</option> <!-- Placeholder option -->
                <option value="web-development">Web Development</option>
                <option value="automation">Automation</option>
                <option value="hosting-domain">Hosting & Domain</option>
            </select>
        </div>
        <div class="form-field col x-100">
            <input id="message" class="input-text js-input" type="text" required>
            <label class="label" for="message">Message</label>
        </div>
        <div class="form-field col x-100 align-center">
            <input class="submit-btn" type="submit" value="Submit">
        </div>
    </form>
</template>

<script>
export default {
    name: "ContactForm",

}
</script>

<style scoped>

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

/* Basics */
html {
    height: 100%;
}
body {
    height: 100%;
    position: relative;
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



</style>

