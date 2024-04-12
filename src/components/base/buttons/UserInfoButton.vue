<template>
  <button>
    <img
      v-if="user.avatar"
      :src="`${storageUrl}/${user.avatar}`"
      alt="User Avatar"
      class="h-8 w-8 rounded-full"
    />

    <icon-user v-if="!user.avatar" />
  </button>
</template>

<script>
import IconUser from '@/components/icons/IconUser.vue'

export default {
  components: {
    IconUser
  },
  inject: ['user'],
  data() {
    return {
      storageUrl: `${import.meta.env.VITE_API_URL}/storage`
    }
  }
}
</script>
