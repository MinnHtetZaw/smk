<template>
    <div>
<!-- 
  <div class="nav_all">
    <div class="nav_shade"> -->
             <!-- <nav class="navbar navbar-expand-lg nav_in ">


  <div class="container-fluid ">
    <a class="navbar-brand" href="#"> <div class="nav_logo_text">   <div class="logo_div"><img class='navlogo' src="../assets/img/logo.png" alt=""></div>    </div>  </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item ">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
       <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            School
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">School History</a></li>
            <li><a class="dropdown-item" href="#">Mission Vision</a></li>
            
          </ul>
        </li>
         <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Courses
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Kid</a></li>
            <li><a class="dropdown-item" href="#">Primary School</a></li>
            <li><a class="dropdown-item" href="#">Secendary School</a></li>
          </ul>
        </li>
         <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Admission
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Procedure</a></li>
            <li><a class="dropdown-item" href="#">Fee</a></li>
            <li><a class="dropdown-item" href="#">Academic Calendar</a></li>
          </ul>
        </li>

           <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#">Teacher</a>
        </li>
         <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#">News and Activities</a>
        </li>
         <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#">Career</a>
        </li>
         <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Contact us</a>
        </li>

        
      </ul>
    </div>
  </div>
</nav> -->
<!-- 
<nav class="navbar navbar-expand-lg nav_in  ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><div class="nav_logo_text ">  <img class='navlogo ' src="../assets/img/logo.png" alt=""> <div id="nav_letter">  <h3 class="nav_t1">SMK Private School</h3> </div>    </div> </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
         <ul class="navbar-nav ms-auto">
        <li class="nav-item ">
           <router-link :to="{ name: 'Home', params: { userId: 1 }}" class="nav-link active" aria-current="page" >Home</router-link>
       
        </li>
       <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            School
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">School History</a></li>
            <li><a class="dropdown-item" href="#">Mission Vision</a></li>
            
          </ul>
        </li>
         <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Courses
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li>
              <router-link :to="{ name: 'Pre', params: { userId: 1 }}" class="dropdown-item" >Pre School</router-link>
            </li>
            <li>
               <router-link   :to="{ name: 'Primary', params: { userId: 2 }}" class="dropdown-item" >Primary School</router-link>
         </li>
            <li>
               <router-link   :to="{ name: 'Secondary', params: { userId: 3 }}" class="dropdown-item">Secondary School</router-link>
        </li>
          </ul>
        </li>
         <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Admission
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Procedure</a></li>
            <li><a class="dropdown-item" href="#">Fee</a></li>
            <li><a class="dropdown-item" href="#">Academic Calendar</a></li>
          </ul>
        </li>

           <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#">Teacher</a>
        </li>
         <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#">News and Activities</a>
        </li>
         <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#">Career</a>
        </li>
         <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Contact us</a>
        </li>

        
      </ul>
    </div>
  </div>
</nav>
    </div>
      

  </div> -->

    <div class="slider_school"> 

<div id="carouselExampleCaptions" class="carousel slide slider_inside " data-bs-ride="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active ">
      <img src="../assets/img/primary/slide1.jpg" class="d-block w-100 slider_inside" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="../assets/img/primary/slide2.jpg" class="d-block w-100 slider_inside" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="../assets/img/primary/slide3.jpg" class="d-block w-100 slider_inside" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    </div>

   <section class="section_2"> 
    <div class=" Part2 ">
        <div class="row gx-0">
           <div class="col-sm-4  ">
              <div class="introimg "> 
                  <img class='gradu' src="../assets/img/school3d.jpg" alt="">
              </div>
              </div>

            <div class="col-sm-8">
              <div class=" intro "> 
                     <h1 class="mtext ">Welcome to Pre School</h1>
                 <h2 class="mtext2 bold"> Information About Pre School.</h2>
                      <p>
                        Shwe Maw Kun Education Group (registered as Maw Kun International Education Group) is a both local and international education provider founded in January 2015 to provide a quality local and international education, and foster oster invidividual development with relatively affordable feoster invidividual development with relatively affordable feoster invidividual development with relatively affordable feoster invidividual development with relatively affordable feoster invidividual development with relatively affordable feoster invidividual development with relatively affordable feoster invidividual development with relatively affordable feoster invidividual development with relatively affordable feinvidividual development with relatively affordable fees in the region. </p>
                  <a href="#" class="btn btn-primary"> Enroll Now</a>
            
              </div>
              </div>

        </div>



    </div>


  </section>




<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">

