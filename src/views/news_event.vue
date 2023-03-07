<template>
    <div>
        <ul class="nav nav-pills mb-3 d-flex justify-content-center p-5" id="pills-tab" role="tablist">
  <!-- <li class="nav-item" role="presentation">
    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-list" type="button" role="tab" aria-controls="pills-home" aria-selected="true">List View</button>
  </li> -->
  <!-- <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-grid" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Grid View</button>
  </li> -->

</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade  show active" id="pills-list" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">


    <div class=""> 
            <div class="">
                <h1>News And Activity</h1>
                <div class="row gx-0 d-flex justify-content-center  " v-for="dat2 in data2" >
 
 <div class="col-sm-7 m-5 d-flex justify-content-center" >
         
         <div class="eventdivall2 shadow  bg-body rounded">
          
             <div class="news_div_top">
              <span style="text-align:right; display: block;"> {{dat2.time}}</span>
             <h3> {{dat2.name}}</h3>
            
          <div class="d-inline"> 
            <span > 
              <span v-for="(dat_2,datint) in dat2.content"> 
                  <span v-if="datint<100">{{dat_2}} </span>
              </span>
            </span> 
            <div class="collapse " :id=idseemore+dat2.id+list>
 
 <span v-for="(dat_2,datint) in dat2.content"> 
               <span v-if="datint>=100">{{dat_2}} </span>
           </span>

</div>

          </div>
       
         

<br>
          
          <button class="morepara" v-if="Object.keys(dat2.content).length>100"  type="button" data-bs-toggle="collapse" :data-bs-target=seemore+dat2.id+list aria-expanded="false" aria-controls="collapseExample">
   See More
  </button>


 
          </div>

         <div class="news_div_bot m-3 ">
             <img class="eventimg " :src=dat2.eventimg style="" alt="">
         </div>
         
         <div class="react  m-3  ">
          <button @click="like(dat2.id)" class="position_left btn btn-warning me-4">Like ({{dat2.likecount}})</button>
          <button class="position_left  btn btn-danger me-4 comment" type="button" data-bs-toggle="collapse" :data-bs-target=colap+dat2.id+list aria-expanded="false" aria-controls="collapseExample">
    comment
  </button>
         
    
<div class="collapse mt-3" :id=colapid+dat2.id+list>
  <div class="">
    <div class="input-group mb-3">
<input  :id=list+comment2+dat2.id type="text" class="form-control" placeholder="Write a comment" aria-label="Your comment" aria-describedby="button-addon2">
<button @click=comment1(dat2.id,list) class="btn btn-outline-secondary" type="button" id="button-addon2">send</button>
</div>
<div class="comment_list">
    <div v-for="dat3 in data3">
            <div class="border rounded p-3 mb-4"  v-if="dat2.id==dat3.eventID">
                <div >
                    <div class="row">
                   <div class="col">
                        <h3> Anonymous </h3>
                   </div>
                </div>
                <div class="row">
                    <div class="col">
                        <span>{{dat3.commentcontent}}
                        </span>
                    </div>
                </div>
                <div class="row mt-1 ">
                    <div class="col d-flex justify-content-end">
                        <span>{{dat3.time}} </span>
                    </div>
                
                </div>
                </div>
      

            </div>
       

</div>
</div>
  
</div>
    
     
        
      </div>
            
      
   
        
         </div>

     
   

     </div>
 </div>
 



      </div>
            </div>
        </div>
        



  </div>
  <div class="tab-pane fade" id="pills-grid" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
     <div class=""> 
            <div class="">
                <div class="row gx-0 d-flex justify-content-center  ">

    <div class="col-sm-3 m-2  colevent"  v-for="dat2 in data2" >
         
         <div class="eventdivall shadow  bg-body rounded ">
          
             <div class="news_div_top">
              <span style="text-align:right; display: block;"> {{dat2.time}}</span>
             <h3> {{dat2.name}}</h3>
            
          <div class="d-inline"> 
            <span > 
              <span v-for="(dat_2,datint) in dat2.content"> 
                  <span v-if="datint<100"> {{dat_2}}  </span>
                  <span style="color:cornflowerblue;" v-if="datint>=100 && datint<101"><br> More </span>
                  <span v-if="datint>=100 && datint<104">...</span>
              </span>
            </span> 
            <div class=" " :id=idseemore+dat2.id>
 
 <span v-for="(dat_2,datint) in dat2.content"> 
             
           </span>

