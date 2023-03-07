<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-sm-5">
                    
                </div>



            </div>

<nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Management</button>
    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Teaching</button>
    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Part-Time</button>
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
   
    <div v-for="dat in data2"  >


    
<div class="row m-3 border" v-if="dat.type=='1'" style="padding:50px;" :id=teach+dat.id  >
    <div class="col-md-4">
        <div style="width:100%;">
             <img :src=dat.teacherimage alt="" style="width:200px; height: 300px;">
        <h3> {{dat.position}}</h3>
        <h3> {{dat.name}}  </h3>
        <h3> {{dat.studied}}</h3>
        </div>
       
        
    </div>

    <div class="col-md-8">
        <div id='desc' style="height:600px; overflow:scroll;">
            <p id="" style="white-space:pre-line;text-align: left;" >
   {{dat.biography}}
         </p>

         <p id="" style="white-space:pre-line; text-align: left;" >
   {{dat.about}}
         </p>
        </div>
        
    </div>
        




    </div>
            
    </div>

         <!-- <div class="row m-3 border" style="padding:50px;">
            <div class="col-md-4">
                <div style="width:100%;">
                     <img src="./../assets/img/teacher/tr4.png" alt="" style="width:200px; height: 300px;">
                <h3> Principle </h3>
                <h3> ဒေါ်မြင့်မြင့်ဝင်း  </h3>
                <h3> B.Sc (Hons) Botany, B.Ed</h3>
                </div>
               
                
            </div>

            <div class="col-md-8">
                <div id='desc' style="height:600px; overflow:scroll;">
                    <p id="desc_val" style="white-space:pre-line;" >
                
                 ဆရာမကြီး ဒေါ်မြင့်မြင့်ဝင်း သည် အထက်တန်းပြဆရာမ အဖြစ် အထက ဆီဆိုင်တွင် ၁၉၈၃ မှ ၁၉၉၃ အထိ (၁၀ နှစ်) တာဝန်ထမ်းဆောင်ခဲ့ပြီး အ.ထ.က (၁) တောင်ကြီး တွင် ၁၉၉၃ မှ ၂၀၁၉ အထိ (၂၆ နှစ်) တာဝန်ထမ်းဆောင်ခဲ့ပါသည်။ ယခုလက်ရှိတွင် ရွှေမော်ကွန်းကိုယ်ပိုင်အလယ်တန်းကျောင်းတွင် ကျောင်းအုပ်ချုပ်ရေးတာဝန်ကို ထမ်းဆောင်လျှက်ရှိပါသည်။
တက်ရောက်ခဲ့သောသင်တန်းများ

-	 စိုက်ပျိုးရေးလုပ်ငန်း ဒီပလိုမာ (၁၉၇၈-၁၉၇၉)

-	လမ်းစဉ်လူငယ်ခေါင်းဆောင်သင်တန်း (အမှတ်စဉ် ၁၄) (၁၉၇၉)

-	အထက်တန်းပြဆရာများအတွက် အလုပ်ခွင် ရက်တိုသင်တန်း (၁၉၈၃)

-	ဆရာ/ဆရာမများအထူးမွမ်းမံသင်တန်း (အမှတ်စဉ် ၃၂) (၁၉၉၈)

