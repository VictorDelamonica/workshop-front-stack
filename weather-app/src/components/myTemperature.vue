<template>
  <div class="my-temp q-ma-md column justify-end items-center bg-white">
    <div class="my-temp__name">
      {{name}}
    </div>
    <div class="my-temp__value">
      {{ value }}°C / {{ value * 1.8 + 32 }}°F / {{ value + 273.15}}°K
    </div>
    <div class="my-temp__icon">
      <img
          :src="'https://openweathermap.org/img/wn/' + weather.icon + '@2x.png'"
          :alt="weather.description" />
    </div>
    <div class="my-temp__weather">
      {{ weather.description }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyTemperature',

  props: {
    name: {
      type: String,
      default: "Nice",
    },
    value: {
      type: Number,
      default: 0,
    },
    weather: {
      type: Object,
      default: {},
    }
  }
}
</script>

<style scoped lang="sass">
.my-temp
  width: auto
  height: auto
  border-radius: 10px
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2)

  &__value
    font-size: 1.25rem
    font-weight: 700

  &__icon
    height: 60px
    img
      height: 100%
</style>