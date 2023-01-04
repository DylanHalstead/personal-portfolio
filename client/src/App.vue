<template>
  <Navbar @toggle-hamburger="toggleHamburger" />
  <Home />
  <Projects :projects="projects" />
</template>

<script>
import Home from './components/Home.vue'
import Navbar from './components/Navbar.vue'
import Projects from './components/Projects.vue'

export default {
  name: 'App',
  components: {
    Home,
    Navbar,
    Projects
  },
  data() {
    return {
      projects: [],
    }
  },
  methods: {
    toggleHamburger() {
      document.querySelector('.nav-links').classList.toggles('active');
    },
    async fetchProjects() {
      const res = await fetch('http://localhost:5000/api/projects');
      const data = await res.json();
      return data;
    }
  },
  async created() {
    this.projects = await this.fetchProjects();
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: #F2F5F8;
  font-family: 'Roboto', sans-serif;
}

body {
  background-color: #141414;
}
</style>
