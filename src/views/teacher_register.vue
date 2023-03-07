 <template>
    <div  style="background-color:rgb(244, 234, 223)" class="p-3">
      <div class="modal fade" id="createmodal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Teacher Register</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div>
          <div class="row d-flex justify-content-center">
                <div class="col-sm-10 ms-3">
                       <h1 class="m-3"> Teacher Register</h1>
                       <div class="mt-5 ">
                     
       
                <div class="row ">
                    <div class="col-sm-6 ">
                   
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Name</label>
    <div class="col-sm-8 ms-3">
           <input type="text" class="form-control" v-model="name" id="name" required>
       
    </div>
  </div>


                    </div>
                    <div class="col-sm-6">


   <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label ">Position</label>
    <div class="col-sm-8 ms-3">
           <input type="text" class="form-control" v-model="position" id="position" required>
   
    </div>
  </div>

                    
                    
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-6">


                <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Studied </label>
    <div class="col-sm-8 ms-3">
            <textarea name="" class="form-control" v-model="studied" id="studied" required cols="30" rows="5" style="resize: none;"></textarea>
       
   
    </div>
  </div>
                
                
                
                </div>
                    <div class="col-sm-6">



                   <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Biography</label>
                    <div class="col-sm-8 ms-3">
                        <textarea name="" class="form-control" v-model="biography" required id="biography" cols="30" rows="5" style="resize: none;"></textarea>
               
                    </div>
                </div>
                  
                  
                  
                  </div>
                </div>

                    <div class="row">
                    <div class="col-sm-6">


    <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">About </label>
    <div class="col-sm-8 ms-3">
                 <textarea name="" class="form-control" v-model="about" required id="about" cols="30" rows="5" style="resize: none;"></textarea>
      </div>
    </div>

       <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Teacher Type </label>
    <div class="col-sm-8 ms-3">
       <select id="t_type" r class="form-select" v-model="t_type" aria-label="" required>

   <option value="1">Management</option>
  <option value="2">Teaching</option>
  <option value="3">Part-Time</option>

</select>
     
   
    </div>
    </div>
                
                
                
                </div>
                    <div class="col-sm-6">



                   <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Image</label>
                    <div class="col-sm-8 ms-3">
                <!-- <img src="./../assets/img/default.png" v-if="photobase64==''" for="inputGroupSelect01" class="img-fluid rounded" id="teacherimgphoto" style="width:250px; height: 350px;"> -->
             
                  
                  <img :src=photobase64 v-if="photobase64" for="inputGroupSelect01" class="img-fluid rounded" id="teacherimgphoto" style="width:250px; height: 350px;">
                  
                       
                  
                      
                    </div>
                </div>
                <div class="mb-3 row">
                  <div class="col-sm-2"></div>
                    <div class="col-sm-8 ">
                
                 <input type="file" @change="handleImage"  id="teacherimg" class="form-control">
  
                       
                  
                      
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

        <div class="container" >
          <h1>Teacher Register</h1>
          <div class="d-flex justify-content-start">
      <button  class="btn btn-primary mt-4" data-bs-toggle="modal" data-bs-target="#createmodal">Create Teacher</button>
                           
    </div>
       

    <div class="card mt-5">
        <div class="card-body" >
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
<input  type="text" class="form-control" v-model="search"  @keyup=searchdata()  id="color">
</div>
</div>
</div>

