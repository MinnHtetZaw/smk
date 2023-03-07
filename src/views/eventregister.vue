<template>
    <div  style="background-color:rgb(244, 234, 223)" class="p-3">
        <div class="container">
          <h1> Event Register</h1>
          <div class="modal fade" id="createmodal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title " style="text-align:center" id="staticBackdropLabel"></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="row d-flex justify-content-center">
                <div class="col-sm-10 ms-3">
                       <h1 class="m-3">Event Register</h1>
                       <div class=" ">
                     
   
                <div class="row ">
                    <div class="col-sm-6 ">
                   
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Name</label>
    <div class="col-sm-8 ms-3">
           <input type="text" class="form-control" v-model="name" id="name" required>
       
    </div>
  </div>


  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Position </label>
    <div class="col-sm-8 ms-3">
            <textarea name="" class="form-control" v-model="content" id="content" required cols="30" rows="10" style="resize: none;"></textarea>
       
   
    </div>
  </div>
                


                    </div>

                    <div class="col-sm-6">



<div class="mb-3 row">
 <label for="inputPassword" class="col-sm-2 col-form-label">Image</label>
 <div class="col-sm-8 ms-3">

<img :src=photobase64 v-if="photobase64" for="inputGroupSelect01" class="img-fluid rounded" id="teacherimgphoto" style="width:400px; height: 250px;">

    

   
 </div>
</div>
<div class="mb-3 row">
<div class="col-sm-2"></div>
 <div class="col-sm-8 ">

 
<input type="file" @change="handleImage"  id="eventimg" class="form-control">

    

   
 </div>
</div>



</div>
        
                </div>

         

                   <div class="row">
             
                    <div class="col-sm-6">



                
                  
                  
                  
                  </div>
                </div>




              
                
      </div>
                </div>
            </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-destory" data-bs-dismiss="modal">Close</button>
        <button class="d-flex justify-align-center btn btn-primary"  @click="store"> 
          <span id="createbtnspinner" class="spinner-border " role="status" aria-hidden="true"></span>
          <span id="createbtntext">  Save Record</span>
        
        </button>
    
           
        <button id="createclose" style="visibility: hidden;" type="button" data-bs-dismiss="modal" ></button>

      </div>
    </div>
  </div>
      </div>


      <div class="d-flex justify-content-start">
      <button  class="btn btn-primary mt-4" data-bs-toggle="modal" data-bs-target="#createmodal">Create Event</button>
                           
    </div>
    <div class="card mt-2">
      
        <div class="card-body">
               <div class="row ">
                <div class="col-sm-12 ms-1">
                      <div class="row d-flex justify-content-end mt-5 ">
              
                                       <!-- <div class="col-sm-3 ms-3">

           <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-4 col-form-label">Sort by</label>
                <div class="col-sm-6 ms-3">
               <select class="form-select" v-model="sort" aria-label="Default select example">

   <option value="1">By ID</option>
  <option value="2">By Name</option>
  <option value="3">By Date</option>

</select>
                </div>
            </div>
            </div>

                   <div class="col-sm-3 ms-3">

           <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-4 col-form-label">Filter by</label>
                <div class="col-sm-6 ms-3">
               <select class="form-select" aria-label="Default select example">
  <option selected>Filter By</option>
  <option value="1">By Name</option>
  <option value="2">By Month</option>
  <option value="3">By Year</option>
</select>
                </div>
            </div>
            </div> -->

                   <div class="col-sm-5 ms-3">

           <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-4 col-form-label">Search by</label>
                <div class="col-sm-6 ms-1">
                <input  type="text" class="form-control" v-model="search" @keyup="searchdata()" >
                </div>
            </div>
            </div>
                
                    </div>
                    
          



                    </div>
                </div>
                <div class="row d-flex justify-content-center mt-5 overflow-scroll ">
                        <!-- <div class="ms-1 "> -->
                          <div class="container" style="max-width:100%; max-height:1000px; overflow:scroll;">
                          
                            <table class="table table-bordered  table-hover">
                        <thead style="position: sticky;top: 0;background-color: white;">
                            <tr>
                                <th>No</th>
                                
                        
                                <th>Name</th>
                                <th>Content</th>
                                <th>Photo</th>
                                <th>Time</th>
                              
                       
                       
                                <th>Action</th>

                            </tr>
                        </thead>

                        <tbody >
                            
                            <tr v-for="(data2,index) in data2" :key="data2.id">
                                <td>{{++index}}</td>
                                <td>{{data2.name}}</td>
                                <td style="text-align:left;">{{data2.content}}</td>
                         
                            
                                <td> <img :src=data2.eventimg alt="" id="teacherimgphoto" style="height: 100px;">
                  </td>
                  <td>{{data2.time}}</td>
                         
                                <td>
                                       <button v-on:click="editmodel(data2.id)"  class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Edit</button>
                           
                                      <button v-on:click="deletecourse(data2.id)"  class="btn btn-danger" >Delete</button>
                                
                           </td>


                            </tr>

                       
                        </tbody>
                    </table>
                          </div>
                
                        <!-- </div> -->
                    </div>
        </div>
    </div>
            
