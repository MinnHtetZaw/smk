<template>
    
    <div class="nav_all ">
      <div class="nav_shade">
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid">
            <a class="navbar-brand " style="margin-left:50px" href="#">
              <div class="row">
                <div class="col">
                  <img class="navlogo" src="./assets/img/logo.png" alt="" />
                </div>
                <div class="col">
                  <router-link
                    :to="{ name: 'Home', params: { userId: 1 } }"
                    class="nav-link"
                    aria-current="page"
                  >
                   <img src="./assets/img/navlogo.png" style="width:150px" alt="">
                  </router-link>
                </div>
              </div>
            </a>
            <a class="navbar-brand ms-auto" href="#">
              <div class="row">
              
                <div class="col">
           
               <select name="" class="form-control rounded-pill text-center" v-model="font_type" @change="font_change" style="border-color: purple;" id="">
                <option value="1" style="background-image: url('./assets/img/myanmarflag.png');  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;">English Language</option>
                <option value="2">Myanmar Language</option>
               </select>
               <h5 class="mt-2">
           
                <font-awesome-icon  class="m-1" style="width:35px; height: 35px;  color:purple;" icon="fa-brands fa-facebook" /> 
                <font-awesome-icon class="m-1" style="width:19px; height: 19px;  color:white; border:0px; border-style: solid; border-radius: 40px;  background-color: purple; padding:8px" icon="fa-brands fa-instagram" />
                <font-awesome-icon class="m-1" style="width:19px; height: 19px;  color:white; border:0px; border-style: solid; border-radius: 40px;  background-color: purple; padding:8px" icon="fa-brands fa-linkedin" /> 
                <font-awesome-icon class="m-1" style="width:19px; height: 19px;  color:white; border:0px; border-style: solid; border-radius: 40px;  background-color: purple; padding:8px" icon="fa-brands fa-whatsapp" />
                <font-awesome-icon class="m-1" style="width:19px; height: 19px;  color:white; border:0px; border-style: solid; border-radius: 40px;  background-color: purple; padding:8px" icon="fa-brands fa-youtube" />
                <font-awesome-icon class="m-1" style="width:35px; height: 35px;  color:purple; border:0px; border-style: solid; border-radius: 40px;  background-color: white; " icon="fa-brands fa-telegram" />
               </h5>
                </div>
                <div class="col">

                </div>
              </div>
            </a>
          </div>
        </nav>
      </div>
    </div>
  <div v-if="!path" class="sticky-top">
    <div class=" nav_all "  style="height:auto">
      <div class="">
        <nav class="navbar navbar-expand-lg nav_in navbar-dark">
          <div class="container-fluid">
          
            <button
              class="navbar-toggler"
              type="button"
              @click="navshow()"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav   " style="margin-left:50px">
                <li class="nav-item mb-2 mt-2 ">
                  <router-link
                    :to="{ name: 'Home', params: { schtype: schtype } }"
                    class="cus_nav"
                    aria-current="page"
                    >
                    <span v-if="font_type==1">Home</span>
                    <span v-if="font_type==2">မူလစာမျက်နှာ</span>
                    
                    
                    </router-link
                  >
                </li>
                <li class="nav-item dropdown mb-2 mt-2">
                  <a
                    class="cus_nav dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span> </span>
                    <span v-if="font_type==1">About us</span>
                    <span v-if="font_type==2">ကျောင်း</span>

                  </a>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <router-link
                        :to="{ name: 'AboutSchool' }"
                        class="dropdown-item"
                        >
                        <span v-if="font_type==1">  About School</span>
                    <span v-if="font_type==2">ကျောင်းအကြောင်း</span>
                        
                      </router-link
                      >
                    </li>
                    <li>
                      <router-link
                        :to="{
                          name: 'AboutSchool_exam',
                          params: { pageid: 'examcenter' },
                        }"
                        class="dropdown-item"
                        >
                        <span v-if="font_type==1"> Exam Center</span>
                    <span v-if="font_type==2">စာမေးပွဲစင်တာ</span>
                       </router-link
                      >
                    </li>
               
                  </ul>
                </li>
                <li class="nav-item dropdown mb-2 mt-2">
            <a class=" cus_nav  dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
              <span v-if="font_type==1">Academic</span>
                    <span v-if="font_type==2">ပညာရေး</span>
            </a>
            <ul class="dropdown-menu shadow">
             
          
              <li class="dropend">
                <a href="#" class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside">Pre-School/Early Years</a>
                <ul class="dropdown-menu shadow">
                  <!-- <li class="dropend">
                    <a href="#" class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown"></a>
                    <ul class="dropdown-menu dropdown-submenu shadow">
                   
                    </ul>
                  </li> -->
                  <li><a class="dropdown-item" href=""> Weekday Classes</a></li>
                      <li><a class="dropdown-item" href=""> Weekend Classes & Summer Programme</a></li>
               
                </ul>
              </li>
              <li class="dropend">
                <a href="#" class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside">Primary</a>
                <ul class="dropdown-menu shadow">
                  <!-- <li class="dropend">
                    <a href="#" class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown"></a>
                    <ul class="dropdown-menu dropdown-submenu shadow">
                      <li><a class="dropdown-item" href=""> Weekday Classes</a></li>
                      <li><a class="dropdown-item" href=""> Weekend Classes & Summer Programme</a></li>
                    </ul>
                  </li> -->
                  
                  <li><a class="dropdown-item" href=""> Weekday Classes</a></li>
                      <li><a class="dropdown-item" href=""> Weekend Classes & Summer Programme</a></li>
               
                </ul>
              </li>
              <li class="dropend">
                <a href="#" class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside">Secondary</a>
                <ul class="dropdown-menu shadow">
                  <!-- <li class="dropend">
                    <a href="#" class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown"></a>
                    <ul class="dropdown-menu dropdown-submenu shadow">
                      <li><a class="dropdown-item" href=""> Weekday Classes</a></li>
                      <li><a class="dropdown-item" href=""> Weekend Classes & Summer Programme</a></li>
                    </ul>
                  </li> -->
                  <li><a class="dropdown-item" href=""> Weekday Classes</a></li>
                      <li><a class="dropdown-item" href=""> Weekend Classes & Summer Programme</a></li>
               
                  
                
                </ul>
              </li>
           
            </ul>
          </li>

