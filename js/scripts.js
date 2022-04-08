$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();

    const nameInput = $("input#name").val();
    const code=parseInt($("input#code").val());
    const color=$("input:radio[name=color]:checked").val();
    const book=$("input:radio[name=book]:checked").val();
    const activity=$("input:radio[name=activity]:checked").val();
    const food=$("#food").val();
    $("#user").show();
    if (code<=2){
      $("#ruby").hide();
      $("#c").hide();
      $("#python").hide();
      $("#diffOption").show();   
    }
    else if (color==="red"){
      $("#python").show();
      ("#ruby").hide();
      $("#c").hide();
      $("#diffOption").hide();
    }
      
    else if (color==="pink"){
      $("#c").show();
      ("#ruby").hide();
      $("#diffOption").hide();
      $("#python").hide();
    }
 
    else if (color==="blue"){
      $("#ruby").show();
      ("##diffOption").hide();
      $("#c").hide();
      $("#python").hide();
    }
  });
});
