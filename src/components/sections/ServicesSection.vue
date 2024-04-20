<template>
    <section id="service" class="hero">
        <ObserverComponent classToToggle="fadeInRight" :playOnce="true">
            <div class="header-container">
                <AboutUsHeader :header="header"/>
            </div>
        </ObserverComponent>
        <div class="services-container content">
            <div class="row">
                <div class="col-md-6 col-lg-4 col-sm-12" v-for="(service, index) in services" :key="service.title">
                    <ObserverComponent classToToggle="fadeInLeft" :playOnce="true">
                        <div class="single_service hvr-curl-top-right">
                            <div class="single_service-left">
                                <!--                            <div class="icon">-->
                                <!--                                <i :class="service.icon"></i>-->
                                <!--                            </div>-->
                            </div>
                            <div class="single_service-body">
                                <h4 class="single_service-heading">{{ service.title }}</h4>
                                <p>{{ service.description }}</p>
                                <button @click="handleButtonClick(index)" class="white">See More</button>
                            </div>
                        </div>
                    </ObserverComponent>
                </div>
            </div>
        </div>
        <div id="modal-container" :class="buttonId">
            <div class="modal-background" @click="handleModalClick">
                <div class="modal">
                    <h1>{{ activeService ? activeService.title : "Service Details" }}</h1>
                    <h3>{{ activeService ? activeService.description: "Service Description" }}</h3>
                    <ul v-if="activeService">
                        <li v-for="detail in activeService.expanded_description" :key="detail" v-html="formatText(detail)"></li>
                    </ul>
                    <h4 >{{ activeService ? activeService.conclusion: "Service Conclusion" }}</h4>
                    <a @click="handleModalClick" class="white exitModal">Got It</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ObserverComponent from "@/components/IntersectionObserver.vue";
import AboutUsHeader from "@/components/AboutUsHeader.vue";

export default {
    name: "ServicesSection",
    components: {
        AboutUsHeader,
        ObserverComponent
    },
    data() {
        return {
            header: {
                part1: "Our",
                part2: "Services",
            },
            buttonId: '',
            modalActive: false,
            activeService: null,
            services: [
                {
                    icon: 'fa fa-laptop',
                    title: 'Web Development and Design',
                    description: 'Offering custom website creation with responsive design for optimal user experience across all devices.',
                    expanded_description: [
                        "**Customized Solutions**: Tailored web designs that align with your brand identity and meet your business needs.",
                        "**Responsive Design**: Ensures your website looks great and functions flawlessly on all devices, from desktops to smartphones.",
                        "**User Experience**: Focused on creating a seamless and engaging user experience to keep visitors on your site longer."
                    ],
                    conclusion: "Ready to elevate your online presence? **Let's craft a website that stands out!**"
                },
                {
                    icon: 'fas fa-server',
                    title: 'Hosting and Domain Services',
                    description: 'Reliable web hosting and domain registration services to ensure your website is always accessible and running smoothly.',
                    expanded_description: [
                        "**Reliability**: High uptime rates that keep your website accessible to visitors around the clock.",
                        "**Security**: Advanced security measures to protect your site from threats and ensure data privacy.",
                        "**Scalability**: Flexible hosting solutions that grow with your business, accommodating increased traffic and content."
                    ],
                    conclusion: "Ensure your site's success with our **reliable hosting**. **Get started today!**"
                },
                {
                    icon: 'fas fa-calendar-alt',
                    title: 'Booking and Scheduling',
                    description: 'Streamline appointment bookings with an automated scheduling system and reminders.',
                    expanded_description: [
                        "**Efficiency**: Automates the booking process, saving time for both your staff and your clients.",
                        "**Convenience**: Allows clients to book appointments at any time, from any device, improving customer satisfaction.",
                        "**Reminders**: Reduces no-shows with automated reminders, ensuring a smoother operation and better resource utilization."
                    ],
                    conclusion: "Make booking a breeze for your clients. **Schedule smarter, not harder!**"
                },
                {
                    icon: 'fas fa-user-friends',
                    title: 'Online Lead Generation',
                    description: 'Boost lead capture with custom online forms and a quote generator, optimizing your CRM process.',
                    expanded_description: [
                        "**Lead Capture**: Custom forms designed to maximize lead generation from your website.",
                        "**Integration**: Seamless integration with your CRM system for efficient lead management.",
                        "**Conversion Optimization**: Strategies to convert website visitors into leads, enhancing your sales funnel."
                    ],
                    conclusion: "Turn clicks into clients with our **lead generation magic. Start capturing more leads today!**"
                },
                {
                    icon: 'fas fa-tasks',
                    title: 'Project Management and Tracking',
                    description: 'Enhance project transparency with client dashboards and automate routine tasks for operational efficiency.',
                    expanded_description: [
                        "**Transparency**: Real-time dashboards that keep clients informed about project progress.",
                        "**Automation**: Reduces manual work by automating routine tasks, allowing your team to focus on more critical aspects.",
                        "**Collaboration**: Facilitates better communication and collaboration within teams and with clients."
                    ],
                    conclusion: "Keep your projects on track and your clients in the loop. **Elevate your project management today!**"
                },
                {
                    icon: 'fas fa-boxes',
                    title: 'Inventory and Work Order Management',
                    description: 'Manage inventory with a real-time database and streamline operations with digital work orders.',
                    expanded_description: [
                        "**Real-Time Tracking**: Keeps track of inventory levels in real-time, preventing stockouts and overstock.",
                        "**Efficiency**: Streamlines the creation and management of work orders, improving operational efficiency.",
                        "**Integration**: Easily integrates with other systems for a cohesive management experience."
                    ],
                    conclusion: "Optimize your inventory and work orders for smoother operations. **Start managing more effectively today!**"
                }
            ]
        }
    },
    methods: {
        handleButtonClick(index) {
            this.activeService = this.services[index]; // Set the active service based on the clicked button
            this.buttonId = 'four'; // Assuming 'four' is the modal class for showing the modal
            this.modalActive = true;
        },
        handleModalClick(event) {
            if (event.target.classList.contains('modal-background') || event.target.classList.contains('exitModal')) {
                this.buttonId = '';
                this.modalActive = false;
                this.activeService = null; // Reset the active service when the modal is closed
            }
        },
        formatText(text) {
            return text.replace(/\*\*(.*?)\*\*/g, '<span style="font-weight: 600" class="bold-text">$1</span>');
        },
    },
}
</script>

