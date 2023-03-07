 <template>
    <div  style="background-color:rgb(244, 234, 223)" class="p-3">
      <div class="modal fade" id="createmodal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div>
          <div class="row d-flex justify-content-center ">
                <div class="col-sm-10 ms-3">
                       <h1>Course Register</h1>
                       <div class="mt-5 ">
                     <div class="row">
                      <div class="col-12">
                        <div class="row ">
                    <div class="col ">
                   
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-4 col-form-label">Year Level</label>
    <div class="col-sm-8">
              <select class="form-select" v-model="level" aria-label="" id="level" required>

   <option value="1">Pre-School</option>
  <option value="2">PrimarySchool</option>
  <option value="3">SecondarySchool</option>

</select>
    
    </div>
  </div>


                    </div>
                    <div class="col">


   <div class="mb-3 row">
    <label for="Year Name" class="col-sm-4 col-form-label ">Year Name</label>
    <div class="col-sm-8 ">
      <input type="text" class="form-control" v-model="name" id="name" required>
    </div>
  </div>

                    
                    
                    </div>
                </div>
                      </div>

                      <div class="col-12">

                <div class="mb-3 row ">
    <label for="inputPassword" class="col-sm-2 col-form-label">Intake </label>
    <div class="col-sm-10 ">
         <textarea name="" class="form-control" v-model="intake" id="intake" required cols="30" rows="5" style="resize: none;"></textarea>
               
   
    </div>
  </div>
                      </div>

                           
                <div class="col-12">



<div class="mb-3 row">
 <label for="inputPassword" class="col-sm-2 col-form-label">International Curriculum</label>
 <div class="col-sm-10 ">
     <textarea name="" class="form-control" v-model="curriculum" required id="curriculum" cols="30" rows="5" style="resize: none;"></textarea>

 </div>
</div>



</div>

<div class="col-12">



<div class="mb-3 row">
 <label for="inputPassword" class="col-sm-2 col-form-label">Digital Learning Area</label>
 <div class="col-sm-10 ">
     <textarea name="" class="form-control" v-model="digital" required id="digital" cols="30" rows="5" style="resize: none;"></textarea>

 </div>
</div>



</div>

<div class="col-12">



<div class="mb-3 row">
 <label for="inputPassword" class="col-sm-2 col-form-label">Extra Curriculum</label>
 <div class="col-sm-10 ">
     <textarea name="" class="form-control" v-model="extracu" required id="extracu" cols="30" rows="5" style="resize: none;"></textarea>

 </div>
</div>



</div>

<div class="col-12">



<div class="mb-3 row">
 <label for="inputPassword" class="col-sm-2 col-form-label">Foreign Language </label>
 <div class="col-sm-10 ">
     <textarea name="" class="form-control" v-model="foreign" required id="foreign" cols="30" rows="5" style="resize: none;"></textarea>

 </div>
</div>



</div>

