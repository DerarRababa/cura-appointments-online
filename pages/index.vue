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

          <AppointmentsDates></AppointmentsDates>
        </section>
        <section class="mt-2">
          <h4 class="font-semibold text-base">Choose time</h4>

          <AppointmentsTimes></AppointmentsTimes>
        </section>
      </section>
      <button
        class="mt-3 text-white font-semibold bg-$blue w-full rounded-lg py-3 flex items-center justify-center"
      >
        Book Appointment
      </button>
    </main>
  </div>
</template>

<script>
export default {
  name: 'NuxtTutorial',
  components: {
    AppointmentsDates: () => import('../components/-AppointmentsDates.vue'),
    AppointmentsTimes: () => import('../components/-AppointmentsTimes.vue'),
  },
}
</script>
