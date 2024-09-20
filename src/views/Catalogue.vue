<template>
    <div class="catalogue-page">
        <div class="catalogue-page__header">
            <div class="catalogue-title">Emily's Design</div>
            <div class="catalogue-subtitle">种一棵树最好的时间是十年前，其次是现在</div>
            <img src="../assets/images/catalogue/arrow_red.svg" alt="" class="arrow-red">
        </div>
        <div class="catalogue-content">
            <section class="catelogue-block" v-for="(cata, index) in catalogues" :key="cata.name">
                <img src="../assets/images/catalogue/arrow_grey.svg" alt="" class="arrow-grey">
                <div class="img-container">
                    <img class="catalogue-thumbnail" :src="cata.pic" />
                </div>
                <p class="catalogue-name">{{ cata.name }}</p>
                <p class="catalogue-no">{{ index }}</p>
                <span class="bottom-line"></span>
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
        position: relative;

        .catalogue-title {
            font-size: $page-title-fontsize;
            line-height: 20rem;
        }

        .catalogue-subtitle {
            font-size: $page-subtitle-fontsize;
        }

        .arrow-red {
            position: absolute;
            bottom: -14px;
            left: calc(50% - 14px);
        }
    }

    .catalogue-content {
        flex: 1;
        display: inline-flex;
        flex-direction: row;
        justify-content: space-between;
        min-width: 100%;
        margin-top: 2rem;
        padding-bottom: 10rem;

        .catelogue-block {
            flex: 1;
            width: 25%;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            background-color: #F5F8FA;
            border: 1px solid rgba(223, 227, 235, 1);
            padding: 1rem;
            cursor: pointer;
            margin-bottom: 10rem;
            position: relative;

            &:not(:last-child) {
                margin-right: 2rem;
            }

            &:hover {
                border: 2px solid rgba(203, 214, 226, 1);
                box-shadow: 0px 2px 4px 1px rgba(124, 152, 182, 0.15);
                margin-bottom: 0;

                .img-container {
                    .catalogue-thumbnail {
                        width: 100%;
                        height: 100%;
                        transform: translate(0, 0);
                    }
                }

                .arrow-grey {
                    display: none;
                }
            }

            .img-container {
                width: 100%;
                flex: 1;
                text-align: center;

                .catalogue-thumbnail {
                    width: 14rem;
                    height: 14rem;
                    transform: translateY(4rem);
                }
            }

            .catalogue-name {
                font-size: 2.4rem;
                color: #33475B;
                margin-top: 12rem;
            }

            .catalogue-no {
                font-size: 1.8rem;
                color: $light-font-color;
                margin-top: 4rem;
            }

            .bottom-line {
                display: inline-block;
                width: 8rem;
                border-top: 6px solid #DFE3EB;
                position: absolute;
                bottom: 0;
            }
        }
    }
}
</style>