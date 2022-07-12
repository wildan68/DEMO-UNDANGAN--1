<template>
<div class="guest-book-section bg-black-light text-gray-light h-auto w-full relative flex lg:px-[100px] px-[24px] py-[30px]">
    <div class="content items-center w-full flex flex-col gap-[20px]">
        <span class="font-2 text-yellow lg:text-[55px] text-[24px]">
            Buku Tamu
        </span>
        <span class="font-3 lg:text-[24px] text-[18px] text-center">
            Berikan Doa / Ucapan Terbaik Anda<br>Kepada Kedua Mempelai
        </span>
        <div class="lg:rounded-[14px] rounded-[8px] lg:border-[5px] border-[3px] border-yellow text-yellow text-[14px] lg:w-[500px] w-full lg:p-[40px] p-[10px] text-center">
            Segala komentar dan tulisan yang anda berikan adalah cerminan dari diri pribadi Anda! Terima kasih.
        </div>
        <div class="w-full border-[5px] border-yellow h-auto p-[30px] rounded-[14px] flex flex-col gap-[10px]">
            <b>Ucapan Saya</b>
            <input type="text" class="w-full" placeholder="Nama">
            <textarea class="w-full h-[100px]" placeholder="Tulis ucapan Anda disini"></textarea>
            <div class="flex gap-[20px] lg:flex-row flex-col">
                <select>
                    <option selected disabled>Konfirmasi Kehadiran</option>
                    <option>Hadir</option>
                    <option>Tidak Hadir</option>
                </select>
                <button class="btn-common text-black">
                    KIRIM
                </button>
            </div>
        </div>
        <span class="font-2 text-yellow lg:text-[48px] text-[24px] text-center">
            Konfirmasi kehadiran<br>Melalui Whatsapp
        </span>
        <div class="w-full border-[5px] border-yellow h-auto p-[30px] rounded-[14px] flex flex-col gap-[10px]">
            <input type="text" class="w-full" placeholder="Nama">
            <textarea class="w-full h-[100px]" placeholder="Tulis ucapan Anda disini"></textarea>
            <div class="flex gap-[20px] lg:flex-row flex-col">
                <select>
                    <option selected disabled>Konfirmasi Kehadiran</option>
                    <option>Hadir</option>
                    <option>Tidak Hadir</option>
                </select>
                <button class="btn-common text-black">
                    KONFIRMASI VIA WHATSAPP
                </button>
            </div>
        </div>
        <span class="lg:text-[24px] text-[18px] font-1 lg:w-[50%] w-full text-center">
            Ucapan selamat dan kebahagiaan bisa dari mana saja. Tanpa jabatan-jabatan tangan atau pelukan-pelukan hangat, masih ada simpul-simpul senyum dan doa-doa baik yang kami harapkan.
        </span>
    </div>
</div>
</template>

<script>
export default {

}
</script>
