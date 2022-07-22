<template>
  <client-only>
    <div class="relative">
      <article v-swiper="swiperOption" class="relative px-6" :loadtheme="false">
        <section class="swiper-wrapper">
          <section
            class="swiper-slide m-1"
            :key="scheduleDate.availability.date"
            v-for="scheduleDate in scheduleData"
          >
            <!-- Render original HTML in server, render Swiper in browser (client) -->
            <button
              @click="selectDate(scheduleDate)"
              :class="
                dateSlected == scheduleDate.availability.date
                  ? ' bg-$blue text-white'
                  : 'bg-white  shadow-md  text-black'
              "
              class="px-2 w-12 py-2 cursor-pointer mt-1 rounded-lg flex flex-col items-center"
            >
              <span class="font-semibold text-sm">{{
                scheduleDate.availability.day.substring(0, 3).toUpperCase()
              }}</span>
              <span class="text-base font-light leading-5 mt-1">{{
                scheduleDate.availability.date.split('-')[0]
              }}</span>
            </button>
          </section>
        </section>
      </article>
      <button class="button-prev absolute -left-4 top-7 z-10">
        <svg
          width="11"
          height="19"
          viewBox="0 0 11 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.00083065 9.45808C0.00891876 9.13375 0.143019 8.82382 0.37716 8.58831L8.62833 0.402922C8.7538 0.278611 8.90374 0.179068 9.06959 0.109977C9.23544 0.0408858 9.41394 0.00360004 9.59491 0.000248315C9.96039 -0.00652079 10.3137 0.125342 10.5772 0.366827C10.8406 0.608313 10.9926 0.939641 10.9997 1.28792C11.0068 1.6362 10.8685 1.97291 10.6151 2.22397L3.28395 9.5L10.6151 16.776C10.8685 17.0271 11.0068 17.3638 10.9997 17.7121C10.9926 18.0604 10.8406 18.3917 10.5772 18.6332C10.3137 18.8747 9.96039 19.0065 9.59491 18.9998C9.22943 18.993 8.88174 18.8481 8.62833 18.5971L0.382049 10.4105C0.255027 10.2843 0.155848 10.1351 0.0903711 9.97167C0.0248938 9.80828 -0.00555325 9.63404 0.00083065 9.45925V9.45808Z"
            fill="#D8D8D8"
          />
        </svg>
      </button>
      <button class="button-next absolute -right-4 top-7 z-10">
        <svg
          width="11"
          height="19"
          viewBox="0 0 11 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.999 9.45924C10.9909 9.13491 10.8567 8.82499 10.6225 8.58948L2.3727 0.40291C2.11918 0.151852 1.77134 0.00701721 1.40571 0.000248098C1.22466 -0.00310363 1.04469 0.0275336 0.876083 0.0904314C0.707473 0.153329 0.553514 0.247255 0.423008 0.366827C0.292501 0.486398 0.18799 0.629285 0.115456 0.787327C0.042922 0.945368 0.00378036 1.11547 0.000261307 1.28792C-0.00684547 1.6362 0.131588 1.97289 0.385107 2.22395L7.71936 9.5L0.385107 16.776C0.131588 17.0271 -0.00684547 17.3638 0.000261307 17.7121C0.00736809 18.0604 0.159438 18.3917 0.423008 18.6332C0.686578 18.8747 1.04007 19.0065 1.40571 18.9998C1.77134 18.993 2.11918 18.8481 2.3727 18.5971L10.6225 10.4105C10.7487 10.2839 10.847 10.1345 10.9117 9.97113C10.9763 9.80776 11.006 9.63371 10.999 9.45924Z"
            fill="#D8D8D8"
          />
        </svg>
      </button>
    </div>
  </client-only>
</template>

<script>
import { directive } from 'vue-awesome-swiper'

export default {
  props: ['scheduleData'],
  directives: {
    swiper: directive,
  },
  data() {
    return {
      dateSlected: '',
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 0,
        loop: false,

        navigation: {
          nextEl: '.button-next',
          prevEl: '.button-prev',
        },
      },
    }
  },
  methods: {
    selectDate(date) {
      this.dateSlected = date.availability.date
      this.$emit('selectAvailabilityDate', date)
    },
  },
}
</script>

<style scoped>
.swiper-slide {
  width: auto !important;
}

.swiper-wrapper {
  width: auto !important;
}
</style>
