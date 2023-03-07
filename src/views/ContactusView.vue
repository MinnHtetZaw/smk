<template>
    <div  style="background-color:rgb(244, 234, 223)" class="p-3">
        <div class="row d-flex justify-content-center gx-0 mb-5 mt-5 pb-5 pt-2">
            <div class="col-md-10 ">
                <div class="container m-4">
                    <h1> <span style="">Contact Us </span>  List</h1>
                    <table class="table table-bordered rounded table-hover">
                        <thead>
                            <tr>
                                <th>No</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Subject</th>
                            <th>Content</th>
                            <th>Action</th>
                            </tr>
                        
                        </thead>
                        <tbody>
                            <tr v-for="(dat2,index) in data2">
                                <td>{{++index}} </td>
                                <td> {{dat2.name}}</td>
                                <td> {{dat2.phone}}</td>
                                <td> {{dat2.email}}</td>
                                <td> {{dat2.subject}}</td>
                                <td>{{dat2.content}} </td>
                                <td>  <button v-on:click="delete1(dat2.id)"  class="btn btn-danger" >Delete</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import { DeviceUUID } from 'device-uuid';
export default {
    data () {
        
        return {
            data2:null,
            link:"http://smkbackend.kwintechnologykw11.com",
            userID:'',
            localtoken:'',
            deviceID:'',
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

       
   

axios.post(this.link+"/api/deleteContactus/"+id)
  .then(response =>console.log(response)).then(
      
     
  
       





  )
  .catch(error => {
    this.errorMessage = error.message;
    console.error("There was an error!", error);
     })
     this.show();

},
        show(){
    
    axios.get(this.link+"/api/contact_us")
       .then(response => {
               this.data2 = response.data;
               
       })
       .catch(error => {
         this.errorMessage = error.message;
         console.error("There was an error!", error);});
           },
    },
    mounted () {

      
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