<!-- 
                <li class="nav-item dropdown mb-2 mt-2">
                  <a
                    class="cus_nav dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                  
                    
                  <span v-if="font_type==1">Academic</span>
                    <span v-if="font_type==2">ပညာရေး</span>
                  </a>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >



                  
                    <li>
                      <router-link
                        :to="{ name: 'Pre', params: { userId: 3 } }"
                        class="dropdown-item"
                        
                        >
                        <span v-if="font_type==1">Pre-School (Early Years)</span>
                    <span v-if="font_type==2">ကျောင်းကြို</span>
                        </router-link
                      >
                    </li>
                    <li>
                      <router-link
                        :to="{ name: 'newpri', params: { userId: 3 } }"
                        class="dropdown-item"
                        >
                        <span v-if="font_type==1">Primary</span>
                    <span v-if="font_type==2">မူလတန်း</span>
                    </router-link
                      >
                    </li>
                    <li>
                      <router-link
                        :to="{ name: 'newsec', params: { userId: 3 } }"
                        class="dropdown-item"
                        >
                        <span v-if="font_type==1">Secondary</span>
                    <span v-if="font_type==2">အလယ်တန်း</span>
                    </router-link
                      >
                    </li>
                  </ul>
                </li> -->
                <li class="nav-item dropdown mb-2 mt-2">
                  <a
                    class="cus_nav dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    
                    <span v-if="font_type==1">Admission</span>
                    <span v-if="font_type==2">၀င်ခွင့်</span>
                  </a>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <router-link
                        :to="{ name: 'Procedure', params: { userId: 3 } }"
                        class="dropdown-item"
                        >
                        <span v-if="font_type==1">Academic Procedure</span>
                    <span v-if="font_type==2">ကျောင်းအပ်နှံမှုလုပ်ငန်းစဥ်</span>
                    </router-link
                      >
                    </li>
                    <li>
                      <router-link
                        :to="{ name: 'Fees', params: { userId: 3 } }"
                        class="dropdown-item"
                        >
                        <span v-if="font_type==1">Fees</span>
                    <span v-if="font_type==2">ကျောင်းအပ်နှံကြေး</span></router-link
                      >
                    </li>

                    <li>
                      <router-link
                        :to="{
                          name: 'AcademicCalendar',
                          params: { userId: 3 },
                        }"
                        class="dropdown-item"
                        >
                        <span v-if="font_type==1">Academic Calendar</span>
                    <span v-if="font_type==2">ကျောင်းပြက္ခဒိန်</span></router-link
                      >
                    </li>
                  </ul>
                </li>

                <li class="nav-item dropdown mb-2 mt-2">
                  <a
                    class="cus_nav dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    
                    <span v-if="font_type==1">Career</span>
                    <span v-if="font_type==2">စည်းကမ်းများ</span>
                    
                  </a>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <router-link
                        :to="{ name: 'paymentpolicy', params: { userId: 3 } }"
                        class="dropdown-item"
                        >
                        <span v-if="font_type==1">Payment Policy</span>
                    <span v-if="font_type==2">ငွေပေးချေမှုစည်းကမ်း</span>
                    </router-link
                      >
                    </li>
                    <li>
                      <router-link
                        :to="{ name: 'parentpolicy', params: { userId: 3 } }"
                        class="dropdown-item"
                        >
                        <span v-if="font_type==1">Parent & Student Hangbook</span>
                    <span v-if="font_type==2">မိဘလက်စွဲ</span>
                    </router-link
                      >
                    </li>
                  </ul>
                </li>

            
                <li class="nav-item dropdown mb-2 mt-2">
                  <a
                    class="dropdown-toggle cus_nav"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                  
                  <span v-if="font_type==1">Contact us</span>
                    <span v-if="font_type==2">အခြား</span>
                  </a>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <router-link
                        :to="{ name: 'newsevent', params: { userId: 3 } }"
                        class="dropdown-item"
                        >
                        <span v-if="font_type==1">News and Activities</span>
                    <span v-if="font_type==2">သတင်းအချက်အလက်</span>
                    </router-link
                      >
                    </li>
                    <li>
                      <router-link
                        :to="{ name: 'Career', params: { userId: 3 } }"
                        class="dropdown-item"
                        >
                        <span v-if="font_type==1">Career</span>
                    <span v-if="font_type==2">အလုပ်အကိုင်</span>
                    </router-link
                      >
                    </li>

                    <li>
                      <router-link
                        :to="{ name: 'Contactus', params: { userId: 3 } }"
                        class="dropdown-item"
                        >
                        <span v-if="font_type==1">Contact us</span>
                    <span v-if="font_type==2">ဆက်သွယ်ရန်</span>
                    </router-link
                      >
                    </li>
                    <li>
                      <router-link
                        :to="{ name: 'waitinglist', params: { userId: 3 } }"
                        class="dropdown-item"
                        >
                        <span v-if="font_type==1">Waiting List</span>
                    <span v-if="font_type==2">ကြိုတင်အပ်နှံရန်</span>
                    </router-link
                      >
                    </li>
                  </ul>
                </li>

