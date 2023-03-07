<template>
    <div>
        <div class="container">
            <!-- <form action="" > -->
                <form @submit.prevent="">
                <div class=" p-3 mt-4 ">
          
                    <h2 class="text-start mb-3" style="font-weight:650;font-size: 50px;color: goldenrod;">{{font_type == 1 ? 'CAREER' : 'အလုပ်အကိုင်'}}</h2>
       
                <div class="row d-flex justify-content-start">
                    <div class="col-sm-4"> 
                        <h4 class="text-start mb-5">{{font_type == 1 ? 'Current Vacancies' : 'လက်ရှိလစ်လပ်နေသောနေရာများ'}}</h4>
                            
                        <div class="row d-flex justify-content-center ">
       
       <div class="col-md-12 p-2 " style="border:1px;border-style:solid;height: 455px;">
        <table class="table table-borderless"> 
                            <thead>
                                <tr>
                                    <th class="text-center">Position</th>
<!--                                    <th class="text-center">Requirement</th>-->
                                </tr>
                            </thead>
                          <tbody>
                            <tr v-for="pl in positionlist">
                                <td class="text-center">{{pl.position}}</td> 
                      
<!--                                <td class="text-center">{{pl.amount}} person</td>-->
                          </tr>
                        </tbody>
                          </table>

        </div>
        </div>
               
                   
                    </div>
                    <div class="col-sm-8"> 
                        <h2 class="text-start mb-4"> {{font_type == 1 ? 'Your Information' : 'သင်၏အချက်အလက်'}}</h2>
                        <div class="row d-flex justify-content-center ">
       
       <div class="col-md-6 ">
           <div class="mb-3  ">
   <!-- <label for="exampleFormControlInput1" class="form-label">Your Name</label> -->
   <input type="text" class="form-control text_career" id="name" v-model="name" :placeholder="font_type == 1 ? ' Name' : 'အမည်'" requried>
   </div>
   <div class="mb-3">
   <!-- <label for="exampleFormControlTextarea1" class="form-label">Your Studied</label> -->
   <input type="text" class="form-control text_career" id="studied"  v-model="studied" :placeholder="font_type == 1 ? ' Qualification' : 'ပညာအရည်အချင်း'" >
   </div>
   <div class="mb-3">
   <!-- <label for="exampleFormControlTextarea1" class="form-label">Job Position</label> -->
   <input type="text" class="form-control text_career" id="position"  v-model="position" :placeholder="font_type == 1 ? 'Position Applying for' : 'လျောက်ထားလိုသည့်ရာထူး'" >
   </div>

       </div>
<div class="col-md-6">

 
       


   
 

   <div class="mb-3">
   <!-- <label for="exampleFormControlTextarea1" class="form-label">Phone</label> -->
   <input type="text" class="form-control text_career"  v-model="phone" id="phone" :placeholder="font_type == 1 ? 'Mobile Number ' : 'ဖုန်းနံပတ်'" requried>
   </div>

   <div class="mb-3">
   <!-- <label for="exampleFormControlTextarea1" class="form-label">Email</label> -->
   <input type="email" class="form-control text_career"  v-model="email" id="email" :placeholder="font_type == 1 ? 'Email' : 'အီးမေးလိပ်စာ'" requried>
   </div>



   <div class="mb-3">
   <!-- <label for="formFileMultiple" class="form-label">Your CV</label> -->
   <input class="form-control text_career" type="file"  id="formFileMultiple" @change="handlefile($event)" accept=".pdf" requried>
   </div>

</div>
</div>

