<script setup lang="ts">
import { ref } from 'vue';

const email = ref<string|null>(null);
const password = ref<string|null>(null);

const props = defineProps<{
  textButton?: string
}>();

const emit = defineEmits<{
  (e: 'click', payload: { email: string|null; password: string|null }): void;
}>();

function submitForm() {
  emit('click', { email: email.value, password: password.value });
}
</script>

<template>
  <div>
    <input
        v-model="email"
        type="email"
        placeholder="Email"
    />
    <input
        v-model="password"
        type="password"
        placeholder="Пароль"
    />
    <button @click="submitForm">
      {{ props.textButton }}
    </button>
  </div>
</template>

<style scoped>

</style>
