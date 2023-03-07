   
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
                  <router-link   :to="{ name: 'Pre', params: { userId: 3 }}" class="nav-link m-3">Pre-School</router-link>
                    <router-link   :to="{ name: 'newpri', params: { userId: 3 }}" class="nav-link m-3">Primary School</router-link>
                    <router-link   :to="{ name: 'newsec', params: { userId: 3 }}" class="nav-link m-3">Secondary School</router-link>

                    <router-link   :to="{ name: 'Procedure', params: { userId: 3 }}" class="nav-link m-3 ">Academic Procedure</router-link>
                    <router-link   :to="{ name: 'Fees', params: { userId: 3 }}" class="nav-link m-3 active">Fees</router-link>
                    <router-link   :to="{ name: 'AcademicCalendar', params: { userId: 3 }}" class="nav-link m-3">Academic Calendar</router-link>
         
                
               
                </div>
                </div>
                
                
                
                </div>
            </div>
        </div>
  
            <main class="col ps-md-2 pt-2  vh-100 overflow-scroll ">
              
           <div class="page-header ">
                <h2>Fees</h2>
            </div>
          
            <hr>
            <div class="row">
                <div class="col-12">


        <div>
  
  <!-- <div class="row gx-0">
           <div class="col-sm-4">
                <div class="fees_group_in">

                            <h3 class="table_label"> Preschool</h3>
                    <ul class="fees_list">
               
                        <li >
                            <a class="nav-link link-primary" href="#Nursery_1"><h4> Nursery-1</h4></a>
                            
                        </li>
                        <li id="Nursery_2">
                               <a class="nav-link link-primary" href="#Nursery_2"><h4> Nursery-2</h4></a>
                         
                        </li>
                        <li id="Pre_KG_1">
                            <h4> Pre - KG 1</h4>
                        </li>
                        <li id="Pre_KG_2">
                            <h4> Pre - KG 2</h4>
                        </li>
                    </ul>
                </div>

            </div>
              <div class="col-sm-4">
                
                <div class="fees_group_in">
               
                            <h3 class="table_label"> Primary School</h3>
                    
                    <ul >
                    
                        <li id="KG">
                            <h4> KG </h4>
                        </li>
                        <li id="School_1">
                            <h4> School 1</h4>
                        </li>
                        <li id="School_2">
                            <h4> School 2</h4>
                        </li>
                        <li id="School_3">
                            <h4> School 3</h4>
                        </li>
                        <li id="School_4">
                            <h4> School 4</h4>
                        </li>
                        <li id="School_5">
                            <h4> School 5</h4>
                        </li>
                        <li id="School_6"> 
                            <h4> School 6</h4>
                        </li>

                        
                    </ul>
                </div>

            </div>

              <div class="col-sm-4">
                <div class="fees_group_in">

                            <h3 class="table_label"> Secondary School</h3>
                    <ul >
                 
                        <li  id="School_7">
                            <h4> School 7</h4>
                        </li>
                        <li  id="School_8">
                            <h4> School 8</h4>
                        </li>
                    </ul>
                </div>

            </div>


</div>
-->

</div>

<nav class="d-flex justify-content-center">
<div class="nav nav-tabs " id="nav-tab" role="tablist">
<button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-weekday" type="button" role="tab" aria-controls="nav-weekday" aria-selected="true">Weekday Class</button>
<button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-weekend" type="button" role="tab" aria-controls="nav-weekend" aria-selected="false">Weekend Class</button>

</div>
</nav>
<div class="tab-content" id="nav-tabContent">

<div class="tab-pane fade show active" id="nav-weekday" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
<div class="container">
    <h1 class=" table_label "> Pre-School  </h1>
<div class="row gx-0 d-flex justify-content-center">
    <div class="col-sm-8">
        <table class="table table-hover table-bordered">
            <thead >
              
                 <tr>
                       <th>No</th>
                     <th>Group</th>
                         <th>Fees</th>
                </tr>
      
               
            </thead>
            <tbody>
                <tr v-for="(pre,index) in preschool">
                    <td>{{index+1}}</td>
                    
                    <td style="white-space: pre-line;"> <span  v-for="pre_group in pre.group">{{pre_group}} </span> </td>
                    <td> {{pre.fees}} </td>
                </tr>
             
           
          
            </tbody>
        </table>
    </div>

</div>

           <h1 class=" table_label "> Primary School </h1>
