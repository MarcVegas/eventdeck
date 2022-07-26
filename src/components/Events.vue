<script setup>
import Card from './Card.vue'
import Button from './Button.vue'


</script>

<template>
    <article class="lg:px-36 px-4 py-4">
        <h1 class="font-bold text-2xl text-white mb-2">Your Events</h1>
        <div class="flex justify-between mt-2">
            <div class="lg:basis-1/3">
                <form>
                    <label for="default-search"
                        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                    <div class="relative">
                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </div>
                        <input type="search" id="default-search"
                            class="block p-4 pl-10 w-full text-sm rounded-lg border focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search Mockups, Logos..." required>
                        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </form>
            </div>
            <Button text="Create Event" :class="['bg-green-700', 'hover:bg-green-800', 'focus:ring-green-300']"></Button>
        </div>
        <div class="mt-2">
            <div class="flex flex-col gap-2 mt-4">
                <div class="flex lg:flex-row flex-col gap-4 mb-6">
                    <Card title="Line Chart" :class="['lg:max-w-lg','lg:basis-1/2']">
                        <line-chart :data="{'2021-01-01': 11, '2021-01-02': 6}"></line-chart>
                    </Card>
                    <Card title="Bar Chart" :class="['lg:max-w-lg', 'lg:basis-1/2']">
                        <bar-chart :data="[['Work', 32], ['Play', 1492]]"></bar-chart>
                    </Card>
                </div>
                <div class="flex ">
                    <Card title="Area Chart" :class="['lg:grow']">
                        <area-chart :data="data"></area-chart>
                    </Card>
                </div>
            </div>
        </div>
    </article>
</template>