<div class="col-sm-12 ">
                   
                   <div class="mb-3 row">
                     <label for="inputPassword" class="col-sm-4 col-form-label">Class Type</label>
                     <div class="col-sm-8 ">
                               <select class="form-select" v-model="classtype" aria-label="" id="classtype">
                 
                    <option value="1">Weekday Class</option>
                   <option value="2">Weekend Class</option>
       
                 
                 </select>
                     
                     </div>
                   </div>
                 
                 
                   </div>

                     </div>
           
             

                <div class="row">
            
                </div>

                <div class="row">
         

                
            

                </div>

                <div class="row">
       
               
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

  

        <div class="container">
          <h1>Course Register</h1>
          <div class="d-flex justify-content-start">
      <button  class="btn btn-primary mt-4" data-bs-toggle="modal" data-bs-target="#createmodal">Create Course</button>
                           
    </div>
    <div class="card mt-2 mb-5">
        <div class="card-body">
      
               <div class="row ">
                <div class="col-sm-12 ms-1">
                      <!-- <div class="row d-flex justify-content-center mt-5 ">
              
                                       <div class="col-sm-3 ms-3">

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
            </div>

                   <div class="col-sm-3 ms-3">

           <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-4 col-form-label">Search by</label>
                <div class="col-sm-6 ms-1">
                <input  type="text" class="form-control"   id="color">
                </div>
            </div>
            </div>
                
                    </div> -->
                    <div class="row d-flex justify-content-center mt-5 ">
                        <div class="col-sm-10 ms-1">
                          <div class="container" style="max-width:100%; max-height:1000px; overflow:scroll;">
                    <table class="table table-bordered table-hover">
                        <thead style="position: sticky;top: 0;background-color: white;">
                            <tr>
                                <th>No</th>
                                <th>ClassType</th>
                                <th>Class</th>
                                <th>Name</th>
                                <th>Intake</th>
                                <th>Curriculum</th>
                                <th>Digital Learning Area</th>
                                <th>Extra Curriculum</th>
                                <th>Foreign Language</th>
                            
                       
                                <th>Action</th>

                            </tr>
                        </thead>

                        <tbody >
                            
                            <tr v-for="(data2,index) in data2" :key="data2.id">
                                <td>{{++index}}</td>
                                <td>
                                <span v-if="data2.class_types==1">WeekDay Class</span>
                                <span v-if="data2.class_types==2">WeekEnd Class</span>
                                </td>
                                
                                <td>
                                <span v-if="data2.yearlevel==1">Pre-School </span>
                                <span v-if="data2.yearlevel==2">Primary-School </span>
                                <span v-if="data2.yearlevel==3"> Secondary-School</span>
                                </td>
                              
                    

                                <td>{{data2.yearname}}</td>
                                <td>{{data2.intake}}</td>
                                <td style="text-align:left;"> <span v-for="dat in data2.curriculum"> <br v-if="dat=='^'"><span v-if="dat!='^'">{{dat}}</span></span> {{}}</td>
                                <td style="text-align:left;"> <span v-for="dat in data2.digital"> <br v-if="dat=='^'"><span v-if="dat!='^'">{{dat}}</span></span> {{}}</td>
                                <td style="text-align:left;"> <span v-for="dat in data2.extracu"> <br v-if="dat=='^'"><span v-if="dat!='^'">{{dat}}</span></span> {{}}</td>
                                <td style="text-align:left;"> <span v-for="dat in data2.foreign"> <br v-if="dat=='^'"><span v-if="dat!='^'">{{dat}}</span></span> {{}}</td>
                                    
                                <td>
                                

                                     <button v-on:click="editmodel(data2.id)"  class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Edit</button>
                           
                                      <button v-on:click="delete1(data2.id)"  class="btn btn-danger" >Delete</button>
                                
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
            
       <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div>
          <div class="row d-flex justify-content-center ">
                <div class="col-sm-10 ms-3">
                       <h1>Course Register</h1>
                       <div class="mt-5 ">
                     <div class="row">
                      <div class="col-12">
                        <div class="row ">
                    <div class="col ">
                   
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-4 col-form-label">Year Level</label>
    <div class="col-sm-8">
              <select class="form-select" v-model="ulevel" aria-label="" id="ulevel" required>

   <option value="1">Pre-School</option>
  <option value="2">PrimarySchool</option>
  <option value="3">SecondarySchool</option>

</select>
    
    </div>
  </div>


                    </div>
                    <div class="col">


   <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-4 col-form-label ">Year Name</label>
    <div class="col-sm-8 ">
      <input type="text" class="form-control" v-model="uname" id="uname" required>
    </div>
  </div>

                    
                    
                    </div>
                </div>
                      </div>

                      <div class="col-12">

                <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Intake </label>
    <div class="col-sm-10 ">
         <textarea name="" class="form-control" v-model="uintake" id="uintake" required cols="30" rows="5" style="resize: none;"></textarea>
               
   
    </div>
  </div>
                      </div>


                      <div class="col-12">
                        <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">International Curriculum</label>
                    <div class="col-sm-10">
                        <textarea name="" class="form-control" v-model="ucurriculum" required id="ucurriculum" cols="30" rows="5" style="resize: none;"></textarea>
               
                    </div>
                </div>
                      </div>

                      <div class="col-12">
                        <div class="mb-3 row">
 <label for="inputPassword" class="col-sm-2 col-form-label">Digital Learning Area</label>
 <div class="col-sm-10 ">
     <textarea name="" class="form-control" v-model="udigital" required id="udigital" cols="30" rows="5" style="resize: none;"></textarea>

 </div>
</div>

                      </div>

                      <div class="col-12">
                        <div class="mb-3 row">
 <label for="inputPassword" class="col-sm-2 col-form-label">Extra Curriculum</label>
 <div class="col-sm-10 ">
     <textarea name="" class="form-control" v-model="uextracu" required id="uextracu" cols="30" rows="5" style="resize: none;"></textarea>

 </div>