<!--                <li class="nav-item mb-2 mt-2">-->
<!--                   -->
<!--                </li>-->
         
              </ul>

              <div class="d-flex justify-content-end gap-3 align-items-center">
                <form class="d-flex" role="search">

                  <div class="input-group flex-nowrap">
                    <input type="text" class="form-control form-control-sm border-0 rounded-pill" placeholder="Search...">
                  </div>
                </form>
                <router-link
                    class="nav-link text-white"
                    :to="{ name: 'login', params: { userId: 3 } }"
                >Admin</router-link
                >
              </div>

            </div>
          </div>
        </nav>
      </div>
    </div>
  
  </div>

  <div v-if="path" >
    <div class="nav_all ">
      <div class="nav_shade">
        <nav class="navbar navbar-expand-lg nav_in ">
          <div class="container-fluid">
         
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav" style="margin-left:50px">
                <li class="nav-item mt-3 mb-2">
                  <router-link
                    :to="{ name: 'waitinglistview', params: { userId: 3 } }"
                    class="cus_nav"
                    >Waiting List <span class="nav_hidden_text">View</span>
                  </router-link>
                </li>
                <li class="nav-item mt-3 mb-2">
                  <router-link
                    :to="{ name: 'eventregister', params: { userId: 3 } }"
                    class="cus_nav"
                    >Event <span class="nav_hidden_text">Register</span>
                  </router-link>
                </li>

                <li class="nav-item mt-3 mb-2">
                  <router-link
                    :to="{ name: 'ContactusView', params: { userId: 3 } }"
                    class="cus_nav"
                    >Contactus <span class="nav_hidden_text">View</span>
                  </router-link>
                </li>

                <li class="nav-item mt-3 mb-2">
                  <router-link
                    :to="{ name: 'calendar', params: { userId: 3 } }"
                    class="cus_nav"
                    >Calendar <span class="nav_hidden_text">Register</span>
                  </router-link>
                </li>

                <li class="nav-item mt-3 mb-2">
                  <router-link
                    :to="{ name: 'FeesRegister', params: { userId: 3 } }"
                    class="cus_nav"
                    >Fees <span class="nav_hidden_text">Register</span>
                  </router-link>
                </li>

                <li class="nav-item mt-3 mb-2">
                  <router-link
                    :to="{ name: 'CoursesRegister', params: { userId: 3 } }"
                    class="cus_nav"
                    >Course
                    <span class="nav_hidden_text">Register</span></router-link
                  >
                </li>

                <li class="nav-item mt-3 mb-2">
                  <router-link
                    :to="{ name: 'CareerView', params: { userId: 3 } }"
                    class="cus_nav"
                    >Career
                    <span class="nav_hidden_text">View</span></router-link
                  >
                </li>

                <li class="nav-item mt-3 mb-2">
                  <router-link
                    :to="{ name: 'TeacherRegister', params: { userId: 3 } }"
                    class="cus_nav"
                    >Teacher <span class="nav_hidden_text">Register</span>
                  </router-link>
                </li>
                <li class="nav-item mt-3 mb-2">
                  <router-link
                    :to="{ name: 'logout', params: { userId: 3 } }"
                    class="btn btn-success"
                    >Logout</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>

  <div id="see">
    <img class="loaderphoto" src="./assets/img/smkloading.gif" alt="" />
  </div>