<div class="row d-flex justify-content-center">
    <div class="col-md-12">
         
         <div class="mb-3">
            {{estatus}}
            <div style="text-align:left;margin:30px;padding:20px;width:100%;border:1px black;border-style: solid;" class="shadow ">
                <label for="exampleFormControlTextarea1" class="form-label">{{font_type == 1 ? 'What is your current employment status?' : 'ယခုလက်ရှိအလုပ်အကိုင်'}}</label>
       <div>
        <div class="form-check form-check-inline">
  <input class="form-check-input" v-model="estatus" value="None" type="radio" name="exampleRadios" id="exampleRadios1" >
  <label class="form-check-label" for="exampleRadios1">
   {{font_type == 1 ? ' None' : 'မရှိ'}}
  </label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input"  v-model="estatus" value="Student" type="radio" name="exampleRadios" id="exampleRadios1" >
  <label class="form-check-label" for="exampleRadios1">
     {{font_type == 1 ? 'Student' : 'ကျောင်းသား/သူ'}}
  </label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" v-model="estatus" value="Self-Employed" type="radio" name="exampleRadios" id="exampleRadios1" >
  <label class="form-check-label" for="exampleRadios1">
    {{font_type == 1 ? 'Self-Employed' : 'ကိုယ်ပိုင်အလုပ်'}}
  </label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input"  v-model="estatus" value="Employed" type="radio" name="exampleRadios" id="exampleRadios1" >
  <label class="form-check-label" for="exampleRadios1">
    {{font_type == 1 ? 'Employed' : 'ဝန်ထမ်း'}}
  </label>
</div>
       </div>
            
            </div>
       
        </div>
 
      </div>
<div class="col-md-12">
         
   <div class="mb-3">
   <!-- <label for="exampleFormControlTextarea1" class="form-label">Reason to Submit</label> -->
   <textarea class="form-control text_career2" v-model="about" style="resize: none;" id="about" rows="3" requried :placeholder="font_type == 1 ? 'Reason for Applying' : 'လျောက်ထားလိုသည့်အကြောင်းအရင်း'" ></textarea>
   </div>
   <div class="mb-3">
       <button class="btn btn-warning " type="submit" @click="submit()">
         <div class="spinner-border" role="status" v-if="isloading==true">
</div> {{font_type == 1 ? 'Submit ' : 'တင်သွင်းပါ'}} </button>
     </div>
</div>
</div>
                    </div>
                </div>  

  

  </div>
</form>
            <!-- </form> -->
  
      
        </div>
      
    </div>

   </template>

<script>
    import axios from 'axios';
    import $ from 'jquery';
export default {
    data () {
       

        return {
            estatus:'',
          font_type: localStorage.getItem('font_type'),
            link:'http://smkbackend.kwintechnologykw11.com',
            file:'',
            name:'',
            studied:'',
            position:'',
            phone:'',
            email:'',
            about:'',
            isloading:false,
            positionlist:null,
            estatus:'',


           
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            ,

        }
    },
    methods: {
        handlefile(event) {
            this.file = event.target.files[0];
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
        submit()
        {
                if (!this.name)
            {
                return $('#name').focus();
            }
            else if (!this.position)
            {
                return    $('#position').focus();
            }
            else if (!this.phone)
            {
                return $('#phone').focus();
            }
            else if (!this.email)
            {
                return $('#email').focus();
            }
            else if (!this.about)
            {
                return $('#about').focus();
            }


            
            else if (!this.file)
            {
                return $('#formFileMultiple').focus();
            }
this.isloading=true;
          
          let formdata={

                file:this.file,
                name:this.name,
                studied:this.studied,
                position:this.position,
                phone:this.phone,
                email:this.email,
                about:this.about,
                estatus:this.estatus,




                
            }
            axios.post( this.link+"/api/career",
            formdata,
                {
                    headers: {
                    'Content-Type': 'multipart/form-data'
                }
                }
              
            ).then(response =>{console.log(response)
                this.isloading=true;
                alert('Success');
       window.location.assign("")
    }
            )
    .catch(error => {
      this.errorMessage = error.message;
      console.error("There was an error!", error);
       })
   
        }
    },
    mounted () {
        this.showposition();
    },
}
</script>

<style lang="scss" scoped>
.text_career{
    border:1px black;
    border-style: solid;
    border-radius: 0px;
    margin: 30px;
}
.text_career2{
    border:1px black;
    border-style: solid;
    border-radius: 0px;
margin-left: 30px;
margin-right: 30px;
}
.text_career2:focus,.text_career2:hover{
   
}


</style>