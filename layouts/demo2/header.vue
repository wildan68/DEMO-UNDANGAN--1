<template>
<div class="header w-full h-screen">
    <div class="overlay flex flex-col gap-[10px] justify-end items-center py-[50px]">
        <span class="font-1 lg:text-[68px] text-[24px]">The Wedding Of</span>
        <span class="font-2 lg:text-[100px] text-[28px]">John & Angel</span>
        <span class="font-1 lg:text-[48px] text-[18px]">Senin, 10 Desember 2022</span>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
    background-color: #f5f5f5;
    background-image: url('/img/bg_header.jpg');
    background-size: cover;
    background-position-y: 0;
    background-position-x: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
}

.header .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(236, 163, 3);
    background: linear-gradient(180deg, rgba(236, 163, 3, 0) 79%, rgba(120, 78, 0, 1) 100%);
}
</style>
