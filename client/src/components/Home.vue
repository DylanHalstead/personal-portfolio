<template>
  <div id="particles-js">
    <div class="intro-text">
      <h3 class="top-text">My name is</h3>
      <h1 class="name">Dylan Halstead</h1>
      <h3 class="bottom-text">I'm a software engineer student creating full-stack applications, exploring  computer science solutions, and building cool stuff.</h3>
    </div>
  </div>
</template>

<script>
  import 'particles.js'
  export default {
    name: "Home",
    mounted() {
      this.initParticles()
    },
    methods: {
      initParticles() {
        window.particlesJS("particles-js", {
            "particles": {
              "number": {
                "value": 35,
                "density": {
                  "enable": true,
                  "value_area": 1000
                }
              },
              "color": {
                "value": "#f2f5f8"
              },
              "shape": {
                "type": "circle",
                "stroke": {
                  "width": 0,
                  "color": "#000000"
                },
                "polygon": {
                  "nb_sides": 6
                },
                "image": {
                  "src": "img/github.svg",
                  "width": 100,
                  "height": 100
                }
              },
              "opacity": {
                "value": 0.3,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 2,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 40,
                  "size_min": 0.1,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": true,
                "distance": 100,
                "color": "#f2f5f8",
                "opacity": 0.2,
                "width": 1
              },
              "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": false,
                  "mode": "repulse"
                },
                "onclick": {
                  "enable": false,
                  "mode": "push"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 400,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 3
                },
                "repulse": {
                  "distance": 100,
                  "duration": 100
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true
          })
      }
    }
  };
</script>

<style>
  #particles-js {
    background: #141414;
    width: 100vw;
    height: 100vh;
  }

  .intro-text {
    width: 40%;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    margin: 0 12rem;
  }

  .top-text {
    color: #429eb3;
    font-size: 1.5rem;
    font-weight: 400;
  }

  .name {
    font-family: 'Archivo', sans-serif;
    font-size: 5rem;
    font-weight: 900;
    margin: 20px 0;
  }

  .bottom-text {
    color: #429eb3;
    font-size: 1.5rem;
    font-style: italic;
    font-weight: 400;
    line-height: 150%;
  }
</style>
