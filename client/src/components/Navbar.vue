<template>
  <header>
    <nav class="navbar">
      <div class="brand-container">
        <img src="../../assets/logo.png" alt="Logo.png" class="logo">
        <div @click="$emit('toggle-hamburger')" class="hamburger">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </div>
      <ul class="nav-links">
        <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#">About</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Projects</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {
    name: "Navbar",
  }
</script>

<style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    position: fixed;
    width: 100%;
    background: rgba(20, 20, 20, 0.3);
    box-shadow: 0 1px 10px rgba(242, 245, 248, 0.05);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(5px);
  }

  .nav-links {
    list-style: none;
    display: flex;
  }

  .nav-link {
    font-family: 'Archivo', sans-serif;
    font-size: 1rem;
    font-weight: 900;
    margin-right: 2rem;
    text-decoration: none;
    padding: .5rem;

    background-image: linear-gradient(#429eb3, #429eb3);
    background-size: 0% 4px;
    background-repeat: no-repeat;
    background-position: 50% 100%;
    transition: background-size 0.5s ease;
  }

  .nav-link:hover, .nav-link.active {
    background-size: 90% 4px;
  }

  .logo {
    height: 2.5rem;
    width: 2.5rem;
    margin-left: 2rem;
  }

  .hamburger {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    height: 1.5rem;
    width: 2rem;
    margin-right: 2.5rem;
    cursor: pointer;
  }

  .hamburger .bar {
    height: 3px;
    width: 100%;
    background-color: #F2F5F8;
    border-radius: 10px;
  }

  @media (max-width: 1080px) {
    .hamburger {
      display: flex;
    }

    .navbar {
      flex-direction: column;
      align-items: flex-start;
      z-index: 1;
      padding: 0;
    }

    .brand-container {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 1rem 0;
      align-items: center;
    }

    .nav-links {
      display: none;
      width: 100%;
      flex-direction: column;
    }

    .nav-links.active {
      display: flex;
    }

    .nav-item {
      width: 100%;
      display: flex;
      border-top: rgba(242, 245, 248, 0.1) 1px solid;
    }

    .nav-link {
      margin: 0;
      padding: 2rem;
      width: 100%;
      text-align: center;
    }
  }
</style>