<!--  #f3cd5d -->
  <div id="hide" class="pb-5" style="background-color: #FFFFFF">
    <router-view />
  </div>

  <footer>
    <div class="Part7">
      <div class="footer">
        <div class=" footer_div">
          <div style="padding-left: 70px;" class="row gx-0 gy-3 justify-content-center">

            <div class="col-sm-4 bd_footer">
              <div>
                <h1 class="text-start text-uppercase" style="font-size:25px;font-weight:900">Shwe Maw Kun</h1>
                <p class="text-start mb-1 fw-normal text-white">About Us</p>
                <p class="text-start mb-1 fw-normal text-white">Distribution and Manufacturing</p>
                <p class="text-start mb-1 fw-normal text-white">Our Purpose</p>
                <p class="text-start mb-1 fw-normal text-white">Our Vision and Mission</p>
                <p class="text-start mb-1 fw-normal text-white">Our Culture</p>
                <p class="text-start mb-1 fw-normal text-white">CSR Activities</p>
                
              </div>

              </div>
            <div class="col-sm-4 bd_footer">
              <i class="bi bi-geo-alt icon"></i>
              <div style="padding-left: 65px;">
                <h1 class="text-uppercase text-start" style="font-size:25px;font-weight:900">{{font_type == 1 ? "Contact Us" : "ဆက်သွယ်ရန်ဖုန်းနံပတ်များ"}}</h1>
                <p class="mb-1 fw-normal text-start">{{font_type == 1 ? "09 123 456 789" : "၀၉ ၁၂၃ ၄၅၆ ၇၈၉"}}</p>
                <p class="mb-1 fw-normal text-start">{{font_type == 1 ? "09 987 343 565" : "၀၉ ၉၈၇ ၃၄၃ ၅၆၅"}}</p>

              </div>
            </div>

            <div class="col-sm-4 footer-links bd_footer">
           
              <div class="d-flex justify-content-center social-links footer_cent">
                <div style="padding-right: 65px;">
                  <h1 class="text-uppercase text-end" style="font-size:25px;font-weight:900;">{{font_type == 1 ? "Address" : "ဆက်သွယ်ရန်လိပ်စာ"}}</h1>
                  <p class="mb-1 fw-normal text-start">

                    {{ font_type == 1 ? 'No. 20/10,Shwe Chi Street, (Corner of Yae Htwet Oo Street),Yae Aye Kwin Quarter, Taunggyi, Shan State, Myanmar' : ' အမှတ်(၂၀/၁၀)၊ရွှေချည်လမ်း နှင့် ရေထွက်ဦး လမ်းထောင့်၊ ရေအေးကွင်းရပ်၊ တောင်ကြီးမြို့။'}}

                    <br />

                  </p>
                </div>
              
                <!-- <a href="#" class="twitter"></a> -->
            
            
                <!-- <a
                  href="https://www.facebook.com/MawKunInternationalEducationGroupMyanmar"
                  class=""
                  >https://www.facebook.<br />com/MawKu......
                  <font-awesome-icon icon="fa-brands fa-square-facebook"
                /></a>
 -->

                <!-- <a href="#" class="instagram"
                  ><i class="fab fa-instagram"></i
                ></a>
                <a href="#" class="linkedin"
                  ><i class="fab fa-linkedin-in"></i
                ></a> -->

              </div>
            </div>

            <!-- <div class="col-sm-4 footer-links">
              <div class="map_div">
                <iframe
                  class="map_css"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3730.054528308453!2d97.0430515149147!3d20.78908178612861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ce864c0e6a5fc3%3A0xb4563bd2d1fdb904!2sShwe%20Maw%20Kun%20Education%20Group!5e0!3m2!1sen!2ssg!4v1659505026910!5m2!1sen!2ssg"
                  width="600"
                  height="450"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div> -->
          </div>
        </div>