-	ရိုးရာသစ်သီးအလှပုံဖော်သင်တန်း (၂၀၀၁)

                 </p>
                </div>
                
            </div>
                




            </div>


         <div class="row m-3 border" style="padding:50px;">
            <div class="col-md-4">
                <div style="width:100%;">
                     <img src="./../assets/img/teacher/tr1.png" alt="" style="width:200px; height: 300px;">
                <h3> Deputy Principle </h3>
                <h3> ဒေါ်ဝင်းစန္ဒာတင့်ရှိန်  </h3>
                <h3> B.Ed (1976-1980)</h3>
                </div>
               
                
            </div>

            <div class="col-md-8">
                <div id='desc' style="height:600px; overflow:scroll;">
                    <p id="desc_val" style="white-space:pre-line;" >
            ဆရာမကြီး ဒေါ်ဝင်းစန္ဒာတင့်ရှိန် သည် အထက်တန်းပြဆရာမ အဖြစ် အထက(၃)တောင်ကြီးတွင် ၁၉၈၁ မှ ၁၉၉၆ အထိ (၁၅ နှစ်) တာဝန်ထမ်းဆောင်ခဲ့ပြီး လက်ထောက်ကထိက အဖြစ် တောင်ကြီး ပညာရေးကောလိပ်တွင် ၁၉၉၆ မှ ၂၀၀၆ အထိ (၁၀ နှစ်) တာဝန်ထမ်းဆောင်ခဲ့ပါသည်။ ထို့အပြင် တောင်ကြီး ပညာရေးကောလိပ်တွင် လက်ထောက်မော်ကွန်းထိန်း အဖြစ် ၂၀၀၆ မှ ၂၀၁  ၃ ခုနှစ် အထိ (၇ နှစ်) တာဝန်ထမ်းဆောင်ခဲ့ပါသည်။ ထို့နောက် ပန်းပျိုးခင်းကိုယ်ပိုင်ကျောင်း၊တောင်ကြီးတွင် ကျောင်းအုပ်ရာထူးဖြင့် ၂၀၁၄ မှ ၂၀၂၀ အထိ (၆နှစ်) တာဝန်ထမ်းဆောင်ခဲ့ပါသည်။ 
တက်ရောက်ခဲ့သောသင်တန်းများ
-	 ကလေးဗဟိုပြုချဉ်းကပ်နည်းသင်တန်း (၂၀၀၆)
-	ကျောင်းအခြေပြုလုပ်ငန်းခွင်တွင်း ဆရာအတတ်ပညာရေးအစီအစဉ် (၂၀၁၁)
-	ပြည်သူ့ရေးရာ ဝန်ထမ်းလောင်းသင်တန်း ဇေယျ ၇၀ (ဖောင်းကြီး ၁၉၈၄)
-	အခြေခံပညာ ဆရာ၊ဆရာမများ အထူးမွမ်းမံသင်တန်း အမှတ်စဉ် ၁၁ (ဖောင်ကြီး ၁၉၉၄)
-	ဘာသာရပ်ဆိုင်ရာ မွမ်းမံသင်တန်းများ (၁၉၈၃-၁၉၈၅-၁၉၈၆)
ရွှေမော်ကွန်းကိုယ်ပိုင်အလယ်တန်းကျောင်း ၌ လက်ရှိတာဝန်ယူထားမှုများ။
-	စည်းကမ်းထိန်းသိမ်းရေး။
-	ဆရာ/ဆရာမ များ ပညာရေးဝန်ကြီးဌာနမှ ပြဌာန်းထားသော သင်ရိုးကို သင်ရိုးအတိုင်း သင်ကြားမှုရှိမရှိ ကြီးကြပ်ပေးခြင်း။
-	ဆရာ/ ဆရာမ များ၏ သင်ကြားမှုပုံစံများကို ကြီးကြပ်ပေးခြင်း။

                 </p>
                </div>
                
            </div>
                




            </div> -->


</div>
  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">

    <div v-for="dat in data2" >


<div class="row m-3 border" v-if="dat.type=='2'" style="padding:50px;">
    <div class="col-md-4">
        <div style="width:100%;">
             <img :src=dat.teacherimage alt="" style="width:200px; height: 300px;">
        <h3> {{dat.position}}</h3>
        <h3> {{dat.name}}  </h3>
        <h3> {{dat.studied}}</h3>
        </div>
       
        
    </div>

    <div class="col-md-8">
        <div id='desc' style="height:600px; overflow:scroll;">
            <p id="" style="white-space:pre-line; text-align: left;" >
   {{dat.biography}}
         </p>

         <p id="" style="white-space:pre-line; text-align: left;" >
   {{dat.about}}
         </p>
        </div>
        
    </div>
        




    </div>
    