</div>
                    <div class="row d-flex justify-content-center mt-5 ">
                        <div class="col-sm-10 ms-1">
                          <div class="container" style="max-width:100%; max-height:1000px; overflow:scroll;">
                          
                    <table class="table table-bordered table-hover">
                        <thead  style="position: sticky;top: 0;background-color: white;">
                            <tr>
                                <th>No</th>
                                
                                <th>Name</th>
                                <th>Studied</th>
                                <th>Position</th>
                                <th>Biography</th>
                                <th>about</th>
                                <th>TeacherType</th>
                                  <th>teacherphoto</th>
                                <th>isDisplay</th>
                                <th>Action</th>

                            </tr>
                        </thead>

                        <tbody >
                            
                            <tr v-for="(data2,index) in data2" :key="data2.id">
                                <td>{{++index}}</td>
                                <td>{{data2.name}}</td>
                                <td>{{data2.studied}}</td>
                                <td style="text-align:left;">{{data2.position}}</td>
                                <td style="text-align:left;">{{data2.biography}}</td>
                                <td style="text-align:left;">{{data2.about}}</td>
                                <td>
                                    <span v-if="data2.type==1">Management</span>
                                    <span v-if="data2.type==2">Teaching</span>
                                      <span v-if="data2.type==3">Part-Time</span>
                               </td>
                                <td> <img :src=data2.teacherimage alt="" id="teacherimgphoto" style="width:60px; height: 100px;">
                  </td>
                  <td class="d-flex justify-content-center"> 
                    
             
                    <div class="form-check form-switch">
  <input  v-if="data2.isDisplay=='1'" class="form-check-input" type="checkbox" :id="isDisplay+data2.id" checked @change=display(data2.id) >

  <input v-if="data2.isDisplay=='0'" :id="isDisplay+data2.id" class="form-check-input" type="checkbox"    @change=display(data2.id)>
 
</div> </td>
                         
                                <td>
                                       <button v-on:click="editmodel(data2.id)"  class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Edit</button>
                           
                                      <button v-on:click="deletecourse(data2.id)"  class="btn btn-danger" >Delete</button>
                                
                           </td>


                            </tr>

                       
                        </tbody>
                    </table>
                    </div>
                        </div>
                    </div>
          



                    </div>
                    </div>
        </div>
    </div>
            
<form v-for="data2 in data2" >
       <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Teacher Register</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
           <div class="">
                       <h1></h1>
                       <div class="mt-5 ">
                     
     
                <div class="row ">
                    <div class="col ">
                   
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Name</label>
    <div class="col-sm-8 ms-3">
          <input type="text" class="form-control" v-model="uname" id="uname" required>
 
    
    </div>
  </div>


                    </div>
                    <div class="col">


   <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label ">Studied</label>
    <div class="col-sm-8 ms-3">
    <input type="text" class="form-control" v-model="ustudied" id="ustudied" required>
 
</div>
  </div>

                         
                    
                    </div>
                </div>

                <div class="row">
                    <div class="col">


                <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Position </label>
    <div class="col-sm-8 ms-3">
          <textarea name="" class="form-control" v-model="uposition" id="uposition" required cols="30" rows="5" style="resize: none;">{{}}</textarea>
              
   
    </div>
  </div>
                
                
                
                </div>
                    <div class="col">



                   <div class="mb-3 row">
                    <label for="" class="col-sm-2 col-form-label">Biography</label>
                    <div class="col-sm-8 ms-3">
                        <textarea name="" class="form-control" v-model="ubiography" required id="ubiography" cols="30" rows="5" style="resize: none;"> </textarea>
               
                    </div>
                </div>
                  
                  
                  
                  </div>
                </div>
                

   <div class="row">
            
                    <div class="col">



                   <div class="mb-3 row">
                    <label for="" class="col-sm-2 col-form-label">About</label>
                    <div class="col-sm-8 ms-3">
                        <textarea name="" class="form-control" v-model="uabout" required id="uabout" cols="30" rows="5" style="resize: none;"> </textarea>
                        
                    </div>
                </div>
                  
                        <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Teacher Type: </label>
    <div class="col-sm-8 ms-3">
         <select id="ut_type" class="form-select" v-model="ut_type" aria-label="" required>

   <option value="1">Management</option>
  <option value="2">Teaching</option>
  <option value="3">Part-Time</option>

</select>
      
   
    </div>
    </div>
                
                  
                  </div>

                              <div class="col">



                   <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Image</label>
                    <div class="col-sm-8 ms-3">
                      <img :src=uphotobase64 alt="" id="teacherimgphoto" style="width:250px; height: 350px;">
                  
                  
                      <input type="file" class="form-control" @change="uhandleImage"  id="teacherimg">
                          
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
   import { DeviceUUID } from 'device-uuid';