<form v-for="data2 in data2" >
       <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel"></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
           <div class="">
                       <h1 class="m-3">Course Register</h1>
                       <div class="mt-5 ">
                     
     
                        <div class="row ">
                    <div class="col-sm-6 ">
                   
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Name</label>
    <div class="col-sm-8 ms-3">
           <input type="text" class="form-control" v-model="uname" id="name" required>
       
    </div>
  </div>


  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Content </label>
    <div class="col-sm-8 ms-3">
            <textarea name="" class="form-control" v-model="ucontent" id="studied" required cols="30" rows="10" style="resize: none;"></textarea>
       
   
    </div>
  </div>
                


                    </div>

                    <div class="col-sm-6">



<div class="mb-3 row">
 <label for="inputPassword" class="col-sm-2 col-form-label">Image</label>
 <div class="col-sm-8 ms-3">
<!-- <img src="./../assets/img/default.png" v-if="photobase64==''" for="inputGroupSelect01" class="img-fluid rounded" id="teacherimgphoto" style="width:250px; height: 350px;"> -->


<img :src=uphotobase64 v-if="uphotobase64" for="inputGroupSelect01" class="img-fluid rounded" id="teacherimgphoto" style="width:400px; height: 250px;">

    

   
 </div>
</div>
<div class="mb-3 row">
<div class="col-sm-2"></div>
 <div class="col-sm-8 ">

<input type="file" @change="uhandleImage"  id="uteacherimg" class="form-control">

    

   
 </div>
</div>



</div>
        
                </div>

         


                
      </div>
                </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-destory" data-bs-dismiss="modal">Close</button>
        <button v-on:click="update(edid)"  type="button"  data-bs-dismiss="modal" class="btn btn-warning">Save</button>
      </div>
    </div>
  </div>
</div>
</form>
       

        </div>


    </div>
</template>

<script>
import axios from 'axios';
import $ from 'jquery';
import Swal from 'sweetalert2'
import { DeviceUUID } from 'device-uuid';