<div class="row gx-0 d-flex justify-content-center">
    <div class="col-sm-8">
        <table class="table table-hover table-bordered">
            <thead >
              
                 <tr>
                       <th>No</th>
                     <th>Group</th>
                         <th>Fees</th>
                </tr>
      
               
            </thead>
            <tbody>
                  <tr v-for="(pre,index) in primaryschool">
                    <td>{{index+1}}</td>
                    
                    <td style="white-space: pre-line;"> <span  v-for="pre_group in pre.group">{{pre_group}} </span> </td>
                    <td> {{pre.fees}} </td>
                </tr>

             
           
          
            </tbody>
        </table>
    </div>

</div>

           <h1 class=" table_label "> Secondary School  </h1>
<div class="row gx-0 d-flex justify-content-center">
    <div class="col-sm-8">
        <table class="table table-hover table-bordered">
            <thead >
              
                 <tr>
                       <th>No</th>
                     <th>Group</th>
                         <th>Fees</th>
                </tr>
      
               
            </thead>
            <tbody>
                     <tr v-for="(pre,index) in secondaryschool">
                    <td>{{index+1}}</td>
                    
                    <td style="white-space: pre-line;"> <span  v-for="pre_group in pre.group">{{pre_group}} </span> </td>
                    <td> {{pre.fees}} </td>
                </tr>
             
           
          
            </tbody>
        </table>
    </div>

</div>
</div>


</div>
<div class="tab-pane fade" id="nav-weekend" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
<div class="container">
    <h1 class=" table_label "> Pre School (Weekend-Class) </h1>
<div class="row gx-0 d-flex justify-content-center">
    <div class="col-sm-8">
        <table class="table table-hover table-bordered">
            <thead >
              
                 <tr>
                       <th>No</th>
                     <th>Group</th>
                         <th>Fees</th>
                </tr>
      
               
            </thead>
            <tbody>
                <tr v-for="(pre,index) in e_preschool" >
                    <td>{{index+1}}</td>
                    
                    <td style="white-space: pre-line;"> <span  v-for="pre_group in pre.group">{{pre_group}} </span> </td>
                    <td> {{pre.fees}} </td>
                </tr>
             
           
          
            </tbody>
        </table>
    </div>

</div>

           <h1 class=" table_label "> Primary School (Weekend-Class) </h1>
<div class="row gx-0 d-flex justify-content-center">
    <div class="col-sm-8">
        <table class="table table-hover table-bordered">
            <thead >
              
                 <tr>
                       <th>No</th>
                     <th>Group</th>
                         <th>Fees</th>
                </tr>
      
               
            </thead>
            <tbody>
                  <tr v-for="(pre,index) in e_primaryschool">
                    <td>{{index+1}}</td>
                    
                    <td style="white-space: pre-line;"> <span  v-for="pre_group in pre.group">{{pre_group}} </span> </td>
                    <td> {{pre.fees}} </td>
                </tr>

             
           
          
            </tbody>
        </table>
    </div>

</div>

           <h1 class=" table_label "> Secondary School (Weekend-Class) </h1>
<div class="row gx-0 d-flex justify-content-center">
    <div class="col-sm-8">
        <table class="table table-hover table-bordered">
            <thead >
              
                 <tr>
                       <th>No</th>
                     <th>Group</th>
                         <th>Fees</th>
                </tr>
      
               
            </thead>
            <tbody>
                     <tr v-for="(pre,index) in e_secondaryschool">
                    <td>{{index+1}}</td>
                    
                    <td style="white-space: pre-line;"> <span  v-for="pre_group in pre.group">{{pre_group}} </span> </td>
                    <td> {{pre.fees}} </td>
                </tr>
             
           
          
            </tbody>
        </table>
    </div>

</div>
</div>

</div>
</div>



<div class="container">
<div class="row gx-0  ">
    <div class="col-sm-12 d-flex justify-content-center  ">
                 <div class="extra_fees  ">
                    <ul class="list-group   list-group-flush ">


<li class="list-group-item active">Extra Charges</li>

<li class="list-group-item ">
<div class="row ">
<div class="col-sm-6 d-flex justify-content-start"> 
<div class="list_in1">
    <div  class=" extra_field_div1">
          <h4 class="d-inline extra_field_name">Registration : </h4>
    </div>
  
</div>

