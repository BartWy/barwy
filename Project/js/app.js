console.log('test');


$(document).ready(function () {

            $("#log").click(function () {

                $("#form1").fadeToggle("slow")
                $('#form').hide();
                $('#form2').hide();
                $('#aboutus1').hide();
                
                })
                
               
                 
           


            $("#frej").click(function () {
                $("#form").fadeToggle("slow");
                $('#form1').hide();
                $('#form2').hide();
                $('#aboutus1').hide();
                
            });

            $("#con").click(function () {
                $("#form2").fadeToggle("slow");
                $('#form').hide();
                $('#form1').hide();
                $('#aboutus1').hide();
               


            });

            $(".zwin").click(function () {
                $("#form1").slideUp();
                $("#form").slideUp();
                $("#form2").slideUp();
                $("#aboutus1").slideUp();
                $('#nap').animate({
                    right: '10%'  
                })
                  $('#heart').animate({
                    right: '2%',
                    opacity: 1,
                })
              
            });
           


            $("#heart").mouseover(function () {
                $("#heart").animate({
                    right: '650px',
                    opacity: '0.5',

                });
            });
            $("#frej").click(function () {

                $("#nap").animate({
                    right: '25%'
                })




            });
            $("#con").click(function () {

                $("#nap").animate({
                    right: '25%'
                })



            });
            $("#abo").click(function () {

                $("#aboutus1").fadeToggle("slow")
                $('#form').hide();
                $('#form2').hide();
                $('#form1').hide();
               
                
                });
    $("#abo").click(function () {

               $("#nap").animate({
                    right: '25%'
                
            });
    
     });
});
