<template>
    <div id="app">
        <Navbar/>
        <CategoryLoader/>
    </div>
</template>

<script>
    import CategoryLoader from './components/CategoryLoader.vue'
    import Navbar from './components/Navbar.vue'

    export default {
        name: 'App',
        components: {
            CategoryLoader,
            Navbar
        }
    }
</script>

<style>

</style>
