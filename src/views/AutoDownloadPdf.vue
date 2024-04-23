<template>
    <div>
        <!-- Button for downloading the PDF -->
        <button @click="downloadPDF" class="download-button">Get PDF</button>

        <!-- Message to be displayed after the PDF is downloaded -->
        <p v-if="messageVisible" class="info-message">
            Contact us if you need more information or for any inquiries.
        </p>
    </div>
</template>

<script>
export default {
    name: 'AutoDownloadPdf',

    data() {
        return {
            messageVisible: false, // Controls the visibility of the message
        };
    },

    methods: {
        downloadPDF() {
            // Set the path to your PDF file
            const pdfPath = 'SempreStudiosServices.pdf';

            // Create a link element, set the URL, and trigger the download
            const link = document.createElement('a');
            link.href = pdfPath;
            link.download = pdfPath.split('/').pop(); // Extract the file name
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Show the message
            this.messageVisible = true;

            // Optionally, hide the message after a few seconds
            setTimeout(() => {
                this.messageVisible = false;
            }, 10000); // Hides the message after 10 seconds
        }
    }
}
</script>

<style>
/* Add your styles here */
.download-button {
    /* Style your button as needed */
}

.info-message {
    /* Style your message as needed */
    margin-top: 20px; /* Example spacing */
}
</style>