<template>
    <div class="bg-black text-white">
        <div class="container">
            <div class="news_category_container" v-for="category in categories" :key="category.id">
                <div class="news_category_container_title">
                    <h3 class="news_category_name">{{ category.name }}</h3>
                    <div class="news_category_play">
                        <div class="circle"></div>
                    </div>
                </div>
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

.news_category_container_title {
    display: flex;
}

.news_category_name {
    font-weight: bold;
    font-size: 24px;
    line-height: 130%;
}

.news_category_play {
    height: 1em;
    width: 1em;
    position: relative;
    margin-left: 15px;
}

.circle {
    background: white;
    border-radius: 30px;
    height: 30px;
    width: 30px;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
}

.circle:before {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 7px 0 7px 15px;
    border-color: transparent transparent transparent red;
    position: absolute;
    top: 0;
    left: 0;
    right: -5px;
    bottom: 0;
    margin: auto;
}

.news_category_play {
    border-radius: 50%;
    width: 30px;
    height: 30px;
    font-size: 0;
    white-space: nowrap;
    text-align: center;
    cursor: pointer;
}

</style>
