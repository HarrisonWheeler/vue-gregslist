<template>
  <div class="house-deetz">
    <h3>{{house.year}}</h3>
    <img class="img-fluid" :src="house.imgUrl" />
    <h3>{{house.price}}</h3>
    <h3>{{house.bedrooms}}</h3>
    <h3>{{house.bathrooms}}</h3>
    <h3>{{house.levels}}</h3>
    <p>{{house.description}}</p>
    <button class="btn btn-danger btn-block" @click="deleteHouse">Delete</button>
  </div>
</template>


<script>
export default {
  name: "house-deetz",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getHouseInfo", this.$route.params.id);
  },
  computed: {
    house() {
      return this.$store.state.activeHouse;
    },
  },
  methods: {
    deleteHouse() {
      this.$store.dispatch("deleteHouse", this.house.id);
    },
  },
  components: {},
};
</script>


<style scoped>
</style>