import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from "../router"

const _api = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api",
  timeout: 3000
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cars: [],
    activeCar: {},
    houses: [],
    activeHouse: {},
  },
  mutations: {
    setCars(state, cars) {
      state.cars = cars
    },
    setActiveCar(state, car) {
      state.activeCar = car
    },
    setHouses(state, houses) {
      state.houses = houses
    },
    setActiveHouse(state, house) {
      state.activeHouse = house
    }
  },
  actions: {
    async getCars({ commit, dispatch }) {
      try {
        let res = await _api.get("cars")
        commit("setCars", res.data.data)
      } catch (error) {
        console.error(error);
      }
    },
    async getCar({ commit, dispatch }, carId) {
      try {
        let res = await _api.get("cars/" + carId)
        console.log("got a car:", res.data);
        commit("setActiveCar", res.data.data)
      } catch (error) {
        console.error(error);
      }
    },
    async createCar({ commit, dispatch, state }, carData) {
      try {
        let res = await _api.post("cars", carData)
        console.log(res.data);
        //NOTE two ways to handle this
        // commit("setCars", [...state.cars, res.data.data])
        dispatch("getCars")
      } catch (error) {
        console.error(error);
      }
    },
    async deleteCar({ commit, dispatch, state }, carId) {
      try {
        let res = await _api.delete("cars/" + carId)
        console.log(res.data);
        router.push({ name: "Cars" })
        commit("setActiveCar", {})
      } catch (error) {
        console.error(error);
      }
    },
    async getHouse({ commit, dispatch }) {
      try {
        let res = await _api.get("houses")
        console.log(res.data.data);
        commit("setHouses", res.data.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getHouseInfo({ commit, dispatch }, houseId) {
      try {
        let res = await _api.get("houses/" + houseId)
        console.log(res.data.data);
        commit("setActiveHouse", res.data.data)
      } catch (error) {
        console.error(error)
      }
    },
    async createHouse({ commit, dispatch, state }, houseData) {
      try {
        let res = await _api.post("houses", houseData)
        console.log(res.data);
        dispatch("getHouse")
      } catch (error) {
        console.error(error)
      }
    },
    async deleteHouse({ commit, dispatch, state }, houseId) {
      try {
        let res = await _api.delete("houses/" + houseId)
        console.log(res.data);
        router.push({ name: "Houses" })
        commit("setActiveHouse", {})
      } catch (error) {
        console.error(error);
      }
    },
  },
  modules: {
  }
})
