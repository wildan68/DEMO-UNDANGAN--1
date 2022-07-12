<template>
<div class="gallery-section bg-cream text-cream-dark lg:h-screen h-auto w-full relative flex lg:px-[100px] px-[24px] py-[30px]">
    <div class="bungaTop"></div>
    <div class="bungaBottomLeft"></div>
    <div class="flex gap-[40px] flex-col">
        <div class="font-2 text-orange lg:text-[80px] text-[48px]">
            Gallery Foto
        </div>
        <div v-swiper:mySwiper="swiper" class="swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide bg-white h-[90%] text-black overflow-hidden rounded-[14px] flex justify-center" v-for="(data, index) in imageList" :key="index">
                    <img :src="data.url" class="w-full h-full object-cover object-center" />
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</div>
</template>

<script>
//import "swiper/swiper-bundle.css";

export default {
    data() {
        return {
            swiper: {
                slidesPerView: 3,
                spaceBetween: 20,
                breakpoints: {
                    768: {
                        slidesPerView: 1,
                    }
                },
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '">' + '◉' + '</span>';
                    },
                },
            },
            imageList: [{
                    url: '/img/foto1.png',
                },
                {
                    url: '/img/foto2.png',
                },
                {
                    url: '/img/foto3.png',
                },
                {
                    url: '/img/foto4.png',
                },
                {
                    url: '/img/foto5.png',
                }
            ]
        }
    },
}
</script>

<style scoped>

.bungaTop {
    background-image: url('/decoration/Bunga2Top.png');
    background-size: 80%;
    background-position-y: top;
    background-position-x: right;
    background-repeat: no-repeat;
    position: absolute;
    width: 633px;
    height: 195px;
    top: 0;
    right: 0;
}

.swiper {
    overflow: hidden;
    height: 30em;
    display: flex;
}

.swiper .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
}

.bungaBottomLeft {
    background-image: url('/decoration/BungaBottomLeft.png');
    background-size: 70%;
    background-position-y: bottom;
    background-position-x: left;
    background-repeat: no-repeat;
    position: absolute;
    width: 500px;
    height: 550px;
    bottom: 0;
    left: 0;
}

@media (max-width: 1000px) {
    .bungaTop {
        background-image: url('/decoration/Bunga2Top.png');
        background-size: 80%;
        background-position-y: top;
        background-position-x: right;
        background-repeat: no-repeat;
        position: absolute;
        width: 233px;
        height: 95px;
        top: 0;
        right: 0;
    }

    .bungaBottomLeft {
        background-image: url('/decoration/BungaBottomLeft.png');
        background-size: 70%;
        background-position-y: bottom;
        background-position-x: left;
        background-repeat: no-repeat;
        position: absolute;
        width: 200px;
        height: 250px;
        bottom: 0;
        left: 0;
    }

    .swiper {
        overflow: hidden;
        height: 30em;
        display: flex;
    }

    .swiper .swiper-slide {
        width: 100% !important;
    }
}
</style>
