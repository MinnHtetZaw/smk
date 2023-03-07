<template>
    <div>
      <section class="smk_responsive"  style="margin-top:100px">
        <div  class="row gx-0 m-5 shadow">
          <div class="col-5 ">
            <div class="" style="width:100%;height:500px; " >
              <div style="position:relative;width:600px;height:500px;">
                <img src="./../assets/img/abschool_top.jpg" style="width:600px;height:500px;" alt="">
           
              </div>
              <!-- <div style="bottom:150px;position:relative">
                <img src="../assets/img/stand_about.png" style="width:200px;height:200px" alt="">
              </div> -->
            </div>

          </div>
          <div v-if="font_type == 1" class="col-7 shadow ">
              <div style="padding:30px">
                <h1 class="mb-5" style="font-size:30px; color:goldenrod">ABOUT SHWE MAW KUN</h1>
                <p style="text-align:justify">
                  Shwe Maw Kun Education Group (registered as Shwe Maw Kun Private School with the Ministry of Education, Myanmar and Maw Kun International Education Group with Directorate of
Investment and Company Administration, Myanmar) is a both local and international education provider founded in January 2015 to provide quality national and international education with relatively reasonable fees in the region.
Our portfolio covers Premium Pre-school (Early Years), Primary School, Secondary School, Cambridge English Learning Hub and Professional Skills & Leadership Development Training Hub for adults. We offer Myanmar National and Pearson Edexcel (British) curriculum with the aims to provide well-rounded education and opportunities to access nationally and internationally recognised qualification to pupils up to Grade 7/ Year 7, with provisions to expand year on year.
           
                </p>
               </div>
          </div>
          <div v-if="font_type == 2" class="col-7 shadow ">
              <div style="padding:30px">
                <h1 class="mb-5" style="font-size:30px; color:goldenrod">ရွှေမော်ကွန်း ကျောင်းအကြောင်း</h1>
                <p style="text-align:justify;line-height: 30px;">
                  ရွှေမော်ကွန်းကိုယ်ပိုင်ကျောင်းကို ၂၀၁၅ခုနှစ်တွင် နိုင်ငံတကာသင်ရိုးနှင့်ပြည်ထောင်စုမြန်မာနိုင်ငံတော် ပညာရေးဝန်ကြီးဌာန၏ အခြေခံပညာသင်ရိုးတို့ကို သင့်တင့်မျှတသော နှုန်းထားဖြင့် ကျောင်းသား/သူများတက်ရောက်နိုင်ရန် ရည်ရွယ်ချက်ဖြင့်စတင်ဖွင့်လှစ်ခဲ့ပါသည်။
                  ပညာရေးဝန်ကြီးဌာနတွင် ရွှေမော်ကွန်းကိုယ်ပိုင်ကျောင်းအမည်ဖြင့် မှတ်ပုံတင်ထားရှိပြီး ကိုယ်ပိုင်ကျောင်းလိုင်စင်ရရှိထားကာ မော်ကွန်းနိုင်ငံတကာပညာရေးလုပ်ငန်းစုအမည်ဖြင့်ကုမ္ပဏီလိုင်စင်ရရှိထားပါသည်။
                  ယခုအခါ ရွှေမော်ကွန်းကိုယ်ပိုင်ကျောင်းတွင် မူလတန်းကြိုအတန်းများ၊ မူလတန်း၊ အလယ်တန်း၊ Weekend International Programme နှင့် လူကြီးများအတွက် ခေါင်းဆောင်မှုသင်တန်းများ၊ စွမ်းရည်မြှင့်တင်မှုသင်တန်းတို့ကိုပါ ပို့ချပေးလျက်ရှိပါသည်။
                  ရွှေမော်ကွန်းကိုယ်ပိုင်ကျောင်းသည် မလေးရှားနိုင်ငံရှိ A Level သင်ကြားရေး၌ အာရှပစိဖိတ်တွင် ထင်ရှားကျော်ကြားပြီး ကမ္ဘာ့နိုင်ငံများရှိထိပ်သီးတက္ကသိုလ်များသို့ တက်ရောက်ပညာသင်ကြားခွင့်ရသော ကျောင်းသားအများစုကို ပျိုးထောင်ပေးသည့် Help Academy နှင့် ချိတ်ဆက်ထားပါသည်။
                  ထို့အပြင် ရွှေမော်ကွန်းကိုယ်ပိုင်ကျောင်းသည် တောင်ကြီးမြို့၏ပထမဦးဆုံး British Council Partner ကျောင်းဖြစ်ခြင်း၊ အင်္ဂလန်နိုင်ငံရှိနာမည်ကြီးစာစစ်ဌာနတစ်ခုဖြစ်သော Pearson Edexcel၏ အသိအမှတ်ပြုဌာနဖြစ်ခြင်း၊ Pearson Edexcel၏ အသိအမှတ်ပြု Early Years Centre ဖြစ်ခြင်းနှင့် Cambridge English Assessment ၏ စာစစ်ဌာနဖြစ်ခြင်းတို့ဖြစ်သည်။
                </p>
               </div>
          </div>
        </div>

      </section>
      <section class="section2_ smk_responsive" >
  
  <div class="row gx-0">
      <div class="col shadow" style="    border: 0px;
    border-right: 2px black;
    border-style: solid;">
          <div v-if="font_type == 1" class="section2_divleft ">
              <h2 ></h2>
              <h2 >OUR VISION</h2>
              <p  style=" white-space: pre-wrap">
                To become a nationally and internationally-recognised school providing quality and affordable education to pupils to develop confidence, competence and to prepare each pupil for a socially responsible and compassionate citizen.<br>
              </p>
          </div>
        <div v-if="font_type == 2" class="section2_divleft">
          <h3 class="mb-5">ပညာရေး မျှော်မှန်းချက်</h3>
          <ul style="list-style-type: square;text-align: start;">
            <li>
              <p>
                သင့်တင့်မျှတသောနှုန်းထားဖြင့် အရည်အသွေးပြည့်မှီသော ပြည်တွင်းပြည်ပ အသိအမှတ်ပြုကျောင်းတစ်ကျောင်းဖြစ်လာစေရန်။
              </p>
            </li>
            <li>
              <p>
                အရည်းအချင်းရှိသော၊ မိမိကိုယ်ကို ယုံကြည်မှုရှိသော ၊ တာဝန်ယူမှု တာဝန်ခံမှုရှိသော အနာဂတ်နိုင်ငံသေားကောင်းများ မွေးထုတ်ပေးနိုင်ရန်။
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div class="col shadow" style="  border: 0px;
    border-right: 2px black;
    border-style: solid;">
          <div v-if="font_type == 1" class="section2_divcenter ">
              <h2 ></h2>
              <h2>OUR MISSION</h2>
              <p style=" white-space: pre-wrap">
                <ul style=" text-align: justify;">
                  <li>
                    To care for our pupils, to educate them and to bring out the best in every one of them to develop confidence, competence and consideration for others to be, become and being responsible, productive and compassionate citizens.<br>

                  </li>
                  <li>
                    To provide a safe and stimulating learning environment with a creative orientation across the whole curriculum and ensure pupils of all abilities are well equipped to meet the challenges of learning and life in ever-changing world.<br>

                  </li>
                  <li>
                    To offer the best possible well-rounded quality education incorporated with nationally and internationally recognised qualification with relatively reasonable fees in the region.<br>
  
                  </li>
                </ul>
                </p>
          </div>
        <div v-if="font_type == 2" class="section2_divcenter">
          <h3 class="mb-5">ပညာရေး ရည်မှန်းချက်</h3>
          <ul style="list-style-type: square;text-align: start;">
            <li>
              <p>
                ကျောင်းသား/ကျောင်းသူတစ်ယောက်စီတိုင်းကို အရည်းအချင်းရှိသော၊ မိမိကိုယ်ကို ယုံကြည်မှုရှိသော ၊ တာဝန်ယူမှု တာဝန်ခံမှုရှိသော အနာဂတ်နိုင်ငံသေားကောင်းများ မွေးထုတ်ပေးနိုင်ရန်။
              </p>
            </li>
            <li>
              <p>
                ပြောင်းလဲလာသည့်ပညာခေတ်တွင် ကျောင်းသား/သူများအတွက် လုံခြုံမှုအပြည့်ရှိပြီး လှုံ့ဆော်မှုအားကောင်းသော သင်ကြားသင်ယူမှုရပ်ဝန်းကောင်းလေးဖန်တီးပေးခြင်းဖြင့် စိန်ခေါ်မှုများကိုရင်ဆိုင်ကျော်ဖြတ်နိုင်သော ကျောင်းသား/သူလေးများပေါ်ပေါက်လာစေရန်။
              </p>
            </li>
            <li>
              <p>
                သင့်တင့်မျှတသောနှုန်းထားဖြင့် ပြည်တွင်းပြည်ပအသိအမှတ်ပြု ကျောင်းတစ်ကျောင်းဖြစ်လာစေပြီး အရည်အသွေးပြည့်မှီသောပညာရေးကို လက်ဆင့်ကမ်းပေးနိုင်ရန်။
              </p>
            </li>
          </ul>
          </div>
      </div>
      <div class="col shadow" style="  border: 0px;
    border-right: 2px black;
    border-style: solid;">
          <div v-if="font_type == 1" class="section2_divright ">
              <h2 ></h2>
              <h2>FUTURE EXPANSION</h2>
              <p  >
                <ul style=" text-align: justify;">
                  <li>
                    To recruit, develop and retain inspiring teachers who are all fully committed to driving the school forward as an outstanding education provider in the region. <br>

                  </li>
                  <li>
                    To provide the continuous development in teaching methodology and curriculum to meet both national and international standards.<br>

                  </li>
                  <li>
                    To develop a challenging and innovative education system incorporated with national- based and international-based curriculum that fosters all the skills and equips our pupils for the next step in their education and for life.<br>

                  </li>
                  <li>
                    To create and promote a lifelong learning and empower our pupils with 21st century skills. To prepare each pupil for a socially responsible and compassionate citizen.<br>

                  </li>
                </ul>
              </p>
          </div>
        <div v-if="font_type == 2" class="section2_divright ">

          <h3 class="mb-5">အနာဂတ် ပညာရေးပန်းတိုင်</h3>
          <ul style="list-style-type: square;text-align: start;">
            <li>
              <p>
                အရည်အချင်းပြည့်မှီသော ဆရာ ဆရာမကောင်းများကို ခန့်အပ်ထားနိုင်ပြီး ပြည့်စုံကောင်းမွန်သော ပညာရေးကို ဖန်တီးပေးနိုင်ရန်။
              </p>
            </li>
            <li>
              <p>
                နိုင်ငံတကာသင်ရိုးနှင့် ပြည်ထောင်စုမြန်မာနိုင်ငံ ပညာရေးဝန်ကြီးဌာနမှ ပြဌာန်းထားသော အခြေခံပညာသင်ရိုး ၂ခုစလုံးအတွက် သင်ကြားရေးနည်းလမ်းကောင်းများကို စဉ်ဆက်မပြတ် ပံပိုးပေးနိုင်ရန်။              </p>
            </li>
            <li>
              <p>
                နိုင်ငံတကာသင်ရိုးနှင့် ပြည်ထောင်စုမြန်မာနိုင်ငံ ပညာရေးဝန်ကြီးဌာနမှ ပြဌာန်းထားသော အခြေခံပညာသင်ရိုးတို့ကို ပူးတွဲသင်ကြားပေး၍ စိန်ခေါ်မှုများပြီး
                တိုးတက်ပြောင်းလဲမှုမြန်ဆန်သောပညာခေတ်တွင် ကလေးများအနေဖြင့် ပညာရေးဖြင့် ပိုမိုကောင်းမွန်သောဘဝများကို ဖန်တီးနိုင်ရန်။
              </p>
            </li>
            <li>
              <p>
                စဉ်ဆက်မပြတ်လေ့လာသင်ယူနိုင်မှုကို မြှင့်တင်ပေးနိုင်ပြီး ကျောင်းသား/သူများအတွက် ၂၁ရာစုခေတ်တွင်လိုအပ်သော ပညာအရည်အသွေးများကို ဖန်တီးပေးနိုင်ရန်နှင့် တာဝန်ယူမှု၊ တာဝန်ခံမှုရှိသော စာနာတတ်သော နိုင်ငံသားကောင်းလေးများပေါ်ထွန်းလာစေရန်။
              </p>
            </li>
          </ul>
          </div>
      </div>
  </div>
 
