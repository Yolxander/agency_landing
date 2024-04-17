<template>
    <NavBarComponent />
    <section id="service" class="hero">
        <ObserverComponent classToToggle="fadeInRight" playOnce="true">
            <div class="header-container">
              <AboutUsHeader :header="header"/>
            </div>
        </ObserverComponent>
        <div class="services-container">
            <div class="row">
                <div class="col-md-6 col-lg-4 col-sm-12" v-for="service in services" :key="service.title">
                    <ObserverComponent classToToggle="fadeInLeft" playOnce="true">
                      <div class="single_service hvr-curl-top-right">
                        <div class="single_service-left">
<!--                            <div class="icon">-->
<!--                                <i :class="service.icon"></i>-->
<!--                            </div>-->
                        </div>
                        <div class="single_service-body">
                            <h4 class="single_service-heading">{{ service.title }}</h4>
                            <p>{{ service.description }}</p>
                            <button class="white">See More</button>
                        </div>
                    </div>
                    </ObserverComponent>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
import NavBarComponent from "@/components/NavBarComponent.vue";
import AboutUsHeader from "@/components/AboutUsHeader.vue";
import ObserverComponent from "@/components/IntersectionObserver.vue";

export default {
    name: "OurServicesPage",
    components: {ObserverComponent, AboutUsHeader, NavBarComponent},
    data() {
        return {
            header: {
                part1: "Our",
                part2: "Services",
            },
            services: [
                {
                    icon: 'fa fa-laptop',
                    title: 'Web Development and Design',
                    description: 'Offering custom website creation with responsive design for optimal user experience across all devices.'
                },
                {
                    icon: 'fas fa-server',
                    title: 'Hosting and Domain Services',
                    description: 'Reliable web hosting and domain registration services to ensure your website is always accessible and running smoothly.'
                },
                {
                    icon: 'fas fa-calendar-alt',
                    title: 'Booking and Scheduling',
                    description: 'Streamline appointment bookings with an automated scheduling system and reminders.'
                },
                {
                    "icon": "fas fa-user-friends",
                    "title": "Online Lead Generation",
                    "description": "Boost lead capture with custom online forms and a quote generator, optimizing your CRM process."
                },
                {
                    icon: 'fas fa-tasks',
                    title: 'Project Management and Tracking',
                    description: 'Enhance project transparency with client dashboards and automate routine tasks for operational efficiency.'
                },
                {
                    icon: 'fas fa-boxes',
                    title: 'Inventory and Work Order Management',
                    description: 'Manage inventory with a real-time database and streamline operations with digital work orders.'
                },
                // {
                //     icon: 'fas fa-chart-line',
                //     title: 'Reporting and Analytics',
                //     description: 'Access business insights through performance dashboards and customer feedback analysis.'
                // },
                // {
                //     icon: 'fas fa-portal-enter',
                //     title: 'Customer Portals',
                //     description: 'Empower customers with service requests, status updates, and online payment options through a secure portal.'
                // },

            ]
        }
    }

}
</script>

<style scoped>
.hero{
    height: 80vh;
    width: 100vw;
    background-color: black;
    flex-direction: row;
    justify-content:center;
    position: relative;
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

/* Responsive adjustments for smaller screens */
@media (max-width: 768px) {
    .hero{
        height: 70vh;
    }

    .header-container{
        display: flex;
        justify-content: center;
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
}

</style>