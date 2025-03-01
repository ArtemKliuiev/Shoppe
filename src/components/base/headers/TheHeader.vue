<script setup lang="ts">
import { ref} from 'vue';
import BaseSvg from '@/components/base/svg/BaseSvg.vue';
import BaseButtonText from '@/components/base/baseButtonText/BaseButtonText.vue';
import BurgerBtn from '@/components/ui/burger/BurgerBtn.vue';
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

<Transition name="menu"  v-scroll-lock="true">
    <div v-if="isOpenBurgerMenu" class="burger-menu">

            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat voluptatum ipsa dicta quas est! Doloremque quod laudantium id saepe amet quo dicta, necessitatibus enim sapiente nostrum laborum sed, repellat recusandae, iure blanditiis natus at? Eos doloremque laborum laboriosam maxime. Vero qui natus magni, dolor est blanditiis in a deserunt enim voluptatum, illum, illo tempore earum dicta quibusdam doloribus cupiditate impedit provident laudantium exercitationem! Culpa beatae sunt sequi corporis, similique suscipit pariatur in aliquam cupiditate facilis, quis nobis, labore nam doloribus? Delectus, suscipit saepe. Ut optio, odit non beatae explicabo sequi corrupti adipisci deleniti alias blanditiis odio hic? Impedit vero ratione, in illum placeat necessitatibus nesciunt quaerat ad voluptate atque enim veniam dolorum earum reprehenderit delectus velit optio officiis tempora mollitia dolorem explicabo vel. Molestias veritatis amet deserunt corporis et quibusdam provident eaque dolorem! Velit vitae, fugit dolore distinctio tenetur possimus nobis consequatur ad accusantium dolor illum omnis, obcaecati voluptate aliquam amet commodi illo quisquam deserunt. Fugiat, assumenda quo. Esse fuga, voluptas harum vel, ullam asperiores rerum, culpa libero earum reprehenderit sit. At deleniti nisi suscipit quisquam minus consectetur voluptatibus doloribus cum iure tenetur quas, dolorum blanditiis praesentium, impedit inventore laborum incidunt dolores cumque harum ex ducimus soluta hic corrupti! Temporibus corrupti enim quis libero voluptate totam rerum molestias debitis ut facere. Corrupti fugiat accusantium vitae alias laborum commodi sequi voluptates aliquid reiciendis ex velit dicta, quaerat qui dolorem vero nihil hic inventore laboriosam, illum labore error nulla quam? Amet corporis officiis asperiores suscipit laborum hic beatae, molestiae at mollitia. Corrupti, molestiae inventore placeat consequatur quas iste veritatis sapiente aliquam rem eaque modi deserunt consectetur perspiciatis qui neque nostrum! Laboriosam, rerum temporibus officia magnam iure, impedit non necessitatibus ratione pariatur quisquam natus modi unde. Molestias illum corporis non consequuntur, asperiores nobis ea ex amet quidem reiciendis eos beatae? Possimus aperiam quo adipisci consequuntur, saepe quod quas nulla dolor sed quam atque libero placeat nostrum asperiores delectus odit error voluptates! Tenetur fuga in dignissimos vel voluptate numquam quas itaque asperiores nam molestias eius illum quaerat provident placeat magnam ut libero saepe similique, tempora odio atque! Magni voluptatum quas incidunt, quae consectetur itaque, aliquam est saepe unde minima veritatis ab asperiores illo eos, delectus explicabo! Ipsam distinctio quae eligendi, ad molestiae voluptatem. Iusto quisquam nostrum ex hic, maxime dolorem perferendis quasi ab id vero fuga dolore error molestiae laudantium voluptatem enim inventore culpa reprehenderit saepe aliquam possimus est facilis incidunt. Non aliquid, illo voluptas itaque exercitationem porro minima repudiandae! Recusandae illum placeat ad, eius, beatae quisquam, sed dolore molestiae quam impedit laborum? Repellendus eaque quos neque asperiores eos tenetur quo minus dicta iure quasi eius, accusantium modi blanditiis rem facilis quibusdam deleniti mollitia. Cumque, quasi iure eos odio placeat iste qui omnis nobis debitis sequi, rem neque labore voluptatibus cupiditate vitae incidunt culpa ullam reprehenderit fuga possimus tempora voluptatum amet ad. Eligendi, velit itaque. Autem, ad temporibus! Iste alias error amet aut iure expedita cumque eaque neque cupiditate, laboriosam ea in incidunt excepturi ratione quod, veniam tempora obcaecati doloremque nulla? Veritatis, quaerat cupiditate!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nulla necessitatibus. Officia unde pariatur harum, repellendus veritatis dignissimos autem, asperiores quidem nostrum hic, soluta omnis corrupti ea animi culpa alias tempora nulla provident dolorum nobis laboriosam? Quam dolores voluptas a, magnam magni tempore excepturi odit doloremque similique facere enim ab voluptatibus quaerat temporibus officiis? Nam a suscipit incidunt vitae quidem inventore mollitia error perferendis omnis saepe aspernatur soluta expedita praesentium amet cum tenetur quisquam consequatur fugit, itaque eaque ab aliquam. Sit alias magni cumque labore at corporis deleniti blanditiis reprehenderit inventore est quis aliquam, rem voluptatum dignissimos obcaecati quam dolor nesciunt maiores? Exercitationem est ipsa quasi cumque magnam neque voluptas dolore perspiciatis iure, reiciendis adipisci quas vel minus doloremque similique ex quae numquam! Placeat facere modi fugit harum at consectetur veritatis aperiam, obcaecati delectus ducimus odit! Ut, rem suscipit maiores velit consequatur qui deleniti in officiis doloribus culpa ipsam doloremque vitae incidunt, expedita laudantium aliquam. Natus eveniet, iure aut commodi nobis animi debitis laudantium enim, molestias, adipisci dolorem nemo aliquid esse doloremque! Ex quia libero est provident, harum nobis amet odit necessitatibus impedit dolor reprehenderit soluta quae! In, minus soluta quidem suscipit qui cum eius maxime corrupti fugiat accusamus assumenda maiores omnis quia quisquam, ratione earum laborum architecto modi provident voluptates? Iusto laboriosam aliquid repudiandae repellendus minima, sapiente animi nam ipsa esse natus sed at doloremque impedit deserunt dolorum amet. Commodi exercitationem voluptatem hic alias cupiditate ullam labore vero, a veritatis eaque maxime, reiciendis ea iusto id placeat eos laudantium aperiam possimus consequatur iste blanditiis! Nisi quasi, nostrum labore est mollitia voluptas praesentium quo quibusdam tenetur quas laboriosam? Accusamus tempore rem quae tenetur totam aut voluptatibus neque itaque! Qui doloremque, consequuntur quas molestiae perspiciatis, alias pariatur iusto aut velit odit et veritatis officia sequi aliquid! Quaerat numquam cupiditate obcaecati sit.

    </div>
</Transition>

</template>

<style scoped lang="scss">
@use '@/assets/styles/mixins/index.scss' as *;




.header{
    position: sticky;
    z-index: 100;
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

.burger-menu{
    position: fixed;
    overflow: auto;
    top: 47px;
    left: 0;
    width: 100%;
    height: calc(100% - 47px);
    background-color: var(--background);
    background-color: red;
}

.menu-leave-to,
.menu-enter-from{
    top: -100%;
}

.menu-enter-active,
.menu-leave-active{
    transition: all 0.2s ease-in-out;
}

.menu-leave-from,
.menu-enter-to{
    top: 0;
}

.menu-leave-active{
    overflow: hidden;
}
</style>