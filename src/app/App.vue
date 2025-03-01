<script setup lang="ts">
import TheFooter from '@/components/base/footers/TheFooter.vue';
import TheHeader from '@/components/base/headers/TheHeader.vue';
import SvgManager from '@/components/base/svg/SvgManager.vue';

</script>

<template>
    <div class="wrapper">
        <TheHeader/>
            <main class="main">
                <RouterView/>
            </main>
        <TheFooter/>
    </div>

    <SvgManager/>
</template>

<style scoped>

</style>
