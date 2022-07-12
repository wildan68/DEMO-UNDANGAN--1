<template>
<div class="flex h-[750px] w-full py-[17px] px-[50px] relative">
    <div class="flow-bg"></div>
    <div class="flex flex-col w-full">
        <div class="title whitespace-pre-line text-[42px] font-[600] text-pink-glamour">Cara Pemesanan
            Undangan Digital di MyInvitee
        </div>
        <span class="mt-[20px] text-[18px] text-black-light whitespace-pre-line">Berikut alur pembuatan / pemesanan undangan digital
            di MyInvitee
        </span>
        <div class="mt-[83px] w-full flex gap-[60px] justify-center text-white">
            <div class="text-[24px] flex flex-col gap-[20px] items-center">
                <div class="item-list w-[200px] h-[200px] rounded-[24px] bg-white border-[3px] border-pink-glamour flex justify-center items-center">
                    <img src="/landing/cart.png" />
                </div>
                <span class="text-center">Pilih<br>Template</span>
            </div>
            <div class="text-[24px] flex flex-col gap-[20px] items-center">
                <div class="item-list w-[200px] h-[200px] rounded-[24px] bg-white border-[3px] border-pink-glamour flex justify-center items-center">
                    <img src="/landing/atm.png" />
                </div>
                <span class="text-center">Lakukan<br>Pembayaran</span>
            </div>
            <div class="text-[24px] flex flex-col gap-[20px] items-center">
                <div class="item-list w-[200px] h-[200px] rounded-[24px] bg-white border-[3px] border-pink-glamour flex justify-center items-center">
                    <img src="/landing/proses.png" />
                </div>
                <span class="text-center">Proses<br>Pembuatan</span>
            </div>
            <div class="text-[24px] flex flex-col gap-[20px] items-center">
                <div class="item-list w-[200px] h-[200px] rounded-[24px] bg-white border-[3px] border-pink-glamour flex justify-center items-center">
                    <img src="/landing/done.png" />
                </div>
                <span class="text-center">Link Website<br>Siap Dikirim</span>
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
.title {
    position: relative;
}

.title::before {
    content: '';
    position: absolute;
    display: block;
    background-color: var(--pink-glamour);
    opacity: 0.2;
    width: 194px;
    height: 100px;
    top: 70px;
    left: -50px;
}

.flow-bg {
    background-image: url('/landing/flow-bg.svg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 491px;
    z-index: -1;
}
</style>
