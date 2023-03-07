<template>
    <div>
        <div class="container">
            

            <div class="row d-flex justify-content-center">
                <div class="col-12 px-5 pt-4">
                    <h1 class="text-start" style="color:goldenrod"><b> FOR CONTACT US </b> </h1>
            <h5 class="text-start" style="color:purple">SOCIAL MEDIA</h5>
                    <img src="./../assets/img/contact_top.png" style="width:100%;" alt="">
                </div>

                <div class="col-12">
                   <div class="row">
                    <div class="col-4 p-2 px-5">
                        <div class="about_contact" style="    border: 1px #0071bb;
     border-style: solid;
     border-radius: 20px;">
                            <img src="../assets/img/facebook.png" alt="" style="height:50px;">
                            <h5 v-if="font_type == 1" class="ms-4 align-self-center">SHWE MAW KUN</h5>
                            <h5 v-if="font_type == 2" class="ms-4 align-self-center">ရွှေမော်ကွန်း</h5>
                        </div>
                    </div>
                    
                    <div class="col-4 p-2 px-5">
                        <div class="about_contact" style="    border: 1px #c12063;
     border-style: solid;
     border-radius: 20px;">
                            <img src="../assets/img/insta.png" alt="" style="height:50px;">
                            <h5 v-if="font_type == 1" class="ms-4 align-self-center">SHWE MAW KUN</h5>
                          <h5 v-if="font_type == 2" class="ms-4 align-self-center">ရွှေမော်ကွန်း</h5>

                        </div>
                    </div>

                    <div class="col-4 p-2 px-5">
                        <div class="about_contact" style="    border: 1px #fe0000;
     border-style: solid;
     border-radius: 20px;">
                            <img src="../assets/img/youtube.png" alt="" style="height:50px;">
                            <h5 v-if="font_type == 1" class="ms-4 align-self-center">SHWE MAW KUN</h5>
                          <h5 v-if="font_type == 2" class="ms-4 align-self-center">ရွှေမော်ကွန်း</h5>

                        </div>
                    </div>

                    <div class="col-4 p-2 px-5">
                        <div class="about_contact" style="    border: 1px #3ab8ff;
     border-style: solid;
     border-radius: 20px;">
                            <img src="../assets/img/teleg.png" alt="" style="height:50px;">
                            <h5 v-if="font_type == 1" class="ms-4 align-self-center">SHWE MAW KUN</h5>
                          <h5 v-if="font_type == 2" class="ms-4 align-self-center">ရွှေမော်ကွန်း</h5>

                        </div>
                    </div>

                    <div class="col-4 p-2 px-5">
                        <div class="about_contact" style="    border: 1px #7f2c96;
     border-style: solid;
     border-radius: 20px;">
                            <img src="../assets/img/viber.png" alt="" style="height:50px;">
                            <h5 v-if="font_type == 1" class="ms-4 align-self-center">SHWE MAW KUN</h5>
                          <h5 v-if="font_type == 2" class="ms-4 align-self-center">ရွှေမော်ကွန်း</h5>

                        </div>
                    </div>

                    <div class="col-4 p-2 px-5">
                        <div class="about_contact" style="    border: 1px #ff7d00;
     border-style: solid;
     border-radius: 20px;">
                            <img src="../assets/img/linkin.png" alt="" style="height:50px;">
                            <h5 v-if="font_type == 1" class="ms-4 align-self-center">SHWE MAW KUN</h5>
                          <h5 v-if="font_type == 2" class="ms-4 align-self-center">ရွှေမော်ကွန်း</h5>

                        </div>
                    </div>
                    

                   </div>
                </div>


            </div>






            <nav>
  <!-- <div class="nav nav-tabs d-flex justify-content-center" id="nav-tab" role="tablist">
    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-Content" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Content</button>
    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-Map" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Map</button>
 </div> -->
</nav>

<div class="row d-flex justify-content-center ">
                <div class="col-6">
                    <div class="container">
                        <h1 v-if="font_type == 1" class="text-start" style="color:goldenrod"><b>ENQUIRE NOW</b></h1>
                        <h3 v-if="font_type == 2" class="text-start mb-3" style="color:goldenrod"><b>ကျောင်းကိစ္စ စုံစမ်းရန်</b></h3>

                        <input type="text" v-model="name" required class="contact_us_input form-control"  name="name" id="name" :placeholder="font_type == 1 ? 'Name': 'အမည်'">
                        <input type="text" class="contact_us_input form-control"  required v-model="phone" name="phone" id="phone" :placeholder="font_type == 1 ? 'Mobile': 'ဖုန်းနံပတ်'">
                        <input type="text"  class="contact_us_input form-control"  required name="email" v-model="email" id="email" :placeholder="font_type == 1 ? 'Email': 'အီးမေးလိပ်စာ'">
                        <input type="text" v-model="subject" required  class="contact_us_input form-control" name="subject" id="subject" :placeholder="font_type == 1 ? 'Subject': 'အကြောင်းအရာ'" >
                        <textarea name="content" class="contact_us_input form-control"  required  id="content" v-model="content" cols="30" rows="10" :placeholder="font_type == 1 ? 'Message': 'မှတ်ချက်'"></textarea>
                  



