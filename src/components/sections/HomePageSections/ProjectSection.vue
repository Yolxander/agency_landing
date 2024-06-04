<template>


        <div class="project-section">
            <div class="card">
                <div class="card-header">
                    <div class="card-tag">Digital marketing</div>
                    <div class="card-title">Why We Collect User’s Data</div>
                    <div class="card-footer">
                        <div class="read-more">Read more</div>
                        <div class="icon-container">
                            <div class="icon"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="image"></div>
                <div class="card-header">
                    <div class="card-tag">User testing</div>
                    <div class="card-title">Creative landing page</div>
                    <div class="card-footer">
                        <div class="read-more">Read more</div>
                        <div class="icon-container">
                            <div class="icon"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

</template>

<script>
export default {
    name: "ProjectsSection"
}
</script>

<style scoped>


.text-section{
    width: 412px;
    height: 290px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 24px;
    display: inline-flex;
}

.project-section {
    width: 25%;
    height: fit-content;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 32px;
    display: flex;
}

.card {
    width: 100%;
    padding: 24px;
    border-radius: 4px;
    overflow: hidden;
    border: 1px #A1AEBF solid;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 24px;
    display: flex;
}

.card-header {
    align-self: stretch;
    height: 116px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
    display: flex;
}

.card-tag {
    background: #FFA800;
    border-radius: 4px;
    justify-content: flex-start;
    align-items: flex-start;
    display: inline-flex;
    padding: 4px 8px;
    color: #1A365D;
    font-size: 12px;
    font-family: Archivo;
    font-weight: 600;
    text-transform: uppercase;
    line-height: 16px;
    letter-spacing: 0.24px;
    word-wrap: break-word;
}

.card-title {
    align-self: stretch;
    color: white;
    font-size: 24px;
    font-family: Quicksand;
    font-weight: 700;
    line-height: 32px;
    word-wrap: break-word;
}

.card-footer {
    border-radius: 8px;
    overflow: hidden;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: flex;
}

.read-more {
    justify-content: center;
    align-items: center;
    gap: 4px;
    display: inline-flex;
    color: #728095;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.32px;
    word-wrap: break-word;
}

.icon-container {
    width: 20px;
    height: 20px;
    padding: 2px;
    justify-content: center;
    align-items: center;
    display: flex;
}

.icon {
    width: 16px;
    height: 16px;
    position: relative;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex;
    background: #728095;
}

.image {
    width: 365px;
    height: 142px;
    position: relative;
    background: #8474C4;
    border-radius: 4px;
}



</style>