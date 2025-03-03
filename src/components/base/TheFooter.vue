<script setup lang="ts">
import { ref } from 'vue'
import BaseButtonText from './BaseButtonText.vue'
import BaseInput from './BaseInput.vue'

const inputValue = ref('')
</script>

<template>
  <footer class="footer">
    <div class="footer__main container">
      <div class="footer__top">
        <ul class="footer__list">
          <li class="footer__list-item">
            <BaseButtonText to="/contact"> CONTACT </BaseButtonText>
          </li>

          <li class="footer__list-item">
            <BaseButtonText to="/404"> TERMS OF SERVICES </BaseButtonText>
          </li>

          <li class="footer__list-item">
            <BaseButtonText to="/404"> SHIPPING AND RETURNS </BaseButtonText>
          </li>
        </ul>

        <BaseInput
          class="footer__input"
          :errorText="'Error tesxt efawefg wdwaefawe efawef e fa fe f awef  ef aw ef e fa wef awe fa wef e waf wef wea f we f'"
          v-model="inputValue"
          type="footer"
          placeholder="Give an email, get the newsletter."
        />
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background-color: var(--background);
  margin-bottom: 100px;

  &__main {
  }

  &__top {
    display: flex;
    justify-content: space-between;
  }

  &__list {
    display: flex;

    &-item {
    }
  }

  &__input {
    flex-grow: 1;
    max-width: 400px;
  }
}
</style>
