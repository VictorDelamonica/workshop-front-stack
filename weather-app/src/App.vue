<template>
  <q-layout view="lHh Lpr lFf">

    <!-- Documentation q-input: https://quasar.dev/vue-components/input -->
    <q-input
        class="text-h6"
        filled
        outlined
        v-model="city"
        placeholder="Ville (ex: Paris)"
        @keydown.enter.prevent="callApi"
    >
      <template v-slot:append>
        <!-- Documentation q-btn: https://quasar.dev/vue-components/button -->
        <q-btn round flat icon="fas fa-magnifying-glass" @click="callApi"
        />
      </template>
    </q-input>
    <my-temperature
        v-if="data"
        :name=data.name
        :value="Math.round(data.main.temp)"
        :weather="data.weather[0]"/>
  </q-layout>
</template>

<script>
import myTemperature from './components/myTemperature.vue';
export default {
  name: 'App',

  components: {
    myTemperature,
  },

  data() {
    return {
      data: null,
      apiKey: '2c7cf711524b61ac06e3487e2ed857db',
      corsProxy: 'https://cors-anywhere.herokuapp.com/',
    }
  },

  methods: {
    async callApi(newCity) {
      if (newCity !== '') {
        const request = `${this.corsProxy}api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.apiKey}`;
        const options = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        };

        this.data = await fetch(request, options)
            .then((res) => res.json())
            .then((data) => data)
            .catch((err) => {
              console.log(err);
            });
        console.log(this.data);
      }
    }
  }
}
</script>

<!--<style scoped lang="sass">-->
<!--div-->
<!--  background-color: red-->
<!--  height: 200px-->
<!--</style>-->