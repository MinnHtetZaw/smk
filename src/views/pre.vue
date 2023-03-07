<template>
    <div>
        <nav class="navbar bg_purple ">
  <div class="container-fluid">
  
        <button class=" navbar-brand navbar-dark navbar-toggler "  data-bs-target="#sidebar" data-bs-toggle="collapse" >
      <span class="navbar-toggler-icon"></span>
    </button>

 
 
  </div>
</nav>

        <div class="container-fluid    " >
    <div class="row flex-wrap  " style="max-width:100vw;">
        <div class="col-auto px-0 ">
            <div id="sidebar" class="collapse collapse-horizontal show border-end ">
                <div id="sidebar-nav" class="list-group border-0 rounded-0 text-sm-start min-vh-100  ">
                 
                    <div class="d-flex justify-content-center  w-100  ">
                <div class="nav flex-column nav-pills w-100 " id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <button class="nav-link active m-3" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-pre" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Pre-School</button>
                    <button class="nav-link m-3" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-pri" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Primary-School</button>
                    <button class="nav-link m-3" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-sec" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Secondary-School</button>
                
                    <router-link   :to="{ name: 'Procedure', params: { userId: 3 }}" class="nav-link m-3">Academic Procedure</router-link>
                    <router-link   :to="{ name: 'Fees', params: { userId: 3 }}" class="nav-link m-3">Fees</router-link>
                    <router-link   :to="{ name: 'AcademicCalendar', params: { userId: 3 }}" class="nav-link m-3">Academic Calendar</router-link>
         
                
               
                </div>
                </div>
                
                
                
                </div>
            </div>
        </div>
  
            <main class="col ps-md-2 pt-2  vh-100 overflow-scroll ">
              
           <div class="page-header ">
                <h2>Course</h2>
            </div>
          
            <hr>
            <div class="row">
                <div class="col-12">
                    
                    <div class="tab-content" id="v-pills-tabContent">
    <div class="tab-pane fade show active" id="v-pills-pre" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">

        
<section> 
    <nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Weekday Class</button>
    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Weekend Class</button>
  
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">



    <div class="row d-flex justify-content-center gx-0 ">   
            <div class="col-md-10 ">
                   <h1 class="d-flex justify-content-start table_label "> Pre-School (Weekday Class)</h1>
            
     <table class="table  table-light border-dark table-bordered  table-hover">
        <thead class="table-light border-dark">
                  <tr class="color_pre ">
                <th>No</th>
                 <th  style="min-width:100px;">International Curriculum</th>
                <th>Digital Learning for Skill Enchancement</th>
                <th>Extra Curriculum Activities</th>
                <th>Foreign Language</th>
   
            </tr>

        </thead>
        
            <tbody class="col_white ">
<!--                 
<tr class="color_pre">
<th style="vertical-align : middle;text-align:center;" rowspan="5" scope="rowgroup"> Pre School</th>
               </tr> -->
               <tr v-for="(data,index) in data" :key="data2.id"  class="color_-1 text-start" :id=data2.id>


   <td  >{{index + 1}}</td>
                          
                                <td  >{{data.name}}</td>
                                <td   style="white-space: pre-line;">
                               

                                <span v-for="dat1 in data.intake" >
                                        {{dat1}} <br>
                                </span>
                                    </td>
                                <td   style="white-space: pre-line;">
                                    <span v-for="dat2 in data.subject">
                                        <b v-if="dat2[0]==`~` " > {{dat2.slice(1)}} <br></b>
                                        <span v-if="dat2[0]!=`~`"> {{dat2}} <br></span>



                                    </span>
                                        
                                </td>

 
            
            </tr>
            

                
          




        

            </tbody>



              </table>

            
   
              
            </div>

    </div>

  </div>

  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">



    <div class="row d-flex justify-content-center gx-0 ">   
            <div class="col-md-10 ">
                   <h1 class="d-flex justify-content-start table_label "> Pre-School (Weekend Class) </h1>
            
     <table class="table table-light  border-dark table-bordered  table-hover">
        <thead class="table-light border-dark">
                  <tr class="color_pre ">
                <th>No</th>
                 <th  style="min-width:100px;">Class</th>
                <th>Intake</th>
                <th>Area Of Learning</th>
   
            </tr>

        </thead>
        
            <tbody class="col_white ">
