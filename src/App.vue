<script setup>
import SideBar from './components/SideBar.vue';
import MainBody from './components/MainBody.vue';
import Navbar from './components/Navbar.vue';
import Dashboard from './components/Dashboard.vue';
</script>

<template>
  <SideBar/>
  <MainBody>
    <Navbar/>
    <router-view/>
  </MainBody>
</template>