</div>

          </div>
       
         

<br>
          
    


<div  class="showpara"> 

            </div>


 
          </div>


         
         <div class="react  m-3  ">
          <button @click="like(dat2.id)" class="position_left btn btn-warning me-4">Like ({{dat2.likecount}})</button>
          <button class="position_left  btn btn-danger me-4 comment" type="button" data-bs-toggle="collapse" :data-bs-target=colap+dat2.id+grid aria-expanded="false" aria-controls="collapseExample">
    cmt
  </button>

  <a class="position_left  btn btn-info " data-bs-toggle="modal" :data-bs-target=moredetail+dat2.id >More </a>
         
    
<div class="collapse mt-3" :id=colapid+dat2.id+grid>
  <div class="">
    <div class="input-group mb-3">
<input  :id=grid+comment2+dat2.id type="text" class="form-control" placeholder="Write a comment" aria-label="Your comment" aria-describedby="button-addon2">
<button @click=comment1(dat2.id,grid) class="btn btn-outline-secondary" type="button" id="button-addon2">send</button>
</div>
<div class="comment_list">
    <div v-for="dat3 in data3">
            <div class="border rounded p-3 mb-4"  v-if="dat2.id==dat3.eventID">
                <div >
                    <div class="row">
                   <div class="col">
                        <h3> Anonymous </h3>
                   </div>
                </div>
                <div class="row">
                    <div class="col">
                        <span>{{dat3.commentcontent}}
                        </span>
                    </div>
                </div>
                <div class="row mt-1 ">
                    <div class="col d-flex justify-content-end">
                        <span>{{dat3.time}} </span>
                    </div>
                
                </div>
                </div>
      

            </div>
       

</div>
</div>
  
</div>
    
     
        
      </div>
            
      
   
        
         </div>

     
   

     </div>
 </div>

 

 


<!--     
 <div class="col m-5 d-flex justify-content-center  colevent">
         
         <div class="eventdivall shadow  bg-body rounded">
          
             <div class="news_div_top">
              <span style="text-align:right; display: block;"> 12-12-2022 20:00:00</span>
             <h3> Event Name</h3>
            
             <p > 
This is the paragraph to end all paragraphs.  You
should feel <em>lucky</em> to have seen such a paragraph in
your life.  Congratulations!
</p>
   
<p  class="showpara"> 
This is the paragraph to end all paragraphs.  You
should feel <em>lucky</em> to have seen such a paragraph in
your life.  Congratulations!
</p>
<button class="morepara">See More</button>   

 
          </div>

         <div class="news_div_bot m-3 ">
             <img class="eventimg " src="" style="" alt="">
         </div>
         
         <div class="react  m-3  ">
          <button class="position_left btn btn-warning me-4">Like (34)</button>
          <button class="position_left  btn btn-danger me-4 comment">Comment</button>
          <div class="rounded-bottom position_mid comment_section p-4"> 
              <div class="input-group mb-3">
<input type="text" class="form-control" placeholder="Write a comment" aria-label="Your comment" aria-describedby="button-addon2">
<button class="btn btn-outline-secondary" type="button" id="button-addon2">send</button>
</div>

      <div class="comment_list">
          <div class="border rounded p-3 mb-4">
                
                <div class="row">
                   <div class="col">
                        <h3> Si Thu hein</h3>
                   </div>
                </div>
                <div class="row">
                    <div class="col">
                        <span>Hello my name is si thu hein Hello my name is si thu hein
                            Hello my name is si thu heinHello my name is si thu hein
                            Hello my name is si thu hein
                        </span>
                    </div>
                </div>
                <div class="row mt-1 ">
                    <div class="col d-flex justify-content-end">
                        <span>19-23-2022 2:00:00 </span>
                    </div>
                
                </div>

            </div>
            <div class="border rounded p-3 mb-4">
              
              <div class="row">
                 <div class="col">
                      <h3> Si Thu hein</h3>
                 </div>
              </div>
              <div class="row">
                  <div class="col">
                      <span>Hello my name is si thu hein Hello my name is si thu hein
                          Hello my name is si thu heinHello my name is si thu hein
                          Hello my name is si thu hein
                      </span>
                  </div>
              </div>
              <div class="row mt-1 ">
                  <div class="col d-flex justify-content-end">
                      <span>19-23-2022 2:00:00 </span>
                  </div>
              
              </div>

          </div>
      </div>
            
            
              



          </div>
   
        
         </div>

     
   

     </div>
 </div> -->

 


      </div>
            </div>
        </div>

    </div>
 
        
