<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { mdiAccount, mdiAsterisk } from '@mdi/js'
import FullScreenSection from '@/components/FullScreenSection.vue'
import CardComponent from '@/components/CardComponent.vue'
import CheckRadioPicker from '@/components/CheckRadioPicker.vue'
import Field from '@/components/Field.vue'
import Control from '@/components/Control.vue'
import Divider from '@/components/Divider.vue'
import JbButton from '@/components/JbButton.vue'
import JbButtons from '@/components/JbButtons.vue'
import { useStore } from 'vuex'

const store = useStore()
const router = useRouter()

const form = reactive({
  email: 'john@example.com',
  name: 'John Doe',
  avatar: 'https://avatars.dicebear.com/api/avataaars/example.svg?options[top][]=shortHair&options[accessoriesChance]=93',
  pass: 'highly-secure-password-fYjUw-',
  remember: ['remember']
})

const submit = () => {
  store.commit('user', form)
  router.push('/')
}
</script>

<template>
  <full-screen-section
    v-slot="{ cardClass, cardRounded }"
    bg="login"
  >
    <card-component
      :class="cardClass"
      :rounded="cardRounded"
      form
      @submit.prevent="submit"
    >
      <field
        label="Email"
        help="Please enter your email"
      >
        <control
          v-model="form.email"
          :icon="mdiAccount"
          name="email"
          autocomplete="username"
        />
      </field>

      <field
        label="Password"
        help="Please enter your password"
      >
        <control
          v-model="form.pass"
          :icon="mdiAsterisk"
          type="password"
          name="password"
          autocomplete="current-password"
        />
      </field>

      <check-radio-picker
        v-model="form.remember"
        name="remember"
        :options="{ remember: 'Remember' }"
      />

      <divider />

      <jb-buttons>
        <jb-button
          type="submit"
          color="info"
          label="Login"
        />
        <jb-button
          to="/"
          color="info"
          outline
          label="Back"
        />
      </jb-buttons>
    </card-component>
  </full-screen-section>
</template>
