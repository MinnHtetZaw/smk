 <template>
    <div  style="background-color:rgb(244, 234, 223)" class="p-3">
      <div class="modal fade" id="createmodal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Fees Register</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div>
          <div class="row d-flex justify-content-center ">
                <div class="col-sm-10 ms-3">
                  <h1 class="m-3"> Fees Register</h1>
                       <div class="mt-5 ">
                     
           
                <div class="row ">
                    <div class="col ">
                   
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Fees Type</label>
    <div class="col-sm-8 ms-3">
              <select class="form-select" v-model="feetype" @change="fee_change()" id="feetype" aria-label="" required>

   <option value="1">Pre-School </option>
   <option value="2">PrimarySchool </option>
   <option value="3">SecondarySchool </option>
  <option value="4">Extra Charges</option>
 

</select>
    
    </div>
  </div>


                    </div>
                        <div class="col ">
                   
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Year Types</label>
    <div class="col-sm-8 ms-3">
              <select class="form-select"  v-model="yeartype" id="yeartype" @change="fee_change()" aria-label="" required>

   <option value="1">Single Year </option>
  <option value="2">Multi Year</option>
 

</select>
    
    </div>
  </div>


                    </div>
               
                </div>

                <div class="row">
                    <div class="col">


                <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">From Year </label>
    <div class="col-sm-8 ms-3">
         <input name="" class="form-control" @keyup='fee_change()' v-model="fromyear" id="fromyear" required >
               
   
    </div>
  </div>
                
                
                
                </div>
                    <div class="col">



                   <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">To Year</label>
                    <div class="col-sm-8 ms-3">
                        <input name="" class="form-control" v-model="toyear" required id="toyear">
               
                    </div>
                </div>
                  
                  
                  
                  </div>
                </div>
                        <div class="row ">
                    <div class="col ">
                   
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Extra Types</label>
    <div class="col-sm-8 ms-3">
              <select class="form-select" id="extratype" v-model="extratype" aria-label="" required>
  <option value="0">None</option>
   <option value="1">Registration </option>
  <option value="2">Degital Resources & Teaching Aids</option>
   <option value="3">Book Fees </option>
  <option value="4">Uniform-Per-Set </option>
 

</select>
    
    </div>
  </div>


                    </div>
                        <div class="col ">
                   
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Charges</label>
    <div class="col-sm-8 ms-3">
        <input name="" class="form-control" v-model="charges" id="charges" required >
            
    
    </div>
  </div>


                    </div>
               
                </div>

          <div class="row ">
                    <div class="col ">
                   
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Remark </label>
    <div class="col-sm-8 ms-3">
           <input name="" class="form-control" v-model="remark" id="remark" required >
             
    </div>
  </div>


                    </div>
                    <div class="col-sm-6 ">
                   
                   <div class="mb-3 row">
                     <label for="inputPassword" class="col-sm-2 col-form-label">Class Type</label>
                     <div class="col-sm-8 ms-3">
                               <select class="form-select" id="classtype" v-model="classtype" aria-label="" required>
                 
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
          <h1>Fees Register</h1>
          <div class="d-flex justify-content-start">
      <button  class="btn btn-primary mt-4" data-bs-toggle="modal" data-bs-target="#createmodal">Create Fees</button>
                           
    </div>

    <div class="card mt-5">
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

                   <!-- <div class="col-sm-5 ms-3">

           <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-4 col-form-label">Search by</label>
                <div class="col-sm-6 ms-1">
                <input  type="text" class="form-control"   id="color">
                </div>
            </div>
            </div> -->
                
                    </div>
                    
          



                    </div>
                </div>
                    <div class="row d-flex justify-content-center mt-5 ">
                        <div class="col-sm-10 ms-1">
                          <div class="container" style="max-width:100%; max-height:1000px; overflow:scroll;">
                          
                    <table class="table table-bordered table-hover">
                        <thead style="position: sticky;top: 0;background-color: white;" >
                            <tr>
                                <th>No</th>
                                <th>Class Type</th>
                                <th>Feetypes</th>
                                <th>Yeartypes</th>
                                <th>FromYear</th>
                                <th>ToYear</th>
                                <th>ExtraTypes</th>
                                <th>Charges</th>
                                <th>Remark</th>
                                
                       
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
                                  <span v-if="data2.fees_types==1">Pre-School</span>
                                  <span v-if="data2.fees_types==2">Primary School</span>
                                  <span v-if="data2.fees_types==3">Secondary School</span>
                                  <span v-if="data2.fees_types==4">Extra Course</span>
                                  
                                  
                                  
                                  
                                </td>
                                <td>
                                <span v-if="data2.year_types==1">Single Year</span>
                                <span v-if="data2.year_types==2">Multi Year</span>
                                </td>
                                <td>{{data2.from_year}}</td>
                                <td>{{data2.to_year}}</td>
                                <td>
                                <span v-if="data2.extra_types==0">None</span>
                                <span v-if="data2.extra_types==1">Registration</span>
                                <span v-if="data2.extra_types==2">Degital Resources & Teaching Aids</span>
                                <span v-if="data2.extra_types==3">Book Fees</span>
                                <span v-if="data2.extra_types==4">Uniform-Per-Set </span>
                                  
                           </td>
                                <td>{{data2.charges}}</td>
                                <td>{{data2.remark}}</td>
                         
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
            