export default {

        
component(){

},
       data(){
        return{
              link:"http://smkbackend.kwintechnologykw11.com",

            sort:'id',
         
             name:'',
             content:'',
             photobase64:`
            
             `,
    
             uname:'',
             ucontent:'',
        
              uphotobase64:'',


            edid:'',
          
             articleId:'',
             data2:null,
             userID:'',
            localtoken:'',
            deviceID:'',
            search:'',
        }
       },
       mounted() {
        $('#createbtnspinner').hide();

      
        if(!localStorage.getItem("deviceID"))
        {
                  this.deviceID = new DeviceUUID().get();
        }
        else
        {
            this.deviceID=localStorage.getItem("deviceID");
        }


        if(!localStorage.getItem("token"))
        {
           this.localtoken="Null";
        }
        else
        {
            this.localtoken=localStorage.getItem("token");
        }
        if(!localStorage.getItem("userID"))
        {
           this.userID="Null";
        }
        else
        {
            this.userID=localStorage.getItem("userID");
        }
      
        this.alreadyLogin();
     
        


       //    setInterval(this.show, 1000);
           this.show();
var base644="";
//   function readFile() {
  
//   if (!this.files || !this.files[0]) return;
    
//   const FR = new FileReader();
    
//   FR.addEventListener("load", function(evt) {
//     document.querySelector("#teacherimgphoto").src         = evt.target.result;
//    document.querySelector("#teacherimgbase64").value = evt.target.result;

//   this.photobase64= evt.target.result;
//   }); 
    
//   FR.readAsDataURL(this.files[0]);



  
  
// }
// document.querySelector("#teacherimg").addEventListener("change", readFile);

$( document ).ready(function() {
//   $("#teacherimg").on("change", function() {
// this.photobase64="1";

// });

});


     this.show();

       },
       
       methods: {
        searchdata()
        {
          if(this.search=="")
          {
            this.show();
        
          }
          let article = 
            { search:this.search.toLowerCase() ,
        



            };
              axios.post(this.link+"/api/searchevent", article)
    .then(response =>{
      this.data2 = response.data;
    },
           
           
         
         
         
    )
    .catch(error => {
      this.errorMessage = error.message;
      console.error("There was an error!", error);
       })
           
        },
        alreadyLogin()
     {
             
        let article = 
          { 
          
          userID:this.userID,
          localtoken:this.localtoken ,
          deviceID:this.deviceID,

            };
            
  axios.post(this.link+"/api/alreadyLogin", article)
    .then(response =>{
        if(response.data.state=="failed")
        {
            window.location.assign("/login")
        }
        else if(response.data.state=="success")
        {
            localStorage.setItem("token",response.data.Token);
            localStorage.setItem("deviceID", response.data.deviceID);
            localStorage.setItem("userID", response.data.userid);
        
        }

    }

    )
    .catch(error => {
      this.errorMessage = error.message;
      console.error("There was an error!", error);
       })
     },
     handleImage(e){
      const selectedImage=e.target.files[0];
      this.createBase64Image(selectedImage);

     },
     uhandleImage(e){
      const selectedImage=e.target.files[0];
      this.ucreateBase64Image(selectedImage);
      
     },

     createBase64Image(fileObject)
     {
      const reader=new FileReader();
      reader.onload=(e)=>{
        this.photobase64=e.target.result;
      };
      reader.readAsDataURL(fileObject);
     },
     ucreateBase64Image(fileObject)
     {
      const reader=new FileReader();
      reader.onload=(e)=>{
        this.uphotobase64=e.target.result;
      };
      reader.readAsDataURL(fileObject);
     },
    show(){
    
 axios.get(this.link+"/api/eventinput")
    .then(response => {
            this.data2 = response.data;
            
    })
    .catch(error => {
      this.errorMessage = error.message;
      console.error("There was an error!", error);});
        },
        store(){
          
      
          if(this.name=="")
            {
              return  document.getElementById("name").focus();
            }
            else if(this.content=="")
            {
              return document.getElementById("content").focus();

            }
       
          
            $('#createbtnspinner').show();
        $('#createbtntext').hide();

            let article = 
            { name:this.name ,
                content:this.content ,
                eventimg:this.photobase64 ,
         



            };
              axios.post(this.link+"/api/eventinput", article)
    .then(response =>console.log(response),
             this.show(),
         this.show(),
            this.show(),
         
         
         
    )
    .catch(error => {
      this.errorMessage = error.message;
      console.error("There was an error!", error);
       })
       this.show();
       this.show();
       this.show();
       this.show();
     
  
          $('#createbtnspinner').hide();
        $('#createbtntext').show();
        $('#createclose').click();
        Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Success',
  customClass:'sweetalertsuccess',
  showConfirmButton: false,
  timer: 1500
})
          



},
   editmodel(id){
    this.edid=id;
  
    for (let a=0;a<this.data2.length;a++)
    {
        if(this.data2[a].id==this.edid)
        {

               

            this.uname=this.data2[a].name;
            this.ucontent=this.data2[a].content;
            this.uphotobase64=this.data2[a].eventimg;
  
        }

    }    

   },


   update(id){
         
 
     
        //     alert(id)
            let article = 
            { 
            name:this.uname,
            content:this.ucontent ,
      
            eventimg:this.uphotobase64 ,
           
         
            };
       
   

  axios.post(this.link+"/api/updateEvent/"+id,article)
    .then(response =>console.log(response))
    .then(
        
       
         this.show(),
          this.show(),
         this.show(),
              this.show(),
            this.show(),
             this.show()
         





    )
    .catch(error => {
      this.errorMessage = error.message;
      console.error("There was an error!", error);
       })

},


   deletecourse(id){

       
   

  axios.post(this.link+"/api/deleteEvent/"+id)
    .then(response =>console.log(response)).then(
        
       
        this.show(),
         this.show()
         





    )
    .catch(error => {
      this.errorMessage = error.message;
      console.error("There was an error!", error);
       })

},


}
}
</script>

<style lang="scss" scoped>

</style>