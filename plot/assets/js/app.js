$(document).ready(function(){ 



$("body").css("cursor", "progress");

var name = localStorage.getItem("userName");
localStorage.removeItem("userName");
var st= localStorage.getItem("stocksList");
localStorage.removeItem("stocksList");

var id = localStorage.getItem("symbol");
localStorage.removeItem("symbol");
var stockName = localStorage.getItem("Name");
localStorage.removeItem("Name");
if (id == null) {
  localStorage.setItem("userName",name);
  localStorage.setItem("stocksList",st);
  window.open ('../home/home.html','_self',false);
}
document.title = "Stock Price: "+ stockName

$('#hourly').addClass('active');

function successCallback(){

    $('.main').css('visibility','visible');
}
function failureCallback(){
  alert('lost connecton');

  localStorage.setItem("userName",name);
  localStorage.setItem("stocksList",st);
  window.open ('../home/home.html','_self',false);

}

let promise = LastHour(id, stockName).then(successCallback, failureCallback);

$('#hourly').on("click", function(event) {
  $('.active').removeClass('active');
  $(this).addClass('active');
  LastHour(id, stockName);
});


$('#LastDay').on("click", function(event) {

$('.active').removeClass('active');
$(this).addClass('active');
LastDay(id, stockName);
});

$('#Lastmonth').on("click", function(event) {
$('.active').removeClass('active');
$(this).addClass('active');
LastMonth(id, stockName);
});

$('#Lastyear').on("click", function(event) {
$('.active').removeClass('active');
$(this).addClass('active');
LastYear(id, stockName);
});

$('#backToPortfolio').on("click", function(event) {
  localStorage.setItem("userName",name);
  localStorage.setItem("stocksList",st);
  window.open ('../home/home.html','_self',false);
});

});