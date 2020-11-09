<template>
    <div class="col">
        <div v-for="news in newsList" :key="news.id">
            <p>{{ news.title }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NewsPreview',
        props: {
            categoryId: Number
        },
        data() {
            return {
                newsList: []
            }
        },
        mounted() {
            this.$http
                .get('query/group/' + this.categoryId)
                .then(response => (this.newsList = response.data.data.slice(0, 5)))
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