<style scoped>
.hero{
    height: 120vh;
    width: 100vw;
    background-color: black;
    flex-direction: row;
    justify-content:center;
    position: relative;
    overflow-y: hidden;
}


.header-container{
    display: flex;
    justify-content: center;
}

.hero p{
    color: white;
}

section{
    overflow-x: hidden;
}

.services-container{
    margin-top: 60px;
}


section {
    padding: 60px 0;
    min-height: 100vh;
    background-color: black; /* Updated background color */
}

a,
a:hover,
a:focus,
a:active {
    text-decoration: none;
    outline: none;
    color: white; /* Updated text color */
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

img {
    max-width: 100%;
    height: auto;
}

.section_title h2 {
    color: white; /* Updated text color */
    font-size: 25px;
    font-weight: 700;
    letter-spacing: 1.8px;
    text-transform: uppercase;
}

.brand_border .fa.fa-minus {
    background: white; /* Updated background color */
    color: black; /* Updated to ensure visibility against the new background, adjust if necessary */
}

.brand_border .fas.fa-handshake {
    color: white; /* Updated text color */
}

.section_title p {
    color: white; /* Updated text color */
}

.choose_us .section_title {
    margin-top: 45px;
}

#service .single_service {
    padding: 32px;
    box-shadow: 1px 1px 3px rgba(255, 255, 255, 0.1); /* Updated shadow color */
    margin-bottom: 50px;
    background-color: black; /* Updated background color */
    color: white; /* Updated text color */
    border-radius: 8px;
}

#service .single_service:hover {
    box-shadow: 10px 10px 15px rgba(255, 255, 255, 0.4); /* Updated shadow color */
    background: #F8C01B none repeat scroll 0 0; /* Keep or update based on your preference */
}

#service .icon {
    border: 1px solid white; /* Updated border color */
    color: white; /* Updated icon color */
}

.single_service-heading {
    color: white; /* Updated text color */
}

.single_service-body p {
    color: white; /* Updated text color */
}

.hvr-curl-top-right {
    box-shadow: 0 0 1px transparent; /* Keep or update based on your preference */
}

#service .single_service:hover {
    background: black; /* Updated background color */
}

.row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center; /* Adjust this as needed */
    font-size: 20px;
}

.col-md-6.col-lg-4.col-sm-12 {
    flex: 0 0 33.333333%; /* For large screens */
    max-width: 33.333333%; /* For large screens */
    box-sizing: border-box;
    padding: 15px; /* Adjust the padding as needed */
}

