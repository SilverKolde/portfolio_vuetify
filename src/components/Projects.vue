<template>
  <div class="projects pa-15">
    <h2>My Projects</h2>
    <div>
      <v-layout row wrap>
        <v-flex v-for="(project, index) in projects" :key="index" xs12 md6 lg4>

          <v-card class="mx-auto my-12 project_card" max-width="374">
            <template slot="progress">
              <v-progress-linear color="deep-purple" height="10" indeterminate/>
            </template>

            <div class="videoWrapper">
              <iframe :src="project.url" width="420" height="315" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            </div>

            <v-card-title>{{project.title}}</v-card-title>
            <v-btn v-if="project.liveURL !== undefined" color="primary lighten-2 ml-4" small >
              <a :href="project.liveURL" target="_blank">check out live</a>
            </v-btn>
            <v-card-text>
              <div class="my-4 subtitle-1">
                {{ project.soloGroup }}
              </div>
              <div>{{ project.description }}</div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title>Used technologies</v-card-title>

            <v-card-text>
              <v-layout row wrap>
                <v-flex v-for="(tech, idx) in project.technologies" :key="idx" class="ma-3">
                  <v-chip>
                    {{ tech }}
                  </v-chip>
                </v-flex>
              </v-layout>
            </v-card-text>

            <v-card-actions>
              <v-btn color="info lighten-2 mb-4 ml-2" small>
                <a :href="project.githubLink" target="_blank">Source code</a>
              </v-btn>
            </v-card-actions>
          </v-card>
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
  }
}
</script>

<style scoped>
  .projects {
    background-color: rgba(0,0,0,0.06);
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

  a {
    text-decoration: none;
  }

  .project_card {
    transition: transform .4s;
  }

  .project_card:hover {
    -ms-transform: scale(1.03); /* IE 9 */
    -webkit-transform: scale(1.03); /* Safari 3-8 */
    transform: scale(1.03);
  }

</style>