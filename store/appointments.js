export const state = () => ({
  btnBookAppointment: false,
  availableAppointments: '',
})

export const mutations = {
  SET_AVAILABLE_APPOINTMENT(state, payload) {
    state.availableAppointments = JSON.parse(payload)
  },
  TOGGLE_BTN_BOOK_APPOINTMENT_LOADING(state, payload) {
    state.btnBookAppointment = payload
  },
}
export const actions = {
  async fetchAvailableAppointments({ commit }) {
    await this.$API
      .get(``, false)
      .then((response) => {
        commit('SET_AVAILABLE_APPOINTMENT', response)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  async bookAppointment({ commit }) {
    commit('TOGGLE_BTN_BOOK_APPOINTMENT_LOADING', true)
    await setTimeout(() => {
      commit('TOGGLE_BTN_BOOK_APPOINTMENT_LOADING', false)
    }, '2000')
  },
}
