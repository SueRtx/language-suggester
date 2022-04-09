$(document).ready(function() {
  $("form#formOne").submit(function(event) {

    const yourNameInput=$("input#yourName").val();
    const code=$("#code").val();
    const color=$("input:radio[name=color]:checked").val();
    const book=$("input:radio[name=book]:checked").val();
    const activity=$("input:radio[name=activity]:checked").val();
    const food=$("#food").val();
    
    $(".yourName").text(yourNameInput);
    $("#userName").show();
    
    if(code==="yes" && color==="red"){
      $("#python").show();
      $("#ruby").hide();
      $("#c").hide();
      $("#diffOption").hide();

    }else if(code==="no" && color==="pink"){
      $("#ruby").show();
      $("#python").hide();
      $("#javascript").hide();
      $("#trouble").hide();

    }else if(color==="blue" && code==="yes"){
      $("#c").show();
      $("#ruby").hide();
      $("#diffOption").hide();
      $("#python").hide();
    
    }else if(code==="no" && color==="red"){
      $("#python").show();
      $("#ruby").hide();
      $("#c").hide();
      $("#diffOption").hide();

    }else if(code==="no" &&  color==="blue"){
      $("#c").show();
      $("#ruby").hide();
      $("#diffOption").hide();
      $("#python").hide();
      
    }else{
      $("#diffOption").show();
      $("#c").hide();
      $("#ruby").hide();
      $("#python").hide();
    }
   
    event.preventDefault();
  });
});
