<template>
  <div class="projects pa-15">
    <h2>My Projects</h2>
    <div>
      <v-layout row wrap>
        <v-flex v-for="(project, index) in projects" :key="index" xs12 sm6 md4>
          <div class="project_card" @mouseleave="testout" @mouseover="testin">
            <div class="videoWrapper">
              <iframe :src="project.url" width="420" height="315" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            </div>
            <div class="textWrapper">
              <h3>{{project.title}}</h3>
            </div>
            <a class="linkWrapper" :href="project.githubLink" target="_blank">
              <h6>Description & Source code <i class="fab fa-github"></i></h6>
            </a>
          </div>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",
  computed: {
    projects: function () {
      return this.$store.getters.getProjects
    },
  },
  methods: {
    testin: () => console.log("in"),
    testout: () => console.log("out")
  }
}
</script>

<style scoped>
  .projects {
    background-color: rgba(0,0,0,0.06);
  }

  .project_card {
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: 2px 2px 4px 0 #a5a5a5;
    margin: 40px;
    padding-bottom: 7px;
    transition: transform .2s; /* Animation */
  }

  .project_card:hover {
    transform: scale(1.3); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
  }

  .videoWrapper {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;
  }
  .videoWrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 97%;
    height: 97%;
    border-radius: 4px;
    margin: 5px;
  }

  .textWrapper {
    min-height: 60px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .linkWrapper {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: inherit;
  }

</style>