</section>
<section class="  " style="background-color: purple;">
	<section class="">
		<ul class="tabs-controls" >
			<li class="tabs-controls__item">
				<a href="#" class="tabs-controls__link tabs-controls__link--active" data-id="1">
					T
				</a>
			</li>
			<li class="tabs-controls__item">
				<a href="#" class="tabs-controls__link" data-id="2">
					R
			  </a>
			</li>
			<li class="tabs-controls__item">
				<a href="#" class="tabs-controls__link" data-id="3">
					U
				</a>
			</li>
			<li class="tabs-controls__item">
				<a href="#" class="tabs-controls__link" data-id="4">
					S
				</a>
			</li>
			<li class="tabs-controls__item">
				<a href="#" class="tabs-controls__link" data-id="5">
					T
				</a>
			</li>
			
		</ul>
	</section>
	<section class="cards-container  smk_responsive2">

<!--    Teach-->
		<div v-if="font_type == 1" class="card card--current" id="1">
			<h1><span style="color:purple;">T</span>Each</h1>
			<p style="font-size:20px;">
         <br>
  
       
				inspiring teachers to engage in continual learning for valuable teaching
			</p>
		</div>
    <div v-if="font_type == 2" class="card card--current" id="1">
			<h1><span style="color:purple;">T</span> - Teach - သင်ကြားသင်ယူမှု</h1>
			<p style="font-size:20px;"><br>
        တန်ဖိုးရှိသော သင်ကြားမှုများအတွက် စဉ်ဆက်မပြတ် လေ့လာသင်ယူမှုတွင်ပါဝင်ရန် ဆရာ ဆရာမများအား လှုံ့ဆော်ပေးနိုင်ရန်။
			</p>
		</div>

<!--    Respect-->
		<div v-if="font_type == 1" class="card" id="2">
			<h1><span style="color:purple;">R</span>ESPECT</h1>
			<p style="font-size:20px;">
 
        <br>
        
				respect for self and others
			</p>
		</div>
    <div v-if="font_type == 2" class="card" id="2">
			<h1><span style="color:purple;">R</span> - Respect</h1>
			<p style="font-size:20px;">
        <br>
        တစ်ဦးနှင့် တစ်ဦး အပြန်အလှန်လေးစားမှု - ကိုယ့်ကိုယ်ကိုရော သူတစ်ပါးကိုပါလေးစားမှုရှိရန်။
			</p>
		</div>

<!--    unique-->
		<div v-if="font_type == 1" class="card" id="3">
			<h1><span style="color:purple;">U</span>NIQUE</h1>
			<p style="font-size:20px;">
        <br>
				the development of unique curriculum to deliver academic success and build self-worth to be a compassionate and responsible citizen, and to the bond-building among teachers, pupils and parents for higher education.
			</p>
		</div>
    <div v-if="font_type == 2" class="card" id="3">
			<h1><span style="color:purple;">U</span> - Unique</h1>
			<p style="font-size:20px;">
        <br>
        မိဘ၊ဆရာ၊ကျောင်းသား သုံးဦး သုံးဖလှယ် ပူးပေါင်းပြီး စာနာနားလည်တတ်သော၊ တာဝန်သိသော၊ ထူးချွန်ထက်မြက်သော မိမိကိုယ်မိမိတန်ဖိုးထားတတ်သော နိုင်ငံသားကောင်းများပေါ်ထွန်းလာစေရန်နှင့် အဆင့်မြင့်ပညာရေးအတွက် ထူးခြားသစ်လွင်သော
        သင်ရိုးညွှန်းတမ်းများ ဖော်ဆောင်နိုင်စေရန်။			</p>
		</div>
<!--    Success-->
		<div v-if="font_type == 1" class="card" id="4">
			<h1><span style="color:purple;">S</span>UCCESS</h1>
			<p style="font-size:20px;">

        <br>
        
        the professional growth of teachers, pupils and school