/*//button styles*/
button {
    padding: 5px 10px;
    font-size: 12px;
    background: none;
    border-radius: 2px;
    border: solid 1px #000;
    border-top: solid 2px #000;
    border-bottom: solid 2px #000;
    transition: all .5s ease;
    &.white {
        border-right: solid 0.5px #fff;
        border-bottom: solid 0.5px #fff;
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

#modal-container {
    position:fixed;
    display:table;
    height:100%;
    width:100%;
    top:0%;
    left:0;
    transform:scale(0);
    z-index:1;
    &.four {
        z-index: 99;
        transform:scale(1);
        .modal-background {
            background:rgba(0,0,0,.7);
            .modal {
                animation: blowUpModal .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
            }
            height: 100%;
        }
        + .content {
            z-index:1;
            animation:blowUpContent .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
        }
        &.out {
            .modal-background {
                .modal {
                    animation: blowUpModalTwo .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
                }
            }
            + .content {
                animation: blowUpContentTwo .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
            }
        }
    }
    .modal-background {
        background:rgba(0,0,0,.8);
        text-align:center;
        vertical-align:middle;
        display: flex;
        align-items: center; /* Centers the modal vertically */
        justify-content: center; /* Centers the modal horizontally */
    }
}

.modal {
    background: black;
    padding:50px;
    font-weight:300;
    position:relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 50vh;
    width: 50vw;
    border: 0.5px solid white;
    border-radius: 5px;
    h2 {
        font-size:25px;
        line-height:25px;
        margin-bottom:15px;
        color: white;
    }
    p {
        line-height:22px;
    }
    .modal-svg {
        position:absolute;
        top:0;
        left:0;
        height:100%;
        width:100%;
        border-radius:3px;
        rect {
            stroke: #fff;
            stroke-width: 2px;
            stroke-dasharray: 778;
            stroke-dashoffset: 778;
        }
    }
}

.content {
    min-height:100%;
    height:100%;
    position:relative;
    z-index:0;
    h1 {
        padding:75px 0 30px 0;
        text-align:center;
        font-size:30px;
        line-height:30px;
    }
    .buttons {
        max-width:800px;
        margin:0 auto;
        padding:0;
        text-align:center;
        .button {
            display:inline-block;
            text-align:center;
            padding:10px 15px;
            margin:10px;
            background:red;
            font-size:18px;
            background-color:#efefef;
            border-radius:3px;
            box-shadow:0 1px 2px rgba(0,0,0,.3);
            cursor:pointer;
            &:hover {
                color:white;
                background:#009bd5;
            }
        }
    }
}

.modal li{
    color: white;
    font-size: 18px;
}

h3,h4{
    font-size: 18px;
    color: white;
}

h1{
    font-family: 'Notable', sans-serif;
    color:white;
    font-size: 20px;
}

.exitModal{
    margin-top: 20px;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
}

.bold-text {
    font-weight: 700;
    font-size: 18px; /* This should match the font-size of h3 */
    color: white; /* This should match the color of h3 */
}
@keyframes blowUpContent {
    0% {
        transform:scale(1);
        opacity:1;
    }
    99.9% {
        transform:scale(2);
        opacity:0;
    }
    100% {
        transform:scale(0);
    }
}

@keyframes blowUpContentTwo {
    0% {
        transform:scale(2);
        opacity:0;
    }
    100% {
        transform:scale(1);
        opacity:1;
    }
}

@keyframes blowUpModal {
    0% {
        transform:scale(0);
    }
    100% {
        transform:scale(1);
    }
}

@keyframes blowUpModalTwo {
    0% {
        transform:scale(1);
        opacity:1;
    }
    100% {
        transform:scale(0);
        opacity:0;
    }
}

/* Responsive adjustments for smaller screens */
@media (max-width: 768px) {
    .hero{
        height: fit-content;
    }

    .row {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center; /* Adjust this as needed */
    }
    /* Ensure each service card takes full width on smaller screens */
    .col-md-6.col-lg-4.col-sm-12 {
        flex: 0 0 100%; /* Updated to take full width */
        max-width: 100%; /* Updated to take full width */
    }

    h3 h1{
        font-size: 15px;
        color: white;
        padding: 0px;
    }
    .modal li{
        color: white;
        font-size: 15px;
    }

    .modal-background .modal{
        height: unset;
    }

    #modal-container {
        height: fit-content;
        width: 100%;
        top: 10%;
    }

    .exitModal{
        margin-top: 20px;
        font-size: 15px;
        font-weight: 600;
        cursor: pointer;
    }

    .modal {
        height: 100%;
        width: 90vw ;
        padding: 10px;
    }
}
</style>