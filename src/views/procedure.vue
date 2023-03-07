<template>
    <div>

      <nav class="navbar bg_purple ">
  <div class="container-fluid">
  
        <button class=" navbar-brand navbar-dark navbar-toggler "  data-bs-target="#sidebar" data-bs-toggle="collapse" >
      <span class="navbar-toggler-icon"></span>
    </button>

 
 
  </div>
</nav>

        <div class="container-fluid    " >
    <div class="row flex-wrap  " style="max-width:100vw;">
        <div class="col-auto px-0 ">
            <div id="sidebar" class="collapse collapse-horizontal show border-end ">
                <div id="sidebar-nav" class="list-group border-0 rounded-0 text-sm-start min-vh-100  ">
                 
                    <div class="d-flex justify-content-center  w-100  ">
                <div class="nav flex-column nav-pills w-100 " id="v-pills-tab" role="tablist" aria-orientation="vertical">
                  <router-link   :to="{ name: 'Pre', params: { userId: 3 }}" class="nav-link m-3">Pre-School </router-link>
                    <router-link   :to="{ name: 'newpri', params: { userId: 3 }}" class="nav-link m-3">Primary-School</router-link>
                    <router-link   :to="{ name: 'newsec', params: { userId: 3 }}" class="nav-link m-3">Secondary-School</router-link>

                    <router-link   :to="{ name: 'Procedure', params: { userId: 3 }}" class="nav-link m-3 active">Academic Procedure</router-link>
                    <router-link   :to="{ name: 'Fees', params: { userId: 3 }}" class="nav-link m-3">Fees</router-link>
                    <router-link   :to="{ name: 'AcademicCalendar', params: { userId: 3 }}" class="nav-link m-3">Academic Calendar</router-link>
         
                
               
                </div>
                </div>
                
                
                
                </div>
            </div>
        </div>
  
            <main class="col ps-md-2 pt-2  vh-100 overflow-scroll ">
              
           <div class="page-header ">
                <h2>Academic Procedure</h2>
            </div>
          
            <hr>
            <div class="row">
                <div class="col-12">

                  <section class="p-5">
                     <div class="container">
            <div class="row">
                <div class="col-sm-12 procedure_step">
                    <div class="procedure_step_in">
                       
                           <div class="procedure_step_div1">
                         <img class="procedure_step_img" src="../assets/img/2.png" alt="">
                     
                        </div>
                        <div class="procedure_step_div2">
                             <h2 class="procedure_step_text" > 
                       ကျောင်းအပ်နှံရာတွင် ကျောင်းသူကျောင်းသား၏ နာမည်စာရင်းကို (  <router-link class="" :to="{ name: 'waitinglist', params: { userId: 3 }}">Waiting List</router-link>
                         ) အနေနှင့် ရှေးဦးစွာပေးသွင်း ရပါမည်။ 
                          </h2>
                        </div> 
                       
                       
                       </div>

                </div>
                  <div class="col-sm-12 procedure_step">
                    <div class="procedure_step_in">
                      
                        <div class="procedure_step_div2">
                             <h2 class="procedure_step_text" > 
                           
                              မူကြိုအတန်းအတွက် ကျောင်းအပ်နှံရန် အမည်စာရင်းပေးထားသည့် ကလေးများကို မေလ နှင့် နိုဝင်ဘာလတို့တွင် ဖုန်းဆက်၍ Assessment ချိန်းပေးခြင်းဖြင့် ကျောင်းအပ်လက်ခံပေးပါသည်။

မူလတန်းနှင့် အလယ်တန်းအတွက် ကျောင်းအပ်နှံရန် အမည်စာရင်းပေးထားသည့် ကလေးများကို မေလတွင် ဖုန်းဆက်၍ Assessment ချိန်းပေးခြင်းဖြင့် ကျောင်းအပ်လက်ခံပေးပါသည်။
                            </h2>
                        </div> 
                         <div class="procedure_step_div1">
                         <img class="procedure_step_img" src="../assets/img/1_1660702150.png" alt="">
                     
                        </div>
                       
                                 
                    </div>
                </div>
            </div>

         
        </div>
   <div class="container">
    <h5> 
