function howIFeel(name1,name2){
  alert(name1+" loves "+name2)
}

function numberOfSleeps(date){
  let today = new Date();
  let inputtedDate = new Date(date)
  let numberOfSleeps = ((inputtedDate.getTime() - today.getTime())/(1000 * 3600 *24)).toFixed();
  let numberOfSleepsFixed = 1 + parseInt(numberOfSleeps);

  return numberOfSleepsFixed;
}
$(document).ready(function(){
  $("form#sleep-form").submit(function(event){
    event.preventDefault();
    let sleepsInput = $("#sleeps").val();
    let result = numberOfSleeps(sleepsInput);
    $("#form-output").show();
    $("#output").text(result);
  });
});