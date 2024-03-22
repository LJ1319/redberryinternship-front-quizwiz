<template>
  <div class="relative h-screen overflow-hidden">
    <div class="p-12 lg:px-24 lg:pb-28 lg:pt-0">
      <div>
        <img src="@/assets/images/HeroLogo.svg" alt="QuizWiz Logo" class="lg:h-64" />
        <h1 class="font-raleway text-xl font-semibold text-gray lg:text-3xl">
          Play with us, Explore with us
        </h1>
      </div>
    </div>

    <div class="hidden lg:block">
      <img
        src="../assets/images/HeroImageLarge.png"
        alt="Hero Illustration"
        class="absolute right-0 top-14"
      />
    </div>

    <div
      class="bg-no-repeat lg:hidden"
      style="background-image: url(/src/assets/images/HeroImage.svg)"
    >
      <p class="px-16 pb-12 pt-56 font-raleway text-5xl font-bold text-slate">
        Our mission <br />
        is to <br />
        entertain <br />
        & educate.
      </p>
    </div>

    <div class="flex h-64 items-center bg-orange px-12 lg:px-24">
      <p class="w-full font-raleway font-black text-white">
        <span class="text-8xl">200+</span> <br />
        <span class="flex items-baseline justify-between">
          <span class="text-5xl underline lg:no-underline">Quiz games</span>
          <icon-link-arrow class="lg:hidden" />
        </span>
      </p>
    </div>

    <div class="flex h-64 items-center bg-purple px-12 lg:px-24">
      <p class="w-full font-raleway font-black text-white">
        <span class="text-8xl">25+</span> <br />
        <span class="flex items-baseline justify-between">
          <span class="w-min text-5xl underline lg:w-max lg:no-underline">Different genres</span>
          <icon-link-arrow class="lg:hidden" />
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import IconLinkArrow from '@/components/icons/IconLinkArrow.vue'

export default {
  components: {
    IconLinkArrow
  }
}
</script>
