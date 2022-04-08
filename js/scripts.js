$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();

    const nameInput = $("input#name").val();
    const code=parseInt($("input#code").val());
    const color=$("input:radio[name=color]:checked").val();
    const book=$("input:radio[name=book]:checked").val();
    const activity=$("input:radio[name=activity]:checked").val();
    const food=$("input:radio[name=food]:checked").val();
 
    $(".name").text(nameInput);  
   
    $("#python").show();
  });
});
