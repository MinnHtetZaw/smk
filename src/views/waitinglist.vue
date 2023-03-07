<template>
    <div  style="background-color:rgb(244, 234, 223)" class="p-3">
        <div class="container">
          <h1>Waiting List</h1>
            <div class="row d-flex justify-content-center">
                <div class="col-sm-8 ">
                  <form @submit.prevent="">
                    <div class="mb-3 border rounded shadow-sm p-3 m-3 bg-body rounded">

  <label for="" class="form-label d-flex justify-content-start text-start">ကျောင်းသား/သူ၏အမည်</label>
<input required type="text" class="form-control answer_waitinglist " v-model="studentname" id="" placeholder="Your answer">
</div>
<div class="mb-3 border rounded shadow-sm p-3 m-3 bg-body rounded">
  <label for="" class="form-label d-flex justify-content-start text-start">
    ကျား/မ
  </label>
  <div class="form-check">
  <input required class="form-check-input " value="Male" v-model="gender" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  <label class="form-check-label d-flex justify-content-start" for="flexRadioDefault1">
    ကျား
  </label>
</div>
<div class="form-check">
  <input required class="form-check-input" value="Female" v-model="gender" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  <label class="form-check-label d-flex justify-content-start" for="flexRadioDefault1">
    မ
  </label>
</div>

</div>
<div class="mb-3 border rounded shadow-sm p-3 m-3 bg-body rounded">
  <label for="" class="form-label d-flex justify-content-start text-start">
    ကျောင်းသား/သူ၏ မွေးသက္ကရာဇ်

  </label>
  <input type="date" required v-model="dateofbirth" class="form-control answer_waitinglist" id="" placeholder="">
</div>
<div class="mb-3 border rounded shadow-sm p-3 m-3 bg-body rounded">
  <label for="" class="form-label d-flex justify-content-start text-start">
    စုံစမ်းလိုသည့်အတန်း


  </label>
  <div class="form-check">
  <input class="form-check-input" required v-model="course" value="Nursery - 1 (၃ နှစ် မှ ၃ နှစ်ခွဲ)" type="radio" name="course" >
  <label class="form-check-label d-flex justify-content-start" for="flexRadioDefault1">
    Nursery - 1 (၃ နှစ် မှ ၃ နှစ်ခွဲ)
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" required  v-model="course" value="Nursery - 2 (၃ နှစ်ခွဲ မှ ၄ နှစ်)" type="radio" name="course" >
  <label class="form-check-label d-flex justify-content-start" for="flexRadioDefault1">
    Nursery - 2 (၃ နှစ်ခွဲ မှ ၄ နှစ်)
  </label>
</div>
<div class="form-check">
  <input class="form-check-input"  required v-model="course" value="Pre-KG - 1 (၄ နှစ် မှ ၄ နှစ်ခွဲ)" type="radio" name="course" >
  <label class="form-check-label d-flex justify-content-start" for="flexRadioDefault1">
    Pre-KG - 1 (၄ နှစ် မှ ၄ နှစ်ခွဲ)
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" required  v-model="course" value="Pre-KG - 2/3 (၄ နှစ်ခွဲ မှ ၅ နှစ်)" type="radio" name="course" >
  <label class="form-check-label d-flex justify-content-start" for="flexRadioDefault1">
    Pre-KG - 2/3 (၄ နှစ်ခွဲ မှ ၅ နှစ်)
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" required  v-model="course" value="KG" type="radio" name="course" >
  <label class="form-check-label d-flex justify-content-start" for="flexRadioDefault1">
    KG
  </label>
</div>
<div class="form-check">
  <input class="form-check-input"  required v-model="course" value="Year (1)" type="radio" name="course" >
  <label class="form-check-label d-flex justify-content-start" for="flexRadioDefault1">
    Year (1)
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" required  v-model="course" value="Year (2)" type="radio" name="course" >
  <label class="form-check-label d-flex justify-content-start" for="flexRadioDefault1">
    Year (2)
  </label>
