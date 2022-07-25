<script setup>
defineProps(['title'])

</script>

<template>
<div class="p-6 bg-[#343434] rounded-lg shadow-md">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {{title}}</h5>
    <slot></slot>
</div>
</template>