<!--                 
<tr class="color_pre">
<th style="vertical-align : middle;text-align:center;" rowspan="5" scope="rowgroup"> Pre School</th>
               </tr> -->
               <tr v-for="(data,index) in e_data" :key="data2.id"  class="color_-1 text-start" :id=data2.id>


   <td  >{{index + 1}}</td>
                          
                                <td  >{{data.name}}</td>
                                <td   style="white-space: pre-line;">
                               

                                <span v-for="dat1 in data.intake" >
                                        {{dat1}} <br>
                                </span>
                                    </td>
                                <td   style="white-space: pre-line;">
                                    <span v-for="dat2 in data.subject">
                                        <b v-if="dat2[0]==`~` " > {{dat2.slice(1)}} <br></b>
                                        <span v-if="dat2[0]!=`~`"> {{dat2}} <br></span>



                                    </span>
                                        
                                </td>

 
            
            </tr>
            

                
          




        

            </tbody>



              </table>

            
   
              
            </div>

    </div>

  </div>

 
</div>


 </section>

    </div>
    <div class="tab-pane fade" id="v-pills-pri" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">

        <Pri />


    </div>
    <div class="tab-pane fade" id="v-pills-sec" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">


        <Sec />

    </div>
   
  </div>

                    
                </div>
            </div>
        </main>
    
     
    </div>
</div>



    </div>
</template>

<script>
        import Pri from './pri.vue'
       import Sec from './sec.vue'

import axios from 'axios';

export default {
    name: 'Fees',
    data(){
        return{
              link:"http://smkbackend.kwintechnologykw11.com",
            data2:[],
            data3:null,
            no : 1,
            data:[],
            e_data:[],
        //    pre : true,
        //    primary :true,
        //    secondary : true
        }
    },
    components: {
    Pri,
    Sec,

},
    methods:{
          show(id,inpt){
    
 axios.get(this.link+"/api/courses")
    .then(response => {
       this.data2 = response.data;
 
            console.log(this.data2);
                      for(let i=0;i<this.data2.length;i++)
        {   
            if(this.data2[i].yearlevel==1 && this.data2[i].class_types==id )
            {
                 var intakearr =  this.data2[i].intake.split("^");
                var subjectarr =  this.data2[i].subject.split("^");
                    for(let a=0;a<subjectarr.length;a++)
                    {
                        subjectarr[a]=subjectarr[a].replace(/\n/g,"");
                    }
                    for(let a=0;a<intakearr.length;a++)
                    {
                        intakearr[a]=intakearr[a].replace(/\n/g,"");
                    }
           // var intake1=intakearr.join("\n");
          //   var subject=subjectarr.join("\n");


          
             inpt.push({name:this.data2[i].yearname,intake:intakearr,subject:subjectarr});
              
            //  this.data2[i].intake = intake1;
            //  this.data2[i].subject = subject;
                // this.data2[i].intake=intake1;
                // this.data2[i].subject=subject;


            }
          
       
        }
       
    })
    .catch(error => {
      this.errorMessage = error.message;
      console.error("There was an error!", error);});

 
        }
    },
    mounted() {
    //       setInterval(this.show, 1000);
            let arr;
        this.show(1,this.data);
        this.show(2,this.e_data);

          
    
                for(let i=0;i<this.data2;i++)
        {   
            let intakearr =  this.data2[a].intake.split(",");
                let subjectarr =  this.data2[a].subject.split(",");
            let intake=intakearr.join(" <br> ");
                  let subject=subjectarr.join(" <br> ");
              
        }
//       
       
//         let text = "How,are,you,doing,today?";
// const myArray = text.split(",");
// let a = myArray.join(" <br> ");

// alert(a);

    },
    
//     mounted(){
//    alert('2');
//             let schoolid= $route.params.id;
//             if(schoolid==1){
//                 alert('1');
//                 // this.primary = !this.primary;
//                 //  this.secondary = !this.secondary;

//             }
//             else  if(schoolid==2){
//                    alert('2');
//                 // this.pre = !this.pre;
//                 //  this.secondary = !this.secondary;
//             }

//               else  if(schoolid==3) {
//                    alert('3');
//                 // this.primary = !this.primary;
//                 //  this.pre = !this.pre;
//             }
//     }
}
</script>

<style lang="scss" scoped>
#sidebar-nav {
    width: 200px;
}
</style>