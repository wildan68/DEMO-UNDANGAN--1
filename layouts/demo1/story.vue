<template>
<div class="story-section bg-cream text-cream-dark lg:h-screen h-auto w-full relative flex lg:px-[100px] py-[30px] px-[24px]">
    <div class="bungaTopRight"></div>
    <div class="bungaBottom"></div>
    <div class="flex gap-[40px] flex-col">
        <div class="font-2 text-orange lg:text-[80px] text-[48px]">
            Cerita Cinta Kami
        </div>
        <div class="card-box flex gap-[30px] lg:flex-row flex-col w-full items-center">
            <div class="card-item w-[250px] h-auto gap-[20px] bg-white rounded-[22px] flex flex-col items-center py-[10px] px-[10px]" data-aos="flip-left">
                <span class="title text-[24px] text-orange font-2">
                    Awal Bertemu
                </span>
                <div class="flex overflow-hidden w-full h-[180px] rounded-[14px]">
                    <img src="/img/foto1.png" class="w-full h-full object-cover" />
                </div>
                <span class="text-black-light text-[14px]">
                    Tulis Cerita awal bertemu disini
                </span>
            </div>
            <div class="card-item w-[250px] h-auto gap-[20px] bg-white rounded-[22px] flex flex-col items-center py-[10px] px-[10px]" data-aos="flip-left">
                <span class="title text-[24px] text-orange font-2">
                    Lamaran
                </span>
                <div class="flex overflow-hidden w-full h-[180px] rounded-[14px]">
                    <img src="/img/foto2.png" class="w-full h-full object-cover" />
                </div>
                <span class="text-black-light text-[14px]">
                    Tulis Cerita lamaranmu disini
                </span>
            </div>
            <div class="card-item w-[250px] h-auto gap-[20px] bg-white rounded-[22px] flex flex-col items-center py-[10px] px-[10px]" data-aos="flip-left">
                <span class="title text-[24px] text-orange font-2">
                    Akad Nikah
                </span>
                <div class="flex overflow-hidden w-full h-[180px] rounded-[14px]">
                    <img src="/img/foto3.png" class="w-full h-full object-cover" />
                </div>
                <span class="text-black-light text-[14px]">
                    Cerita menuju Akad Nikah kamu disini
                </span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.bungaTopRight {
    background-image: url('/decoration/BungaTopRight.png');
    background-size: 70%;
    background-position-y: 0;
    background-position-x: right;
    background-repeat: no-repeat;
    position: absolute;
    width: 500px;
    height: 550px;
    top: 0;
    right: 0;
}

.card-item {
    position: relative;
    transform: rotate(-5deg);
}

.title {
    position: relative;
}

.card-item::before {
    content: '◉';
    color: var(--orange);
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 10px;
    right: 10px;
    width: 24px;
    height: 24px;
    background-color: var(--cream);
    border-radius: 100%;
}

.title::before {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    border-bottom: 2px dotted var(--orange);
    bottom: 0;
    position: absolute;
}

.bungaBottom {
    background-image: url('/decoration/Bunga2Bottom.png');
    background-size: 80%;
    background-position-y: bottom;
    background-position-x: right;
    background-repeat: no-repeat;
    position: absolute;
    width: 633px;
    height: 195px;
    bottom: 0;
    right: 0;
}

@media (max-width: 1000px) {
    .bungaTopRight {
        background-image: url('/decoration/BungaTopRight.png');
        background-size: 70%;
        background-position-y: 0;
        background-position-x: right;
        background-repeat: no-repeat;
        position: absolute;
        width: 200px;
        height: 250px;
        top: 0;
        right: 0;
    }

    .bungaBottom {
        background-image: url('/decoration/Bunga2Bottom.png');
        background-size: 80%;
        background-position-y: bottom;
        background-position-x: right;
        background-repeat: no-repeat;
        position: absolute;
        width: 233px;
        height: 95px;
        bottom: 0;
        right: 0;
    }
}
</style>