<section class="section_s2">
    <div class="container">
          <div class="">
                  <h1 class="fw-bold">
                      Our facilities.
                  </h1>

                  <h3>
                     We're making every child's world better
                  </h3>

          </div>
        <div class="row d-flex justify-content-center" >
            <div class="col-sm-4  d-flex justify-content-center">


<!-- It's very, very hacky so I don't advise you to use it on a live site ;) -->
 
      <div class="banner">
  <div class="inner choose_us">

              
                  <h2>
                    Our ...
                  </h2>
                     <img class='featureimg' src="../assets/img/primary/slide1.jpg" alt="">
                  <p>
       Lorem ipsum dolor mauris lectus,a ultricies nisi faucibus nec elementum quam. mauris lectus, a ultricies nisi faucibus nec a ultricies nisi faucibus nec elementum.           

                    
                  </p>
               
                  </div>

              </div>
    
            </div>

              <div class="col-sm-4  d-flex justify-content-center">


<!-- It's very, very hacky so I don't advise you to use it on a live site ;) -->
 
      <div class="banner">
  <div class="inner choose_us">

               
                  <h2>
                    Our ...
                  </h2>
                     <img class='featureimg' src="../assets/img/primary/slide2.jpg" alt="">
                  <p>
       Lorem ipsum dolor mauris lectus,a ultricies nisi faucibus nec elementum quam. mauris lectus, a ultricies nisi faucibus nec a ultricies nisi faucibus nec elementum.           

                    
                  </p>
               
                  </div>

              </div>
    
            </div>
           

             <div class="col-sm-4  d-flex justify-content-center">


<!-- It's very, very hacky so I don't advise you to use it on a live site ;) -->
 
      <div class="banner">
  <div class="inner choose_us">

          
                  <h2>
                    Our ..
                  </h2>
                     <img class='featureimg' src="../assets/img/primary/slide3.jpg" alt="">
                  <p>
       Lorem ipsum dolor mauris lectus,a ultricies nisi faucibus nec elementum quam. mauris lectus, a ultricies nisi faucibus nec a ultricies nisi faucibus nec elementum.           

                    
                  </p>
               
                  </div>

              </div>
    
            </div>
           
           

            




        </div>




    </div>


</section>
    </div>
    <div class="carousel-item">
  
<section class="section_s2">
    <div class="container">
          <div class="">
                  <h1 class="fw-bold">
                      Our Activities.
                  </h1>

                  <h3>
                     We're making every child's world better
                  </h3>

          </div>
        <div class="row d-flex justify-content-center" >
            <div class="col-sm-4  d-flex justify-content-center">


<!-- It's very, very hacky so I don't advise you to use it on a live site ;) -->
 
      <div class="banner">
  <div class="inner choose_us">

              
                  <h2>
                    Our ...
                  </h2>
                     <img class='featureimg' src="../assets/img/primary/slide1.jpg" alt="">
                  <p>
       Lorem ipsum dolor mauris lectus,a ultricies nisi faucibus nec elementum quam. mauris lectus, a ultricies nisi faucibus nec a ultricies nisi faucibus nec elementum.           

                    
                  </p>
               
                  </div>

              </div>
    
            </div>

              <div class="col-sm-4  d-flex justify-content-center">


<!-- It's very, very hacky so I don't advise you to use it on a live site ;) -->
 
      <div class="banner">
  <div class="inner choose_us">

               
                  <h2>
                    Our ...
                  </h2>
                     <img class='featureimg' src="../assets/img/primary/slide2.jpg" alt="">
                  <p>
       Lorem ipsum dolor mauris lectus,a ultricies nisi faucibus nec elementum quam. mauris lectus, a ultricies nisi faucibus nec a ultricies nisi faucibus nec elementum.           

                    
                  </p>
               
                  </div>

              </div>
    
            </div>
           

             <div class="col-sm-4  d-flex justify-content-center">


<!-- It's very, very hacky so I don't advise you to use it on a live site ;) -->
 
      <div class="banner">
  <div class="inner choose_us">

          
                  <h2>
                    Our ..
                  </h2>
                     <img class='featureimg' src="../assets/img/primary/slide3.jpg" alt="">
                  <p>
       Lorem ipsum dolor mauris lectus,a ultricies nisi faucibus nec elementum quam. mauris lectus, a ultricies nisi faucibus nec a ultricies nisi faucibus nec elementum.           

                    
                  </p>
               
                  </div>

              </div>
    
            </div>
           
           

            




        </div>




    </div>


</section>


    </div>
  
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    </div>
</template>

<script>
import "../assets/css/school.css";
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>