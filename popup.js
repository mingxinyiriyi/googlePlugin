$("#btn").click(function(){
    alert($("#he").text());
});



$("#ttt").click(function(){
    var s = $("span:contains('3.0')");
    s.click();
    alert(s.html());
});