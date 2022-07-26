<script setup>
import Card from './Card.vue'
</script>

<template>
    <article class="lg:px-36 px-4 py-4">
        <h1 class="font-bold text-2xl text-white mb-2">Your Events</h1>

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