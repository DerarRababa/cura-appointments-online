<template>
  <section class="flex flex-wrap">
    <button
      @click="
        showWarningMessage(
          `The detector is not available from ${time.from_unix} to ${time.to_unix}`
        )
      "
      :title="`the detector is not available from ${time.from_unix} to ${time.to_unix}`"
      class="px-2 py-2 cursor-pointer text-$gray bg-white rounded-lg flex flex-col items-center w-24 m-1"
      v-for="(time, $index) in unavailableTimes"
      :key="'#' + $index"
    >
      {{ time.from_unix }}
    </button>
    <button
      @click="bookTime(time)"
      :title="`the detector is available from ${time.from_unix} to ${time.to_unix}`"
      class="px-2 py-2 cursor-pointer rounded-lg flex flex-col items-center w-24 m-1"
      :class="
        timeSlected == time ? ' bg-$blue text-white' : 'bg-white shadow-md'
      "
      v-for="(time, $index) in availableTimes"
      :key="'##' + $index"
    >
      {{ time.from_unix }}
    </button>
  </section>
</template>

<script>
export default {
  props: ['selectedAvailabilityDate'],
  data() {
    return {
      timeSlected: '',
    }
  },
  computed: {
    unavailableTimes() {
      return this.selectedAvailabilityDate.unavailable.map((date) => {
        const unavailableTimes = {
          from_unix: new Date(date.from_unix).toLocaleTimeString(),
          to_unix: new Date(date.to_unix).toLocaleTimeString(),
        }
        return unavailableTimes
      })
    },
    availableTimes() {
      return this.selectedAvailabilityDate.available.map((date) => {
        const availableTimes = {
          from_unix: new Date(date.from_unix).toLocaleTimeString(),
          to_unix: new Date(date.to_unix).toLocaleTimeString(),
        }
        return availableTimes
      })
    },
  },
  methods: {
    showWarningMessage(text) {
      alert(text)
    },
    bookTime(time) {
      this.timeSlected = time
      this.$emit('selectAvailabilityTime', time)
    },
  },
}
</script>

<style></style>
