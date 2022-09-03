<template>
    

    <div id="home">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1 >Introducing</h1>  
                                        
                    <h2>About Me</h2>
                    <p class="home-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
                <div class="col">
                    <img src="../assets/profile.jpg" alt="profile" class="profile">
                    <h3>John Phillip Nilo</h3>
                    <h4>Web Developer</h4>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

.row{
    padding: 100px 0;
}

h1{
    padding-top:30px;
    color: #DA0037;
    font-family: 'Great Vibes', cursive;
    font-size:8vmax;
    text-align: center;
}
h2 {
    text-align: center;
    margin-top:-35px;
    color: #EDEDED;
    font-family: 'Raleway', sans-serif;
    letter-spacing:0;
    font-size: 5vmax;
}

h3{
    margin-top:10px;
    color: #EDEDED;
    font-family: 'Raleway', sans-serif;
    letter-spacing:2px;
   
}

h4{
    margin-top:-10px;
    color: #DA0037;
    letter-spacing:3px;
    font-weight: 500;
}

h4,h3{
    width: 82%;
    text-align:right;
}

p{
    width:550px;
    float:right;
    font-family: 'Montserrat', sans-serif;

    font-size: 1.4vmax;
}

.home-text{
    color: #EDEDED; 
}
.profile{
    width:400px;
    margin:0 auto;
    display:block;
}


@media(max-width:1200px){
h4,h3,p{
    text-align:center;
    width:100%;
}



@media(max-width:992px){
    .row{
        padding: 30px 0;
    }
}


@media(max-width:500px){
    .profile{
        width:300px;
    }
}

}
</style>