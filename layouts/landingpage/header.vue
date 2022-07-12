<template>
<div class="header px-[50px] flex text-white py-[50px] relative">
    <div class="content flex-1">
        <span class="text-[48px] font-[600] whitespace-pre-line">MyInvite Situs Penyedia
            Undangan Digital
        </span>
        <span class="text-[18px] text-pink-glamour-light whitespace-pre-line mt-[30px]">Yuk saatnya beralih ke Undangan Digital Online, Sebar
            undanganmu untuk siapa saja, kapan saja, dan dimana saja
            tanpa ada batasan. Bisa dibuka di Smartphone, Desktop
            maupun Laptop, Asyik bukan. Yuk pesan sekarang undanganmu
            di MyInvitee Harga Terjangkau dan banya Promo Menarik Pastinya</span>
        <div class="flex">
            <button class="btn-primary-landing bg-white text-pink-glamour mt-[50px]">
                Ya, Aku Mau
            </button>
        </div>
    </div>
    <div class="flex-1 icon flex justify-end">
        <img src="/landing/couple.png" class="w-[80%] h-[80%]"/>
    </div>
    <div class="line-down"></div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
    background-image: url('/landing/header-bg.svg');
    background-position-y: -150px;
    background-size: cover;
    background-repeat: no-repeat;
    height: calc(100vh);
}

.line-down {
    display: flex;
    justify-content: center;
    background-image: url('/landing/line-down.svg');
    background-repeat: no-repeat;
    background-size: 50%;
    background-position: center;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
}
</style>
