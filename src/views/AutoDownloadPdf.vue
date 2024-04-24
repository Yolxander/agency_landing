<template>
    <section class="hero">
        <div class="left-side">
            <p v-if="!messageVisible">
                <span> Hey there!</span> Thanks for swinging by. We're excited that you're interested in exploring how we can help your business thrive online.
                <br><br>
                 We're ready to start this journey with you. As you explore our service guide, if anything catches your eye or sparks your interest, don't hesitate to book a call with us. This is a great opportunity to discuss how our services can specifically benefit your business and help you achieve your goals. Let's talk and find the perfect solutions to elevate your brand's digital presence.
            </p>

            <!-- Message to be displayed after the PDF is downloaded -->
            <p v-if="messageVisible">
                <span>Thank you!</span> We're thrilled you took the time to explore what we have to offer. Your interest means the world to us, and we're here to answer any questions you might have. We hope to hear from you soon and look forward to the opportunity to contribute to your business's success.
            </p>
            <!-- Button for downloading the PDF -->
            <SeeAllButton :title="'Get PDF'" @click="downloadPDF" v-if="!messageVisible" />
            <!-- Button for going to the home page -->
            <SeeAllButton :title="'Go Home'" @click="$router.push('/')" v-if="messageVisible" />

        </div>
    </section>
</template>

<script>
import SeeAllButton from "@/components/SeeAllButton.vue";

export default {
    name: 'AutoDownloadPdf',
    components: {
        SeeAllButton
    },

    data() {
        return {
            messageVisible: false, // Controls the visibility of the message
        };
    },

    methods: {
        downloadPDF() {
            // Set the path to your PDF file
            const pdfPath = 'http://localhost:8080/SempreStudiosServices.pdf';

            // Attempt to create a link element, set the URL, and trigger the download
            try {
                const link = document.createElement('a');
                link.href = pdfPath;
                link.setAttribute('download', pdfPath.split('/').pop()); // Extract the file name
                document.body.appendChild(link);

                // Check if the document has sandbox restrictions
                if (document.body.contains(link)) {
                    link.click();
                    document.body.removeChild(link);
                } else {
                    throw new Error('Download blocked by sandbox restrictions.');
                }

                // Show the message
                this.messageVisible = true;
            } catch (error) {
                console.error("Failed to download PDF automatically:", error);
                // Fallback: Open PDF in a new tab if automatic download fails
                window.open(pdfPath, '_blank');
            }

            // Optionally, hide the message after a few seconds
            setTimeout(() => {
                this.messageVisible = false;
            }, 10000); // Hides the message after 10 seconds
        }
    }
}
</script>

<style scoped>
.hero{
    height: 75vh;
    width: 100vw;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: start;
}



.left-side {
    width: 50%;
    height:  fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    color: #FFFFFF;
    text-align: left;
}

.left-side ul{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /*background: red;*/
}

.left-side ul span{
    font-family: 'Audiowide', sans-serif;
}


.left-side p span{
    color: #FFF;
    font-family: 'Gugi', sans-serif;
    font-size:35px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
}

/* Responsive adjustments for smaller screens */
@media (max-width: 768px) {
    .hero {
        flex-direction: column;
        height: 85vh;
    }

    .left-side, .right-side {
        width: 95%;
        margin-right: 0;
        font-size: 20px;
        color: #FFFFFF;
        text-align: center;
        display: flex;
    }


    .right-side {
        width: 100%;
        height: fit-content;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-right: 0px;
    }

    .left-side{
        padding-left: 0px;
        padding-top: 0px;
        margin: 0px;
        height: fit-content;
    };

    .left-side list{
        width: 85%;
    }


}


/* Responsive adjustments for smaller screens */
@media (max-width: 375px) {
    .hero {
        padding-bottom: 30px;
    }

    .left-side, .right-side {
        font-size: 15px;
    }
}
.left-side {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.info-message {
    /* Adapted styles from the second snippet */
    color: #FFFFFF;
    font-size: 14px;
    text-align: center;
}

</style>