<!--        <div class="container ">-->

<!--          <div class="row pt-2 pb-2">-->
<!--            <div class="col-sm-4 ">-->
<!--              <div class="developer_  ">-->
<!--            <h5 style="display:inline;text-align: left;font-size: 15px; color: goldenrod;">Developed by: K Win Technologies</h5>-->
<!--          </div>-->
<!--               </div>-->
<!--               <div class="col-sm-4 ">-->
<!--                <div class="copyright " style="display:inline;text-align: left;font-size: 15px; color: goldenrod;">-->
<!--            -->
<!--            &copy; Copyright <strong><span>Shwe Maw Kun</span></strong-->
<!--            >. All Rights Reserved-->
<!--          </div>-->
<!--               </div>-->
<!--               <div class="col-sm-4">-->
<!--               </div>-->
<!--          </div>-->
<!--        -->
<!--       -->
<!--        </div>-->
      </div>

      <div class="row" v-if="path1==true">
        <div class="col-md-4 ">
          <div style="width:100%;height:400px;" class="">
            <img src="./assets/img/footerlogo1.jpg" class="footer-logo-img" alt="">
          </div>
        </div>
        <div class="col-md-4 ">
          <div style="width:100%;height:400px;" class="">
            <img src="./assets/img/footerlogo2.jpg" class="footer-logo-img" alt="">
          </div>
        </div>
        <div class="col-md-4 ">
          <div style="width:100%;height:400px;" class="">
            <img src="./assets/img/footerlogo3.jpg" class="footer-logo-img" alt="">
          </div>
        </div>
     
      </div>
    </div>
  </footer>
</template>

<script>

import $ from "jquery";

import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/jquery/dist/jquery.js";
import "@fortawesome/free-solid-svg-icons"

export default {
  components: {},
  data() {
    return {
      path: false,
      schtype: "",
      font_type:'',
      path1:null,
    };
  },
 

  mounted() {


    if(localStorage.getItem("font_type"))
    {
    this.font_type=localStorage.getItem("font_type")
    }
    else{
      localStorage.setItem("font_type", 2);
    }
    // alert(localStorage.getItem("font_type"));
    
  },
  methods: {
    font_change:function ()
    {
      localStorage.setItem("font_type", this.font_type);
     
    }
  },
  created() {},
  watch: {
    $route(to, from) {
      var currentUrl = window.location.pathname;
      var Url = currentUrl.split("/");
     if(window.location.pathname.split("/")[1]=='')
     {
      this.path1 = true;
     }else
     {
      this.path1 = false;
     }
      //  alert(currentUrl);
      if (Url[1] == "Admin") {
        this.path = true;
      } else {
        this.path = false;
      }

      $(window).ready(function () {
        $("#see").show();
        $("#hide").hide();

        setTimeout(function () {
          $("#hide").show();
          $("#see").hide();
        }, 3000);
      });
    },
  },
};
</script>

<style lang="scss">


.loaderphoto {
  margin: 20vh;
  width: 300px;

  z-index: 200;
  border: 0px;
  border-style: none;
  border-radius: 50%;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.75);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-size:17px;
    color: #ffffff;

    &.router-link-exact-active {
      color: gold;
    }
  }
}
.cus_nav {
  display: inline-flex;
  padding: 10px;
  margin-right:3.5vw;
  text-decoration: none;
  border: 0px;
  // border-bottom: 1px;
  border-style: solid;
  border-radius: 5px;
  transition: 0.5s;
}
.cus_nav:hover {
  padding: 10px;
  animation-name: color;
  animation-duration: 1s;
  color: purple;
  background-color: rgb(255, 255, 255);
  // box-shadow: 1px 3px 3px blue;
  // backdrop-filter: blur(10px);
}
.cus_nav:hover .nav_hidden_text {
  animation-name: example;
  animation-duration: 1s;
  visibility: visible;
  width: 100%;
}
.nav_hidden_text {
  width: 0px;

  visibility: hidden;
}
.footer-logo-img{
  width: 200px;
  height: 200px;
  object-fit: contain;
}

@keyframes example {
  0% {
    width: 25px;
  }
  100% {
    width: 50px;
  }
}
@keyframes color {
  0% {
    background-color: rgba(255, 255, 255, 0);
    // box-shadow: 1px 3px 3px rgba(0, 0, 255, 0);
  }
  100% {
    background-color: rgb(255, 255, 255);
    // box-shadow: 1px 3px 3px blue;
  }
}
</style>
