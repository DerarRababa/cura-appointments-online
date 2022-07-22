<template>
  <section class="flex flex-wrap">
    <button
      class="px-2 py-1 cursor-pointer bg-white shadow-md rounded-lg flex flex-col items-center w-24 m-1"
      v-for="i in 5"
      :key="'#' + i"
    >
      11:00 am
    </button>
  </section>
</template>

<script>
export default {}
</script>

<style></style>
