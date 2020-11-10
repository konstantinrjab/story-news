<template>
    <div class="news_preview_container">
        <div class="news_preview_container_single" v-for="news in newsList" :key="news.id">
            <a class="news_preview_title" :href="news.link">
                {{ news.title }}
            </a>
            <img class="news_preview_image" :src="getUrl(news)" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NewsPreview',
        props: {
            categoryId: Number
        },
        methods: {
            getUrl: function (news) {
                return news.meta_images[0] ?? '';
            }
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
    .news_preview_container {
        display: flex;
        flex-wrap: wrap;
    }
    .news_preview_container_single {
        height: 220px;
        width: 160px;
        margin-right: 40px;
        border: 2px solid white;
        border-radius: 8px;

        position: relative;
        text-align: center;
        color: white;
    }

    .news_preview_image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .news_preview_title {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        color: white;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 130%;
    }
</style>
