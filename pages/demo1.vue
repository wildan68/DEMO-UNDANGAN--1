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
import Header from '../layouts/demo1/header.vue'
import Name from '../layouts/demo1/name.vue'
import Date1 from '../layouts/demo1/date1.vue'
import Date2 from '../layouts/demo1/date2.vue'
import Surah from '../layouts/demo1/surah.vue'
import Story from '../layouts/demo1/story.vue'
import Gallery from '../layouts/demo1/gallery.vue'
import BukuTamu from '../layouts/demo1/bukutamu.vue'
import Rekening from '../layouts/demo1/rekening.vue'

import aos from 'aos';
import 'aos/dist/aos.css';

import '../assets/css/demo1.css'

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