Required Document
        
    </h5>
    <br>
                       <div class="row d-flex justify-content-center">

         
      
          <div class="col-sm-8 d-flex justify-content-center">
                <div class="dropdown">
  

  <ul class="list-group  ">
    <li class="list-group-item active">   ကျောင်းအပ်နှံရာတွင်အောက်ပါ အချက်အလက်များ ယူဆောင်လာပေးရပါမည်။</li>
  <li class="list-group-item ">မွေးစာရင်းမူရင်း(Sighted)</li>
  <li class="list-group-item">မွေးစာရင်းမိတ္တူ</li>
  <li class="list-group-item">အိမ်ထောင်စုဇယားမူရင်း(Sighted)</li>
  <li class="list-group-item">အိမ်ထောင်စုဇယားမိတ္တူ</li>
  <li class="list-group-item">မိဘ၏နိုင်ငံသားစိစစ်ရေးကဒ်မိတ္တူ</li>
  <li class="list-group-item">မွေးစာရင်းမိတ္တူ</li>
  <li class="list-group-item">ကျောင်းပြောင်းလက်မှတ်(TC)မူရင်း</li>
  <li class="list-group-item">ကလေးဓါတ်ပုံ(၁၀)ပုံ (၃လအတွင်းရိုက်ကူးထားသော ဓါတ်ပုံ)</li>
  <li class="list-group-item">ကလေးဆေးစစ်ချက်လက်မှတ်(၁လအတွင်း ဆေးစစ်ထားသောလက်မှတ်)</li>
  <li class="list-group-item">ရပ်ကွက်ထောက်ခံစာမူရင်း(၁လအတွင်းကျောင်းအပ်ရန်အတွက်ထုတ်ပေးထားသောထောက်ခံစာ)</li>
  <!-- <li class="list-group-item"> </li> -->
</ul>
<div class="collapse " id="collapseExample">
  <div class=" ">

    <div class="d-flex justify-content-center div_center">
      
      

    </div>
   
  </div>
</div>

</div>
          </div>
         </div>


            </div>
      

        </section>

        <div class="row d-flex justify-content-center mb-5 pb-5">
            <div class="col-sm-8">
              <div class=" bg-primary p-3 rounded">
                <h1 class="mb-3 h4 " style="color:white;" > မိဘများ အမေးအများဆုံး မေးခွန်း (၇)ခု (FAQ)</h1>
              </div>
           
              <div class="accordion" id="accordionExample">
  <div class="accordion-item  ">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        ၁။ကလေးအသက်ဘယ်အရွယ်လောက်ကနေကျောင်းအပ်စ လက်ခံပါသလဲ။

      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show "  aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body  text-start" >
        ရွှေမော်ကွန်းအဆင့်မြင့်မူကြိုကျောင်းမှာ အသက်(၃)နှစ်မှစပြီးကလေးများအားကြိုတင်ပေရထားသောအမည်စာရင်းများမှအတန်းတစ်တန်းနှင့်တစ်ခန်းချင်းစီအတွက်သတ်မှတ်ထားသောကျောင်းသားဦးရေအတိုင်းAssessment/Placement Testစစ်ပြီးလက်ခံပါတယ်။
      
      </div>
    </div>
  </div>
  <div class="accordion-item" >
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        ၂။ ကျောင်း၀င်ခွင့်အတွက် Assessment / Placement Test က ဘယ်အချက်အလက်တွေကို အဓိကစစ်ဆေးလက်ခံတာပါလဲ။
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body text-start">
  

Pre-Schoolအတွက်Assessment ကတော့ဖွံ့ဖြိုးမှုနယ်ပယ်( ၅) ရပ် ကို အဓိက စစ်ဆေးပါတယ်။

ဖွံ့ဖြိုးမှုနယ်ပယ်(၅)ရပ်ကတော့

➢ စာရိတပိုင်းဆိုင်ရာဖွံ့ဖြိုးမှု (စိတ်လှုပ်ရှားမှုဆိုင်ရာဖွံ့ဖြိုးမှု)

ကာယပိုင်းဆိုင်ရာဖွံ့ဖြိုးမှု

ဉာဏ်ရည်ပိုင်းဆိုင်ရာဖွံ့ဖြိုးမှု

ပေါင်းသင်းဆက်ဆံရေးဆိုင်ရာဖွံ့ဖြိုးမှုများကိုအခြေခံပြီးစစ်ဆေးပါတယ်

