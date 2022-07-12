<template>
<div class="flex h-auto w-full py-[50px] px-[50px] relative">
    <div class="template-bg"></div>
    <div class="flex flex-col w-full">
        <div class="title whitespace-pre-line text-[42px] font-[600] text-pink-glamour">Template Demo
        </div>
        <span class="mt-[20px] text-[18px] text-black-light whitespace-pre-line">Pilih Varian Demo yang cocok untuk
            undangan kamu
        </span>
        <div class="mt-[50px] flex gap-[80px] w-full justify-center">
            <div class="flex flex-col gap-[20px]">
                <div class="w-[320px] h-[420px] bg-yellow"></div>
                <div class="flex justify-center">
                    <button class="btn-primary-landing h-[60px] bg-white text-pink-glamour">
                        Lihat Preview
                    </button>
                </div>
            </div>
            <div class="flex flex-col gap-[20px]">
                <div class="w-[320px] h-[420px] bg-yellow"></div>
                <div class="flex justify-center">
                    <button class="btn-primary-landing h-[60px] bg-white text-pink-glamour">
                        Lihat Preview
                    </button>
                </div>
            </div>
            <div class="flex flex-col gap-[20px]">
                <div class="w-[320px] h-[420px] bg-yellow"></div>
                <div class="flex justify-center">
                    <button class="btn-primary-landing h-[60px] bg-white text-pink-glamour">
                        Lihat Preview
                    </button>
                </div>
            </div>
        </div>
        <div class="flex justify-center mt-[50px]">
            <button class="btn-primary-landing h-[60px] bg-pink-glamour text-white">
                Lihat Lebih Banyak
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

.template-bg {
    background-image: url('/landing/template-bg.svg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    bottom: 140px;
    left: 0;
    right: 0;
    height: 391px;
    z-index: -1;
}
</style>
