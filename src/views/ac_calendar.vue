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
                  <router-link   :to="{ name: 'Pre', params: { userId: 3 }}" class="nav-link m-3">Pre-School</router-link>
                    <router-link   :to="{ name: 'newpri', params: { userId: 3 }}" class="nav-link m-3">Primary-School</router-link>
                    <router-link   :to="{ name: 'newsec', params: { userId: 3 }}" class="nav-link m-3">Secondary-School</router-link>

                    <router-link   :to="{ name: 'Procedure', params: { userId: 3 }}" class="nav-link m-3 ">Academic Procedure</router-link>
                    <router-link   :to="{ name: 'Fees', params: { userId: 3 }}" class="nav-link m-3">Fees</router-link>
                    <router-link   :to="{ name: 'AcademicCalendar', params: { userId: 3 }}" class="nav-link m-3 active">Academic Calendar</router-link>
         
                
               
                </div>
                </div>
                
                
                
                </div>
            </div>
        </div>
  
            <main class="col ps-md-2 pt-2  vh-100 overflow-scroll ">
              
           <div class="page-header ">
            <h1>Calendar</h1>
            </div>
          
            <hr>
            <div class="row">
                <div class="col-12">

                
     
     <div class="row gx-0">
         <div class="col-sm-8">
             <div class="calendar">
                    <div id="evoCalendar" class="calendarin"></div>    
                    
             </div>
        
         </div>
         <div class="col-sm-4">
             <div class="event">
                 <div class="eventin">
                     <ul class="list-group "  id="hello">
                     <!--     <li class="list-group-item"> 
                             <h3> {{days}} </h3>
                         </li > -->
                           <!-- <li class="list-group-item ">
                             <h3> Holiday </h3>
                         </li>
                           <li class="list-group-item ">
                             <h3> Holiday </h3>
                         </li>
                           <li class="list-group-item ">
                             <h3> Holiday </h3>
                         </li>
                           <li class="list-group-item ">
                             <h3> Holiday </h3>
                         </li>
                           <li class="list-group-item ">
                             <h3> Holiday </h3>
                         </li> -->
                         
                     </ul>
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

