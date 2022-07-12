<template>
<div class="mainapp overflow-x-hidden">
    <Header/>
    <Name/>
    <Date1/>
    <Date2/>
    <Surah/>
    <Story/>
    <Gallery/>
    <BukuTamu/>
    <Rekening/>
</div>
</template>

<script>
import Header from '../layouts/demo2/header.vue'
import Name from '../layouts/demo2/name.vue'
import Date1 from '../layouts/demo2/date1.vue'
import Date2 from '../layouts/demo2/date2.vue'
import Surah from '../layouts/demo2/surah.vue'
import Story from '../layouts/demo2/story.vue'
import Gallery from '../layouts/demo2/gallery.vue'
import BukuTamu from '../layouts/demo2/bukutamu.vue'
import Rekening from '../layouts/demo2/rekening.vue'

import aos from 'aos';
import 'aos/dist/aos.css';

import '../assets/css/demo2.css'

export default {
    components: {
        Header,
        Name,
        Date1,
        Date2,
        Surah,
        Story,
        Gallery,
        BukuTamu,
        Rekening,
    },
    mounted() {
        aos.init();
    }
}
</script>
