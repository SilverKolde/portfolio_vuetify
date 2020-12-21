import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Vuex from 'vuex'
import Project from "@/models/Project";
import Contact from "@/models/Contact";


//TODO * Geoloogi videol heli maha ja avakuva pilt ära muuta
//TODO * githubi link võiks olla nähtav ainult peal hoverdades


Vue.config.productionTip = false
Vue.use(Vuex);

const store = new Vuex.Store( {
  state: {
    projects: [
      new Project("Geological Data Cleaning", "https://player.vimeo.com/video/486788631", "https://github.com/SilverKolde/Geological_data_sorting_application"),
      new Project("Algorithms and Data structures", "https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-screen-close-up-1728-large.mp4"),
      new Project("Memory Allocation Visualization", "https://www.youtube.com/embed/R1Sy9RatBs0&ab"),
      new Project("POS Application", "https://www.youtube.com/embed/R1Sy9RatBs0&ab"),
      new Project("Ricky's Restaurant", "https://www.youtube.com/embed/R1Sy9RatBs0&ab"),
      new Project("Yelpcamp", "https://www.youtube.com/embed/R1Sy9RatBs0&ab")
    ],
    contacts: [
      new Contact("silverkolde@gmail.com", "Mail", "far fa-envelope fa-2x", "mailto:silverkolde@gmail.com"),
      new Contact("Silver Kolde", "LinkedIn", "fab fa-linkedin fa-2x", "https://www.linkedin.com/in/silver-kolde-754b5490"),
      new Contact("Silver Kolde", "Github", "fab fa-github fa-2x", "https://github.com/SilverKolde"),
    ],
  },
  getters: {
    getProjects: state => state.projects,
    getContacts: state => state.contacts,
  }
});

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
