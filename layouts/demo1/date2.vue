<template>
<div class="date-section bg-cream text-cream-dark lg:h-screen h-auto w-full relative flex justify-center py-[30px] px-[24px]">
    <div class="bungaTop"></div>
    <div class="bungaTengahBawah"></div>
    <div class="flex justify-around gap-[30px] lg:flex-row flex-col">
        <div class="flex flex-1 bg-black-dark border-[10px] border-yellow lg:w-[364px] w-full h-full rounded-[22px] items-center flex-col py-[30px] gap-[20px] px-[24px]" data-aos="zoom-in-down">
            <span class="font-3 text-[58px]">Akad Nikah</span>
            <div class="w-[80px] h-[80px] rounded-full border-[5px] border-cream-dark inline-flex items-center justify-center text-[24px]">
                <i class="bi bi-calendar2-heart-fill"></i>
            </div>
            <div class="flex flex-col gap-[10px] items-center">
                <span class="font-3 text-[24px]">Minggu, 10 Desember 2022</span>
                <span class="font-3 text-[24px] text-white">Pukul 08:00 WIB</span>
            </div>
            <div class="w-[80px] h-[80px] rounded-full border-[5px] border-cream-dark inline-flex items-center justify-center text-[24px]">
                <i class="bi bi-map-fill"></i>
            </div>
            <div class="flex flex-col gap-[10px] items-center">
                <span class="font-3 text-[24px]">Masjid Mustofa</span>
                <span class="font-3 text-[24px] text-white">Desa Sukamakmur Tegal</span>
            </div>
            <div class="flex">
                <button class="btn-common text-black-dark lg:text-[18px] text-[14px]">
                    <i class="bi bi-geo-alt-fill"></i> Lokasi Akad
                </button>
            </div>
        </div>
        <div class="flex flex-1 bg-black-dark border-[10px] border-yellow lg:w-[364px] w-full h-full rounded-[22px] items-center flex-col py-[30px] gap-[20px] px-[24px]" data-aos="zoom-in-left">
            <span class="font-3 text-[58px]">Resepsi</span>
            <div class="w-[80px] h-[80px] rounded-full border-[5px] border-cream-dark inline-flex items-center justify-center text-[24px]">
                <i class="bi bi-calendar2-heart-fill"></i>
            </div>
            <div class="flex flex-col gap-[10px] items-center">
                <span class="font-3 text-[24px]">Senin, 11 Desember 2022</span>
                <span class="font-3 text-[24px] text-white">Pukul 08:00 WIB - Selesai</span>
            </div>
            <div class="w-[80px] h-[80px] rounded-full border-[5px] border-cream-dark inline-flex items-center justify-center text-[24px]">
                <i class="bi bi-map-fill"></i>
            </div>
            <div class="flex flex-col gap-[10px] items-center">
                <span class="font-3 text-[24px]">Kediaman Mempelai Wanita</span>
                <span class="font-3 text-[24px] text-white text-center">Gg. Randujati RT 03 / 04 Desa Sukamakmur, Kabupaten Tegal</span>
            </div>
            <div class="flex">
                <button class="btn-common text-black-dark lg:text-[18px] text-[14px]">
                    <i class="bi bi-geo-alt-fill"></i> Lokasi Resepsi
                </button>
            </div>
        </div>
        <div class="flex whitespace-pre-line lg:text-[48px] text-[35px] text-center font-3 z-40">
            Ungkapan terima kasih yang tulus dari kami
            apabila Bapak/Ibu/Teman-teman
            berkenan hadir dan
            memberikan do’a restu.
        </div>
    </div>
</div>
</template>

<script>
export default {

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

.bungaTengahBawah {
    background-image: url('/decoration/BungaTengahBawah.png');
    background-size: 70%;
    background-position-y: bottom;
    background-position-x: right;
    background-repeat: no-repeat;
    position: absolute;
    width: 593px;
    height: 497px;
    bottom: 15px;
    right: 0;
}

@media (max-width: 1000px) {
    .bungaTop {
        background-image: url('/decoration/Bunga2Top.png');
        background-size: 80%;
        background-position-y: top;
        background-position-x: right;
        background-repeat: no-repeat;
        position: absolute;
        width: 433px;
        height: 95px;
        top: 0;
        right: 0;
    }

    .bungaTengahBawah {
        background-image: url('/decoration/BungaTengahBawah.png');
        background-size: 70%;
        background-position-y: bottom;
        background-position-x: right;
        background-repeat: no-repeat;
        position: absolute;
        width: 293px;
        height: 197px;
        bottom: 15px;
        right: 0;
    }

}
</style>