</div>
<div class="col-sm-6">
  <div class="list_in2">
    <div  v-for="ec1 in extracharges1">


        <span v-if="ec1.fromyear!=ec1.toyear"> {{ec1.fromyear}} to {{ec1.toyear}}  -</span>
        <span v-if="ec1.fromyear==ec1.toyear"> {{ec1.fromyear}}  -</span>
        <span v-for="(re_ch,index1) in ec1.charges_remark" > <span v-if="index1!=0">, </span>{{re_ch.fees}}  <span v-if="re_ch.remark!=`-`">  ({{re_ch.remark}}) </span>    </span>
        <br>
    </div>
 
</div>

</div>
</div>

</li>


<li class="list-group-item ">
<div class="row ">
<div class="col-sm-6 "> 
<div class="list_in1 ">
       <div  class=" extra_field_div2">
              <h4 class="d-flex justify-content-start ">Degital Resources & Teaching Aids :  </h4>

       </div>
        </div>

</div>
<div class="col-sm-6">
  <div class="list_in2 ">
    <div  v-for="ec1 in extracharges2">


        <span v-if="ec1.fromyear!=ec1.toyear"> {{ec1.fromyear}} to {{ec1.toyear}}  -</span>
        <span v-if="ec1.fromyear==ec1.toyear"> {{ec1.fromyear}}  -</span>
        <span v-for="(re_ch,index1) in ec1.charges_remark" > <span v-if="index1!=0">, </span>{{re_ch.fees}}  <span v-if="re_ch.remark!=`-`">  ({{re_ch.remark}}) </span>    </span>
        <br>
    </div>
 
</div>

</div>
</div>

</li>


<li class="list-group-item ">
<div class="row ">
<div class="col-sm-6 "> 
<div class="list_in1  d-flex justify-content-start">
     <div  class=" extra_field_div3">
         <h4 class="d-inline extra_field_name">Book Fees :  </h4>
     </div>
   
</div>

</div>
<div class="col-sm-6">
  <div class="list_in2">
       <div  v-for="ec1 in extracharges3">


        <span v-if="ec1.fromyear!=ec1.toyear"> {{ec1.fromyear}} to {{ec1.toyear}}  -</span>
        <span v-if="ec1.fromyear==ec1.toyear"> {{ec1.fromyear}}  -</span>
        <span v-for="(re_ch,index1) in ec1.charges_remark" > <span v-if="index1!=0">, </span>{{re_ch.fees}}  <span v-if="re_ch.remark!=`-`">  ({{re_ch.remark}}) </span>    </span>
        <br>
    </div>
 
</div>

</div>

</div>

</li>

<li class="list-group-item ">
<div class="row ">
<div class="col-sm-6 "> 
<div class="list_in1">
     <div  class=" extra_field_div4">
             <h4 class="d-inline extra_field_name">Uniform-Per-Set :  </h4>
     </div>

</div>

</div>
<div class="col-sm-6 ">
  <div class="list_in2">
       <div  v-for="ec1 in extracharges4">


        <span v-if="ec1.fromyear!=ec1.toyear"> {{ec1.fromyear}} to {{ec1.toyear}}  -</span>
        <span v-if="ec1.fromyear==ec1.toyear"> {{ec1.fromyear}}  -</span>
        <span v-for="(re_ch,index1) in ec1.charges_remark" > <span v-if="index1!=0">, </span>{{re_ch.fees}}  <span v-if="re_ch.remark!=`-`">  ({{re_ch.remark}}) </span>    </span>
        <br>
    </div>
 
</div>

</div>

</div>

</li>


</ul>
                </div>
    </div>
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
 

  import axios from 'axios';