</div>
<div class="form-check">
  <input class="form-check-input"  required v-model="course" value="Year (3)" type="radio" name="course" >
  <label class="form-check-label d-flex justify-content-start" for="flexRadioDefault1">
    Year (3)
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" required  v-model="course" value="Year (4)" type="radio" name="course">
  <label class="form-check-label d-flex justify-content-start" for="flexRadioDefault1">
    Year (4)
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" required  v-model="course" value="Year (5)" type="radio" name="course">
  <label class="form-check-label d-flex justify-content-start" for="flexRadioDefault1">
    Year (5)
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" required  v-model="course" value="Year (6)" type="radio" name="course">
  <label class="form-check-label d-flex justify-content-start" for="flexRadioDefault1">
    Year (6)
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" required  v-model="course" value="Year (7)" type="radio" name="course">
  <label class="form-check-label d-flex justify-content-start" for="flexRadioDefault1">
    Year (7)
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" required  v-model="course" value="Year (8)" type="radio" name="course">
  <label class="form-check-label d-flex justify-content-start" for="flexRadioDefault1">
    Year (8)
  </label>
</div>

</div>
<div class="mb-3 border rounded shadow-sm p-3 m-3 bg-body rounded ">
  <label for="" class="form-label d-flex justify-content-start text-start">
    ရွှေမော်ကွန်းကျောင်းတွင်တက်ရောက်နေသောမောင်နှမအရင်း

  </label>
  <div class="form-check">
  <input class="form-check-input" required  type="radio" name="refer" v-model="refer" value="true" @click=hello(1)>
  <label class="form-check-label d-flex justify-content-start" for="flexRadioDefault1">
    ရှိ
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" required  type="radio" name="refer" v-model="refer" value="false" @click=hello(2)>
  <label class="form-check-label d-flex justify-content-start" for="flexRadioDefault1">
    မရှိ
  </label>
</div>





</div>
<div  class="mb-3 border rounded shadow-sm p-3 m-3 bg-body rounded">
  <label for=""  class="form-label d-flex justify-content-start text-start">
    ရွှေမော်ကွန်းကျောင်းတွင်တက်ရောက်နေသောမောင်နှမအရင်းရှိလျှင် အမည် နှင့် အတန်း
  </label>
<input v-if="refer=='true'" required type="text" v-model="ans1"  class="form-control answer_waitinglist" id="" placeholder="Your answer">
<input v-if="refer=='false'" required disabled  type="text" v-model="ans1"  class="form-control answer_waitinglist" id="" placeholder="">

</div>
<div class="mb-3 border rounded shadow-sm p-3 m-3 bg-body rounded">
  <label for="" class="form-label d-flex justify-content-start text-start">
    ကျောင်းသား/သူ၏ လူမျိုး/ဘာသာ

  </label>
<input type="text" required  v-model="ans2"  class="form-control answer_waitinglist" id="" placeholder="Your answer">
</div>
<div class="mb-3 border rounded shadow-sm p-3 m-3 bg-body rounded">
  <label for="" class="form-label d-flex justify-content-start text-start">
    ဖခင်အမည်နှင့်အလုပ်အကိုင်

  </label>
<input type="text" required  v-model="ans3"  class="form-control answer_waitinglist" id="" placeholder="Your answer">
</div>
<div class="mb-3 border rounded shadow-sm p-3 m-3 bg-body rounded">
  <label for="" class="form-label d-flex justify-content-start text-start">
    မိခင်အမည်နှင့်အလုပ်အကိုင်

  </label>
<input type="text" required  v-model="ans4"  class="form-control answer_waitinglist" id="" placeholder="Your answer">
</div>
<div class="mb-3 border rounded shadow-sm p-3 m-3 bg-body rounded">
  <label for="" class="form-label d-flex justify-content-start text-start">
    အုပ်ထိန်းသူ၏အမည်နှင့်တော်စပ်ပုံ

  </label>
<input type="text"  required  v-model="ans5" class="form-control answer_waitinglist" id="" placeholder="Your answer">
</div>
<div class="mb-3 border rounded shadow-sm p-3 m-3 bg-body rounded">
  <label for="" class="form-label d-flex justify-content-start text-start">
    မိဘ/အုပ်ထိန်းသူ၏ဖုန်းနံပါတ်

  </label>
<input type="text"  required v-model="ans6"  class="form-control answer_waitinglist" id="" placeholder="Your answer">
</div>
<div class="mb-3 border rounded shadow-sm p-3 m-3 bg-body rounded">
  <label for="" class="form-label d-flex justify-content-start text-start">
    မိဘ/အုပ်ထိန်းသူ၏နေရပ်လိပ်စာ

  </label>
<input type="text" required  v-model="ans7"  class="form-control answer_waitinglist" id="" placeholder="Your answer">
</div>


