 <template>
    <div  style="background-color:rgb(244, 234, 223)" class="p-3">
        <div class="container">
          <h1>Calendar Register</h1>
          <div class="d-flex justify-content-start">
      <button  class="btn btn-primary mt-4" data-bs-toggle="modal" data-bs-target="#createmodal">Create Calendar</button>
                           
    </div>
          <div class="modal fade" id="createmodal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Calendar Register</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="row d-flex justify-content-center ">
                <div class="col-sm-10 ms-3">
                    
                       <div class="mt-5 ">
                     
      

    <form class="">
                <div class="row ">
                    <div class="col ">
                   
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Name</label>
    <div class="col-sm-8 ms-3">
      <input type="text" class="form-control" v-model="name" id="name">
    </div>
  </div>


                    </div>
                    <div class="col">


   <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label ">Description</label>
    <div class="col-sm-8 ms-3">
      <input type="text" class="form-control" v-model="description" id="description">
    </div>
  </div>

                    
                    
                    </div>
                </div>

                <div class="row">
                    <div class="col">


                <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Start Date</label>
    <div class="col-sm-8 ms-3">
      <input type="date" class="form-control"  v-model="start_date" id="start_date">
    </div>
  </div>
                
                
                
                </div>
                    <div class="col">



                   <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">End Date</label>
                    <div class="col-sm-8 ms-3">
                    <input type="date" class="form-control" v-model="end_date" id="end_date">
                    </div>
                </div>
                  
                  
                  
                  </div>
                </div>

                <div class="row">
                    <div class="col">
            

              <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Color</label>
                <div class="col-sm-2 ms-3">
                <input type="color" class="form-control" v-model="color" id="c_color">
                </div>
            </div>
                   
                   
                   </div>
                    <div class="col">
               
               
            <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Color</label>
                <div class="col-sm-8 ms-3">
                <input  type="text" class="form-control" :value="color"  readonly id="color">
                </div>
            </div>
             
             
             
             </div>
                </div>

                    <div class="row">
                    <div class="col">
            

              <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Type</label>
                <div class="col-sm-8 ms-3">
                <input type="text" class="form-control" v-model="type" id="type">
                </div>
            </div>
                   
                   
                   </div>
                    <div class="col">
               
               
            <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label"></label>
                <div class="col-sm-8 ms-3">
             
                
                
                </div>
            </div>
             
             
             
             </div>
                </div>
          </form>
                
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


         
          

    <div class="card mt-3">
        <div class="card-body">
               <div class="row ">
                <div class="col-sm-12 ms-1">
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
                <input  type="text" class="form-control"  v-model="search" @keyup="searchdata()" id="color">
                </div>
            </div>
            </div>
                
                    </div>
                    
          



                    </div>
                </div>

                    <div class="row d-flex justify-content-center mt-5 ">
                        <div class="col-sm-10 ms-1">
