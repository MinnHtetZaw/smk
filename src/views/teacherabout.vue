<template>
    <div>
      
          

           





        </div>
  
</template>

<script>
import $ from 'jquery';
export default {
    data () {
      

        return {   
            data:``
                 ,
            description:[],
        }
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

    },
}
</script>

<style lang="scss" scoped>

</style>