success

      
      </p>
		</div>
    <div v-if="font_type == 2" class="card" id="4">
			<h1><span style="color:purple;">S</span> - Success</h1>
			<p style="font-size:20px;">
        <br>
        ဆရာ ဆရာမများ နှင့် ကျောင်းသား/သူများ၏ ကျွမ်းကျင်တိုးတက်မှုနှင့် အောင်မြင်သောကျောင်းအဖြစ်ရပ်တည်နိုင်စေရန်။

      </p>
		</div>

<!--    Talent-->
		<div v-if="font_type == 1" class="card" id="5">
			<h1><span style="color:purple;">T</span> ALENT</h1>
			<p style="font-size:20px;">
        <br>
			discover the natural talent, skills and aptitude of the pupils and teachers
			</p>
		</div>
    <div v-if="font_type == 2" class="card" id="5">
			<h1><span style="color:purple;">T</span> - Talent</h1>
			<p style="font-size:20px;">
        <br>
        ကျောင်းသား/သူနှင့် ဆရာ ဆရာမများ၏ ပင်ကိုယ်စွမ်းရည်နှင့် အရည်အချင်းများကို ဖော်ထုတ်နိုင်စေရန်။
			</p>
		</div>
	
	</section>
</section>

<section class=" smk_responsive3">
  <div class="avice_color shadow" style="color:white">
    <div class="row gx-0">
    <div class="col-3">
      <div style=" border:1px;border-style:  solid; width:250px;max-height: 250px; border-radius: 50px; margin: 50px;overflow: hidden; ">
        <img src="./../assets/img/teacher/tr1.png" style=" width:250px;max-height: 250px; object-fit: cover;" alt="">
  
      </div>
       </div>
    <div class="col-9">
      <div   style="margin: 50px;">
        <h2 style="color:#F3cd5d;text-align:left;">PRINCIPAL'S MESSAGE</h2>
      <P style="text-align:start;line-height: 30px;">
        ကျွန်မကတော့ တောင်ကြီးမြို့ ရွှေမော်ကွန်းကိုယ်ပိုင်အလယ်တန်းကျောင်းမှာ တာဝန် ထမ်းဆောင်နေတဲ့ တွဲဖက်ကျောင်းအုပ် ဒေါ်ဝင်းစန္ဒာတင့်ရှိန်ဖြစ်ပါတယ်။
        ကျွန်မ ပညာရေးတက္ကသိုလ်က ကျောင်းဆင်းပီး အ.ထ.က(၃)တောင်ကြီးမှာ အထက်တန်းပြအဖြစ် ပထမဆုံး တာဝန်ထမ်းဆောင်ခဲ့တာဖြစ်ပြီး အဌမတန်း၊ နဝမတန်း၊ ဒသမတန်းတို့မှာ မြန်မာစာ၊ ပထဝီဝင်၊
        သမိုင်းဘာသာရပ်တွေ သင်ကြားခဲ့ပါတယ်။
        <br>
        နောက်တောင်ကြီးပညာရေးကောလိပ်မှာ လက်ထောက်ကထိက၊ လက်ထောက်မော်ကွန်းထိန်း၊ ဌာနမှူး (စီမံ) တာဝန်များထမ်းဆောင်ခဲ့ပါတယ်။ ပညာရေးဌာနမှာ လုပ်သက် (၃၂)နှစ် လုပ်ခဲ့ပါတယ်။
        အငြိမ်းစားယူပြီးနောက် ကိုယ်ပိုင်ကျောင်းတစ်ခုမှာ ကျောင်းအုပ်တာဝန်ထမ်းဆောင်ခဲ့ပါတယ်။ ယခုလက်ရှိမှာတော့ ရွှေမော်ကွန်းကျောင်းမှာ တွဲဖက်ကျောင်းအုပ်အနေဖြင့်
        ကျွန်မရဲ့လုပ်ငန်းအတွေ့အကြုံပေါ်မူတည်ပြီး ရုံးပိုင်းဆိုင်ရာလုပ်ငန်း၊ ဆရာ ဆရာမ သင်ကြားရေးအပိုင်း၊ ကျောင်းသား ကျောင်းသူလေးများအတွက် တတ်မြောက်မှုစစ်ဆေးရေးအပိုင်းတွေကို
        ညွှန်ကြားကြီးကြပ်ပေးပါတယ်ရှင်။
        <br>
        သင်ကြားသင်ယူမှု လုပ်ငန်းစဉ်များအပြင်် ကျောင်းသား/သူလေးတွေရဲ့ကျန်းမာရေး၊စည်းကမ်းလိုက်နာစေရေး၊ ယဉ်ကျေးသိမ်မွေ့စွာပြောဆိုနေထိုင်တတ်စေရေး နှင့် လူမှုဆက်ဆံရေးတို့ပိုမိုကောင်းမွန်စေအောင်တို့ကိုလည်း
        အလေးထားဆောင်ရွက်ပေးပါတယ်။
        <br>
        ကျွန်မတို့ ရွှေမော်ကွန်းကျောင်းမှာ ဆရာ ဆရာမကလည်း ကလေးများရဲ့ သင်ကြားသင်ယူမှု ၊ တတ်မြောက်မှုတို့ကို အစဉ်တစိုက်အလေးထားဆောင်ရွက်ပေးလျက်ရှိကြပါတယ်။
        ပြောင်းလဲ တိုးတက်နေသော ပညာခေတ်စနစ်တွင် ကလေးများအား ထိရောက်စွာ တီထွင်ဆန်းသစ်သော အဆင့်မီသင်ကြားနည်းများဖြင့် သင်ကြားပြသပေးနိုင်ရန် ဆရာ ဆရာမများအတွက် ဘာသာရပ်ဆိုင်ရာ မွမ်းမံသင်တန်းများနှင့်
        စွမ်းရည်မြှင့်သင်တန်းများကိုလဲ အစဉ်တစိုက်ပံ့ပိုးပေးလျက်ရှိပါတယ်။
        <br>
        ကျွန်မတို့ကျောင်းမှာ National နဲ့ International သင်ရိုးကိုသင်ကြားပေးပြီး English language ကို အသုံးပြုပြောဆိုနေကြပေမဲ့လဲ မြန်မာ့ယဉ်ကျေးမှုနဲ့အညီ ဝတ်စားဆင်ယင်တတ်ဖို့၊
        ယဉ်ကျေးစွာပြောဆိုတတ်ဖို့၊ ထူးချွန်ထက်မြက်ပြီး စာနာနားလည်တတ်သော နိုင်ငံသားကောင်းများဖြစ်လာစေဖို့ ကိုလဲ အဓိကထား ကြီးကြပ်ဆောင်ရွက်ပေးပါတယ်။
        <!--        ဆရာမကြီး ဒေါ်ဝင်းစန္ဒာတင့်ရှိန် သည် အထက်တန်းပြဆရာမ အဖြစ် အထက(၃)တောင်ကြီးတွင် ၁၉၈၁ မှ ၁၉၉၆ အထိ (၁၅ နှစ်) တာဝန်ထမ်းဆောင်ခဲ့ပြီး လက်ထောက်ကထိက အဖြစ် တောင်ကြီး ပညာရေးကောလိပ်တွင် ၁၉၉၆ မှ ၂၀၀၆ အထိ (၁၀ နှစ်) တာဝန်ထမ်းဆောင်ခဲ့ပါသည်။ ထို့အပြင် တောင်ကြီး ပညာရေးကောလိပ်တွင် လက်ထောက်မော်ကွန်းထိန်း အဖြစ် ၂၀၀၆ မှ ၂၀၁  ၃ ခုနှစ် အထိ (၇ နှစ်) တာဝန်ထမ်းဆောင်ခဲ့ပါသည်။ ထို့နောက် ပန်းပျိုးခင်းကိုယ်ပိုင်ကျောင်း၊တောင်ကြီးတွင် ကျောင်းအုပ်ရာထူးဖြင့် ၂၀၁၄ မှ ၂၀၂၀ အထိ (၆နှစ်) တာဝန်ထမ်းဆောင်ခဲ့ပါသည်။ -->
      </P>
        <p  style="text-align: start;line-height: 30px;" >
          ဒေါ်ဝင်းစန္ဒာတင်ရှိန်<br>
          တွဲဖက်ကျောင်းအုပ်ဆရာမကြီး<br>
          B.Ed (၁၉၇၅-၁၉၈၀)
        </p>
      </div>
    
