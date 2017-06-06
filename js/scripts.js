$(document).ready(function(){
  $("form#stress_test").submit(function(event){
    var warningSign = 0;
    var stressRelated = 0;
    var manageStress = 0;

    event.preventDefault();
    $("#work-responses").show();
    $("input:checkbox[name=warning-sign]:checked").each(function(){
      warningSign +=1;
    });
    alert("warning sign:" + warningSign);
    $("input:checkbox[name=health-sx]:checked").each(function(){
      stressRelated +=1;
    });
    alert("health symptom:" + stressRelated);

    $("input:checkbox[name=manage-stress]:checked").each(function(){
      manageStress +=1;
    });

    if ((warningSign === 5) && (stressRelated === 5)) {
      $("#img").show();
    } else if ((warningSign >= 3) && (manageStress>=4)) {
      $("#good-job-response").show();
    } else if ((warningSign >= 3) && (stressRelated >= 3))
    {
    $("#resources-response").show();
    }
  });
});