</div>
                      </div>

                      <div class="col-12">
                        <div class="mb-3 row">
 <label for="inputPassword" class="col-sm-2 col-form-label">Foreign Language </label>
 <div class="col-sm-10 ">
     <textarea name="" class="form-control" v-model="uforeign" required id="uforeign" cols="30" rows="5" style="resize: none;"></textarea>

 </div>
</div>
                      </div>

                      <div class="col-sm-6 ">
                   
                   <div class="mb-3 row">
                     <label for="inputPassword" class="col-sm-4 col-form-label">Class Type</label>
                     <div class="col-sm-8 ">
                               <select class="form-select" v-model="uclasstype" aria-label="" id="uclasstype">
                 
                    <option value="1">Weekday Class</option>
                   <option value="2">Weekend Class</option>
       
                 
                 </select>
                     
                     </div>
                   </div>
                 
                 
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

       

        </div>



    </div>
</template>

<script>
import axios from 'axios';
import { DeviceUUID } from 'device-uuid';
import Swal from 'sweetalert2'
export default {

        
component(){

},
       data(){
        return{
            link:"http://smkbackend.kwintechnologykw11.com",
            sort:'id',
             level:'',
             name:'',
             intake:'',
             foreign:'',
             curriculum:'',
             extracu:'',
             digital:'',

             
             classtype:'',
             uclasstype:'',
            edid:'',
            uname:'',
            ulevel:'',
            uintake:'',
              uforeign:'',
             ucurriculum:'',
             uextracu:'',
             udigital:'',
             uarticleId:'',
             data2:null,
             data3:null,
             userID:'',
            localtoken:'',
            deviceID:'',
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
     
        




    // setInterval(this.show, 1000);
     this.show();

       },
       methods: {
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
        show(){
    
 axios.get(this.link+"/api/courses")
    .then(response => {
            this.data2 = response.data;
      
            
    })
    .catch(error => {
      this.errorMessage = error.message;
      console.error("There was an error!", error);});
        },
        store(){
       
     
      
            if(this.classtype=="")
            {
              return  document.getElementById("classtype").focus();
            }
            else if(this.level=="")
            {
              return document.getElementById("level").focus();

            }
            if(this.name=="")
            {
              return    document.getElementById("name").focus();
              
            }
            else if(this.intake=="")
            {
              return    document.getElementById("intake").focus();
              
            }
            else if(this.curriculum=="")
            {
              return   document.getElementById("curriculum").focus();
              
            }
            else if(this.digital=="")
            {
              return   document.getElementById("digital").focus();
              
            }
            else if(this.extracu=="")
            {
              return   document.getElementById("extracu").focus();
              
            }
            else if(this.foreign=="")
            {
              return   document.getElementById("foreign").focus();
              
            }
            $('#createbtnspinner').show();
        $('#createbtntext').hide();
            let article = 
            {
              classtype:this.classtype,
               level:this.level ,
            name:this.name ,
           intake:this.intake ,
            curriculum:this.curriculum,
            digital:this.digital,
            extracu:this.extracu,
            foreign:this.foreign,
           

            };
            
  axios.post(this.link+"/api/courses", article)
    .then(response =>{console.log(response)
    
    
    })
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
            this.ulevel=this.data2[a].yearlevel;
            this.uname=this.data2[a].yearname;
            this.uintake=this.data2[a].intake;
            this.ucurriculum=this.data2[a].curriculum;
            this.udigital=this.data2[a].digital;
            this.uextracu=this.data2[a].extracu;
            this.uforeign=this.data2[a].foreign;

            this.uclasstype=this.data2[a].class_types;
        }

    }    

   },


   update(id){
         
 
     
        //     alert(id)
            let article = 
            { 
                   
                level:this.ulevel ,
                classtype:this.uclasstype ,
            name:this.uname ,
           intake:this.uintake ,
            curriculum:this.ucurriculum ,
            digital:this.udigital ,
            extracu:this.uextracu ,
            foreign:this.uforeign ,
            _method : 'PATCH'
            };
       
   

  axios.post(this.link+"/api/courses/"+id,article)
    .then(response =>console.log(response)).then(
        
       
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


   delete1(id){

       
   

  axios.delete(this.link+"/api/courses/"+id)
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
.sweetalertsuccess{
  width: 200px;
  height: 100px;
}
</style>