</div>
 </div>
  </div>

<!-- <div class="row gx-0 shadow">-->
<!--  <div class="col-9">-->
<!--      <div   style="margin: 50px;">-->
<!--        <h2 style="color:#F3cd5d;text-align:left;">VICE PRINCIPAL'S MESSAGE</h2>-->
<!--      <P style="text-align:justify;">-->
<!--        ဆရာမကြီး ဒေါ်မြင့်မြင့်ဝင်း သည် အထက်တန်းပြဆရာမ အဖြစ် အထက ဆီဆိုင်တွင် ၁၉၈၃ မှ ၁၉၉၃ အထိ (၁၀ နှစ်) တာဝန်ထမ်းဆောင်ခဲ့ပြီး အ.ထ.က (၁) တောင်ကြီး တွင် ၁၉၉၃ မှ ၂၀၁၉ အထိ (၂၆ နှစ်) တာဝန်ထမ်းဆောင်ခဲ့ပါသည်။ ယခုလက်ရှိတွင် ရွှေမော်ကွန်းကိုယ်ပိုင်အလယ်တန်းကျောင်းတွင် ကျောင်းအုပ်ချုပ်ရေးတာဝန်ကို ထမ်းဆောင်လျှက်ရှိပါသည်။-->
<!--    -->
<!--      </P>-->
<!--      </div>-->
<!--    -->
<!--</div>-->
<!--    <div class="col-3">-->
<!--      <div style=" border:1px;border-style:  solid; width:250px;max-height: 250px; border-radius: 50px; margin: 50px;overflow: hidden; ">-->
<!--        <img src="./../assets/img/teacher/tr4.png" style=" width:250px;max-height: 250px; object-fit: cover;" alt="">-->
<!--  -->
<!--      </div>-->
<!--       </div>-->
<!--  -->
<!-- </div>-->
 <div class="avice_color shadow" style="color:white">
  <div class="row gx-0">
    <div class="col-3">
      <div style=" border:1px;border-style:  solid; width:250px;max-height: 250px; border-radius: 50px; margin: 50px;overflow: hidden; ">
        <img src="./../assets/img/teacher/tr2.png" style=" width:250px;max-height: 250px; object-fit: cover;" alt="">
  
      </div>
       </div>
    <div class="col-9">
      <div   style="margin: 50px;">
        <h2 style="color:#F3cd5d;text-align:left;">HEAD TEACHER MESSAGE</h2>
      <p style="text-align:start;line-height: 30px;">
        ကျွန်မနာမည်ကတော့ ရွှေမော်ကွန်းကျောင်းမှာ Head teacher အနေနှင့် International Curriculum ရဲ့ Teaching and Learning အပိုင်းကို တာဝန်ယူလုပ်ကိုင်ပေးနေတဲ့ ဒေါ်နန်းသက်နွယ်ဦးဖြစ်ပါတယ်ရှင်။
        <br>
        ကျွန်မကတော့ အမေရိကန်သံရုံးကပေးအပ်တဲ့ English Access Micro Scholarship Program Award ကို ရရှိခဲ့ပါတယ်။ သင်ကြားရေးလုပ်သက်အနေဖြင့် International ကျောင်းတစ်ကျောင်းတွင် (၅) နှစ်လုပ်ခဲ့ပြီး ယခု ရွှေမော်ကွန်းကျောင်းတွင် ၂၀၁၆ မှ စတင်တာဝန်ထမ်းဆောင်ခဲ့ပါသည်။
        <br>
        ရွှေမော်ကွန်းကိုယ်ပိုင်ကျောင်းတွင် ဆရာ ဆရာမများ၏ သင်ကြာမှုထိရောက်စေရန် အတန်းတွင်းသင်ကြားမှုများကိုအကဲဖြတ်စစ်ဆေးပေးပြီး အရည်အသွေးမြှင့်သင်တန်းများကိုလည်း စီစဉ်ပေးလျက်ရှိပါတယ်။ အတန်းလိုက် ဘာသာရပ်ခွဲဝေမှုတာဝန်ကိုလဲ ထမ်းဆောင်ပေးပါတယ်။
        <br>
        Daw Nang Thet New Oo <br>
        Head Teacher <br>
        B.A (English) <br>
        Certificate in TESOL Methodology (Canvas) <br>
        Certificate in Jolly Phonics <br>
        Cambridge International Diploma in Teaching and Learning (Candidate)
      </p>

<!--        <P style="text-align:justify;">-->
<!--        Since she was younger, speaking English has really influenced her. In order to acquire a foundational understanding of the English language after high school, she took Basic and Pre-Intermediate English courses at St. Aloysius Gonzaga Language Institute. She continued her education at Taunggyi University, where she earned a Bachelor of Arts in English. In addition, she was awarded an Access Micro Scholarship Program to study English under the management of U.S. Embassy in Rangoon. She was motivated to become a teacher by all of her instructors. She enjoys instructing young students and equip the 21st century skills to students. She has been in the private education industry for more than ten years.-->
<!--      </P>-->
      </div>
    