import '../assets/jquery/calendar/css/evo-calendar.css'
import '../assets/jquery/calendar/css/evo-calendar.midnight-blue.css'
import '../assets/jquery/calendar/css/evo-calendar.orange-coral.css'
import '../assets/jquery/calendar/css/evo-calendar.royal-navy.css'
import '../assets/jquery/calendar/js/evo-calendar.js'
import axios from 'axios';
export default {

    data () {
        

        return {
            link:"http://smkbackend.kwintechnologykw11.com",
            days : null,
            data2:null,
            cevent:[],

            
        }
    },
    methods: {
            show(){
    
 axios.get(this.link+"api/calendar1")
    .then(response => {
            this.data2 = response.data;
            for(let a=0;a<this.data2.length;a++)
{
    let to_from=[];
              to_from.push(this.data2[a].calender_startdate);
              to_from.push(this.data2[a].calender_enddate);
         
          this.cevent.push(  { id: this.data2[a].id,name:this.data2[a].calender_name , color: this.data2[a].color,date:to_from ,description:this.data2[a].description,type:this.data2[a].type,} );
                

}   
    })
    .catch(error => {
      this.errorMessage = error.message;
      console.error("There was an error!", error);});
        },
    },
    mounted() {

 let myEvents2 = [
 
  // more events here
];
 let myEvents = [
 
  // more events here
];

this.show();
    //    $( document ).ready(function() {

 axios.get(this.link+"/api/calendar1")
    .then(response => {
            this.data2 = response.data;
            for(let a=0;a<this.data2.length;a++)
{
    let to_from=[];
              to_from.push(this.data2[a].calender_startdate);
              to_from.push(this.data2[a].calender_enddate);
              let obj = {
                id : this.data2[a].id,
                name:this.data2[a].calender_name ,
                color:this.data2[a].color,
                date:to_from,
                description:this.data2[a].description,
                type:this.data2[a].type,

              }
          
             myEvents.push(obj);
         $("#evoCalendar").evoCalendar('addCalendarEvent', [
  {
    id : this.data2[a].id,
   name: this.data2[a].calender_name,
   color: this.data2[a].color,
   date: to_from,
   description: true,
   type:this.data2[a].type,

  }
]);
          
              
  
}   

    })
    .catch(error => {
      this.errorMessage = error.message;
      console.error("There was an error!", error);});
      



console.log(myEvents);


$('#evoCalendar').evoCalendar({
  calendarEvents: myEvents2,
  format: 'yyyy-mm-dd',
  titleFormat: 'MM yyyy',
  eventHeaderFormat: 'MM d, yyyy',
   language: 'en',
     todayHighlight: false,
       sidebarToggler: true,
  sidebarDisplayDefault: true,
  eventListToggler: false,
  eventDisplayDefault: false,
   firstDayOfWeek: 2 ,
 
});
 let pickedmonth=new Date().getMonth();
 let pickedyear=new Date().getFullYear();
let html = '';



let newobj=[];

for(let i=0;i<myEvents.length;i++)
{
    let firstdayofmonth=new Date(pickedyear, pickedmonth, 1);

let totaldayinmonth=new Date(pickedyear, pickedmonth, 0).getDate();

    let date1=new Date(myEvents[0].date[0]);
 
              
      for (let d=1;d<=totaldayinmonth;d++)
    {

         if(firstdayofmonth.toDateString()==date1.toDateString())
               {
          
                    newobj.push(myEvents[i]);
                 

                 }

    firstdayofmonth.setDate(firstdayofmonth.getDate() + 1);
        
    }

}
  

for (var c=0;c<newobj.length;c++)
{
html +=`<li class="list-group-item" style="background-color:${newobj[c].color};" >${newobj[c].id}</li>`;

}

$('#hello').html(html);




$('#evoCalendar').on('selectYear', function(event, activeYear) {

let newobj=[];
let html = '';


pickedyear=activeYear;
let pickmonth2=pickedmonth-1;

for(let i=0;i<myEvents.length;i++)
{
    const datenew1 = new Date(myEvents[i].date[0]);
    let firstdayofmonth=new Date(pickedyear, pickedmonth, 1);

let totaldayinmonth=new Date(pickedyear, pickedmonth, 0).getDate();



              
      for (let d=1;d<=totaldayinmonth-1;d++)
    {
        
         if(firstdayofmonth.toDateString()==datenew1.toDateString())
               {
          
                    newobj.push(myEvents[i]);
                 

                 }

    firstdayofmonth.setDate(firstdayofmonth.getDate() + 1);
        
    }

}
for (var c=0;c<newobj.length;c++)
{
html +=`<li class="list-group-item" style="background-color:${newobj[c].color};" >${newobj[c].id}</li>`;

}

$('#hello').html(html);


});






  










$('#evoCalendar').on('selectMonth', function(event, activeMonth, monthIndex) {

pickedmonth=monthIndex+1;
let html = '';
let newobj=[];

for(let i=0;i<myEvents.length;i++)
{
    let firstdayofmonth=new Date(pickedyear, monthIndex, 1);

let totaldayinmonth=new Date(pickedyear, pickedmonth, 0).getDate();

    let date1=new Date(myEvents[i].date[0]);
 
              
      for (let d=1;d<=totaldayinmonth-25;d++)
    {

         if(firstdayofmonth.toDateString()==date1.toDateString())
               {
          
                    newobj.push(myEvents[i]);
                 

                 }

    firstdayofmonth.setDate(firstdayofmonth.getDate() + 1);
        
    }
 
}
for (var c=0;c<newobj.length;c++)
{
html +=`<li class="list-group-item" style="background-color:${newobj[c].color};" >${newobj[c].id}</li>`;

}

$('#hello').html(html);
  
});

$('#evoCalendar').on('selectDate', function(event, newDate, oldDate) {
let datenew = new Date(newDate);

let newobj=[];

let html = '';

for(let i=0; i<myEvents.length ;i++ )
{
    // for(let b=0; b<myEvents.date.length ;b++ )
    // {

    // }


	let date1 = new Date(myEvents[i].date[0]);
let date2 = new Date(myEvents[i].date[1]);

let Difference_In_Time = date2.getTime() - date1.getTime();

let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    let dateCopy =new Date(date1);


if(Difference_In_Days==0)
{
      

//    alert(datenew);
if(datenew.toDateString()===dateCopy.toDateString())
{
   
newobj.push(myEvents[i]);
// html +=`<li>${myEvents[i].id}</li>`;

}

}
else if(Difference_In_Days>0){
 let j;
  j=i;
  
 if(datenew.toDateString()===dateCopy.toDateString())
{

newobj.push(myEvents[i]);
// html +=`<li>${myEvents[i].id}</li>`;


}

           
    for (var d=1;d<=Difference_In_Days;d++)
    {

    dateCopy.setDate(dateCopy.getDate() + 1);

// 👇️ Tue Feb 22 2022

 if(datenew.toDateString()===dateCopy.toDateString())
{

  j=i;


newobj.push(myEvents[j]);

// html +=`<li>${myEvents[j].id}</li>`;



}

}

 
}


       
  

}
for (var c=0;c<newobj.length;c++)
{
  
html +=`<li class="list-group-item" style="color:white; margin:5px; background-color:${newobj[c].color};" > <h2> ${newobj[c].name} </h2> <p> ${newobj[c].type} </p> <p> ${newobj[c].date} </p> <p> ${newobj[c].description} </p> </li>`;


}


$('#hello').html(html);
});
    //    });
  
    },
}
</script>

<style lang="scss" scoped>

</style>