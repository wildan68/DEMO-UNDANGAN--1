<template>
<div class="flex w-full py-[17px] px-[50px] top-0 sticky z-50 bg-white" ref="navbar">
    <div class="flex-1 flex justify-start items-center">
        Logo
    </div>
    <div class="flex-1 flex justify-between items-center">
        <div class="flex">
            Fitur
        </div>
        <div class="flex">
            Paket Harga
        </div>
        <div class="flex">
            Cara Pemesanan
        </div>
        <div class="flex">
            Promo
        </div>
    </div>
    <div class="flex-1 flex justify-end">
        <button class="btn-primary-landing bg-pink-glamour text-white">
            Pesan Sekarang
        </button>
    </div>
</div>
</template>

<script>
export default {
    mounted() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                this.$refs.navbar.classList.add('navbar-anim')
                this.$refs.navbar.classList.add('border-b-2')
                this.$refs.navbar.classList.add('border-pink-glamour')
            } else {
                this.$refs.navbar.classList.remove('navbar-anim')
                this.$refs.navbar.classList.remove('border-b-2')
                this.$refs.navbar.classList.remove('border-pink-glamour')
            }
        })
    }
}
</script>

<style scoped>
.navbar-anim {
    animation: navbarAnim 0.8s ease-in-out;
}

@keyframes navbarAnim {
    from {
        transform: translateY(-100%);
    }
    to {
        transform: translateY(0);
    }
}
</style>