</div>
 </div>
  </div>


 <div class="row gx-0 shadow">
   <div class="col-3">
     <div style=" border:1px;border-style:  solid; width:250px;max-height: 250px; border-radius: 50px; margin: 50px;overflow: hidden; ">
       <img src="./../assets/img/teacher/tr1.png" style=" width:250px;max-height: 250px; object-fit: cover;" alt="">
     </div>
   </div>
  <div class="col-9">
      <div   style="margin: 50px;">
        <h2 style="color:#F3cd5d;text-align:left;">DEPUTY HEADTEACHER</h2>
      <p style="text-align:start;line-height: 30px;">
        ကျွန်မကတော့ ရွှေမော်ကွန်းကိုယ်ပိုင်အလယ်တန်းကျောင်းတွင် စည်းကမ်းပိုင်းဆိုင်ရာ နှင့် ဝန်ထမ်းရွေးချယ်  ခန့်အပ်ရေးအပိုင်းတွင်တာဝန်ယူဆောင်ရွက်ပေးလျက်ရှိပါတယ်ရှင်။
        <br>
        ရွှေမော်ကွန်းကိုယ်ပိုင်အလယ်တန်းကျောင်းသည် ကျောင်းသား/သူလေးများ၏ သင်ကြားသင်ယူမှုတွင် ထူးချွန်ထက်မြက်စေရန်သာမက ယဉ်ကျေးလိမ္မာပြီး
        စည်းကမ်းကိုစနစ်တကျလိုက်နာတတ်စေရန် အမြဲသွန်းသင်ဆုံးမပေးလျက်ရှိပါတယ်။ <br>
        ရွှေမော်ကွန်းကိုယ်ပိုင်အလယ်တန်းကျောင်းတွင်် ကျောင်းကောင်စီအဖွဲ့ကို ဖွဲ့စည်းထားရှိပြီး ကျောင်းကောင်စီအဖွဲ့ဝင်ကျောင်းသား/သူများနှင့် ဆရာ ဆရာမများအတူတကွပူးပေါင်းပြီး
        ကျောင်းသား/သူများလိုက်နာရမည့် စည်းကမ်းများကိုချမှတ်ထားပါတယ်။<br>
        Daw Nang Mya Nandar Soe <br>
        Deputy Head Teacher <br>
        B.A (Myanmar)
      </p>
      </div>
  </div>
 </div>

  <div class="row gx-0 shadow">
   <div class="col-3">
     <div style=" border:1px;border-style:  solid; width:250px;max-height: 250px; border-radius: 50px; margin: 50px;overflow: hidden; ">
       <img src="" style=" width:250px;max-height: 250px; object-fit: cover;" alt="">
     </div>
   </div>
  <div class="col-9">
      <div   style="margin: 50px;">
        <h2 style="color:#F3cd5d;text-align:left;">Secondary School Coordinator/ English Subject Lead</h2>
      <p style="text-align:start;line-height: 30px;">
        ကျွန်မကတော့ ဒေါ်နန်းမိုးပွင့်ဖြူ ဖြစ်ပါတယ်ရှင်။ လက်ရှိ ရွှေမော်ကွန်းကိုယ်ပိုင်အလယ်တန်းကျောင်းမှာ Secondary School Coordinator နှင့် English Subject Lead
        အနေနဲ့ ပူးတွဲတာဝန်ထမ်းဆောင်နေပါတယ်။ <br>
        ရွှေမော်ကွန်းကိုယ်ပိုင်ကျောင်းမှ အလယ်တန်းကျောင်းသား/သူများ နိုင်ငံတကာအဆင့်မီ အရည်အသွေးပြည့်ဝသောပညာရေးကို လက်လှမ်းမီအောင် လေ့ကျင့်ပျိုးထောင်ပေးနေပါတယ်။<br>
        ဒေါ်နန်းမိုးပွင့်ဖြူ <br> B.A (English) <br>
        Certificate in TESOL Methodology (Canvas) <br>
        Cambridge English Diploma in Teaching and Learning (Candidate)
      </p>
      </div>
  </div>
 </div>


  <div class="row gx-0 shadow">
   <div class="col-3">
     <div style=" border:1px;border-style:  solid; width:250px;max-height: 250px; border-radius: 50px; margin: 50px;overflow: hidden; ">
       <img src="" style=" width:250px;max-height: 250px; object-fit: cover;" alt="">
     </div>
   </div>
  <div class="col-9">
      <div   style="margin: 50px;">
        <h2 style="color:#F3cd5d;text-align:left;">Primary School Coordinator</h2>
      <p style="text-align:start;line-height: 30px;">
        ကျွန်မကတော့ ရွှေမော်ကွန်းကိုယ်ပိုင်အလယ်တန်းကျောင်းရဲ့ Primary School Coordinator ဒေါ်တင်နီလာဆွေဖြစ်ပါတယ်ရှင်။
        Kindergarten ကနေ Year 6 အထိ ကျောင်းသား/သူများ၏ သင်ကြားသင်ယူမှုမှာ တိုးတက်မှုရှိစေဖို့ ကြီးကြပ်ပေးပါတယ်။<br>
        ဒေါ်တင်နီလာဆွေ <br>
        B.Sc (Physics) <br>
        Cambridge English Diploma in Teaching and Learning (Candidate)
      </p>
      </div>
  </div>
 </div>

  <div class="row gx-0 shadow">
    <div class="col-3">
      <div style=" border:1px;border-style:  solid; width:250px;max-height: 250px; border-radius: 50px; margin: 50px;overflow: hidden; ">
        <img src="" style=" width:250px;max-height: 250px; object-fit: cover;" alt="">
      </div>
    </div>
    <div class="col-9">
      <div   style="margin: 50px;">
        <h2 style="color:#F3cd5d;text-align:left;">Weekend International Programme Coordinator</h2>
        <p style="text-align:start;line-height: 30px;">
          ကျွန်မကတော့ Weekend International Programme Coordinator ဒေါ်နွေးနွေးအိဖြစ်ပါတယ်။
          သင်ကြားရေးလုပ်သက်အနေဖြင့် International ကျောင်းတစ်ကျောင်းတွင် (၄)နှစ်လုပ်ခဲ့ပြီး ယခုရွှေမော်ကွန်းကျောင်းတွင် ၂၀၁၇ မှ စတင်တာဝန်ထမ်းဆောင်ခဲ့ပါတယ်။<br>
          ယခုလက်ရှိမှာတော့ ရွှေမော်ကွန်းကိုယ်ပိုင် အလယ်တန်းကျောင်းရဲ့ Weekend International Programme Coordinator အဖြစ်တာဝန်ထမ်းဆောင်နေပါတယ်ရှင့်။
          ရွှေမော်ကွန်း ကျောင်းရဲ့ Weekend International Programme ကို ၂ဝ၂၂-၂၀၂၃ ပညာသင်နှစ်မှာ ကလေးများအတွက် အနာဂါတ်မှာ အထောက်အပံ့အများကြီးပေးနိုင်မဲ့
          ဘာသာရပ်ကြီး(၅)ခုဖြစ်တဲ့ English, Maths, Science, Computing/Coding နှင့် Global citizenship ဆိုပြီး ထည့်သွင်းသင်ကြားပေးလျက်ရှိပါတယ်ရှင်။<br>
          ကျွန်မတို့ ရွှေမော်ကွန်းကျောင်းမှာ Weekday တက်တဲ့ ကလေးနဲ့ Weekend တက်တဲ့ကလေးတွေအတွက် သင်ရိုးတွေကို ခွဲခြားထားတာမျိုးမရှိပါဘူး။
          ရွှေမော်ကွန်းကျောင်းမှာတက်တဲ့ ဘယ်ကလေးကိုမဆို ပညာရေးအခွင့်အလမ်းတွေကို တန်းတူဖန်တီးပေးမှာပါပဲ။ ကျွန်မတို့ ရွှေမော်ကွန်းမိသားစုအနေနဲ့လဲ ပိုမိုကောင်းမွန်တဲ့ အဆင့်မီပညာရေးမျိုးကို
          ကလေးများလက်လှမ်းမီအောင် ဖြည့်ဆည်းပေးနိုင်ဖို့ဆက်လက်ကြိုးစားသွားပါဦးမယ်ရှင်။
          <br>
          Weekend International Programme Coordinator <br>
          Daw Nway Nway Ei <br>
          B.A (English) <br>
          Certificate in TESOL Methodology (Canvas) <br>
          Certificate in Jolly Phonics <br>
          Cambridge English Diploma in Teaching and Learning Candidate)
        </p>
      </div>
    </div>
  </div>


  <div class="avice_color shadow" style="color:white">
    <div class="row gx-0">
    <div class="col-3">
      <div style=" border:1px;border-style:  solid; width:250px;max-height: 250px; border-radius: 50px; margin: 50px;overflow: hidden; ">
        <img src="./../assets/img/teacher/tr2.png" style=" width:250px;max-height: 250px; object-fit: cover;" alt="">
  
      </div>
       </div>
    <div class="col-9">
      <div   style="margin: 50px;">
        <h2 style="color:#F3cd5d;text-align:left;">NATIONAL CURRICULUM COORDINATOR (TR. KAY THI) MESSAGE</h2>
      <p style="text-align:start;line-height: 30px;">
        ရွှေမော်ကွန်းကိုယ်ပိုင်အလယ်တန်းကျောင်းမှာ ကျွန်မရဲ့အဓိကတာဝန်ကတော့ ပညာရေးဝန်ကြီးဌာနမှပြဌာန်းထားတဲ့ အခြေခံပညာသင်ရိုး သင်ကြားရေးကို ကြီးကြပ်အုပ်ချုပ်ရပါတယ်ရှင့်။
        <br>
        ကလေးများသင်ခန်းစာသင်ယူမှုအပေါ် နားလည်တတ်မြောက်မှု ရှိ/မရှိ ကိုလည်း စာသင်ခန်းတွင်း သင်ခန်းစာတစ်ခုသင်ပြီးတိုင်း ညွှန်ကြားထားတဲ့အတိုင်း အကဲဖြတ်စစ်ဆေးမှုတွေကိုလည်း ပြုလုပ်ပေးပါတယ်။
        ပညာသင်နှစ် တစ်နှစ်လုံးအတွက် ပညာရေးဝန်ကြီးဌာနက သတ်မှတ်ထားတဲ့ တတ်မြောက်မှုစစ်ဆေးခြင်း (၄) ကြိမ်ကိုလည်း သတ်မှတ်ချိန်အတိုင်း စစ်ဆေးပေးပါတယ်။<br>
        ဒေါ်ကေသီခိုင် <br>
        National Curriculum Coordinator <br>
        M.Sc (Biotech)
      </p>
      </div>
    
