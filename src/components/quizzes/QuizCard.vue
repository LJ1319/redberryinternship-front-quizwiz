<template>
  <router-link
    :to="`/quizzes/${quiz.id}`"
    class="group flex h-max flex-col gap-8 p-6 shadow-c2xl hover:rounded-xl hover:ring-1 hover:ring-black focus:rounded-xl focus:outline-none focus:ring-1 focus:ring-black"
  >
    <img :src="`${storageUrl}/${quiz.image}`" alt="Quiz Image" />

    <div class="capitalize">
      <div class="mb-3 flex flex-wrap gap-3 text-sm">
        <div
          v-for="(category, index) in quiz.categories"
          :key="category.id"
          class="flex items-center gap-3"
        >
          <p class="font-semibold text-purple">
            {{ category.name }}
          </p>
          <div
            v-if="index !== quiz.categories.length - 1"
            class="block h-1 w-1 rounded-full bg-gray-300"
          ></div>
        </div>
      </div>

      <p class="mb-5 flex items-center justify-between">
        <span class="text-2xl font-semibold text-gray-900">
          {{ quiz.name }}
        </span>
        <icon-arrow-link class="hidden h-3 stroke-black group-hover:block group-focus:block" />
      </p>

      <div class="flex flex-wrap gap-4 text-sm">
        <div v-if="completed" class="flex items-center justify-center gap-3">
          <div class="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
            <icon-completion />
          </div>

          <div>
            <p class="font-semibold text-gray-900">Completed</p>
            <p class="text-gray-600">
              {{ this.completion }}
            </p>
          </div>
        </div>

        <div v-else class="flex items-center justify-center gap-3">
          <div class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-150">
            <icon-bulb />
          </div>

          <div>
            <p class="font-semibold text-gray-900">Not Completed</p>
            <p class="text-gray-600/30">Date,Time</p>
          </div>
        </div>

        <div>
          <p class="font-semibold text-gray-900">Total Time</p>
          <p v-if="completed" class="text-gray-600">{{ time }} Minutes</p>
          <p v-else class="text-gray-600/30">N/A</p>
        </div>

        <div>
          <p class="font-semibold text-gray-900">Total Users</p>
          <p class="text-gray-600">{{ users }}</p>
        </div>

        <div class="flex items-center justify-center gap-3">
          <div
            class="flex h-10 w-10 items-center justify-center rounded-full"
            :style="{ background: quiz.level.bg_color }"
          >
            <icon-level class="stroke-violet-500" :style="{ stroke: quiz.level.color }" />
          </div>

          <div>
            <p class="font-semibold text-gray-900">Difficulty Level</p>
            <p class="text-gray-600">{{ quiz.level.name }}</p>
          </div>
        </div>

        <div v-if="completed" class="flex items-center justify-center gap-3">
          <div class="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100">
            <icon-score />
          </div>

          <div>
            <p class="font-semibold text-gray-900">Points</p>
            <p class="text-gray-600">
              {{ `${score}/${points}` }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import IconArrowLink from '@/components/icons/IconArrowLink.vue'
import IconCompletion from '@/components/icons/IconCompletion.vue'
import IconBulb from '@/components/icons/IconBulb.vue'
import IconLevel from '@/components/icons/IconLevel.vue'
import IconScore from '@/components/icons/IconScore.vue'

import { GetQuizGuests } from '@/services/api/resources.js'
import { formatDate, formatTime } from '@/utils/helpers.js'

export default {
  components: {
    IconArrowLink,
    IconCompletion,
    IconBulb,
    IconLevel,
    IconScore
  },
  inject: ['user'],
  props: ['quiz'],
  data() {
    return {
      storageUrl: `${import.meta.env.VITE_API_URL}/storage`,
      completed: false,
      completion: undefined,
      time: undefined,
      users: 0,
      score: 0,
      points: 0
    }
  },
  mounted() {
    this.formatQuizUserData()
  },
  methods: {
    async formatQuizUserData() {
      const { data } = await GetQuizGuests(this.quiz.id)
      this.users = this.quiz.users_count + data[0].guest_count

      const userId = this.quiz.users.findIndex((user) => user.id === this.user.id)

      if (userId === -1) {
        return null
      }

      this.completed = true
      this.completion = formatDate(this.quiz.users[userId].pivot.completed_at)
      this.time = formatTime(this.quiz.users[userId].pivot.time)
      this.score = this.quiz.users[userId].pivot.score
      this.points = this.quiz.questions.reduce((acc, curr) => acc + curr.points, 0)
    }
  }
}
</script>
