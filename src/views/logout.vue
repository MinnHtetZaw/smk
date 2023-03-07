<template>
    <div>

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
        }
    },
    methods: {
        logout()
     {
             
        let article = 
          { 
          
          userID:this.userID,
          localtoken:this.localtoken ,
          deviceID:this.deviceID,

            };
            
  axios.post(this.link+"/api/logout", article)
    .then(response =>{
        alert(response.data.state);
        if(response.data.state=="logout")
        {

            localStorage.removeItem("deviceID");
        localStorage.removeItem("token");
        localStorage.removeItem("userID");
        window.location.assign("/login");
       
        }
      

    }

    )
    .catch(error => {
      this.errorMessage = error.message;
      console.error("There was an error!", error);
       })
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
        this.logout();
    },
}
</script>

<style lang="scss" scoped>

</style>