</div>



<!-- Modal -->
<div  v-for="dat2 in data2">
 
    <div class="modal fade " :id=idmoredetail+dat2.id tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl ">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel"></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        


        <div class=""> 
            <div class="">
                <div class="row gx-0 d-flex justify-content-center  " >
 
 <div class="col-sm-10  colevent" :id=idlistpost+dat2.id>
         
         <div class="eventdivall rounded">
          
             <div class="news_div_top">
              <span style="text-align:right; display: block;"> {{dat2.time}}</span>
             <h3> {{dat2.name}}</h3>
            
          <div class="d-inline"> 
            <span > 
              <span v-for="(dat_2,datint) in dat2.content"> 
                  <span v-if="datint<100">{{dat_2}} </span>
              </span>
            </span> 
            <div class="collapse " :id=idseemore+dat2.id>
 
 <span v-for="(dat_2,datint) in dat2.content"> 
               <span v-if="datint>=100">{{dat_2}} </span>
           </span>

</div>

          </div>
       
         

<br>
          
          <button class="morepara" v-if="Object.keys(dat2.content).length>100"  type="button" data-bs-toggle="collapse" :data-bs-target=seemore+dat2.id aria-expanded="false" aria-controls="collapseExample">
   See More
  </button>




 
          </div>

         <div class="news_div_bot m-3 ">
             <img class="eventimg " :src=dat2.eventimg style="" alt="">
         </div>
         
         <div class="react  m-3  ">
          <button @click="like(dat2.id)" class="position_left btn btn-warning me-4">Like ({{dat2.likecount}})</button>
          <button class="position_left  btn btn-danger me-4 comment" type="button" data-bs-toggle="collapse" :data-bs-target=colap+dat2.id+model aria-expanded="false" aria-controls="collapseExample">
    comment
  </button>
         
    
<div class="collapse mt-3" :id=colapid+dat2.id+model >
  <div class="">
    <div class="input-group mb-3">
<input  :id=model+comment2+dat2.id type="text" class="form-control" placeholder="Write a comment" aria-label="Your comment" aria-describedby="button-addon2">
<button @click=comment1(dat2.id,model) class="btn btn-outline-secondary" type="button" id="button-addon2">send</button>
</div>
<div class="comment_list">
    <div v-for="dat3 in data3">
            <div class="border rounded p-3 mb-4"  v-if="dat2.id==dat3.eventID">
                <div >
                    <div class="row">
                   <div class="col">
                        <h3> Anonymous </h3>
                   </div>
                </div>
                <div class="row">
                    <div class="col">
                        <span>{{dat3.commentcontent}}
                        </span>
                    </div>
                </div>
                <div class="row mt-1 ">
                    <div class="col d-flex justify-content-end">
                        <span>{{dat3.time}} </span>
                    </div>
                
                </div>
                </div>
      

            </div>
       

</div>
</div>
  
</div>
    
     
        
      </div>
            
      
   
        
         </div>

     
   

     </div>
 </div>
 

 


      </div>
            </div>
        </div>



      </div>

    </div>
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
            link:"http://smkbackend.kwintechnologykw11.com",
            data2:null,
            data3:null,
            commentcontent:'',
            comment2:'comment',
            colap:'#colap',
            colapid:'colap',
            seemore:'#seemore',
            idseemore:'seemore',
            moredetail:'#post',
            idmoredetail:'post',
            model:'model',
            list:'list',
            grid:'grid',
        }
    },
    methods: {
        comment1(id,type)
        {
             
            let article = 
            {
                eventID:id,
              commentcontent:$('#'+type+'comment'+id).val(),
       
           

            };

            
  axios.post(this.link+"/api/comment", article)
    .then(response =>{console.log(response);
        Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Success',
  customClass:'sweetalertsuccess',
  showConfirmButton: false,
  timer: 1500
});
$('#'+type+'comment'+id).val("");

        },



            
    )
    .catch(error => {
      this.errorMessage = error.message;
      console.error("There was an error!", error);
       })
       this.show();
    this.show();
    this.show();
    // this.showcmt();
    // this.showcmt();
    // this.showcmt();

        },

