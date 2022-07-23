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
              class="px-2 w-12 py-2 cursor-pointer mt-1 rounded-lg flex flex-col items-center 
              transition  delay-100 hover:text-white hover:bg-blue-500 duration-300 "
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
        <img src="../../assets/images/left-arrow.svg" />
      </button>
      <button class="button-next absolute -right-4 top-7 z-10">
        <img src="../../assets/images/right-arrow.svg" />
       
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
