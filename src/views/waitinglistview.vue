<template>
    <div  style="background-color:rgb(244, 234, 223)" class="p-3">
        <div class="container p-5 m-5">
                <h1 class="mb-5">Waiting List</h1>
            <table class="table table-bordered table-hover"> 
                <thead>
                    <tr>
                        <th> No </th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Date of Birth</th>
                    <th>Course</th>
                    <th>Action</th>
                    </tr>
               
                    
                </thead>
                <tbody>
                    <tr v-for="(dat2,index) in data2">
                        <td>{{++index}}</td>
                        <td>{{dat2.studentname}}</td>
                        <td>{{dat2.gender}}</td>
                        <td>{{dat2.dateofbirth}}</td>
                        <td>{{dat2.course}}</td>
                        <td>
                            <button v-on:click="delete1(dat2.id)"  class="btn btn-danger" >Delete</button>
                            <router-link   :to="{ name: 'waitinglistdetail', params: { wid: dat2.id }}" class="btn btn-warning ">View</router-link>
                        
                        
                        
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
          
    </div>
</template>

<script>
    import axios from 'axios';
    import { DeviceUUID } from 'device-uuid';
    import $ from 'jquery';
export default {
    data () {
        

        return {
            userID:'',
            localtoken:'',
            deviceID:'',
            link:'http://smkbackend.kwintechnologykw11.com',
            data2:null,
          
        }
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
        delete1(id){

       
   

axios.post(this.link+"/api/deleteWaitlist/"+id)
  .then(response =>console.log(response)).then(
      
     
  
       





  )
  .catch(error => {
    this.errorMessage = error.message;
    console.error("There was an error!", error);
     })
     this.show();

},
        show(){
    
    axios.get(this.link+"/api/waitinglist")
       .then(response => {
               this.data2 = response.data;
               
       })
       .catch(error => {
         this.errorMessage = error.message;
         console.error("There was an error!", error);});
           },
    },
    mounted() {


      
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