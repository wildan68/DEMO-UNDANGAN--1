<template>
<div class="date-section bg-cream text-cream-dark lg:h-screen h-auto w-full relative flex justify-center py-[30px] items-center px-[24px]">
    <div class="bungaTengahAtas"></div>
    <div class="bungaBottomRight"></div>
    <div class="lg:w-[50%] w-full z-40 flex flex-col gap-[20px] items-center">
        <span class="text-center lg:text-[48px] text-[24px] font-3">
            "Dan Diantara tanda-tanda kebesaran-Nya ialah diciptakan-Nya untukmu pasangan hidup dari jenismu sendiri supaya kamu mendapatkan ketenangan hati dan dijadikan-Nya kasih sayang diantara kamu sesungguhnya yang demikian menjadi tanda-tanda kebesaran-Nya bagi orang-orang yang berfikir"
        </span>
        <span class="text-orange lg:text-[24px] text-[18px] font-bold">
            (Surat Ar-Ruum : 21)
        </span>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.bungaTengahAtas {
    background-image: url('/decoration/BungaTengahAtas.png');
    background-size: 70%;
    background-position-y: top;
    background-position-x: left;
    background-repeat: no-repeat;
    position: absolute;
    width: 593px;
    height: 497px;
    left: 0;
    top: 15px;
}

.bungaBottomRight {
    background-image: url('/decoration/BungaBottomRight.png');
    background-size: 70%;
    background-position-y: bottom;
    background-position-x: right;
    background-repeat: no-repeat;
    position: absolute;
    width: 500px;
    height: 550px;
    bottom: 0;
    right: 0;
}

@media (max-width: 1000px) {
    .bungaTengahAtas {
    background-image: url('/decoration/BungaTengahAtas.png');
    background-size: 70%;
    background-position-y: top;
    background-position-x: left;
    background-repeat: no-repeat;
    position: absolute;
    width: 293px;
    height: 197px;
    left: 0;
    top: 15px;
}

.bungaBottomRight {
    background-image: url('/decoration/BungaBottomRight.png');
    background-size: 70%;
    background-position-y: bottom;
    background-position-x: right;
    background-repeat: no-repeat;
    position: absolute;
    width: 200px;
    height: 250px;
    bottom: 0;
    right: 0;
}
}
</style>
