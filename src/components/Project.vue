<template>
<div id="project">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-12 portfolio">
                <h1>Projects</h1>
                <h2>PORTFOLIO</h2>
            </div>
            <div class="col-lg-6 col-12">
                <div class="row row-projects">
                    <div class="col-lg-12 col-projects" v-for="project in projects" :key="project">
                        <div class="show" @click="show(project)">
                            <h3>{{ project.title }}</h3>
                            <p class="tag" v-for="tag in project.tags" :key="tag">{{tag}}</p>
                            <p>{{project.desc}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<!-- Modal -->
<div class="modal fade" id="projectModal">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      
      <div class="modal-body">
        
                
            <div class="row">
            <div class="col-lg-4 col-modal-title">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                <h1 class="modal-title">{{ project.title }}</h1>
               <p>{{ project.desc }}</p> 
            </div>
            <div class="col-lg-8 col-modal-img">
                <div id="projectCarousel" class="carousel slide " data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item" :class="{ active: index === 0}" v-for="(image, index ) in project.images" :key="image"> 
                        <img :src="require('../assets/projects/'+ image.src)" class="w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h5 class="carouselTitle">{{ image.title }}</h5>
                        </div>
                    </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#projectCarousel" data-bs-slide="prev">
                        <i class="bi bi-caret-left-fill"></i>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#projectCarousel" data-bs-slide="next">
                        <i class="bi bi-caret-right-fill"></i>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

            </div>

        </div>
        
      </div>
      
    </div>
  </div>
</div>

</template>


<script>
export default {
    data(){
        return{
            isActive: false,
            project:{},
            projects:[
                {
                    id:1, 
                    title: 'Animal Shelter', 
                    desc:'The shelter records the animal breed, gender, age and other relevant information. They are also checked for diseases or injuries by volunteer veterinarians. Once these strays are rehabilitated, they are now ready for adoption by qualified individuals..', 
                    tags:['Laravel','jQuery', 'MySQL','Bootstrap',],
                    images:[
                        {
                        src: 'AnimalShelter1.jpg',
                        title:'View Adoptable Animals',
                        },
                        {
                        src: 'AnimalShelter1.2.jpg',
                        title:'Adopt Animals',
                        },
                        {
                        src: 'AnimalShelter2.jpg',
                        title:'View All Animals / CRUD',
                        },
                        {
                        src: 'AnimalShelter3.jpg',
                        title:'View Animal Details and Diseases',
                        },
                    ],
                   
                },
                {
                    id:2, 
                    title: 'Animal Shelter + Vue', 
                    desc:'The shelter records the animal breed, gender, age and other relevant information. They are also checked for diseases or injuries by volunteer veterinarians. Once these strays are rehabilitated, they are now ready for adoption by qualified individuals.', 
                    tags:['Laravel','Vue.js','Bootstrap 5', 'MySQL'],
                    images:[
                        {
                        src: 'AnimalShelterVue1.jpg',
                        title:'View Animal Status and Details',
                        },
                        {
                        src: 'AnimalShelterVue2.jpg',
                        title:'View Animal Diseases',
                        },
                        {
                        src: 'AnimalShelterVue3.jpg',
                        title:'View Animals',
                        },
                    ],
                   
                },
                {
                    id:3, 
                    title: 'TicTacToe 2019',
                    desc:`This game was my exam when I applied in company way back 2019. Instruction: Create a web app tic-tac-toe program using Laravel, MySQL and Jquery. It doesn't have to be a nice-looking UI. Just provide a way for 2 players to play tic-tac-toe.`,
                    tags:['Laravel','jQuery', 'MySQL'],
                    images:[
                        {
                        src: 'tictactoe1.jpg',
                        title:'Game Start',
                        },
                        {
                        src: 'tictactoe2.jpg',
                        title:'Game End',
                        },
                    ],
                }, 
            ]
        }
    },
    methods:{
        show(project){
            this.project = project;
            $('#projectModal').modal('show');
           
        },

    
       
    },
   

}
</script>

<style scoped>


#project{
    background:  linear-gradient(to right, #171717 50%, #DA0037 50%);
}

h1{
    padding-top:30px;
    color: #DA0037;
    font-family: 'Great Vibes', cursive;
    font-size:8vmax;
}
h2 {
    margin-top:-35px;
    color: #EDEDED;
    font-family: 'Raleway', sans-serif;
    letter-spacing:0;
    font-size: 5vmax;
}


h3{
    color:#EDEDED;
    font-family: 'Raleway', sans-serif;
}

.show:hover h3{
    text-decoration: underline;
}

p{  
    margin-top:10px;
    font-family: 'Montserrat', sans-serif;
    color: black;
}

.show{
    cursor: pointer;
}

.portfolio{
    margin-top:200px;
}

.row-projects{
    margin-top: 40px;
    padding-top:50px;
    padding-left: 100px;
}

.col-projects{
    margin: 30px 0;
}

.tag{
    display:inline;
    margin:0 5px 0 0;
    background-color: #EDEDED;
    border-radius: 8px;
    padding: 2px 10px;
}

.modal-body{
    padding: 0 0 0 12px;
    height:800px;
}

.col-modal-title{
    margin: 0 auto;
    background-color:#DA0037;
    height:800px;
    padding: 60px;
}

.modal-title{
    color: #EDEDED;
    font-family: 'Raleway', sans-serif;
    letter-spacing:0;
    font-size: 2vmax;
}

.col-modal-img{
    padding: 0  0 0;
}


img{
    height:800px;
}

.carouselTitle{
    background-color: #171717;
    color: #EDEDED;
    padding: 10px;

}

.bi-caret-left-fill{
    color:black;
    font-size: 30px;
}
.bi-caret-right-fill{
    color:black;
    font-size: 30px;
}



@media(max-width:992px){
    h1,h2{
       text-align: center;
    }

    p{  
    color: #EDEDED;
    }

    #project{
    background:  linear-gradient(to right, #171717 50%, #171717 50%);
    }
    .row-projects{
        margin-top: 40px;
        padding-top:50px;
        padding-left: 0;
    }

    .col-modal-title{
        margin: 0 auto;
        background-color:#DA0037;
        height:200px;
        padding: 10px;
    }

    .portfolio{
    margin-top:100px;
    }   

    .tag{
    color:#DA0037;
    }

}

</style>