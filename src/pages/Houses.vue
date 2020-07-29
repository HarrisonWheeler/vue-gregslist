<template>
  <div class="houses row">
    <button
      type="button"
      class="btn btn-primary btn-block mb-2"
      data-toggle="modal"
      data-target="#house-modal"
    >Create House</button>
    <div
      class="modal fade"
      id="house-modal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Create House</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="container-fluid">
              <form @submit.prevent="createNewHouse">
                <div class="form-group row">
                  <label for="year" class="col-sm-1-12 col-form-label">Year</label>
                  <div class="col-sm-1-12">
                    <input
                      type="number"
                      class="form-control"
                      name="year"
                      id="inputName"
                      v-model="newHouse.year"
                      required
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="imgUrl" class="col-sm-1-12 col-form-label">Image</label>
                  <div class="col-sm-1-12">
                    <input
                      type="text"
                      class="form-control"
                      name="imgUrl"
                      id="inputName"
                      placeholder="Enter Image URL here..."
                      v-model="newHouse.imgUrl"
                      required
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="bedrooms" class="col-sm-1-12 col-form-label">Bedrooms</label>
                  <div class="col-sm-1-12">
                    <input
                      type="number"
                      class="form-control"
                      name="bedrooms"
                      id="inputName"
                      placeholder="Enter model here..."
                      v-model="newHouse.bedrooms"
                      required
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="bathrooms" class="col-sm-1-12 col-form-label">Bathrooms</label>
                  <div class="col-sm-1-12">
                    <input
                      type="number"
                      class="form-control"
                      name="bathrooms"
                      id="inputName"
                      v-model="newHouse.bathrooms"
                      required
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="price" class="col-sm-1-12 col-form-label">Price</label>
                  <div class="col-sm-1-12">
                    <input
                      type="number"
                      class="form-control"
                      name="price"
                      id="inputName"
                      v-model="newHouse.price"
                      required
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="inputName" class="col-sm-1-12 col-form-label">Description</label>
                  <div class="col-sm-1-12">
                    <input
                      type="text"
                      class="form-control"
                      name="description"
                      id="inputName"
                      placeholder="Enter description here..."
                      v-model="newHouse.description"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="levels" class="col-sm-1-12 col-form-label">Levels</label>
                  <div class="col-sm-1-12">
                    <input
                      type="number"
                      class="form-control"
                      name="levels"
                      id="inputName"
                      placeholder="Enter image url here..."
                      v-model="newHouse.levels"
                      required
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="offset-sm-2 col-sm-10">
                    <button type="submit" class="btn btn-primary">Make House</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal End -->

    <house v-for="house in houses" :houseData="house" :key="house.id" />
  </div>
</template>


<script>
import House from "../components/House";
export default {
  name: "houses",
  data() {
    return {
      newHouse: {},
    };
  },
  mounted() {
    this.$store.dispatch("getHouse");
  },
  computed: {
    houses() {
      return this.$store.state.houses;
    },
  },
  methods: {
    createNewHouse() {
      this.$store.dispatch("createHouse", this.newHouse);
      this.newHouse = {};
      $("#house-modal").modal("hide");
    },
  },
  components: {
    House,
  },
};
</script>


<style scoped>
</style>