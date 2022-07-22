<!-- Please remove this file from your project -->
<template>
  <div class="bg-white flex items-center justify-center min-h-screen">
    <main class="w-96">
      <h1 class="font-semibold text-xl mb-1">Schedule Appointment</h1>
      <section class="border-2 border-$gray rounded-xl w-full px-7 py-4">
        <h4
          class="flex justify-between items-center border-b-2 border-$gray pb-2"
        >
          <span class="font-semibold text-base">Fees</span>
          <span class="text-$gray">85$</span>
        </h4>

        <section class="mt-2">
          <h4 class="font-semibold text-base">Schedule</h4>

          <AppointmentsDates
            @selectAvailabilityDate="selectAvailabilityDate"
            :scheduleData="availableAppointments.schedule"
          ></AppointmentsDates>
        </section>
        <section class="mt-2">
          <h4 class="font-semibold text-base">Choose time</h4>

          <AppointmentsTimes
            @selectAvailabilityTime="selectAvailabilityTime"
            v-if="selectedAvailabilityDate"
            :selectedAvailabilityDate="selectedAvailabilityDate"
          ></AppointmentsTimes>
        </section>
      </section>

      <button
        @click="bookAppointment"
        :class="activeBookBTN ? 'bg-$blue  ' : ' bg-$gray'"
        class="mt-3 font-semibold w-full text-white rounded-lg py-3 flex items-center justify-center"
      >
        <span class="px-3"> Book Appointment </span>
        <svg
          v-if="btnBookAppointment"
          xmlns:svg="http://www.w3.org/2000/svg"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.0"
          width="20px"
          height="20px"
          viewBox="0 0 128 128"
          xml:space="preserve"
        >
          <g>
            <path
              d="M78.75 16.18V1.56a64.1 64.1 0 0 1 47.7 47.7H111.8a49.98 49.98 0 0 0-33.07-33.08zM16.43 49.25H1.8a64.1 64.1 0 0 1 47.7-47.7V16.2a49.98 49.98 0 0 0-33.07 33.07zm33.07 62.32v14.62A64.1 64.1 0 0 1 1.8 78.5h14.63a49.98 49.98 0 0 0 33.07 33.07zm62.32-33.07h14.62a64.1 64.1 0 0 1-47.7 47.7v-14.63a49.98 49.98 0 0 0 33.08-33.07z"
              fill="#fff"
              fill-opacity="1"
            />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 64 64"
              to="-90 64 64"
              dur="800ms"
              repeatCount="indefinite"
            ></animateTransform>
          </g>
        </svg>
      </button>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      selectedAvailabilityDate: '',
      selectedAvailabilityTime: '',
    }
  },
  components: {
    AppointmentsDates: () => import('../components/-AppointmentsDates.vue'),
    AppointmentsTimes: () => import('../components/-AppointmentsTimes.vue'),
  },
  async created() {
    await this.$store.dispatch('appointments/fetchAvailableAppointments')
  },
  methods: {
    async bookAppointment() {
      await this.$store.dispatch('appointments/bookAppointment')
    },
    selectAvailabilityDate(date) {
      this.selectedAvailabilityDate = date
    },
    selectAvailabilityTime(time) {
      this.selectedAvailabilityTime = time
    },
  },
  computed: {
    ...mapState('appointments', [
      'availableAppointments',
      'btnBookAppointment',
    ]),
    activeBookBTN() {
      if (this.selectedAvailabilityDate && this.selectedAvailabilityTime) {
        return true
      } else {
        return false
      }
    },
  },
}
</script>
