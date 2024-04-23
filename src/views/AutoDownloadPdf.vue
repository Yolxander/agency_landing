<template>
    <div>
        <!-- No visible content needed, as this page just triggers a download -->
    </div>
</template>

<script>
export default {
    name: 'AutoDownloadPdf',

    mounted() {
        // Redirect to the PDF URL
        window.location.href = 'SempreStudiosServices.pdf';  // Ensure the path is correct
    }
}
</script>