<div class="mb-3 border rounded shadow-sm p-3 m-3 bg-body rounded">
  <label for="" class="form-label d-flex justify-content-start text-start">
    ၁။ ရွှေမော်ကွန်း ကိုယ်ပိုင်အလယ်တန်းကျောင်းကို မည်ကဲ့သို့သိရှိပါသနည်း။ မည်သူ့အဆက်အသွယ် နှင့် သိရှိခဲ့ ပါသနည်း။

  </label>
<input type="text" required  v-model="ans8"  class="form-control answer_waitinglist" id="" placeholder="Your answer">
</div>

<div class="mb-3 border rounded shadow-sm p-3 m-3 bg-body rounded">
  <label for="" class="form-label d-flex justify-content-start text-start">
    ၂။ မိဘ/အုပ်ထိန်းသူများ အနေနှင့် မိမိ၏သား/သမီးများအပေါ် ထားရှိသည့် မျှော်မှန်းချက် နှင့် ကျောင်းအပေါ်ထားရှိသည့် ရည်ရွယ်ချက်။ </label>
<input type="text" v-model="ans9"  required  class="form-control answer_waitinglist" id="" placeholder="Your answer">
</div>

<div class="mb-3 border rounded shadow-sm p-3 m-3 bg-body rounded">
  <label for="" class="form-label d-flex justify-content-start text-start">
    ၃။ မိဘ/အုပ်ထိန်းသူများ အနေနှင့် မိမိ၏ သား/ သမီး များအပေါ် ပညာရေးနှင့်ပတ်သက်၍ မည်ကဲ့သို့ပံ့ပိုး ပေးနိုင်ပါသနည်း။   </label>
<input type="text" v-model="ans10" required   class="form-control answer_waitinglist" id="" placeholder="Your answer">
</div>



<div class="mb-3 border rounded shadow-sm p-3 m-3 bg-body rounded">
  <label for="" class="form-label d-flex justify-content-start text-start">
    ၄။ မိဘ/အုပ်ထိန်းသူများအနေနှင့် မိမိတို့၏ သား/သမီးများကို ပြည်သူ့နီတိနှင့်ပတ်သက်၍ မည်ကဲ့သို့  သင်ကြား ပေးထားပါသနည်း။</label>
<input type="text" v-model="ans11" required   class="form-control answer_waitinglist" id="" placeholder="Your answer">
</div>

<div class="mb-3 border rounded shadow-sm p-3 m-3 bg-body rounded">
  <label for="" class="form-label d-flex justify-content-start text-start">
    ၅။ မိဘ/အုပ်ထိန်းသူများအနေနှင့် မိမိ သား/ သမီးများ၏ ပညာရေးနှင့်ပတ်သက်၍ ကျောင်းသား/ မိဘ/ ဆရာ သုံးဦး သုံးဖလှယ် ပူးပေါင်းမှု ပြုနိုင်ပါသလား။ မည်ကဲ့သို့ပြုလုပ်ပါမည်နည်း။

  </label>
<input type="text" v-model="ans12" required   class="form-control answer_waitinglist" id="" placeholder="Your answer">
</div>

<div class="mb-3 border rounded shadow-sm p-3 m-3 bg-body rounded">
  <label for="" class="form-label d-flex justify-content-start text-start">
    ၆။ မိဘ/အုပ်ထိန်းသူများအနေနှင့် မိမိကလေး၏ ကျန်းမာရေးအခြေအနေကို ကျောင်းရှိ ဆရာ/ ဆရာမ များနှင့် ပွင့်လင်းစွာ ဆွေးနွေးတင်ပြမှု ပြုလုပ်နိုင်ပါသလား။  </label>
<input type="text" v-model="ans13"  required  class="form-control answer_waitinglist" id="" placeholder="Your answer">
</div>