</div>
 </div>
  </div>

  <div class="row gx-0 shadow">
    <div class="col-3">
      <div style=" border:1px;border-style:  solid; width:250px;max-height: 250px; border-radius: 50px; margin: 50px;overflow: hidden; ">
        <img src="" style=" width:250px;max-height: 250px; object-fit: cover;" alt="">

      </div>
    </div>
  <div class="col-9">
      <div   style="margin: 50px;">
        <h2 style="color:#F3cd5d;text-align:left;">Student Affairs/Head of School Counsellor
        </h2>
      <p style="text-align:start;line-height: 30px;">
        ကျွန်မက တော့ ရွှေမော်ကွန်းကိုယ်ပိုင်အလယ်တန်းကျောင်းမှာ Head of School Counsellor အနေနဲ့ ကျောင်းသားရေးရာ အပိုင်း ကို အဓိက တာဝန်ယူထားပါတယ်။<br>
        ကလေးသူငယ် စောင့်ရှောက်ရေးနှင့် ကာကွယ်ရေး (Safe Guarding and Child Protection) မူဝါဒများကို နိုင်ငံတကာစံနှုန်းများနှင့်အညီ ပြုစုရေးဆွဲပြီး လိုက်နာကျင့်သုံးနေပါတယ်။
        နည်းပညာဖွံ့ဖြိုးတိုးတက်လာတဲ့ ယခုခေတ်မှာဆိုရင် ဆရာ ဆရာမ များအနေဖြင့် ကလေးစိတ်ပညာကို နားလည်ထားဖို့က အလွန်ပင်အရေးကြီးပါတယ်။
        ရွှေမော်ကွန်းကျောင်းမှာဆိုရင် ကလေးတွေရဲ့ပညာရေးကိုသာမက စိတ်ခံစားချက်နဲ့အပြုအမူပြောင်းလဲမှုကိုလည်း လမ်းမှန်ရောက်အောင် အပြုသဘောဆောင် ဆွေးနွေးပေးပါတယ်။
        ကျောင်းသားကျောင်းသူများကို အကောင်းဆုံးပံ့ပိုးပေးနိုင်ရန် မိမိနှစ်သက်ရာ ဆရာ၊ဆရာမ (Trusted Adult) ကိုရွေးချယ်ပြီး လွတ်လပ်စွာ ရင်ဖွင့်ဆွေးနွေးတိုင်ပင်နိုင်အောင်လဲစီစဉ်ထားပါတယ်။
        <br>
        Daw Nang Win Myint Aye <br>
        Student Affairs/Head of School Counsellor <br>
        M.Sc. (Biotech) <br>
        Certificate in Intermediate Counselling Training
      </p>
      </div>
    
</div>
 </div>

  <div class="row gx-0 shadow">
    <div class="col-3">
      <div style=" border:1px;border-style:  solid; width:250px;max-height: 250px; border-radius: 50px; margin: 50px;overflow: hidden; ">
        <img src="" style=" width:250px;max-height: 250px; object-fit: cover;" alt="">

      </div>
    </div>
  <div class="col-9">
      <div   style="margin: 50px;">
        <h2 style="color:#F3cd5d;text-align:left;">Early Years Trainers/ Advisor
        </h2>
      <p style="text-align:start;line-height: 30px;">
        ကျွန်မကတော့ ရွှေမော်ကွန်းကိုယ်ပိုင်ကျောင်းတွင် မူလတန်းကြိုအတန်းများ၏သင်ကြားရေးကို ကြီးကြပ်ပေးပါတယ်။
        ထို့အပြင် ဆရာမများကိုလည်း ကလေးငယ်များအတွက်မရှိမဖြစ်လိုအပ်တဲ့ (၂၁)ရာစုစွမ်းရည်များကို သင်ကြားပေးနိုင်ရန် နှင့် မူလတန်းကြိုကလေးများအား သင်ကြားနည်းစနစ်အမျိုးမျိုးကို
        လက်တွေ့အသုံးချသင်ကြားနိုင်စေရန်မွမ်းမံလေ့ကျင့်ပေးနေပါတယ်ရှင်။
        <br>
        ဒေါ်ခင်ခင်ဌေး <br>
        Pre-school Early Years Trainer <br>
        B.A(History) <br>
        Certificate In Early Childhood Care and Development (ECCD) <br>
        Certificate in Early Years Teaching Programme, Bell English (UK) <br>
      </p>
      </div>

</div>
 </div>
  <div class="row gx-0 shadow">
    <div class="col-3">
      <div style=" border:1px;border-style:  solid; width:250px;max-height: 250px; border-radius: 50px; margin: 50px;overflow: hidden; ">
        <img src="" style=" width:250px;max-height: 250px; object-fit: cover;" alt="">

      </div>
    </div>
  <div class="col-9">
      <div   style="margin: 50px;">
        <h2 style="color:#F3cd5d;text-align:left;">Pre School-Coordinator
        </h2>
      <p style="text-align:start;line-height: 30px;">
        ကျွန်မကတော့ ရွှေမော်ကွန်းကိုယ်ပိုင်မူလတန်းကြိုကျောင်းတွင် ရုံးပိုင်းဆိုင်ရာလုပ်ငန်းတာဝန်များကို စနစ်တကျဖြစ်အောင် စီစဉ်ပေးခြင်း၊ ကျောင်းသား/သူအသစ်များအတွက်
        အသက်အရွယ်အလိုက် ဖွံ့ဖြိုးတိုးတက်မှုနှင့်ကိုက်ညီသော အတန်းများကို စီစစ်၍ခွဲခြားပေးခြင်း၊ သင်ကြားရေးပိုင်းနှင့်ပတ်သက်သည့်စာအုပ်များ၊ စာရွက်စာတမ်းများကို ပိုမိုကောင်းမွန်မှုရှိအောင်
        စီစဉ်ပေးခြင်း၊ ကျောင်းစည်းကမ်းနှင့်ပတ်သက်သည့် အကြောင်းအရာများ၊ ကြေညာချက်များကို မိဘများထံသို့ အချိန်နှင့်တစ်ပြေးညီ ရောက်ရှိအောင် ကြီးကြပ်ဆောင်ရွက်ပေးနေပါတယ်။
        <br>
        ဒေါ်အေးသီရိခိုင် <br>
        B.A (English) <br>
        Certificate in Early Years Teaching Programme, Bell English (UK) <br>
      </p>
      </div>

</div>
 </div>
  <div class="row gx-0 shadow">
    <div class="col-3">
      <div style=" border:1px;border-style:  solid; width:250px;max-height: 250px; border-radius: 50px; margin: 50px;overflow: hidden; ">
        <img src="" style=" width:250px;max-height: 250px; object-fit: cover;" alt="">

      </div>
    </div>
  <div class="col-9">
      <div   style="margin: 50px;">
        <h2 style="color:#F3cd5d;text-align:left;">Senior English Teacher Message
        </h2>
      <p style="text-align:start;line-height: 30px;">
        ကျွန်မသည် ရွှေမော်ကွန်းကိုယ်ပိုင်အလယ်တန်းကျောင်းတွင် English သင်ကြားနေသော Senior ဆရာမ တစ်ဦးဖြစ်ပါတယ်။ English တွင် English Language နှင့်
        Literacy နှစ်ပိုင်းရှိသည့်အနက် ကျွန်မသည် Literacy အပိုင်းမှ Writing အပိုင်းကို တာဝန်ယူ သင်ကြားပေးနေပါသည်။
        ကျွန်မအနေနှင့် ရွှေမော်ကွန်းကိုယ်ပိုင်အလယ်တန်းကျောင်းတွင် General Writing ရေးသားနည်း နှင့် Academic Writing ရေးသားနည်း ကို အဓိအားပြုသင်ကြားနေပါသည်။
        ထို့အပြင် သင်ကြားသင်ယူမှုဖြစ်စဉ် နှင့် ပတ်သက်နေသော အခြားသောလုပ်ငန်းဆောင်တာများလည်း တာဝန်ယူထားပါတယ်ရှင့်။
        <br>
        ဒေါ်မေသဇင်ဖူး <br>
        M. A (English) <br>
        Diploma in TESOL (LTTC, UK) <br>
        Certificate in Applied ECCD (Brighter Future) <br>
        Certificate in Online Learning Management (SIS ELT INSTITUTE)
      </p>
      </div>

