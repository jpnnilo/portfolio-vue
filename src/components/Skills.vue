<template>
<div id="skills">
 <h2>SKILLS</h2>


    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-6 col-6 col-skill">
                <img src="../assets/skills/PHP.png" class="card-img-top php" alt="...">
               
            </div>
            <div class="col-lg-3 col-md-6 col-6 col-skill">
                
                    <img src="../assets/skills/JS.png" class="card-img-top" alt="...">
                  
             
            </div>
            <div class="col-lg-3 col-md-6 col-6 col-skill">
                    <img src="../assets/skills/css.png" class="card-img-top" alt="...">
            </div>
            <div class="col-lg-3 col-md-6 col-6 col-skill">
                    <img src="../assets/skills/MySQL.png" class="card-img-top mysql" alt="...">
            </div>
        
            <div class="col-lg-3 col-md-6 col-6 col-skill">
                <img src="../assets/skills/laravel.png" class="card-img-top" alt="...">
               
            </div>
            <div class="col-lg-3 col-md-6 col-6 col-skill">
                <img src="../assets/skills/vue.png" class="card-img-top" alt="...">
            </div>
            <div class="col-lg-3 col-md-6 col-6 col-skill">
                <img src="../assets/skills/bootstrap.svg" class="card-img-top" alt="...">
            </div>
            <div class="col-lg-3 col-md-6 col-6 col-skill">
                 <img src="../assets/skills/git.png" class="card-img-top" alt="...">
            </div>
        </div>
    </div>
</div>



</template>

<script>
export default {
    data(){
        return {
           
        }
    }
}
</script>

<style scoped>
h2{
    padding-top: 30px;
    text-align: center; 
    margin-top:-35px;
    color: #EDEDED;
    font-family: 'Raleway', sans-serif;
    letter-spacing:0;
    font-size: 4vmax;
    font-weight:bold;
}

h3{
    text-align: center;
    padding: 5px;
    background-color: #444444;
    color:#EDEDED;
}   

img{
    margin:0 auto;
    display:block;
    width: 150px;
}

.row{
    margin: 100px 0;
}

.col-skill{
    margin-top: 50px;
    padding-top:20px;
   
}

.card{
   
    border-radius: 0;
    padding: 20px;
    background-color:#DA0037;
    height:300px;
}

.php{
    padding-top: 30px;
    width:200px;
}

.mysql{
    padding-top: 30px;
}


@media(max-width:992px){
        img{
    margin:0 auto;
    display:block;
    width: 100px;
}

.php{
    padding-top: 10px;
    width:130px;
}

}




</style>