like(id){
    const islike=localStorage.getItem("isLike"+id);
    if(islike=="true="+id)
    {
        alert("you already liked it");
       
    }
    else
    {
        axios.post(this.link+"/api/like/"+id )
    .then(response =>console.log(response),
   
    )
    .catch(error => {
      this.errorMessage = error.message;
      console.error("There was an error!", error);
       })
      
        localStorage.setItem("isLike"+id, "true="+id);
        this.show();
    this.show();
    this.show();
    // this.showcmt();
    // this.showcmt();
    // this.showcmt();

    }
   

},

        show(){
    
    axios.get(this.link+"/api/eventinput")
       .then(response => {
               this.data2 = response.data;
               
       })
       .catch(error => {
         this.errorMessage = error.message;
         console.error("There was an error!", error);});
           },
           showcmt(){
    
    axios.get(this.link+"/api/comment")
       .then(response => {
               this.data3 = response.data;
               
       })
       .catch(error => {
         this.errorMessage = error.message;
         console.error("There was an error!", error);});
           },
       
    },
    mounted() {
        this.show();
        this.showcmt();





    },
    updated(){
        $('.comment').click(function() {
  //$('.hideme').hide();  
  if ($(this).hasClass('active')) {    
    $(this).removeClass('active');
 
    $('.comment_section').slideUp(  "slow" );
  } else {
    $('.comment_section').slideUp( "slow" );
    $('.comment').removeClass('active');
    $(this).addClass('active');
   
    $(this).next().filter('.comment_section').slideDown( "slow" );
  }
});

        $('.morepara').click(function(event) {
  //$('.hideme').hide();  
  if ($(this).hasClass('active')) {    

    $(this).text('See More');
    event.target.classList.remove("active");

    $('.showpara').slideUp(  "slow" );
  } else  {
    $('.showpara').slideUp( "slow" );
    $('.morepara').removeClass('active');
    $('.morepara').text('See More');

    event.target.classList.add("active");
    $(this).prev().filter('.showpara').slideDown( "slow" );
    $(this).text('See Less');

  }
});



}
}
</script>

<style lang="scss" scoped>
    .more {display: none;}
    .news_div_top
    {
        padding:10px;
        text-align: left;
   
    }
.eventdes{
    width:100%; height:150px; 
}
.news_div_bot
{
    border: 0px;
    border-style: solid;
    border-radius: 10px;
  
    width:90%;
 
margin:5px;
}
.comment_list{
    max-height: 300px;
  
    overflow-y: scroll;
}
.position_mid
{
margin-top: 30px;
   
}
.position_left
{

}
.react{
   
      text-align: left;
}
.eventimg
{

    width:100%;
    object-fit: contain;
    max-height: 70vh;
}
.eventdivall2{
    width: 100%;
padding:50px;

}
.colevent
{
    word-wrap: break-word;
    min-width: 400px;
   
}
.showpara {
  display: none;  
}
.morepara{
    
    border: 1px;
    border-radius: 20px;
    border-style: solid;
    background-color: white;
    font-weight: 500;
    margin:10px;
}
.morepara:hover{
    border: 1px chocolate;
    border-radius: 20px;
    border-style: solid;
    background-color: white;
    font-weight: 500;
   
    box-shadow: 0px 0px 5px 0px rgba(189,191,0,1);
-webkit-box-shadow: 0px 0px 5px 0px rgba(189,191,0,1);
-moz-box-shadow: 0px 0px 5px 0px rgba(189,191,0,1);
}
.comment_section
{
    
   
    display: none;
 
  
    
}

</style>