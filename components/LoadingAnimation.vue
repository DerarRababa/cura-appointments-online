<template>
  <div
    class="flex justify-center items-center flex-nowrap"
    :class="itemDirection == 'V' ? 'flex-col' : 'flex-row'"
  >
    <div
      class="text-line"
      v-for="item in numberOFItem"
      :key="item"
      :style="{
        width: width != 'full' ? `${width}px` : '100%',
        height: height != 'full' ? `${height}px` : '100%',
        margin:
          itemDirection == 'V'
            ? `${spaceItems + 'px'} 0`
            : `0 ${spaceItems + 'px'} `,
      }"
    ></div>
  </div>
</template>
<script>
export default {
  /*
    type : {T} text or {I} image or {TI} text with image
    itemDirection : V or H
    numberOFItem : any number
    width : width for  items {n} px or {full} 100%
    height : height for  items {n} px or {full} 100%
    */
  props: [
    "itemDirection",
    "numberOFItem",
    "width",
    "height",
    "spaceItems",
  ],
};
</script>
<style scoped>
@-webkit-keyframes placeHolderShimmer {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}

@keyframes placeHolderShimmer {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}

.text-line {
  -webkit-animation-duration: 1.25s;
  animation-duration: 1.25s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-name: placeHolderShimmer;
  animation-name: placeHolderShimmer;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  background: #f6f6f6;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(8%, #f6f6f6),
    color-stop(18%, #f0f0f0),
    color-stop(33%, #f6f6f6)
  );
  background: linear-gradient(to right, #f6f6f6 8%, #f0f0f0 18%, #f6f6f6 33%);
  background-size: 800px 104px;
  height: 96px;
  position: relative;
}
</style>
