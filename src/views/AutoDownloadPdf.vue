<template>
    <div>
        <!-- Content if needed, otherwise this can be empty -->
    </div>
</template>

<script>
export default {
    name: 'AutoDownloadPdf',

    mounted() {
        const link = document.createElement('a');
        link.href = '/SempreStudiosServices.pdf';  // Adjust the path to your PDF file
        link.setAttribute('download', 'SempreStudiosServices.pdf');  // Optional: Set the download file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}
</script>