<div class="mb-3 border rounded shadow-sm p-3 m-3 bg-body rounded">
  <label for="" class="form-label d-flex justify-content-start text-start">
    ၇။ ကျောင်းဘက်မှသိထားသင့်သော မိမိကလေး၏ ကျန်းမာရေးနှင့်ပတ်သက်၍ အောက်ဖော်ပြပါအချက်များနှင့် ကိုက်ညီမှုရှိခဲ့ပါက ထိုအချက်များကို အမှန်ခြစ်ပေးပါရန်။</label>
 
  <div class="form-check">
  <input class="form-check-input" value="မျက်စိနှင့်အာရုံကြောဆိုင်ရာအားနည်းခြင်း" v-model="ans14"  type="checkbox" id="tre1" >
  <label class="form-check-label d-flex justify-content-start" for="flexRadioDefault1">
    မျက်စိနှင့်အာရုံကြောဆိုင်ရာအားနည်းခြင်း
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" value="အကြားအာရုံအားနည်းခြင်း" v-model="ans14"  type="checkbox" id="tre2" >
  <label class="form-check-label d-flex justify-content-start" for="flexRadioDefault2">
    အကြားအာရုံအားနည်းခြင်း
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" value="စကားပြောနောက်ကျမှုရှိခြင်း" v-model="ans14"  type="checkbox" id="tre3" >
  <label class="form-check-label d-flex justify-content-start" for="flexRadioDefault1">
    စကားပြောနောက်ကျမှုရှိခြင်း
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" value="Asthma ရှိခြင်း" type="checkbox" v-model="ans14"  id="tre4" >
  <label class="form-check-label d-flex justify-content-start"  for="flexRadioDefault1">
    Asthma ရှိခြင်း
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" value="ခွဲစိတ်ကုသမှုခံယူဖူးခြင်း" type="checkbox" v-model="ans14"  id="tre5" >
  <label class="form-check-label d-flex justify-content-start" for="flexRadioDefault1">
    ခွဲစိတ်ကုသမှုခံယူဖူးခြင်း
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" value="ခွဲစိတ်ကုသမှုခံယူရန်ရှိခြင်း" type="checkbox" v-model="ans14"  id="tre6" >
  <label class="form-check-label d-flex justify-content-start" for="flexRadioDefault1">
    ခွဲစိတ်ကုသမှုခံယူရန်ရှိခြင်း
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" value="ပြင်းထန်ဒဏ်ရာရရှိခဲ့ဖူးခြင်း" type="checkbox" v-model="ans14"  id="tre7" >
  <label class="form-check-label d-flex justify-content-start" for="flexRadioDefault1">
    ပြင်းထန်ဒဏ်ရာရရှိခဲ့ဖူးခြင်း
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" value="Allergies ရှိခြင်း" type="checkbox" v-model="ans14"  id="tre8" >
  <label class="form-check-label d-flex justify-content-start" for="flexRadioDefault1">
    Allergies ရှိခြင်း
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" value="ဆေးဝါးများကိုတာရှည်စွာမှီဝဲနေရခြင်း" type="checkbox" v-model="ans14"  id="tre9" >
  <label class="form-check-label d-flex justify-content-start" for="flexRadioDefault1">
    ဆေးဝါးများကိုတာရှည်စွာမှီဝဲနေရခြင်း
  </label>
</div>
 
 
  </div>

<div class="mb-3 border rounded shadow-sm p-3 m-3 bg-body rounded">
  <label for="" class="form-label d-flex justify-content-start text-start">
    ၈။ ကလေးများ၏ကျန်းမာရေးနှင့်ပတ်သက်၍ အခြားသိထားသင့်သောအချက်များရှိပါက ဖြည့်စွက်ပေးရန်။</label>
<input v-model="ans15"  required  type="text" class="form-control answer_waitinglist" id="" placeholder="Your answer">
</div>

<div class="mb-3 border rounded shadow-sm p-3 m-3 bg-body rounded">
  <label for="" class="form-label d-flex justify-content-start text-start">
    ၉။ မိဘ/အုပ်ထိန်းသူများအနေနှင့် Social Media (Facebook) ကို မည်ကဲ့သို့အသုံးပြုပါသနည်း။</label>
<input v-model="ans16"  required  type="text" class="form-control answer_waitinglist" id="" placeholder="Your answer">
</div>

<div class="mb-3 border rounded shadow-sm p-3 m-3 bg-body rounded">
  <label for="" class="form-label d-flex justify-content-start text-start">
    ၁၀။ မိဘ/အုပ်ထိန်းသူများအနေနှင့် ရွှေမော်ကွန်းကိုယ်ပိုင်အလယ်တန်းကျောင်း၏ စည်းကမ်းပိုင်းနှင့်  ပတ်သက်၍ မည်မျှအထိ သိရှိနားလည်ထားပါသနည်း။</label>
<input type="text" required  class="form-control answer_waitinglist" v-model="ans17"  id="" placeholder="Your answer">
</div>


<div class="mb-3 border rounded shadow-sm p-3 m-3 bg-body rounded">
  <label for="" class="form-label d-flex justify-content-start text-start">
    ၁၁။  ရွှေမော်ကွန်း ကိုယ်ပိုင် အလယ်တန်းကျောင်း မှ ချမှတ်ထားသော စည်းကမ်းချက်များအား မိဘ/အုပ်ထိန်းသူများ ဘက်မှ ပူးပေါင်းလိုက်နာ ဆောင်ရွက်နိုင်ပါ သလား။
