<template>
  <div id="index">

    <nav class="navbar navbar-expand-lg">
      <div class="container">
      
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" @click="scroll('index')">HOME</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" @click="scroll('skills')">SKILLS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" @click="scroll('project')">PORTFOLIO</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" @click="scroll('contact')">CONTACT</a>
              </li>
              
              <li class="nav-item">
                <a class="nav-link" href="https://github.com/jpnnilo"><i class="bi bi-github"></i></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://www.linkedin.com/in/jpnnilo/"><i class="bi bi-linkedin"></i></a>
              </li>


            </ul>
          </div>
        </div>
    </nav>

    <Home/>
    <Skills />
    <Project />
    <Contact />

  </div>
</template>

<script>

import Home from './components/Home.vue'
import Skills from './components/Skills.vue'
import Project from './components/Project.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'App',
  components:{ 
    Home, 
    Skills,
    Project,
    Contact,
  },
  data(){
    return{
      hello:true,
    }
  },
  methods:{

    //nav to section scroll
    scroll(section){
      let view = document.getElementById(section);
      view.scrollIntoView(); 
    }
  }
  
}
</script>



<style>

@import url('https://fonts.googleapis.com/css2?family=Bonheur+Royale&family=Great+Vibes&family=Montserrat&family=Raleway:wght@900&display=swap');

*{
  box-sizing: border-box;
  padding:0;
  margin: 0;
  
}


body{
  background-color:#171717;
}

.navbar{
  padding-top:50px;
  
}

.nav-item{
  margin:auto 0;
  padding: 0;
  cursor: pointer;
  
}
.nav-link{
 color:#EDEDED;
 font-family: 'Raleway', sans-serif;

 font-weight: bold;
 font-size: 12px;
 letter-spacing: 5px;
}

.nav-link:hover{
  color:#DA0037;
}


.bi {
  font-size:20px;
}

#home {
height:900px;
}

#skills{
  background-color: #202020;
  height:970px;
}

#project{
  background-color: #171717;
  height:970px;
}

#contact{
  background-color: #171717;

}

@media (max-width:500px){
.navbar{
  padding-top:20px;
}



}



</style>
