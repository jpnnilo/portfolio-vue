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
                        <div class="show" @click="show(project)" >
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
      <div class="modal-header">
        <h5 class="modal-title"></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        
        <div class="container">
            <div class="row">
            <div class="col">
                <h1 class="modalTitle">{{ project.title }}</h1>
               <p>{{ project.desc }}</p> 
            </div>
            <div class="col">
                test2
            </div>
        </div>

        </div>
        
      </div>
      <div class="modal-footer">
        
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
                    id:1, title: 'Animal Shelter', desc:'The shelter records the animal breed, gender, age and other relevant information. They are also checked for diseases or injuries by volunteer veterinarians. Once these strays are rehabilitated, they are now ready for adoption by qualified individuals..', tags:['Laravel','jQuery', 'MySQL','Bootstrap',],
                },
                {
                    id:2, title: 'Animal Shelter + Vue', desc:'The shelter records the animal breed, gender, age and other relevant information. They are also checked for diseases or injuries by volunteer veterinarians. Once these strays are rehabilitated, they are now ready for adoption by qualified individuals.', tags:['Laravel','Vue.js','Bootstrap 5', 'MySQL'],
                },
                {
                    id:3, title: 'TicTacToe 2019', desc:'This application is my exam when I applied in company way back 2019. Instruction: Create a web app tic-tac-toe program using Laravel, MySQL and Jquery. It doesnt have to be a nice-looking UI. Just provide a way for 2 players to play tic-tac-toe.',tags:['Laravel','jQuery', 'MySQL'],
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
    height:800px;
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
    .portfolio{
    margin-top:100px;
    }   

    .tag{
    color:#DA0037;
    }

}

</style>