</div>
       <!-- <div class="row m-3 border" style="padding:50px;">
            <div class="col-md-4">
                <div style="width:100%;">
                     <img src="./../assets/img/teacher/tr2.png" alt="" style="width:200px; height: 300px;">
                <h3> Head Teacher </h3>
                <h3> Daw Nang Thet Nwe Oo </h3>
                <h3> B.A (English)</h3>
                </div>
               
                
            </div>

            <div class="col-md-8">
                <div id='desc' style="height:600px; overflow:scroll;">
                    <p id="desc_val" style="white-space:pre-line;" >
           Since she was younger, speaking English has really influenced her. In order to acquire a foundational understanding of the English language after high school, she took Basic and Pre-Intermediate English courses at St. Aloysius Gonzaga Language Institute. She continued her education at Taunggyi University, where she earned a Bachelor of Arts in English. In addition, she was awarded an Access Micro Scholarship Program to study English under the management of U.S. Embassy in Rangoon. She was motivated to become a teacher by all of her instructors. She enjoys instructing young students and equip the 21st century skills to students. She has been in the private education industry for more than ten years.



                 </p>
                </div>
                
            </div>
                




            </div> -->
            


  </div>
  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">


    <div v-for="dat in data2" >



      <div class="row m-3 border" v-if="dat.type=='3'" style="padding:50px;">
    <div class="col-md-4">
        <div style="width:100%;">
             <img :src=dat.teacherimage alt="" style="width:200px; height: 300px;">
        <h3> {{dat.position}}</h3>
        <h3> {{dat.name}}  </h3>
        <h3> {{dat.studied}}</h3>
        </div>
       
        
    </div>

    <div class="col-md-8">
        <div id='desc' style="height:600px; overflow:scroll;">
            <p id="" style="white-space:pre-line; text-align: left;" >
   {{dat.biography}}
         </p>

         <p id="" style="white-space:pre-line; text-align: left;" >
   {{dat.about}}
         </p>
        </div>
        
    </div>
        




    </div>
    
</div>

         <!-- <div class="row m-3 border" style="padding:50px;">
            <div class="col-md-4">
                <div style="width:100%;">
                     <img src="./../assets/img/teacher/tr3.png" alt="" style="width:200px; height: 300px;">
                <h3> Consultant </h3>
                <h3> Dr. Zeya Oo </h3>
                <h3> Ph.D (Adv. Mate)(Curtin, Australia)</h3>
                </div>
               
                
            </div>

            <div class="col-md-8">
                <div id='desc' style="height:600px; overflow:scroll;">
                    <p id="desc_val" style="white-space:pre-line;" >
          Dr. Zeya Oo has been a consultant for training in Techniques of Teaching for Engineering Materials, Engineering Physics, Engineering Mechanics, Research Design, Research Methodology and Paper Publication for the Staff Development to all Teaching staff from Technological Universities, Yangon, Mandalay, Sittwe, Kyauksai, Meiktila, Hmawbi, Pathein, Taungnoo, Hinthada, Phyi, Myikyina, Taungyi, and Yameethin, since 2016.
From 2016-2018, Dr. Zeya was served as a Visiting Professor, Department of Engineering Physics, Yangon Technological University (YTU), especially my responsibility was to produce the International Research Skills Standard for the teaching Staff by using Research Clusters and transdisciplinary research interested members.
Before that, he served for 20 years in Curtin University as a Senior Lecturer and Associate Professor, Department of Electrical and Computing Engineering, School of Engineering and Science, in Malaysia (Offshore campus of Curtin University Australia) from 1996 to 2016.


                 </p>
                </div>
                
            </div>
                




            </div> -->
            

    
  </div>
</div>
                 

        </div>
    </div>
</template>

<script>
import axios from 'axios';
import $ from 'jquery';
export default {
    data () {
        

        return {
             data:``
                 ,
            description:[],
            link:"http://smkbackend.kwintechnologykw11.com",
          data2:null,
          teach:'teacher',
        }
    },
    methods: {
          show(){
    
 axios.get(this.link+"/api/teacher")
    .then(response => {
            this.data2 = response.data;
            
    })
    .catch(error => {
      this.errorMessage = error.message;
      console.error("There was an error!", error);});
        },
    },
    mounted() {
         var des=this.data;
         var arrdes=   des.split(" ");

         for(let a=0;a<arrdes.length;a+=30)
         {

           this.description.push(arrdes.slice(30, a).join(" "));
            

         }
             console.log(this.description);
        $( "#clickme" ).click(function() {
  $( "#desc" ).slideToggle( "slow", function() {
    // Animation complete.
  });
});

  // setInterval(this.show, 1000);
this.show();
    },
}
</script>

<style lang="scss" scoped>

</style>