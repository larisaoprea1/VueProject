import { createStore } from 'vuex'
import EventService from '../services/EventService'

export default createStore({
  state: {
    user: 'Adam Jahr',
    events: [],
    event: {}
  },
  mutations: {
    GET_EVENTS(state, events){
      state.events = events
    },
    GET_EVENT(state,event){
      state.event = event
    },
    ADD_EVENT(state, event){
      state.events.push(event)
    }
  },
  actions: {
    createEvent({commit}, event){
      EventService.postEvent(event)
      .then(()=>{
        commit('ADD_EVENT', event)
      })
      .catch(error=>{
        throw(error)
      })
    },
    fetchEvents({commit}){
      return EventService.getEvents()
      .then(response => {
        commit('GET_EVENTS', response.data) 
      })
      .catch(error => {
        throw(error)
      })
    },
    fetchEvent({commit, state},id){
      const existingEvent = state.events.find(event => event.id == id)
      if(existingEvent){
        commit('GET_EVENT', existingEvent)
      }else{
      return EventService.getEvent(id)
      .then(response => {
        commit('GET_EVENT', response.data)
      })
      .catch(error => {
        throw(error)
      })
    }
  }
      
  },
  modules: {}
})