<template>
    <div class="gradient-banner" ref="gradientBgAnimation">
        <div>
            <div class="text-wrapper">
                <div>
                    <h2 class="display-heading-style">{{ title }}</h2>
                </div>
                <div>
                    <p class="display-text-style">{{ text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
    },
};
</script>

<style lang="scss">
@keyframes RotateBg {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.gradient-banner {
    background: linear-gradient(194.53deg,
            rgba(243, 238, 231, 0.8) -4.22%,
            rgba(253, 249, 223, 0.8) 11%,
            rgba(218, 196, 162, 0.8) 57.17%,
            rgba(172, 139, 85, 0.8) 96.52%);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;

    &:before {
        content: "";
        background: linear-gradient(194.53deg,
                rgba(243, 238, 231, 0.8) -4.22%,
                rgba(253, 249, 223, 0.8) 11%,
                rgba(218, 196, 162, 0.8) 57.17%,
                rgba(172, 139, 85, 0.8) 96.52%);
        animation: 10s linear infinite RotateBg;
        position: absolute;
        top: -50vw;
        left: -50vw;
        width: 200vw;
        height: 250vw;

        @media (orientation: portrait) {
            top: -50vh;
            left: -50vh;
            width: 200vh;
            height: 200vh;
        }
    }

    .text-wrapper {
        min-height: 80vh;
        position: relative;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        max-width: 95%;
        margin-left: auto;
        margin-right: auto;

        @media (max-width: $collapse-bp) {
            max-width: 90vw;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 12px;
            text-align: center;
        }

        >* {
            grid-column: span 6;
            place-self: center;
        }

        >*:first-child {
            text-align: center;
        }

        h2 {

            @media (max-width: $collapse-bp) {
                text-align: center;
                font-size: 86px;
                line-height: 79px;
                letter-spacing: 0.02em;
                margin-bottom: 64px;
                width: 100%;
            }
        }

        p {
            @media (min-width: $collapse-bp) {
                max-width: 476px;
                margin: 0 auto;
                // margin-left: 200px;
            }

            @media (max-width: $collapse-bp) {
                // max-width: 80%;
                // margin-right: auto;
            }
        }
    }

}
</style>