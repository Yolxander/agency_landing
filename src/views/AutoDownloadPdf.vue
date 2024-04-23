<template>
    <div>
        <!-- Invisible iframe for displaying the PDF -->
        <iframe :src="pdfUrl" style="display:none;" @load="redirect"></iframe>
    </div>
</template>

<script>
export default {
    name: 'AutoViewPdf',

    data() {
        return {
            pdfUrl: 'SempreStudiosServices.pdf',  // Ensure the path is correct
        };
    },

    methods: {
        redirect() {
            // Redirect to the PDF URL after the iframe has loaded
            window.location.href = this.pdfUrl;
        }
    },

    mounted() {
        // No actions needed here; the iframe's load event will handle the necessary actions
    }
}
</script>