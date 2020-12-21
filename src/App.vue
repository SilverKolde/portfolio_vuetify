<template>
  <v-app>
    <v-app-bar app color="transparent" hide-on-scroll dark class="pl-10">
      <h3 class="font-weight-medium name">SILVER KOLDE</h3>

      <v-spacer/>

      <v-btn href="#About" class="mr-2 ml-7" text>
        <span class="mr-2" >About</span>
      </v-btn>
      <v-btn href="#About" class="mr-2 ml-7" text>
        <span>My Work</span>
      </v-btn>
      <v-btn href="#About" class="mr-2 ml-7" text>
        <span>Contact</span>
      </v-btn>
    </v-app-bar>
    <About></About>
    <Projects></Projects>
    <Contact></Contact>
  </v-app>
</template>

<script>
import Contact from "@/components/Contact";
import About from "@/components/About";
import Projects from "@/components/Projects";

export default {
  name: 'App',

  components: {
    Contact,
    About,
    Projects,
  }
};
</script>

<style scoped>
  .name {
    font-size: 20px;
  }
</style>