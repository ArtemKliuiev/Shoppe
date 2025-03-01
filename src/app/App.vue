<script setup lang="ts">
import TheFooter from '@/components/base/TheFooter.vue';
import TheHeader from '@/components/base/TheHeader.vue';
import SvgManager from '@/components/base/SvgManager.vue';

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