<div class="container" style="max-width:100%; max-height:1000px; overflow:scroll;">
                          
                    <table class="table table-bordered table-hover">
                        <thead style="position: sticky;top: 0;background-color: white;">
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Start-date</th>
                                <th>End-date</th>
                                <th>Type</th>
                                <th>Description</th>
                                <th>color</th>
                       
                                <th>Action</th>

                            </tr>
                        </thead>

                        <tbody >
                            
                            <tr v-for="(data2,index) in data2" :key="data2.id">
                                <td>{{++index}}</td>
                                <td>{{data2.calender_name}}</td>
                                <td>{{data2.calender_startdate}}</td>
                                <td>{{data2.calender_enddate}}</td>
                                <td>{{data2.type}}</td>
                                <td>{{data2.description}}</td>
                                <td>{{data2.color}}</td>
                          
                         
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
        <h5 class="modal-title" id="staticBackdropLabel"></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
           <div class="">
            <h1 class="m-3"> Calendar Register</h1>
                     
                       <div class="mt-5 ">
                     
     
                 <div class="row ">
                    <div class="col ">
                   
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Name</label>
    <div class="col-sm-8 ms-3">
      <input type="text" class="form-control" v-model="uname" id="uname">
    </div>
  </div>


                    </div>
                    <div class="col">


   <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label ">Description</label>
    <div class="col-sm-8 ms-3">
      <input type="text" class="form-control" v-model="udescription" id="udescription">
    </div>
  </div>

                    
                    
                    </div>
                </div>

                <div class="row">
                    <div class="col">


                <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Start Date</label>
    <div class="col-sm-8 ms-3">
      <input type="date" class="form-control"  v-model="ustart_date" id="ustart_date">
    </div>
  </div>
                
                
                
                </div>
                    <div class="col">



                   <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">End Date</label>
                    <div class="col-sm-8 ms-3">
                    <input type="date" class="form-control" v-model="uend_date" id="uend_date">
                    </div>
                </div>
                  
                  
                  
                  </div>
                </div>

                <div class="row">
                    <div class="col">
            

              <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Color</label>
                <div class="col-sm-2 ms-3">
                <input type="color" class="form-control" v-model="ucolor" id="c_color">
                </div>
            </div>
                   
                   
                   </div>
                    <div class="col">
               
               
            <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Color</label>
                <div class="col-sm-8 ms-3">
                <input  type="text" class="form-control" :value="ucolor"  readonly id="ucolor">
                </div>
            </div>
             
             
             
             </div>
                </div>

                    <div class="row">
                    <div class="col">
            

              <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Type</label>
                <div class="col-sm-8 ms-3">
                <input type="text" class="form-control" v-model="utype" id="utype">
                </div>
            </div>
                   
                   
                   </div>
                    <div class="col">
               
               
      
             
             
             
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

export default {

        
component(){

},
       data(){
        return{
          link:"http://smkbackend.kwintechnologykw11.com",
            sort:'id',
             name:'',
             description:'',
             type:'',
             start_date:'',
             end_date:'',
             color:'',

             uname:'',
             udescription:'',
             utype:'',
             ustart_date:'',
             uend_date:'',
             ucolor:'',


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
     
        
  //   setInterval(this.show, 1000);
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
              axios.post(this.link+"/api/searchcalendar", article)
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
        show(){
    
 axios.get(this.link+"/api/calendar1")
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
            else if(this.start_date=="")
            {
              return document.getElementById("start_date").focus();

            }
            if(this.end_date=="")
            {
              return    document.getElementById("end_date").focus();
              
            }
            else if(this.type=="")
            {
              return    document.getElementById("type").focus();
              
            }
            else if(this.description=="")
            {
              return   document.getElementById("description").focus();
              
            }
            else if(this.color=="")
            {
              return   document.getElementById("c_color").focus();
              
            }
            $('#createbtnspinner').show();
        $('#createbtntext').hide();

            let article = 
            { name:this.name ,
            start_date:this.start_date ,
           end_date:this.end_date ,
            type:this.type,
            description:this.description ,
            color:this.color,

            };
            
  axios.post(this.link+"/api/calendar1", article)
    .then(response =>console.log(response))
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
            this.uname=this.data2[a].calender_name;
            this.utype=this.data2[a].type;
            this.udescription=this.data2[a].description;
            this.ucolor=this.data2[a].color;
            this.ustart_date=this.data2[a].calender_startdate;
            this.uend_date=this.data2[a].calender_enddate;
        }

    }    

   },


   update(id){
         
 
     
        //     alert(id)
            let article = 
            { 
                   
                name:this.uname ,
            start_date:this.ustart_date ,
           end_date:this.uend_date ,
            type:this.utype,
            description:this.udescription ,
            color:this.ucolor,
       
            };
       
   

  axios.post(this.link+"/api/calendarupdate/"+id,article)
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

       
   

  axios.post(this.link+"/api/calendardelete/"+id)
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




