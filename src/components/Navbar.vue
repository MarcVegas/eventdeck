<script setup>

</script>

<template>
    <div class="h-20 border-gray-500 border-b-[1px] px-4 lg:px-36 sm:px-4 py-4 overflow-hidden">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
            <div>
                <h1 class="text-white font-bold text-2xl">EVENT DECK</h1>
            </div>
            <div class="flex items-center md:order-2">
                <button type="button"
                    class="flex mr-4 text-sm bg-gray-800 rounded-full  md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown"
                    data-dropdown-placement="bottom">
                    <span class="sr-only">Open user menu</span>
                    <img class=" w-12 rounded-full" src="../assets/Avatar.png" alt="user photo">
                </button>
                <!-- Dropdown menu -->
                <div class="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                    id="user-dropdown">
                    <div class="py-3 px-4">
                        <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                        <span
                            class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>