Primary and secondary Assessment Placement Testကတော့Person Edexcel (UK) နှင့်International သင်ရိုးတို့ဧ်။အဓိကဘာသာရပ်များဖြစ်တဲ့English,Match,Scienceဘာသာရပ်များကိုစစ်ဆေးပါတယ်။
      
      
      </div>
    </div>
  </div>


  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        ၃။ ရွှေမော်ကွန်းကျောင်းမှာဘယ်အတန်းထိဖွင့်လှစ်သင်ကြားနေပါသလဲ။
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body text-start">
        ရွှေမော်ကွန်းကိုယ်ပိုင်အလယ်တန်းကျောင်းမှာမူကြိုအရွယ်မှစပြီးမြန်မာသင်ရိုးတန်းသတမတန်းPerson Edexcel (UK)နှင့်International သင်ရိုးတို့ကိုပူးတွဲပြီးyears (8)အထိ၂၀၂၂၊၂၀၂၃ပညာသင်နှစ်မှာဖွင့်လှစ်သင်ကြားလျက်ရှိပြီးပညာသင်နှစ်တစ်နှစ်တိုင်းတွင်တစ်နှစ်တစ်တန်းတိုးကာအထက်တန်းထိဖွင့်လှစ်သင်ကြားပေးသွားမည်ဖြစ်ပါတယ်။
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapseThree">
        ၄။ ရွှေမော်ကွန်းကျောင်းမှာသင်ရိုး(၂)မျိုးကိုဘယ်လိုသင်ကြားပေးနေပါသလဲ။
      </button>
    </h2>
    <div id="collapse4" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body text-start">
        ရွှေမော်ကွန်းကျောင်းကဆိုရင်နိုင်ငံတကာပညာရေးကိုလက်လှမ်းမှီအောင်မြန်မာသင်ရိုးနှင့်International သင်ရိုးနှစ်ခုကိုပူးတွဲပြီးသင့်တင့်မျှတသောကျောင်းလခဖြင့်သင်ကြားပေးနေပါတယ်ရှင့်။ ပညာရေးဝန်ကြီးဌာနသင်ရိုးပြဌန်းအနေနဲ့ဆိုရင်တောင်ကြီးမြို့ဧ။်အထင်ကရကျောင်းတစ်ကျောင်းဖြစ်သောအ.ထ.က (၄)တောင်ကြီးကျောင်းဖြင့်ချိတ်ဆက်ထားပေးပါတယ်။ Shwe Maw Kun Education Group ကဆိုရင် Person Edexcel (UK) နှင့် Cambridge English Exam Preparation တို့ရဲ့အသိအမှတ်ပြုCentreရထားတဲ့ကျောင်းဖြစ်သည့်အပြင်British Council ၏ Partner Schoolလည်းဖြစ်ပါတယ်။
      
      
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapseThree">
        ၅။ သင်ရိုး (၂)မျိုးသင်ကြားပေးတော့ကျောင်းသား/ကျောင်းသူတွေအတွက်ဘာအကျိုးကျေးဇူးများရှိပါသလဲ။
      </button>
    </h2>
    <div id="collapse5" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body text-start">
       


ပညာရေးဝန်ကြီးဌာနပြဌန်းသင်ရိုးသည့်မည့်သည့်ကျောင်းမဆိုရွှေ့ပြောင်းနိုင်ပြီးနိုင်ငံခြားသင်ရိုးသင်ကြားသောပြည်တွင်းရှိInternational School အပြင်ပြည်ပရှိကျောင်းများသို့ရွှေ့ပြောင်းမည်ဆိုပါကလည်း Personal Edexcel (UK) ၏primary (year 6)၊lower Secondary (year 9) နှင့်IGCSEအစရှိသည့်နိုင်ငံတကာအသိအမှတ်ပြုအောင်လက်မှတ်များကိုစာမေးပွဲဖြေဆိုအောင်မြင်သောကျောင်းသား/ကျောင်းသူတိုင်းPearson Edcxel (UK)မှချီးမြင့်မည်ဖြစ်သောကြောင့်ထိုလက်မှတ်များဖြင့်ကျောင်းဝင်ခွင့်လျှောက်ထားနိုင်ပါတယ်။ 

မှတ်ချက်။ ကျောင်းဝင်ခွင့်မှာနိုင်ငံအလိုက်ကျောင်းတစ်ကျောင်းချင်းစီအပေါ်မူတည်ပြီးကွာခြားမှုရှိနိုင်ပါတယ်။
     
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapseThree">
        ၆။ စာသင်ခန်းတစ်ခန်းမှာကျောင်းသား/ကျောင်းသူဦးရေအများဆုံးဘယ်နှစ်ယောက်ထားပါသလဲ။
      </button>
    </h2>
    <div id="collapse6" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body text-start">
        စာသင်ခန်းတစ်ခန်းမှာဆိုရင်အခန်းအကျယ်အဝန်းပေါ်မူတည်ပြီးကျောင်းသားဦးရေ (၁၅ -၂၅)သာအများဆုံးသင်ကြားပေးပါတယ်။ဆရာ၊ဆရာမများနှင့်ကျောင်းသား၊ကျောင်းသူအချိုးကျထားရှိပါတယ်။
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapseThree">
        ၇။ ကျောင်းကဘယ်နှစ်လပိုင်းမှာစဖွင့်ပါသလဲ။
      </button>
    </h2>
    <div id="collapse7" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body text-start">
        မူကြိုဆိုရင်တစ်နှစ်မှာsemester နှစ်ခုရှိပါတယ်။ June semester နှင့် December semester ဆိုပြီးနှစ်စဉ်Juneမှာတစ်ကြိမ်December မှာတစ်ကြိမ်ဖွင့်လှစ်ပါတယ်။ 

မူလတန်းကျောင်းအလယ်တန်းကျောင်းကတော့ပညာရေးဝန်ကြီးဌာနကသတ်မှတ်ထားတဲ့အတိုင်းနှစ်စဉ်Juneလမှာဖွင့်လှစ်ပါတယ်။
     
      </div>
    </div>
  </div>


</div>
            </div>

        </div>
       
                    
                </div>
            </div>
        </main>
    
     
    </div>
</div>



   
   
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>