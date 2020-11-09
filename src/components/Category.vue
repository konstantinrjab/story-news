<template>
    <div class="container">
        <div class="row" v-for="category in categories" :key="category.id">
            <p>{{ category.name }}</p>
            <NewsPreview v-bind:category-id="category.id"/>
        </div>
    </div>
</template>

<script>
    import NewsPreview from './NewsPreview.vue'

    export default {
        name: 'Category',
        components: {
            NewsPreview
        },
        data() {
            return {
                categories: null,
            }
        },
        mounted() {
            this.$http
                .get('group')
                .then(response => (this.categories = response.data.slice(0, 2)))
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
