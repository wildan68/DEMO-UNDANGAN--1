<template>
    <div class="mainapp text-black">
        <Navbar/>
        <Header/>
        <Flow/>
        <Template/>
    </div>
</template>

<script>
import Navbar from '@/layouts/landingpage/navbar.vue'
import Header from '@/layouts/landingpage/header.vue'
import Flow from '@/layouts/landingpage/flow.vue'
import Template from '@/layouts/landingpage/template.vue'

import '../assets/css/main.css'

export default {
    components: {
        Navbar,
        Header,
        Flow,
        Template,
    },
    header() {
        return {
            title: 'Landing Page',
            description: 'Landing Page',
            keywords: 'Landing Page',
        }
    },
}
</script>