</label>
<input type="text"  required v-model="ans18"  class="form-control answer_waitinglist" id="" placeholder="Your answer">
</div>
<div class="mb-3 border rounded shadow-sm p-3 m-3 bg-body rounded">
  <label for="" class="form-label d-flex justify-content-start text-start">
    Form ဖြည့်သူ၏အမည် ၊ တော်စပ်ပုံနှင့် ဖုန်းနံပါတ်

</label>
<input type="text"  required v-model="subname"  class="form-control answer_waitinglist" id="" placeholder="Your answer">
</div>

<div class="mb-3 border rounded shadow-sm p-3 m-3 bg-body rounded">
  <label for="" class="form-label d-flex justify-content-start text-start">
    Form ဖြည့်သူ၏ Email

</label>
<input  type="Email" required  v-model="subemail"  class="form-control answer_waitinglist" id="" placeholder="Your answer">
</div>

<button @click="store()" class="btn btn-primary d-flex justify-content-start  m-3" type="submit"> 
  <div class="spinner-border" role="status" id="submitspinner">
 
</div>
<span id="submittxt">Submit</span>
  </button>

</form>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
  import $ from 'jquery';
  import axios from 'axios';
export default {
    data () {
        

        return {
          link:"http://smkbackend.kwintechnologykw11.com",
          refer:'',

          formdate:'',    
          studentname:'',
          gender:'',
          dateofbirth:'',
          course:'',
          ans1:'',
          ans2:'',
          ans3:'',
          ans4:'',
          ans5:'',
          ans6:'',
          ans7:'',
          ans8:'',
          ans9:'',
          ans10:'',
          ans11:'',
          ans12:'',
          ans13:'',
          ans14:[],
          ans15:'',
          ans16:'',
          ans17:'',
          ans18:'',
          subname:'',
          subemail:'',


          refervalue:'',
        }
    },
    methods: {

      store(){
 

        if(this.ans14.length==0)
         {
          var treatment="-";
         }
         else{
          var treatment=this.ans14.join(" ၊ ");
         }
               if(this.studentname =="" || 
               this.studentname =="" || this.gender =="" || 
               this.dateofbirth =="" || this.course =="" || 
               this.ans1 =="" || this.ans2 =="" || 
               this.ans3 =="" || this.ans4 =="" || 
               this.ans5 =="" || this.ans6 =="" || 
               this.ans7 =="" || this.ans8 =="" || 
               this.ans9 =="" || this.ans10 =="" || 
               this.ans11 =="" || this.ans12 =="" ||
               this.ans13 =="" || this.treatment =="" || 
               this.ans15 =="" || this.ans16 =="" ||
               this.ans17 =="" || this.ans18 ==""  ||
               this.subname =="" || this.subemail ==""    )
               {
                return 
               }
               $('#submittxt').hide(),
        $('#submitspinner').show()
              console.log(treatment)
            let article = 
            {
              formdate:new Date().toLocaleDateString(),
               studentname:this.studentname ,
            gender:this.gender ,
           dateofbirth:this.dateofbirth ,
            course:this.course,
            ans1:this.ans1,
            ans2:this.ans2,
            ans3:this.ans3,
            ans4:this.ans4,
            ans5:this.ans5,
            ans6:this.ans6,
            ans7:this.ans7,
            ans8:this.ans8,
            ans9:this.ans9,
            ans10:this.ans10,
            ans11:this.ans11,
            ans12:this.ans12,
            ans13:this.ans13,
            ans14:treatment,
            ans15:this.ans15,
            ans16:this.ans16,
            ans17:this.ans17,
            ans18:this.ans18,
            subname:this.subname,
            subemail:this.subemail,

           

            };
            console.log(article)
            
  axios.post(this.link+"/api/waitinglist", article)
    .then(response =>{console.log(response),
      $('#submittxt').show(),
        $('#submitspinner').hide(),
        Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Success',
  customClass:'sweetalertsuccess',
  showConfirmButton: false,
  timer: 1500
}),
window.location.assign("")
      })
    .catch(error => {
      this.errorMessage = error.message;
      console.error("There was an error!", error);
       })

},


      hello(val) {
        if (val == 1) {
         
         this.ans1 = '';
       
        }else {

         this.ans1 = '-';

          
        }

    },
    },
    mounted () {
      $('#submitspinner').hide();
    },
}
</script>

<style lang="scss" scoped>

</style>