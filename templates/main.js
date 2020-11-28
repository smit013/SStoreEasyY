/*For Sign In---------------------------------*/
 
$(document).on('click','.sign-btn',function(){
    $('.login').addClass('signin-active').siblings('.login').removeClass('signup-active')
   }); 
    
    
   $(document).on('click','.account',function(){
    $('.login').addClass('signup-active').siblings('.login').removeClass('signin-active')
   }); 
    
    
     $(document).ready(function(){
     $('.close a').click(function(){
      $('.login').removeClass('signin-active , signup-active')
     })
    });
    $(document).ready(function(){
        $('.signup-btn').click(function(){
         $('.login').removeClass('signin-active , signup-active')
        })
       });
       $(document).ready(function(){
        $('.signin-btn').click(function(){
         $('.login').removeClass('signin-active , signup-active')
        })
       });



    