<!--                         
                        <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Name</label>
                    <div class="col-sm-10">
                    <input type="text" v-model="name" required class="form-control" name="name" id="name" >
                    </div>
                     </div>

                     <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Phone</label>
                    <div class="col-sm-10">
                    <input type="text" class="form-control"  required v-model="phone" name="phone" id="phone">
                    </div>
                     </div>

                     <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                    <input type="text"  class="form-control"  required name="email" v-model="email" id="email">
                    </div>
                     </div>

                     <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Subject</label>
                    <div class="col-sm-10">
                    <input type="text" v-model="subject" required  class="form-control" name="subject" id="subject" >
                    </div>
                     </div>


                <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">What can we help ?</label>
                    <div class="col-sm-10">
                    <textarea name="content" class="form-control"  required  id="content" v-model="content" cols="30" rows="10"></textarea>
                    </div>
                </div> -->
                <button class="btn btn-warning" @click="sendMail"><div v-if="isloading==true" class="spinner-border" role="status">

</div> <span v-if="isloading==false" > SUBMIT </span>  </button>

  

                    </div>
                </div>
                <div class="col-6">
                    <div v-if="font_type == 1" class="bg-warning p-5 text-start">
                        <h3><b>TELEPHONE</b></h3>
                       <h5>09-252 447066</h5>
                       <h5>

                    09- 428377766
                       </h5>
                        <br>
                        <br>
                        <h3><b>EMAIL</b></h3>
                        <h5>
                            shwemawkun@gmail.com
                        </h5>
                        <br><br>
                        <h3><b>OPERATIONAL HOURS</b></h3>
                        <h5>Monday - Friday: 9am to 4pm</h5>
                        <br><br>

                        <h3><b>SCHOOL ADDRESS</b></h3>
                        <p>
                            No. 20/10,Shwe Chi Street, (Corner of Yae Htwet Oo Street), Yae Aye Kwin Quarter, Taunggyi, Shan State, Myanmar
                        </p>
                    </div>
                  <div v-if="font_type == 2" class="bg-warning p-5 text-start">
                        <h4><b>ဖုန်းနံပတ်</b></h4>
                       <p> ၀၉-၂၅၂၄၄၇၀၆၆</p>
                       <p>၀၉-၄၂၈၃၇၇၇၆၆</p>
                        <br>
                        <br>
                        <h3><b>EMAIL</b></h3>
                        <h5>
                            shwemawkun@gmail.com
                        </h5>
                        <br><br>
                        <h4><b>ရုံးဖွင့်ချိန်</b></h4>
                        <p>တနင်္လာနေ့ မှ သောကြာနေ့ ထိ:(နံနက် ၉ နာရီမှ ညနေ ၄နာရီထိ)</p>
                        <br><br>

                        <h4><b>ကျောင်းလိပ်စာ</b></h4>
                        <p>
                          အမှတ်(၂၀/၁၀)၊ရွှေချည်လမ်း နှင့် ရေထွက်ဦး လမ်းထောင့်၊ ရေအေးကွင်းရပ်၊ တောင်ကြီးမြို့။
                        </p>
                    </div>
                </div>

            </div>

            <h1 class="text-start mt-4 mb-4" style="color:purple"> <b>{{font_type == 1 ? 'OUR ENLARGE MAP': 'အချက်အလက်ပြဇယား'}}  </b>  </h1>
            <div class="row d-flex justify-content-center gx-0">
                <div class="col py-5 px-4  border  shadow-lg   d-flex justify-content-center " style=" background-color: purple;color:white;  min-width:400px;max-width: 500px;height: 750px;">
                    <div class="    "  style=" padding:50px;  text-align: left; ">
                      <h3> {{ font_type == 1 ? 'FIND US IN' : 'တည်နေရာ'}}</h3>


                        <p>
                          {{ font_type == 1 ? 'Taunggyi, Southern Shan State,Myanmar' : 'မြန်မာနိုင်ငံ၏ ရှမ်းပြည်နယ်တောင်ပိုင်း ၊ တောင်ကြီးမြို့။ '}}

                        </p>
                        <br>

                        <h3>  {{ font_type == 1 ? 'OPERATIONAL HOURS' : 'ရုံးဖွင့်ချိန်'}}</h3>
                        <p>{{ font_type == 1 ? '9:00am-4:00pm' : 'နံနက် ၉ နာရီမှ ညနေ ၄နာရီထိ'}}  </p>
                        <br>
                        <h3> {{ font_type == 1 ? 'OUR LOCATION' : 'ကျောင်းတည်နေရာများ'}} </h3>
                        <br>
                        <p>
                        <b>{{ font_type == 1 ? 'Pre-school' : 'ရွှေမော်ကွန်းအဆင့်မြင့်မူလတန်းကြိုကျောင်း'}}</b>
                          {{ font_type == 1 ? ' No. 35/9, Ngwe Kyal Phyu Street,Yae Aye Kwin Ward, Taunggyi' : 'အမှတ်(၃၅/၉)၊ငွေကြယ်ဖြူလမ်း၊ ရေအေးကွင်းရပ်၊ တောင်ကြီးမြို့။'}}
                        </p>
                        <br>
                        <p>
                            <b> {{ font_type == 1 ? 'Primary school' : 'ရွှေမော်ကွန်း ကိုယ်ပိုင်မူလတန်းကျောင်း'}}</b>
                          {{ font_type == 1 ? ' No. 20/10 Shwe Chi Street (Corner of Ye Htwet Oo Street), Yae Aye Kwin Ward,Taung-gyi' : ' အမှတ်(၂၀/၁၀)၊ရွှေချည်လမ်း နှင့် ရေထွက်ဦး လမ်းထောင့်၊ ရေအေးကွင်းရပ်၊ တောင်ကြီးမြို့။'}}


                        </p>
                        <br>
                        <p>
                            <b>{{ font_type == 1 ? 'Secondary school' : 'ရွှေမော်ကွန်း ကိုယ်ပိုင်အလယ်တန်းကျောင်း'}}  </b>
                          {{ font_type == 1 ? ' No.65/10, Nay Chi Street, Yae Aye Kwin Ward, Taunggyi' : ' အမှတ်(၆၅/၁၀)၊နေခြည်လမ်း၊ ရေအေးကွင်းရပ်၊ တောင်ကြီးမြို့။'}}
                        </p>
                    </div>




                </div>

                <div class="col  border  shadow-lg  bg-body" style="min-width:400px;min-height: 700px;">
                    <!-- <form action=""> -->



                        <div style="width:100%;height: 750px;">
        <iframe style="width:100%;height:100%"
     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3730.0544492201007!2d97.04303304987813!3d20.78908498606058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ce864c0e6a5fc3%3A0xb4563bd2d1fdb904!2sShwe%20Maw%20Kun%20Private%20School%2F%20Maw%20Kun%20International%20Education%20Group!5e0!3m2!1sen!2smm!4v1669694121304!5m2!1sen!2smm" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
 
    </div>



                        <div class="tab-content" id="nav-tabContent">    
                        <div class="tab-pane fade show active" id="nav-Content" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                    

                        </div>
  <div class="tab-pane fade  " id="nav-Map" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
  
    </div>
                        </div>
                 
                    <!-- </form> -->
       
                </div>


            </div>


       

        </div>
    </div>