</div>
 </div>
  <div class="row gx-0 shadow">
    <div class="col-3">
      <div style=" border:1px;border-style:  solid; width:250px;max-height: 250px; border-radius: 50px; margin: 50px;overflow: hidden; ">
        <img src="" style=" width:250px;max-height: 250px; object-fit: cover;" alt="">

      </div>
    </div>
  <div class="col-9">
      <div   style="margin: 50px;">
        <h2 style="color:#F3cd5d;text-align:left;">Senior Computing Teacher Message</h2>
      <p style="text-align:start;line-height: 30px;">
        ကျွန်မကတော့ လက်ရှိ ရွှေမော်ကွန်းကိုယ်ပိုင်ကျောင်းမှာ အလယ်တန်းကလေးတွေကို Computing ဘာသာရပ်ကိုသင်ကြားပေးနေတဲ့ ဒေါ်နန်းအေးဗိုလ်ခမ်းပဲဖြစ်ပါတယ်။ ကျွန်မကတော့ James Cook University, Australia (Singapore Campus) တွင် Bachelor of Information Technology ဘွဲ ့ကို
        ထူးချွန်စွာပြီးမြောက်အောင်မြင်ခဲ့ပါတယ်။ <br>
        2017-18 အတွင်း JCUS Foundation Program ကျောင်းသူ/ကျောင်းသာများအတွက် Maths / Statistics ကို campus အတွင်း Peer Tutor အဖြစ် သင်ကြားကူညီခဲ့ပါတယ်။
        တစ်ဖက်တွင်လည်း IT ဘာသာရပ်ပေါင်း 24 ဘာသာကို လက်တွေ့ စာတွေ့ သင်ယူရင်း project ပေါင်း မြောက်များစွာကို ပြုလုပ်ပြီး MDP project အတွက် The Best Creative Video Award ကို ရရှိခဲ့ပါတယ်။
        <br>
        ဒေါ်နန်းအေးဗိုလ်ခမ်း <br>
        Bachelor of Information Technology <br>
        James Cook University, Australia (Singapore Campus) <br>
        B.A (English)
      </p>
      </div>

</div>
 </div>
</section>



            <section>
                    <!-- <div class='about_school_page '>
                            <div>

                            </div>
                            

                    </div> -->

            </section>
               <section>
                    <!-- <div class='about_school_page1 '>
                            <div class='about_school_page_in1' >
                                <h2> About Shwe Maw Kun</h2>
               <p style="text-align:justify;">
                        Shwe Maw Kun Education Group (registered as Maw Kun International Education Group) is a both local and international education provider founded in January 2015 to provide a quality local and international education, and foster invidividual development with relatively affordable fees in the region. </p>
                              <router-link class=" btn btn-warning" :to="{ name: 'Procedure', params: { userId: 3 }}">Admission Now</router-link>
                        
                            </div>
                            

                    </div> -->

            </section>

            <!-- <section class="mvpart1">
     
     <div class="container ">


                <h1> Our Vision and Mission</h1>
                      <br><br>
                    <div class="vcardin vcard  ">
                      
           
                        <h2 style="text-align:left; font-weight: 700;"> Our Vision</h2>
                 <p style="text-align:justify"> 
                     To become a nationally and internationally-recognised school providing quality and affordable education to pupils to develop confidence, competence and to prepare each pupil for a socially responsible and compassionate citizen.
                
                     
                     </p>
                        <h2 style="text-align:left; font-weight: 700;"> Our Mission</h2>
                 <p > 
                     
            <ol type="1">
              <li style="text-align:justify">
                To care for our pupils, to educate them and to bring out the best in every one of them to develop confidence, competence and consideration for others to be, become and being responsible, productive and compassionate citizens.<br><br>

              </li>

              <li style="text-align:justify">
                To provide a safe and stimulating learning environment with a creative orientation across the whole curriculum and ensure pupils of all abilities are well equipped to meet the challenges of learning and life in ever-changing world. <br><br>


              </li>


              <li style="text-align:justify">

                To offer the best possible well-rounded quality education incorporated with nationally and internationally recognised qualification with relatively reasonable fees in the region.

              </li>

            </ol>         


                     
                     </p>

                                  <h2 style="text-align:left; font-weight: 700;"> Our Goal</h2>
                 <p > 
                  <ol type="1" style="text-align:justify">
<li>To recruit, develop and retain inspiring teachers who are all fully committed to driving the school forward as an outstanding education provider in the region.<br><br>
  </li>

  <li>To provide the continuous development in teaching methodology and curriculum to meet both national and international standards.<br><br>
  </li>

  <li>To develop a challenging and innovative education system incorporated with national- based and international-based curriculum that fosters all the skills and equips our pupils for the next step in their education and for life  <br><br>
</li>

<li>To create and promote a lifelong learning and empower our pupils with 21st century skills. <br><br>

</li>


<li>To prepare each pupil for a socially responsible and compassionate citizen. <br><br>
                  
                  <br><br>
     

</li>
</ol>  



                    
                     </p>
                 </div>


     </div>

 </section> -->


     
     
        

          
            <section id="examcenter" tabindex="0"  class="" style="width:100%; height:100%;  padding:10px; ;"  >
              <div class="shadow m-5 p-4">
                <h2 class="m-3"> <b>INTERNATIONAL OLYMPIAD EXAM</b> </h2>
                <div class="row mb-5">
                  <div class="col-4">
                    <img src="../assets/img/timo.jpg" style="width: 300px;" alt="">

                  </div>
                  <div class="col-4">
                    <img src="../assets/img/south_asia_math.jpg" style="width: 300px;" alt="">

                  </div>
                  <div class="col-4">
                    <img src="../assets/img/hk_math.jpg" style="width: 300px;" alt="">

                  </div>
                </div>
                <div class="row">
                  <div class="col-4">
                    <img src="../assets/img/hippo2022.jpg" style="width: 300px;" alt="">

                  </div>
                  <div class="col-4">
                    <img src="../assets/img/hk_science.jpg" style="width: 200px;" alt="">

                  </div>
                  <div class="col-4">
                    <img src="../assets/img/hk_international_computer.jpg" style="width: 300px;" alt="">

                  </div>
                </div>
<!--              <img style="width:100%; height:100%; object-fit: contain;" src="./../assets/img/ourpartner.png" alt="">-->

                </div>
           
           
            </section>
              <section id="parter"  class="" style="width:100%; height:100%;  padding:10px; " >
                <div class="shadow m-5 p-4">
                  <h2 class="m-3"> <b>OUR ACCREDITATIONS</b> </h2>
             <img style="width:100%; height:300px;object-fit: contain;" src="./../assets/img/ourpartner2.png" alt="">

                </div>
       
            </section>

            
    </div>
</template>

<script>
import $ from "jquery";
import MV from '../views/vision_mission.vue'
export default {
    components:{
        MV
    },
    data () {
        

        return {
          font_type: localStorage.getItem('font_type'),
        }
    },
  
    mounted(){
    
    
//       $(document).ready(function() {
	
// });
        $("#scrolldown").hide();
            $(document).ready(function(){
  $("#scrolldownbtn").click(function(){
     $( "#scrolldown" ).slideToggle( "slow", function() {
    // Animation complete.
  });
  });




  var oldId = null;

	$('.tabs-controls__link').click(function(e) {
		e.preventDefault();

		if ($(this).hasClass('tabs-controls__link--active')) {
			return false;
		}

		var currentId = parseInt($(this).data('id'), 10);
		$('.tabs-controls__link--active').removeClass('tabs-controls__link--active');
		$(this).addClass('tabs-controls__link--active');

		if (currentId < oldId) { // item is hidden
			var timing = $('.card.hidden').length * 100;
			$('.card').each(function(index) {
				if (index > (currentId - 1 ) || index == (currentId - 1)) {
					window.setTimeout(function() {
						$('.card').eq(index).removeClass('hidden');
					}, timing - (index * 100));
				}
			});
		} else {
			$('.card').each(function(index) {
				if (index < (currentId - 1)) {
					window.setTimeout(function() {
						$('.card').eq(index).addClass('hidden');
					}, index * 100);
				}
			});
		}

		oldId = currentId;
	});
});
    }
}
</script>

<style lang="scss" scoped>
.avice_color{
  background: rgb(55,0,58);
background: linear-gradient(355deg, rgba(55,0,58,1) 0%, rgba(77,0,82,1) 49%, rgba(113,0,120,1) 100%);
}