<form v-for="data2 in data2" >
       <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
           <div class="">
                 
                <div class="row ">
                    <div class="col ">
                   
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Fees Type</label>
    <div class="col-sm-8 ms-3">
              <select class="form-select" v-model="ufeetype" @change="ufee_change()" id="ufeetype" aria-label="" required>

   <option value="1">Pre-School </option>
   <option value="2">PrimarySchool </option>
   <option value="3">SecondarySchool </option>
  <option value="4">Extra Charges</option>
 

</select>
    
    </div>
  </div>


                    </div>
                        <div class="col ">
                   
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Year Types</label>
    <div class="col-sm-8 ms-3">
              <select class="form-select"  v-model="uyeartype" id="uyeartype" @change="ufee_change()" aria-label="" required>

   <option value="1">Single Year </option>
  <option value="2">Multi Year</option>
 

</select>
    
    </div>
  </div>


                    </div>
               
                </div>

                <div class="row">
                    <div class="col">


                <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">From Year </label>
    <div class="col-sm-8 ms-3">
         <input name="" class="form-control" @keyup='ufee_change()' v-model="ufromyear" id="ufromyear" required >
               
   
    </div>
  </div>
                
                
                
                </div>
                    <div class="col">



                   <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">To Year</label>
                    <div class="col-sm-8 ms-3">
                        <input name="" class="form-control" v-model="utoyear" required id="utoyear">
               
                    </div>
                </div>
                  
                  
                  
                  </div>
                </div>
                        <div class="row ">
                    <div class="col ">
                   
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Extra Types</label>
    <div class="col-sm-8 ms-3">
              <select class="form-select" id="uextratype" v-model="uextratype" aria-label="" required>
   <option value="0">None</option>
   <option value="1">Registration </option>
  <option value="2">Degital Resources & Teaching Aids</option>
   <option value="3">Book Fees </option>
  <option value="4">Uniform-Per-Set </option>
 

