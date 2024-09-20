<template>
    <div class="catalogue-page">
        <div class="catalogue-page__header">
            <div class="catalogue-title">Emily's Design</div>
            <div class="catalogue-subtitle">种一棵树最好的时间是十年前，其次是现在</div>
        </div>
        <div class="catalogue-content">
            <section class="catelogue-block" v-for="(cata, index) in catalogues" :key="cata.name">
                <div class="img-container">
                    <img class="catalogue-thumbnail" :src="cata.pic" />
                </div>
                <p class="catalogue-name">{{ cata.name }}</p>
                <p class="catalogue-no">{{ index }}</p>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
defineOptions({
    name: 'CatalogueView'
});

import pic1 from '../assets/images/catalogue/pic.png';
import pic2 from '../assets/images/catalogue/pic.png';
import pic3 from '../assets/images/catalogue/pic.png';
import pic4 from '../assets/images/catalogue/pic.png';

const catalogues = ref([
    {
        name: '工作成果',
        pic: pic1
    },
    {
        name: '用户体验',
        pic: pic2
    },
    {
        name: '设计管理',
        pic: pic3
    },
    {
        name: '早期作品',
        pic: pic4
    }
])
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";

.catalogue-page {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0 2rem;
    background-image: url('../assets/images/catalogue/vertical-line.svg');

    .catalogue-page__header {
        background-image: url('../assets/images/catalogue/bg.svg');
        background-position: center bottom;
        background-repeat: no-repeat;
        text-align: center;
        padding-bottom: 2rem;
        margin-bottom: 2rem;
        background-color: #fff;

        .catalogue-title {
            font-size: $page-title-fontsize;
            line-height: 20rem;
        }

        .catalogue-subtitle {
            font-size: $page-subtitle-fontsize;
        }
    }

    .catalogue-content {
        flex: 1;
        display: inline-flex;
        flex-direction: row;
        justify-content: space-between;
        min-width: 100%;

        .catelogue-block {
            flex: 1;
            width: 25%;
            height: 480px;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            background-color: #F5F8FA;
            border: 1px solid rgba(223, 227, 235, 1);
            padding: 1rem;
            cursor: pointer;

            &:not(:last-child) {
                margin-right: 2rem;
            }

            &:hover {
                height: 580px;
                border: 2px solid rgba(203, 214, 226, 1);
                box-shadow: 0px 2px 4px 1px rgba(124, 152, 182, 0.15);

                .img-container {
                    .catalogue-thumbnail {
                        width: 100%;
                        height: 100%;
                        transform: translate(0, 0);
                    }
                }
            }

            .img-container {
                width: 100%;
                flex: 1;

                .catalogue-thumbnail {
                    width: 50%;
                    height: 50%;
                    transform: translate(50%, 50%);
                }
            }

            .catalogue-name {
                font-size: 2.4rem;
                color: #33475B;
            }

            .catalogue-no {
                font-size: 1.8rem;
                color: $light-font-color;
            }
        }
    }
}
</style>