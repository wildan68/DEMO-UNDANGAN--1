<template>
<div class="bg name-section bg-green-cream text-cream-dark lg:h-screen h-auto w-full relative flex justify-center py-[30px] px-[24px]">
    <div class="bungaTopRight"></div>
    <div class="bungaBottomLeft"></div>
    <div class="photo-section z-40 lg:w-[80%] w-full flex lg:flex-row flex-col">
        <div class="flex-1 flex flex-col items-center" data-aos="fade-right">
            <img src="/img/PhotoLakiLaki.png" width="300px" />
            <span class="mt-[-0.5em] font-3 text-[100px] text-orange text-center">
                John Luis
            </span>
            <span class="font-3 text-[36px] text-cream-dark">
                Putra dari keluarga
            </span>
            <span class="font-3 text-[36px] text-cream-dark text-center">
                Bapak Robert & Ibu Marsinah
            </span>
            <div class="button-sosmed flex gap-[20px] mt-[20px]">
                <a href="https://www.facebook.com/">
                    <button class="btn-sosmed">
                        <i class="bi bi-facebook"></i>
                    </button>
                </a>
                <a href="https://www.instagram.com/">
                    <button class="btn-sosmed">
                        <i class="bi bi-instagram"></i>
                    </button>
                </a>
            </div>
        </div>
        <span class="font-3 text-cream-dark lg:text-[200px] text-[80px] flex items-center lg:justify-start justify-center lg:mt-0 lg:mb-0 mt-[20px] mb-[20px]">&</span>
        <div class="flex-1 flex flex-col items-center justify-end" data-aos="fade-left">
            <img src="/img/PhotoPerempuan.png" width="300px" />
            <span class="mt-[-0.5em] font-3 text-[100px] text-orange text-center">
                Angelina
            </span>
            <span class="font-3 text-[36px] text-cream-dark">
                Putri dari keluarga
            </span>
            <span class="font-3 text-[36px] text-cream-dark text-center">
                Bapak Warsito & Ibu Rumayah
            </span>
            <div class="button-sosmed flex gap-[20px] mt-[20px]">
                <a href="https://www.facebook.com/">
                    <button class="btn-sosmed">
                        <i class="bi bi-facebook"></i>
                    </button>
                </a>
                <a href="https://www.instagram.com/">
                    <button class="btn-sosmed">
                        <i class="bi bi-instagram"></i>
                    </button>
                </a>
            </div>
        </div>
    </div>
</div>
</template>

<script>


export default {
    mounted() {
        
    }

}
</script>

<style scoped>


.bungaTopRight {
    background-image: url('/decoration/demo2/bunga2top.png');
    background-size: 90%;
    background-position-y: 0;
    background-position-x: right;
    background-repeat: no-repeat;
    position: absolute;
    width: 500px;
    height: 550px;
    top: 0;
    right: 0;
}

.bungaBottomLeft {
    background-image: url('/decoration/demo2/bunga2bot.png');
    background-size: 90%;
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
    .bungaTopRight {
        background-position-y: 0;
        background-position-x: right;
        background-repeat: no-repeat;
        position: absolute;
        width: 200px;
        height: 250px;
        top: 0;
        right: 0;
    }

    .bungaBottomLeft {
        background-position-y: bottom;
        background-position-x: left;
        background-repeat: no-repeat;
        position: absolute;
        width: 200px;
        height: 250px;
        bottom: 0;
        left: 0;
    }
}
</style>