</select>
    
    </div>
  </div>


                    </div>
                        <div class="col ">
                   
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Charges</label>
    <div class="col-sm-8 ms-3">
        <input name="" class="form-control" v-model="ucharges" id="ucharges" required >
            
    
    </div>
  </div>


                    </div>
               
                </div>

          <div class="row ">
                    <div class="col ">
                   
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Remark </label>
    <div class="col-sm-8 ms-3">
           <input name="" class="form-control" v-model="uremark" id="uremark" required >
             
    </div>
  </div>


                    </div>

                    <div class="col-sm-6 ">
                   
                   <div class="mb-3 row">
                     <label for="inputPassword" class="col-sm-2 col-form-label">Class Type</label>
                     <div class="col-sm-8 ms-3">
                               <select class="form-select" v-model="uclasstype" aria-label="" required>
                 
                    <option value="1">Weekday Class</option>
                   <option value="2">Weekend Class</option>
       
                 
                 </select>
                     
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
import { DeviceUUID } from 'device-uuid';
export default {

        
component(){

},
       data(){
        return{
            link:"http://smkbackend.kwintechnologykw11.com",
            sort:'id',
            feetype:'',
            yeartype:'',
            toyear:'',
            fromyear:'',
            extratype:'',
            classtype:'',
            uclasstype:'',
            charges:'',
            remark:'',

            ufeetype:'',
            uyeartype:'',
            utoyear:'',
            ufromyear:'',
            uextratype:'',
            ucharges:'',
            uremark:'',
            edid:'',

        
             articleId:'',
             data2:null,
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
     
        

         //     setInterval(this.show, 1000);

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
       
        fee_change()
        {


        if(this.feetype<=3)
        {
          // $("#yeartype").val("1").change();
              this.yeartype='1';
              this.toyear=this.fromyear;

          // $('#toyear').val($('#fromyear').val());
                 $('#toyear').prop('disabled', true);
                          $('#extratype').prop('disabled', true);
                            this.extratype='0'; 
                            this.remark='-';
   $('#yeartype').prop('disabled', true);
     $('#remark').prop('disabled', true);
     
        }
        else if(this.feetype==4){
             $('#toyear').prop('disabled', false);
     $('#extratype').prop('disabled', false);
     $('#yeartype').prop('disabled', false);
     if(this.yeartype==2)
     {
        $('#toyear').prop('disabled', false);
     }
     else if(this.yeartype==1)
     {
         this.toyear=this.fromyear;
        $('#toyear').prop('disabled', true);
     }
               $('#remark').prop('disabled', false);
        }
        },
           ufee_change()
        {


        if(this.ufeetype<=3)
        {
          this.uyeartype='1';
          this.utoyear=this.ufromyear;

          $('#utoyear').prop('disabled', true);
          $('#uextratype').prop('disabled', true);
            this.uextratype='0'; 
            this.uremark='-';
          $('#uyeartype').prop('disabled', true);
          $('#uremark').prop('disabled', true);
     
        }
        else if(this.ufeetype==4){
             $('#utoyear').prop('disabled', false);
     $('#uextratype').prop('disabled', false);
     $('#uyeartype').prop('disabled', false);
     if(this.uyeartype==2)
     {
        $('#utoyear').prop('disabled', false);
     }
     else if(this.uyeartype==1)
     {
         this.utoyear=this.ufromyear;
        $('#utoyear').prop('disabled', true);
     }
               $('#uremark').prop('disabled', false);
        }
        },
        show(){
    
 axios.get(this.link+"/api/fees")
    .then(response => {
            this.data2 = response.data;
            
    })
    .catch(error => {
      this.errorMessage = error.message;
      console.error("There was an error!", error);});
        },
        store(){
            
      
          if(this.feetype=="")
            {
              return  document.getElementById("feetype").focus();
            }
            else if(this.yeartype=="")
            {
              return document.getElementById("yeartype").focus();

            }
            if(this.toyear=="")
            {
              return    document.getElementById("toyear").focus();
              
            }
            else if(this.fromyear=="")
            {
              return    document.getElementById("fromyear").focus();
              
            }
            else if(this.classtype=="")
            {
              return   document.getElementById("classtype").focus();
              
            }
            else if(this.extratype=="")
            {
              return   document.getElementById("extratype").focus();
              
            }
               else if(this.charges=="")
            {
              return   document.getElementById("charges").focus();
              
            }
            else if(this.remark=="")
            {
              return   document.getElementById("remark").focus();
              
            }
            $('#createbtnspinner').show();
        $('#createbtntext').hide();

            let article = 
          { 
          feestype:this.feetype ,
          yeartype:this.yeartype ,
          toyear:this.toyear ,
          fromyear:this.fromyear,
          classtype:this.classtype,
          extratypes:this.extratype ,
          charges:this.charges ,
          remark:this.remark

    

            };
            
  axios.post(this.link+"/api/fees", article)
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
this.feetype="" 
        this.yeartype ="" 
     this.toyear ="" 
       this.fromyear="" 
       this.classtype="" 
       this.extratype ="" 
     this.charges ="" 
    this.remark="" 
},
  update(id){
         
 
     
        //     alert(id)
            let article = 
            { 
                   
                  feestype:this.ufeetype ,
          yeartype:this.uyeartype ,
          toyear:this.utoyear ,
          fromyear:this.ufromyear,
          extratypes:this.uextratype ,
          charges:this.ucharges ,
          remark:this.uremark,
          classtype:this.uclasstype,
         
            };
       
   

  axios.post(this.link+"/api/fees-update/"+id,article)
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


   editmodel(id){
    this.edid=id;
  
    for (let a=0;a<this.data2.length;a++)
    {
        if(this.data2[a].id==this.edid)
        {



            this.ufeetype=this.data2[a].fees_types;
            this.uyeartype=this.data2[a].year_types;
            this.utoyear=this.data2[a].to_year;
            this.ufromyear=this.data2[a].from_year;
            this.uextratype=this.data2[a].extra_types;
            this.ucharges=this.data2[a].charges;
            this.uremark=this.data2[a].remark;
            this.uclasstype=this.data2[a].class_types;
           
        }

    } 
    this.ufee_change();
    
    

   },



    delete1(id){


  // let del = 
  //         { 
  //         del:id,
          
  //           };
            

  axios.post(this.link+"/api/fees-delete/"+id)
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