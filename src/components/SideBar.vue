<script setup>
import SidebarButton from './SidebarButton.vue';


</script>

<template>
    <nav class="fixed border-gray-500 border-t-[1px] bg-[#1C1C1C] lg:border-r-[1px] bottom-0 w-full h-20 
    lg:h-full lg:top-0 lg:w-20 overflow-auto">
        <ul class="flex lg:flex-col flex-row gap-[1em] list-none p-2 m-0 items-center h-full">
            <router-link to="/">
                <SidebarButton>
                    <ViewDashboard :class="['mx-[1.2rem]']" fillColor="#fff" />
                </SidebarButton>
            </router-link>
            <router-link to="/events">
                <SidebarButton>
                    <Feather :class="['mx-[1.2rem]']" fillColor="#fff" />
                </SidebarButton>
            </router-link>
            <SidebarButton>
                <Poll :class="['mx-[1.2rem]']" fillColor="#fff" />
            </SidebarButton>
            <SidebarButton>
                <AccountCog :class="['mx-[1.2rem]']" fillColor="#fff" />
            </SidebarButton>
            <SidebarButton>
                <TuneVariant :class="['mx-[1.2rem]']" fillColor="#fff" />
            </SidebarButton>
        </ul>
    </nav>
</template>