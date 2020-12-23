import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Vuex from 'vuex'
import Project from "@/models/Project";
import Contact from "@/models/Contact";

Vue.config.productionTip = false
Vue.use(Vuex);

const store = new Vuex.Store( {
  state: {
    projects: [
      new Project(
          "POS Application",
          "https://player.vimeo.com/video/493374922",
          "https://bitbucket.org/taniel_s/lab4-driimtiim/src/master/",
          "Group Project",
          "A project made during Software Engineering course in University. During the course we learned the basic principles how software projects are planned and executed.",
          ["Java", "JavaFX", "JUnit", "Gradle", "Hibernate"]),
      new Project("Algorithms and Data structures",
          "https://player.vimeo.com/video/493374324",
          "https://github.com/SilverKolde/Algorithms_and_Data_Structures",
          "Solo Project",
          "Most of the work I've done during an university Algorithms and Data structures course. Shows some of the most known algorithms and data structures I have worked with / been exposed to.",
          ["Java", "Maven"]),
      new Project(
          "Geological Data Cleaning",
          "https://player.vimeo.com/video/487593634",
          "https://github.com/SilverKolde/Geological_data_sorting_application",
          "Group Project",
          "An application for cleaning CSV files that hold specific geological data.",
          ["Java", "JavaFX", "Gradle"]),
      new Project(
          "Memory Allocation Visualization",
          "https://player.vimeo.com/video/493415266",
          "https://github.com/SilverKolde/memory_allocation_op_sys",
          "Solo Project",
          "This is my first Vue.js app, which I did to learn the basics of frontend. As you can see this project has many bugs that I'm not proud of, but because this project is of no use to anybody, I'll rather focus on new projects than fixing this one.",
          ["Vue.js", "JavaScript"],
          "https://memory-allocation.herokuapp.com/"),
      new Project(
          "Ricky's Restaurant",
          "https://player.vimeo.com/video/493706699",
          "https://github.com/SilverKolde/Rickys-Restaurant",
          "Solo Project",
          "After learning the basics of web during summer, I did not realize how does Java fit into web development. After some googling I decided to learn about Java servlets and JSP-s, before moving on to Spring framework.",
          ["Java", "JSP", "Tomcat", "Maven"]),
      new Project(
          "Post It",
          "https://player.vimeo.com/video/493473581",
          "https://github.com/SilverKolde/postit_social_media_app",
          "Group Project",
          "A project made during Web Application Development course. I'm not 100% sure if I could write something similar from scratch without assistance, but I do know how the whole project works. Could definitely add new features etc.",
          ["Vue.js", "Node.js", "SQLite3", "Jest"])
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
