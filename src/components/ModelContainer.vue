<template>
    <div id="modal-container" :class="buttonId" @click="handleModalClick">
        <div class="modal-background">
            <div class="modal">
                <h2>I'm a Modal</h2>
                <p>Hear me roar.</p>
                <svg class="modal-svg" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none">
                    <rect x="0" y="0" fill="none" width="226" height="162" rx="3" ry="3"></rect>
                </svg>
            </div>
        </div>
    </div>
    <div class="content">
        <h1>Modal Animations</h1>
        <div class="buttons">
            <div id="four" class="button" @click="handleButtonClick('four')">Blow Up</div><br>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            buttonId: '',
            modalActive: false,
        };
    },
    methods: {
        handleButtonClick(id) {
            this.buttonId = id;
            this.modalActive = true;
        },
        handleModalClick() {
            this.buttonId += ' out'; // Add 'out' class to trigger the closing animation
            this.modalActive = false;
        },
    },
};
</script>

<style scoped>


#modal-container {
    position:fixed;
    display:table;
    height:100%;
    width:100%;
    top:0;
    left:0;
    transform:scale(0);
    z-index:1;
    &.four {
        z-index:0;
        transform:scale(1);
        .modal-background {
            background:rgba(0,0,0,.7);
            .modal {
                animation: blowUpModal .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
            }
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
        display:table-cell;
        background:rgba(0,0,0,.8);
        text-align:center;
        vertical-align:middle;
        .modal {
            background:white;
            padding:50px;
            display:inline-block;
            border-radius:3px;
            font-weight:300;
            position:relative;
            h2 {
                font-size:25px;
                line-height:25px;
                margin-bottom:15px;
            }
            p {
                font-size:18px;
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
    }
}

.content {
    min-height:100%;
    height:100%;
    background:white;
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

</style>