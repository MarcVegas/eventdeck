<script setup>
defineProps(['text'])
</script>

<template>
<button type="button" class="focus:outline-none inline-flex items-center text-white focus:ring-2 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
    {{text}}
</button>
</template>