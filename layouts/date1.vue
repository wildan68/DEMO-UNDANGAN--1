<template>
<div class="date-section bg-cream text-cream-dark h-auto w-full relative flex justify-center py-[30px] px-[24px]">
    <div class="bungaTopLeft"></div>
    <div class="bungaBottom"></div>
    <div class="line-top"></div>
    <div class="content text-[48px] flex flex-col w-full text-center mt-[40px]">
        <span class="font-3 whitespace-pre-line">
            Yang Insya Allah akan dilaksanakan pada
        </span>
        <span class="font-2 lg:text-[60px] text-[35px] text-orange">
            Senin, 12 Desember 2022
        </span>
        <span class="font-3 lg:text-[48px] text-[24px] mt-[20px]">
            Hitung Mundur Acara Resepsi
        </span>
        <div class="countdown flex justify-center lg:gap-[30px] gap-[10px] mt-[35px] lg:text-[70px] text-[24px]">
            <div class="countdown-item flex flex-col  w-[150px] lg:h-[200px] justify-center h-[100px] text-cream rounded-[20px]" data-aos="flip-up">
                <span class="font-2">
                    50
                </span>
                <span class="font-3">
                    Hari
                </span>
            </div>
            <div class="countdown-item flex flex-col  w-[150px] lg:h-[200px] justify-center h-[100px]] text-cream rounded-[20px]" data-aos="flip-down">
                <span class="font-2">
                    13
                </span>
                <span class="font-3">
                    Jam
                </span>
            </div>
            <div class="countdown-item flex flex-col  w-[150px] lg:h-[200px] justify-center h-[100px] text-cream rounded-[20px]" data-aos="flip-up">
                <span class="font-2">
                    20
                </span>
                <span class="font-3">
                    Menit
                </span>
            </div>
            <div class="countdown-item flex flex-col  w-[150px] lg:h-[200px] justify-center h-[100px] text-cream rounded-[20px]" data-aos="flip-down">
                <span class="font-2">
                    46
                </span>
                <span class="font-3">
                    Detik
                </span>
            </div>
        </div>
        <div class="flex justify-center mt-[20px]">
            <button class="btn-save-date lg:text-[24px] text-[14px] lg:py-[20px] py-[10px] lg:px-[50px] px-[30px] text-white rounded-[14px]">
                <i class="bi bi-calendar2-check-fill"></i> Simpan Acara
            </button>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.bungaTopLeft {
    background-image: url('/decoration/BungaTopLeft.png');
    background-size: 70%;
    background-position-y: top;
    background-position-x: left;
    background-repeat: no-repeat;
    position: absolute;
    width: 500px;
    height: 550px;
    top: 0;
    left: 0;
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

.line-top {
    width: 50%;
    height: 20px;
    background-color: var(--cream-dark);
    border-radius: 20px 0 0 10px;
    position: absolute;
    top: 0;
    right: 0;
}

.line-top::before {
    content: '';
    display: block;
    width: 99%;
    height: 10px;
    background-color: var(--cream-dark);
    border-radius: 0px 0 0 20px;
    position: absolute;
    bottom: -15px;
    right: 0;
}

.countdown-item {
    background: rgb(55, 51, 42);
    background: linear-gradient(34deg, rgba(55, 51, 42, 1) 18%, rgba(28, 19, 3, 1) 100%);
}

.btn-save-date {
    background: rgb(143, 108, 29);
    background: linear-gradient(317deg, rgba(143, 108, 29, 1) 18%, rgba(221, 151, 21, 1) 100%);
}

.btn-save-date:hover {
    background: rgb(113, 85, 20);
    background: linear-gradient(317deg, rgba(113, 85, 20, 1) 18%, rgba(184, 126, 18, 1) 100%);
}

@media (max-width: 1000px) {
    .bungaTopLeft {
        background-image: url('/decoration/BungaTopLeft.png');
        background-size: 70%;
        background-position-y: top;
        background-position-x: left;
        background-repeat: no-repeat;
        position: absolute;
        width: 200px;
        height: 250px;
        top: 0;
        left: 0;
    }

    .bungaBottom {
        background-image: url('/decoration/Bunga2Bottom.png');
        background-size: 80%;
        background-position-y: bottom;
        background-position-x: right;
        background-repeat: no-repeat;
        position: absolute;
        width: 433px;
        height: 95px;
        bottom: 0;
        right: 0;
    }
    .btn-save-date {
        z-index: 40;
    }
}
</style>