import axios from 'axios';
import $ from 'jquery';

export default {

        
component(){

},
       data(){
        return{
              link:"http://smkbackend.kwintechnologykw11.com",

            sort:'id',
         
             name:'',
             studied:'',
             position:'',
             biography:'',
             about:'',
             photobase64:`
             data:image/png;base64,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
             `,
             t_type:'',
             ut_type:'',
             uname:'',
             ustudied:'',
             uposition:'',
             ubiography:'',
             uabout:'',
              uphotobase64:'',


            edid:'',
            isDisplay:'isDisplay',
             articleId:'',
             data2:null,
             userID:'',
            localtoken:'',
            deviceID:'',
            search:''
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
              axios.post(this.link+"/api/searchteacher", article)
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
    
 axios.get(this.link+"/api/teacher")
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
            else if(this.studied=="")
            {
              return document.getElementById("studied").focus();

            }
            if(this.position=="")
            {
              return    document.getElementById("position").focus();
              
            }
            else if(this.biography=="")
            {
              return    document.getElementById("biography").focus();
              
            }
            else if(this.about=="")
            {
              return   document.getElementById("about").focus();
              
            }
            else if(this.t_type=="")
            {
              return   document.getElementById("t_type").focus();
              
            }
            else if(this.photobase64=="")
            {
              return   document.getElementById("photobase64").focus();
              
            }
            $('#createbtnspinner').show();
        $('#createbtntext').hide();

          
            let article = 
            { name:this.name ,
            studied:this.studied ,
           position:this.position ,
           biography:this.biography,
            about:this.about,
            teacherimage:this.photobase64,
            type:this.t_type,
         



            };
              axios.post(this.link+"/api/teacher", article)
    .then(response =>console.log(response),
             this.show(),
         this.show(),
            this.show(),
            this.show(),
          this.show(),
         this.show(),
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
            this.ustudied=this.data2[a].studied;
            this.uposition=this.data2[a].position;
            this.ubiography=this.data2[a].biography;
            this.uabout=this.data2[a].about;
            this.uphotobase64=this.data2[a].teacherimage;
            this.ut_type=this.data2[a].type;
        }

    }    

   },

   display(id)
   {

 let istrue='0';
 if($('#isDisplay'+id).is(':checked'))
{
  istrue=1;
}else
{
  istrue=0;
}
        //     alert(id)
        let article = 
            { 
              isDisplay:istrue,
           
       
            };
       
   

  axios.post(this.link+"/api/isDisplay/"+id,article)
    .then(response =>console.log(response))
    .then(
        
       
 
 
         





    )
    .catch(error => {
      this.errorMessage = error.message;
      console.error("There was an error!", error);
       })
       this.show();
       alert('Success')
   },

   update(id){
         
 
     
        //     alert(id)
            let article = 
            { 
            type:this.ut_type,
            name:this.uname ,
            studied:this.ustudied ,
            position:this.uposition ,
            biography:this.ubiography ,
            about:this.uabout ,
            teacherimage:this.uphotobase64,
            _method : 'PATCH'
            };
       
   

  axios.post(this.link+"/api/teacher/"+id,article)
    .then(response =>console.log(response))
    .then(
        
       
         this.show(),
          this.show(),
         this.show(),
              this.show(),
            this.show(),
             this.show(),
             Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Updated',
  customClass:'sweetalertsuccess',
  showConfirmButton: false,
  timer: 1500
})
         





    )
    .catch(error => {
      this.errorMessage = error.message;
      console.error("There was an error!", error);
       })
   

},


   deletecourse(id){

       
   

  axios.delete(this.link+"/api/teacher/"+id)
    .then(response =>console.log(response)).then(
        
       
        this.show(),
         this.show(),
         

         Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Deleted',
  customClass:'sweetalertsuccess',
  showConfirmButton: false,
  timer: 1500
})



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