export default {

    name: 'Fees',
     components: {
 
 
},
    data(){
        
        return{
              link:"http://smkbackend.kwintechnologykw11.com",
            data2:null,
            preschool:[],
            primaryschool:[],
            secondaryschool:[],

            e_preschool:[],
            e_primaryschool:[],
            e_secondaryschool:[],

            extracharges1:[],
            extracharges2:[],
            extracharges3:[],
            extracharges4:[],
            

         
        }
    },
    methods: {
        removeDuplicates(arr) {
        return arr.filter((item,
            index) => arr.indexOf(item) === index);
    },
           show(id,inputdata,id1){
    
 axios.get(this.link+"/api/fees")
    .then(response => {
            this.data2 = response.data;
 
    
  
   let arr=[];
    let arr2=[];
    
if(arr.length==0)
{
  
}
            for(let i=0;i<this.data2.length;i++)
            {
                 
               
                    // for(let a=i;a<this.data2.length;a++)
                    // {
                     
              
            if(this.data2[i].fees_types==id && this.data2[i].class_types==id1)
            {   
             
                arr2.push(this.data2[i].charges);
                 
            
            }
        
    
             
        
              
                  }
                     arr2.sort();
            arr=this.removeDuplicates(arr2);
    
               

            
               
              for(let a=0;a<arr.length;a++)
              {
                 let arr4=[];
                            for(let i=0;i<this.data2.length;i++)
            {
                
                   if(this.data2[i].fees_types==id && this.data2[i].charges==arr[a] && this.data2[i].class_types==id1)
                 {   
             
                    arr4.push(this.data2[i].from_year+" \n ");
              
                  }
                  
              }
               inputdata.push(  { group: arr4, fees: arr[a]} );
         
            }
      
               
         

    })
    .catch(error => {
      this.errorMessage = error.message;
      console.error("There was an error!", error);});
        },
          



              showextra(id,extracharges){
    
 axios.get(this.link+"/api/fees")
    .then(response => {
            this.data2 = response.data;

    let arr_1=[];
 
  
    for(let i=0;i<this.data2.length;i++)
    {
      
        if (this.data2[i].fees_types==4 && this.data2[i].extra_types==id)
        {

                                  let fromyear=this.data2[i].from_year;
                let toyear=this.data2[i].to_year;
                 arr_1.push(  { id:this.data2[i].id,from: fromyear, to:toyear } );




     
        }
   





    }
       

           
               let dont=[];
            for(let a=0;a<arr_1.length;a++)
            {
                 let arr_2=[];
                if(dont.length==0)
                {   
                     
                               for(let i=0;i<this.data2.length;i++)
                  {
                    
                        if (this.data2[i].fees_types==4 && this.data2[i].extra_types==id)
                        {   
                 
                                  if(arr_1[a].from==this.data2[i].from_year && arr_1[a].to==this.data2[i].to_year )
                        {

                                              arr_2.push(  {id: this.data2[i].id,fees: this.data2[i].charges, remark:this.data2[i].remark } );
                                                      dont.push(this.data2[i].id);
                                 
                        }   
                          

                        }
                    

         
                  }
                     extracharges.push(  { fromyear: arr_1[a].from,toyear:arr_1[a].to , charges_remark: arr_2} );

                }
                else if(dont.length>0){
                    let bol=false;
                      for (let c=0;c<dont.length;c++)
                    {
                                 if(dont[c]==arr_1[a].id)
                        {
                            bol=true;
                        }

                          } 

                          if(bol==false)
                          {
                                   for(let i=0;i<this.data2.length;i++)
                  {
                    
                        if (this.data2[i].fees_types==4 && this.data2[i].extra_types==id)
                        {   
                 
                                  if(arr_1[a].from==this.data2[i].from_year && arr_1[a].to==this.data2[i].to_year  )
                        {

                   
                                              arr_2.push(  {id: this.data2[i].id,fees: this.data2[i].charges, remark:this.data2[i].remark } );
                                                  dont.push(this.data2[i].id);
                           
                        }
                             
                        
                          

                        }
                    

         
                  }

                              
                                     extracharges.push(  { fromyear: arr_1[a].from,toyear:arr_1[a].to , charges_remark: arr_2} );
                
                           
                      

                          }
                    
                       
                               
                        }
                    
            
                
       
                
         
              
            }
        
                          
             

    })

    .catch(error => {
      this.errorMessage = error.message;
      console.error("There was an error!", error);});
        },



        
    },
    mounted() {
            // setInterval(this.show, 1000);
  // setInterval(this.this.showextra(1,this.extracharges1), 1000);
      this.showextra(1,this.extracharges1);
       this.showextra(2,this.extracharges2);
        this.showextra(3,this.extracharges3);
         this.showextra(4,this.extracharges4);

    this.show(1,this.preschool,1);
     this.show(2,this.primaryschool,1);
      this.show(3,this.secondaryschool,1);

      this.show(1,this.e_preschool,2);
     this.show(2,this.e_primaryschool,2);
      this.show(3,this.e_secondaryschool,2);



    //  this.show2();
    //   this.show3();
   
},
    
}

</script>

<style lang="scss" scoped>

</style>











