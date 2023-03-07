<template>
    <div >


<nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-career" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Career List</button>
    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-position" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Add Position</button>
   
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-career" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
    <div style="background-color:rgb(244, 234, 223)" class="p-3">
              <div>
          <h1>Career</h1>
        </div>
        <div class="overflow-scroll  " >
           
        <table class="table table-bordered table-hover">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Studied</th>
                <th>Position</th>
                <th>Phone</th>
                <th>Email</th>
                <th>About</th>
                <th>CV</th>
                <th>action</th>
              </tr>
            

            </thead>
            <tbody>
                <tr v-for="(data,index) in data2">
                    <td> {{++index}}</td>
                    <td> {{data.name}}</td>
                    <td>{{data.studied}} </td>
                    <td>{{data.position}} </td>
                    <td>{{data.phone}} </td>
                    <td>{{data.email}} </td>
                    <td>{{data.about}} </td>
                    <td>  <button type="button" class="btn btn-primary" @click="showcv(data.filename)" data-bs-toggle="modal" data-bs-target="#cv">
  {{data.filename}}
</button></td>
                     <td><button class=" btn btn-danger" @click="delete1(data.id)">Delete</button> </td>
                

                </tr>
            </tbody>
        </table>
        
        </div>
        <div class="modal fade" id="cv" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">CV File</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <iframe :src=file style="width:100%; height:70vh; border:1px; border-style: solid; " frameborder="0"></iframe>
      </div>
    
    </div>
  </div>
</div>
      </div>
  </div>
  <div class="tab-pane fade" id="nav-position" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
    <div class="row d-flex justify-content-center"> 
      <div class="col-sm-8">
        <div class="shadow p-5 rounded mb-5">
          <div class="mb-3">
            <label for=""> Position</label> 
          <input type="text" v-model="position" class="form-control" placeholder="Enter Position" >
          <label for=""> Require Amount</label>
          <input type="number" v-model="amount" class="form-control" placeholder="Enter Amount" >
       
          </div>
          <div class="d-flex justify-content-end">
         <div class="">
            <button class="btn btn-warning m-2" v-if="ispositionedit==false" @click="storeposition()"> Create </button>
          <button class="btn btn-warning m-2 " v-if="ispositionedit==true" @click="updateposition()"> Update </button>
          <button class="btn btn-danger m-2" v-if="ispositionedit==true" @click="docancleposition()"> Cancle</button>
       
          </div>
         </div>
        </div>
     
        <table class="table table-border">
          <thead>
            <tr>
              <th> No </th>
              <th> Position </th>
              <th> Amount </th>
              <th> Action </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(pl,index) in positionlist">
              <td>{{++index}}</td>
              <td>{{pl.position}}</td>
              <td>{{pl.amount}}</td>
              <td>
                 <button class="btn btn-warning" @click="ispositionedit=true;positionedit(pl);">Update</button>
                  <button class="btn btn-danger" @click="DeletePosition(pl.id)"> Delete </button>
                </td>
            </tr>
          </tbody>
        </table>
        
      </div>
    </div>
   
   
 
    
  </div>
  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">...</div>
 </div>


  

<!-- Modal -->

        
    </div>
</template>

<script>
    import axios from 'axios';
    import $ from 'jquery';
    import { DeviceUUID } from 'device-uuid';
export default {
    data () {
        

        return {
            cv:'#CV',
            idcv:'CV',
            link:"http://smkbackend.kwintechnologykw11.com",
        
            dat:'',
            data2:null,
            file:'',
            userID:'',
            localtoken:'',
            deviceID:'',
            position:'',
            amount:'',
            positionlist:null,
            sPositionID:'',
            ispositionedit:false


        }
    },
    methods: {
      docancleposition:function()
      {
        this.ispositionedit=false
        this.amount=''
        this.position=''
        this.sPositionID=''

      },
      positionedit:function(dl)
      {
        this.sPositionID=dl.id
        this.position=dl.position
        this.amount=dl.amount
      },
      storeposition:function()
      {
          let formdata={
            'position':this.position,
            'amount':this.amount
          }
  axios.post(this.link+"/api/storeposition",formdata)
    .then(response =>{
      this.docancleposition();
      this.showposition();
      Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Success',
  customClass:'sweetalertsuccess',
  showConfirmButton: false,
  timer: 1500
})
    
    })
    .catch(error => {
      this.errorMessage = error.message;
      console.error("There was an error!", error);
       })
      },
      showposition:function()
      {
       
  axios.post(this.link+"/api/showposition")
    .then(response =>{
        this.positionlist=response.data;

    })
    .catch(error => {
      this.errorMessage = error.message;
      console.error("There was an error!", error);
       })
      },
      updateposition:function()
      {
        

        let formdata={
            'position':this.position,
            'amount':this.amount
          }
  axios.post(this.link+"/api/updateposition/"+this.sPositionID,formdata)
    .then(response =>{
      this.docancleposition();
      this.showposition();
      this.ispositionedit=false;
    })
    .catch(error => {
      this.errorMessage = error.message;
      console.error("There was an error!", error);
       })
      },
      DeletePosition:function(id)
      {
     
  axios.post(this.link+"/api/deleteposition/"+id)
    .then(response =>{
      this.showposition();
      Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Success',
  customClass:'sweetalertsuccess',
  showConfirmButton: false,
  timer: 1500
})
    

    })
    .catch(error => {
      this.errorMessage = error.message;
      console.error("There was an error!", error);
       })
      },
        showcv(cvname){
         
            
            let article = 
          { 
            cvname:cvname ,
       

    

            };
            
  axios.post(this.link+"/api/eachcv/"+cvname)
    .then(response =>{
        this.file=response.data.file;
        console.log(this.file);
    })
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
        delete1(id){
         
            
      
         
         axios.delete(this.link+"/api/career/"+id)
          .then(response =>{
            
          })
          .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
             })
             this.show();
             this.show();
             this.show();
             this.show();
             this.show();
              },
        show(){
    
    axios.get(this.link+"/api/career")
       .then(response => {
               this.data2 = response.data;
               this.dat=this.data2.file;
                       console.log(this.data2);
            
       })
       .catch(error => {
         this.errorMessage = error.message;
         console.error("There was an error!", error);});
           },
    },
    mounted () {
      this.showposition();
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
     
        
        this.show();
       


    },
}
</script>

<style lang="scss" scoped>

</style>