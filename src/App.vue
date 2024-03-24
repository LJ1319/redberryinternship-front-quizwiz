<template>
  <div class="flex min-h-screen flex-col">
    <router-view name="header" />

    <main class="flex-1">
      <router-view />
    </main>

    <router-view name="footer" />
  </div>
</template>
