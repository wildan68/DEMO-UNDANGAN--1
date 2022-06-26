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
import Header from '../layouts/header.vue'
import Name from '../layouts/name.vue'
import Date1 from '../layouts/date1.vue'
import Date2 from '../layouts/date2.vue'
import Surah from '../layouts/surah.vue'
import Story from '../layouts/story.vue'
import Gallery from '../layouts/gallery.vue'
import BukuTamu from '../layouts/bukutamu.vue'
import Rekening from '../layouts/rekening.vue'

import aos from 'aos';
import 'aos/dist/aos.css';

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
