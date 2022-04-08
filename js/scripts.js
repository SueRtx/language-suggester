$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();

    const nameInput = $("input#name").val();
    const code=parseInt($("input#code").val());
    const color=$("input:radio[name=color]:checked").val();
    const book=$("input:radio[name=book]:checked").val();
    const activity=$("input:radio[name=activity]:checked").val();
    const food=$("#food").val();
    
    $(".name").text(nameInput);
    $("userName").show();
    if (code>=1 && code<=5){
      if (color==="red" && "book===yes"){
      $("#python").show();
      $("#ruby").hide();
      $("#c").hide();
      $("#diffOption").hide();
    }else if (color==="pink"){
      $("#c").show();
      $("#ruby").hide();
      $("#diffOption").hide();
      $("#python").hide();
    }else if (book==="yes"){
      $("#ruby").show();
      $("##diffOption").hide();
      $("#c").hide();
      $("#python").hide();
    }else if (activity==="games" && food==="american"){
      $("#ruby").show();
      $("##diffOption").hide();
      $("#c").hide();
      $("#python").hide();  
    }else {
    $("#ruby").hide();
    $("##diffOption").show();
    $("#c").hide();
    $("#python").hide();
    }
  }
  });
});
