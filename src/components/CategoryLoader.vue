<template>
    <div class="bg-dark text-white">
        <div class="container">
            <div class="news_category_container" v-for="category in categories" :key="category.id">
                <h3 class="news_category_name">{{ category.name }}</h3>
                <NewsPreview v-bind:category-id="category.id"/>
            </div>
        </div>
    </div>
</template>

<script>
    import NewsPreview from './NewsPreview.vue'

    export default {
        name: 'CategoryLoader',
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
    .news_category_container {
        display: flex;
        flex-direction: column;
    }
    .news_category_name {
        font-weight: bold;
        font-size: 24px;
        line-height: 130%;
    }
</style>
