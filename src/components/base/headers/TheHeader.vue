<script setup lang="ts">
import { ref } from 'vue';
import BaseSvg from '@/components/base/svg/BaseSvg.vue';
import BaseButtonText from '@/components/base/baseButtonText/BaseButtonText.vue';
import BurgerBtn from '@/components/ui/burger/BurgerBtn.vue';
import BurgerMenu from '@/components/base/burger-menu/BurgerMenu.vue';
import { dataHeaderShope } from '@/components/mixins/data-header-shope';


const isOpenBurgerMenu = ref(false)

</script>

<template>
<header class="header">
    <div class="header__line">
        <div class="header__logo">
            <BaseButtonText to="/">
                SHOPPE
            </BaseButtonText>
        </div>

        <div class="header__main">
            <ul class="header__list">
                <li class="header__list-item header__list-shope " :class="{'header__list-item_active': $route.name === 'shope'}">
                    Shope

                    <div class="header__shop">
                        <div class="header__shop-column" v-for="item in dataHeaderShope" :key="item.title">
                            <p class="header__shop-title">{{ item.title }}</p>

                            <ul class="header__shop-list">
                                <li class="header__shop-list-item" v-for="li in item.list" :key="li.name">
                                    <BaseButtonText :to="li.link">
                                        {{ li.name }}
                                    </BaseButtonText>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li class="header__list-item" :class="{'header__list-item_active': $route.name === 'blog'}">
                    <BaseButtonText to="/blog">
                        Blog
                    </BaseButtonText>
                </li>
                <li class="header__list-item" :class="{'header__list-item_active': $route.name === 'story'}">
                    <BaseButtonText to="/story">
                        Our Story
                    </BaseButtonText>
                </li>
            </ul>

            <div class="header__buttons">
                <div class="header__btn header__btn-search">
                    <BaseSvg class="header__btn-icon" id="search"/>
                </div>

                <div class="header__btn header__btn-basket">
                    <BaseSvg class="header__btn-icon" id="basket"/>
                </div>

                <div class="header__btn header__btn-person">
                    <BaseSvg class="header__btn-icon" id="person"/>
                </div>

                <div class="header__btn header__btn-burger">
                    <BurgerBtn v-model="isOpenBurgerMenu"/>
                </div>
            </div>
        </div>
    </div>
</header>

<Transition name="menu">
    <BurgerMenu v-if="isOpenBurgerMenu"/>
</Transition>
</template>

<style scoped lang="scss">
@use '@/assets/styles/mixins/index.scss' as *;

.menu-leave-to,
.menu-enter-from{
    transform: scaleX(0);
}

.menu-enter-active,
.menu-leave-active{
    transition: transform 0.2s ease-in-out;
    transform-origin: 0 0;
}

.menu-leave-from,
.menu-enter-to{
    transform: scaleX(1);
}

.header{
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    background-color: var(--background);
    padding: 45px 15px 0;

    @include media-down(md) {
        padding: 5px 15px ;
    }

    &__line {
        position: relative;
        display: flex;
        justify-content: space-between;
        padding-bottom: 7px;
        border-bottom: 1px solid var(--gray);
        margin: 0 auto;
        max-width: 1248px;

        @include media-down(md) {
            padding: 0;
            border-bottom: unset;
        }
    }
    
    &__logo {
        font-family: Allerta Stencil, sans-serif;
        font-size: 35px;

        @include media-down(md) {
            font-size: 25px;
        }

        &::first-letter{
            color: var(--accent);
        }
    }
    
    &__main {
        display: flex;
        width: 100%;
        max-width: 504px;

        @include media-down(md) {
            width: unset;
        }
    }
    
    &__list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 319px;
        position: relative;
        padding-right: 50px;

        @include media-down(md) {
            display: none;
            width: unset;
        }

        &::before{
            content: '';
            position: absolute;
            right: 0;
            top: 16px;
            height: 17px;
            width: 1px;
            background-color: var(--text-second);
        }

        &-item {
            transition: color 0.2s;
            position: relative;

            &:hover{
                color: var(--text-second);
                cursor: pointer;
                user-select: none;
            }

            &_active{
                &::before{
                    content: "";
                    position: absolute;
                    bottom: -23px;
                    z-index: 2;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background-color: var(--text);
                }
            }
        }

        &-shope{
            &:hover{
                .header__shop{
                    opacity: 1;
                    pointer-events: unset;
                }
            }

            &::after{
                content: '';
                position: absolute;
                width: 100%;
                left: 0;
                top: 0;
                height: 50px;
            }
        }
    }
    
    &__buttons{
        padding-left: 47px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-grow: 1;

        @include media-down(md) {
            padding: 0;
        }
    }

    &__btn {
        flex-shrink: 0;

        &-icon {
            fill: var(--text) ;
            transition: fill 0.2s;

            &:hover{
                fill: var(--text-second) ;
                cursor: pointer;
                user-select: none;
            }
        }

        &-search {
            width: 19px;
            height: 19px;

            @include media-down(md) {
                display: none;
            }
        }

        &-basket {
            width: 21px;
            height: 21px;

            @include media-down(md) {
                width: 18px;
                height: 18px;
                margin-right: 18px;
            }
        }

        &-person {
            width: 20px;
            height: 20px;

            @include media-down(md) {
                display: none;
            }
        }
    }

    &__shop{
        position: absolute;
        pointer-events: none;
        top: 46px;
        right: 0;
        transform: translateX(50%);
        background-color: var(--background);
        border: 1px solid var(--gray);
        display: flex;
        padding: 30px 0;
        opacity: 0;


        &-column {
            position: relative;
            width: 205px;
            padding-left: 30px;
            font-size: 14px;
            line-height: 22px;

            &::before{
                content: '';
                position: absolute;
                top: 0;
                right: 0;
                height: 100%;
                width: 1px;
                background-color: var(--gray);
            }
        }
    
        &-title {
            margin-bottom: 15px;
            color: var(--text);
        }

        &-list {
            color: var(--text-second);

            &-item {
                margin-bottom: 10px;
                transition: color 0.2s;

                &:hover{
                    color: var(--text);
                }
            }
        }
    }
}
</style>