</template>

<script>
    import axios from 'axios';
export default {
    data () {
        

        return {
          font_type: localStorage.getItem('font_type'),
            link:'http://smkbackend.kwintechnologykw11.com',
            name:'',
            email:'',
            address:'',
            phone:'',
            subject:'',
            content:'',
            isloading:false,



        }
    },
    methods: {
        sendMail(){
            
            if(this.name=='' )
            {
            return document.getElementById('name').focus();
            }
            else if(this.email=='' )
            {
                return document.getElementById('email').focus();
            }
            else if(this.phone=='' )
            {
                return document.getElementById('phone').focus();
            }
            else if(this.subject=='' )
            {
                return document.getElementById('subject').focus();
            }
            else if(this.content=='' )
            {
                return document.getElementById('content').focus();
            }
      
            this.isloading=true;
            let article = 
          { 
          Name:this.name ,
          Email:this.email ,
          Address:this.address ,
          Phone:this.phone,
          Subject:this.subject,
          Content:this.content ,
       

    

            };
            
  axios.post(this.link+"/api/sendmail", article)
    .then(response =>{console.log(response),
        this.isloading==false;
        Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Success',
  customClass:'sweetalertsuccess',
  showConfirmButton: false,
  timer: 1500
})
window.location.assign('');   
    })
    .catch(error => {
      this.errorMessage = error.message;
      console.error("There was an error!", error);
       })
       
  
},
        
    },
    mounted() {
        
    },

    
}
</script>

<style lang="scss" scoped >
.about_contact{

     overflow: hidden;
     display: flex;
}
.contact_us_input
{
    border:1px black;
    border-style: solid;
    border-radius: 0px;
    margin-bottom: 30px;
}
</style>