$itemsCount: 6; // Adjust if tabs number changes
// Fonts
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700');

h1 {
  margin: 0;
  font-size: 30px;
  line-height: 1;
  color: rgb(0, 0, 0);
}

// Layout
.page {
  width: 100vw;
  height: 60vh;
  min-height: 700px;
  overflow: hidden;
}

// Tabs
.tabs-controls {
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 50px 0 100px;
  list-style-type: none;
}

.tabs-controls__link {
  position: relative;
  display: block;
  padding: 16px 32px;
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  text-transform: uppercase;
  text-decoration: none;

  &:after {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    width: 0;
    height: 4px;
    background-color: #ebebeb;
    border-radius: 2px;
    margin: auto;
    content: '';
    transition: width 0.4s;
  }
}

.tabs-controls__link--active {
  &:after {
    width: 100%;
  }
}

// Cards
@media (max-width:480px){
.cards-container {

  position: relative;
  z-index: 1;
  width: 25vh;
  height: calc(100vh - 205px);
  margin: 0 auto;
}

.card {
  position: absolute;
  width: 20vh;
  height: 300px;
  background-color: gold;
  border: 1px solid #423E37;
  box-shadow: 9px 11px 3px 0px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  padding: 40px;

  transition: transform 0.3s, opacity 0.2s;

  &.hidden {
    z-index: 100;
    background-color: #fff;
    color: #fff;
    opacity: 0;

    transition: color 0.5s, background-color 0.5s, transform 1s, opacity 0.2s 0.4s;

    h1 {
      color: #fff;

      transition: color 0.5s
    }

    @for $i from 1 through $itemsCount {
      &:nth-of-type(#{$i}) {
        transform: rotate(random(100) - 100 + deg) translateX((random(1) + 100) * 1%) translateY(random(60) * -1%) scale(random(10)*0.1) skewX(random(12) + deg) skewY(random(12) + deg);
      }
    }
  }

  @for $i from 1 through $itemsCount {
    $zIndexStartValue: $itemsCount + 1; // we don't want an item with 0 index
    $xValue: ($i - 1) * 10px; // we want to start translating from 0
    $yValue: ($i - 1) * 10px; // we want to start translating from 0
    $zIndexValue: $itemsCount - $i; // reverse the z-index, so first item is on top

    &:nth-of-type(#{$i}) {
      z-index: $zIndexValue;
      transform: translateX(#{$xValue}) translateY(#{$yValue});
    }
  }
}



}
@media (max-width:960px){
.cards-container {

  position: relative;
  z-index: 1;
  width: 650px;
  height: calc(100vh - 205px);
  margin: 0 auto;
}

.card {
  position: absolute;
  width: 600px;
  height: 300px;
  background-color: gold;
  border: 1px solid #423E37;
  box-shadow: 9px 11px 3px 0px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  padding: 40px;

  transition: transform 0.3s, opacity 0.2s;

  &.hidden {
    z-index: 100;
    background-color: #fff;
    color: #fff;
    opacity: 0;

    transition: color 0.5s, background-color 0.5s, transform 1s, opacity 0.2s 0.4s;

    h1 {
      color: #fff;

      transition: color 0.5s
    }

    @for $i from 1 through $itemsCount {
      &:nth-of-type(#{$i}) {
        transform: rotate(random(100) - 100 + deg) translateX((random(1) + 100) * 1%) translateY(random(60) * -1%) scale(random(10)*0.1) skewX(random(12) + deg) skewY(random(12) + deg);
      }
    }
  }

  @for $i from 1 through $itemsCount {
    $zIndexStartValue: $itemsCount + 1; // we don't want an item with 0 index
    $xValue: ($i - 1) * 10px; // we want to start translating from 0
    $yValue: ($i - 1) * 10px; // we want to start translating from 0
    $zIndexValue: $itemsCount - $i; // reverse the z-index, so first item is on top

    &:nth-of-type(#{$i}) {
      z-index: $zIndexValue;
      transform: translateX(#{$xValue}) translateY(#{$yValue});
    }
  }
}

}
@media (min-width:1025px){
.cards-container {
  
  position: relative;
  z-index: 1;
  width: 750px;
  height: calc(100vh - 205px);
  margin: 0 auto;
}

.card {
  position: absolute;
  width: 700px;
  height: 300px;
  background-color: gold;
  border: 1px solid #423E37;
  box-shadow: 9px 11px 3px 0px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  padding: 40px;

  transition: transform 0.3s, opacity 0.2s;

  &.hidden {
    z-index: 100;
    background-color: #fff;
    color: #fff;
    opacity: 0;

    transition: color 0.5s, background-color 0.5s, transform 1s, opacity 0.2s 0.4s;

    h1 {
      color: #fff;

      transition: color 0.5s
    }

    @for $i from 1 through $itemsCount {
      &:nth-of-type(#{$i}) {
        transform: rotate(random(100) - 100 + deg) translateX((random(1) + 100) * 1%) translateY(random(60) * -1%) scale(random(10)*0.1) skewX(random(12) + deg) skewY(random(12) + deg);
      }
    }
  }

  @for $i from 1 through $itemsCount {
    $zIndexStartValue: $itemsCount + 1; // we don't want an item with 0 index
    $xValue: ($i - 1) * 10px; // we want to start translating from 0
    $yValue: ($i - 1) * 10px; // we want to start translating from 0
    $zIndexValue: $itemsCount - $i; // reverse the z-index, so first item is on top

    &:nth-of-type(#{$i}) {
      z-index: $zIndexValue;
      transform: translateX(#{$xValue}) translateY(#{$yValue});
    }
  }
}


}



 
@media (min-width: 1200px)  {
    .smk_responsive{
  zoom:.9;
  // transform: scale(0.5);
}
  }

@media (min-width: 1000px) AND (max-width: 1200px) {
    .smk_responsive{
  zoom:.8;
  // transform: scale(0.5);
}
  }



  @media (min-width: 800px) AND (max-width: 1000px) {
    .smk_responsive{
  zoom:.6;
  // transform: scale(0.5);
}
  }

  @media (min-width: 600px) AND (max-width: 800px) {
    .smk_responsive{
  zoom:.5;
  // transform: scale(0.5);
}
  }
  @media (min-width: 500px) AND (max-width: 600px) {
    .smk_responsive{
  zoom:.4;
  // transform: scale(0.5);
}
  }


@media (max-width: 500px) {
  .smk_responsive{
  zoom:.3;
  // transform: scale(0.5);
}
  }





 
@media (min-width: 1200px)  {
    .smk_responsive2{
  zoom:1;
  // transform: scale(0.5);
}
  }

@media (min-width: 1000px) AND (max-width: 1200px) {
    .smk_responsive2{
  zoom:.9;
  // transform: scale(0.5);
}
  }



  @media (min-width: 800px) AND (max-width: 1000px) {
    .smk_responsive2{
  zoom:.8;
  // transform: scale(0.5);
}
  }

  @media (min-width: 600px) AND (max-width: 800px) {
    .smk_responsive2{
  zoom:.7;
  // transform: scale(0.5);
}
  }
  @media (min-width: 500px) AND (max-width: 600px) {
    .smk_responsive2{
  zoom:.6;
  // transform: scale(0.5);
}
  }


@media (max-width: 500px) {
  .smk_responsive2{
  zoom:.5;
  // transform: scale(0.5);
}
  }





 
@media (min-width: 1200px)  {
    .smk_responsive3{
  zoom:1;
  // transform: scale(0.5);
}
  }

@media (min-width: 1000px) AND (max-width: 1200px) {
    .smk_responsive3{
  zoom:.8;
  // transform: scale(0.5);
}
  }



  @media (min-width: 800px) AND (max-width: 1000px) {
    .smk_responsive3{
  zoom:.7;
  // transform: scale(0.5);
}
  }

  @media (min-width: 600px) AND (max-width: 800px) {
    .smk_responsive3{
  zoom:.6;
  // transform: scale(0.5);
}
  }
  @media (min-width: 500px) AND (max-width: 600px) {
    .smk_responsive3{
  zoom:.5;
  // transform: scale(0.5);
}
  }


@media (max-width: 500px) {
  .smk_responsive3{
  zoom:.4;
  // transform: scale(0.5);
}
  }

</style>