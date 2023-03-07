<template>
    <div>
        <div class="login-page bg-light">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 offset-lg-1">
                  <!-- <h3 class="mb-3">Login Now</h3> -->
                    <div class="bg-white shadow rounded">
                        <div class="row">
                            <div class="col-md-7 pe-0">
                                <div class="form-left h-100 py-5 px-5">
                                    <!-- <form action="" class="row g-4"> -->
                                            <div class="col-12">
                                                <label>Username<span class="text-danger">*</span></label>
                                                <div class="input-group">
                                                    <div class="input-group-text"><i class="bi bi-person-fill"></i></div>
                                                    <input type="username" id="username" v-model="username" required class="form-control" placeholder="Enter Username">
                                                </div>
                                            </div>

                                            <div class="col-12">
                                                <label>Password<span class="text-danger">*</span></label>
                                                <div class="input-group">
                                                    <div class="input-group-text"><i class="bi bi-lock-fill"></i></div>
                                                    <input type="password" id="password" v-model="password" required class="form-control" placeholder="Enter Password">
                                                </div>
                                            </div>

                                            <div class="col-sm-6">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="inlineFormCheck">
                                                    <label class="form-check-label" for="inlineFormCheck">Remember me</label>
                                                </div>
                                            </div>

                                            <div class="col-sm-6">
                                                <a href="#" class="float-end text-primary">Forgot Password?</a>
                                            </div>

                                            <div class="col-12">
                                                <!-- <button type="submit" class="btn btn-primary px-4 float-end mt-4">login</button> -->
                                               <button class="btn btn-primary" type="submit" @click=login()>Login</button>
                                            </div>
                                    <!-- </form> -->
                                </div>
                            </div>
                            <div class="col-md-5 ps-0 d-none d-md-block">
                                <div class="form-right h-100  text-white text-center " style="background-color:#F3cd5d;">
                                    <img class='navlogo text-center' src="../assets/img/logo.png" alt="" style="margin-top:60px;object-fit: contain;">
                                    <p style="font-size:20px;">Shwe Maw Kun Private-School</p>
                                    <p class="" style="font-size:18px;">Content Management System</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <p class="text-end text-secondary mt-3">Bootstrap 5 Login Page Design</p> -->
                </div>
            </div>
        </div>
    </div>

    </div>
</template>

<script>
import { DeviceUUID } from 'device-uuid';
 import axios from 'axios';
export default {
    data () {
        

        return {
            link:'http://smkbackend.kwintechnologykw11.com',
            userID:'',
            localtoken:'',
            deviceID:'',
            username:'',
            password:'',
        
        }
    },
    mounted() {
        
        
      
        if(!localStorage.getItem("deviceID"))
        {
                  this.deviceID = new DeviceUUID().get();
        }
        else
        {
            this.deviceID = new DeviceUUID().get();
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
     
        
        
      
    },
    methods: {
     login()
     {
             
        let article = 
          { 
          
          username:this.username ,
          password:this.password ,
          localtoken:this.localtoken ,
          deviceID:this.deviceID,
          userID:this.userID,

            };
            
  axios.post(this.link+"/api/login", article)
    .then(response =>{
        if(response.data.state=="failed")
        {
            alert('login Failed');
        }
        else if(response.data.state=="success")
        {
           
           

            localStorage.setItem("token",response.data.Token);
            localStorage.setItem("deviceID", response.data.deviceID);
            localStorage.setItem("userID", response.data.userid);
            if(response.data.anotherDevice=='true')
            {
                
                let text = "Do You Want to logout from another device!!.";
                if (confirm(text) == true) {
                    
                    this.logoutanother();
                } else {
                  
                }
          
          
            }
            else if(response.data.anotherDevice=='false')
            {
          
            
            }
            window.location.assign("/Admin/waitinglistview")
        }
        else if(response.data.state=="alreadylogin")
        {   
         
          
            localStorage.setItem("token",response.data.Token);
            localStorage.setItem("deviceID", response.data.deviceID);
            localStorage.setItem("userID", response.data.userid);
            if(response.data.anotherDevice=='true')
            {
          
                let text = "Do You Want to logout from another device!!";
                if (confirm(text) == true) {
                    alert( localStorage.getItem("userID"));
                    this.logoutanother();
                } else {
                  
                }
            }
            else if(response.data.anotherDevice=='false')
            {
         
          
            }
            window.location.assign("/Admin/waitinglistview")
        }

    }

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
         
        }
        else if(response.data.state=="success")
        {
            localStorage.setItem("token",response.data.Token);
            localStorage.setItem("deviceID", response.data.deviceID);
            localStorage.setItem("userID", response.data.userid);
           
            window.location.assign("/Admin/waitinglistview")
        }

    }

    )
    .catch(error => {
      this.errorMessage = error.message;
      console.error("There was an error!", error);
       })
     },
     logoutanother()
     {
        
             
        let article = 
          { 
          
          userID:localStorage.getItem("userID"),
          localtoken:localStorage.getItem("token"),
          deviceID:localStorage.getItem("deviceID"),

            };
           
         
            
  axios.post(this.link+"/api/logoutanother", article)
    .then(response =>{
        if(response.data.state=="deleted")
        {
         
        }
  

    }

    )
    .catch(error => {
      this.errorMessage = error.message;
      console.error("There was an error!", error);
       })
     },
    },
    
}
</script>

<style lang="scss" scoped>
       a {
    text-decoration: none;
}
.login-page {
    width: 100%;
    height: 100vh;
    display: inline-block;
    display: flex;
    align-items: center;
}
.form-right i {
    font-size: 100px;
}
</style>
