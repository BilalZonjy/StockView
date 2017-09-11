$(document).ready(function(){ 


	var name = localStorage.getItem("userName");
	localStorage.removeItem("userName");
	var st = localStorage.getItem("stocksList");
	localStorage.removeItem("stocksList");
	if (st == null) {
   		window.open ('../login/index.html','_self',false);
		}


	document.title = name+"'portfolio"
	var userName = $('<div id="userName">');

	userName.text('Welcome: '+ name);

	$('#header').append(userName);




	var stockneeded = []
	
	st = st.split(",");
	for (i in st){
		var stocksymb = st[i].split(":")[1];
		var companyname = stockTable[stocksymb].companyName;
		var companylogo = logDir + stockTable[stocksymb].img;
        var companystock = $('<div class="row company well " style="margin-top: 10px, background-color:#ffffff" >');
        var logo = $('<img class="companyRowComp" src='+companylogo+'>');
        companystock.append(logo);
        var stName = $('<div class="stName companyRowComp">');
        stName.text('    '+companyname);
        companystock.append(stName);
        companystock.attr("data-symbol",stocksymb);
        companystock.attr("data-Name",companyname);
        $('#stockList').append(companystock);

	}


	$('.main').css('visibility','visible');
	}) 	



$(document).on("click", ".company", function(){
      localStorage.setItem("symbol",this.getAttribute('data-symbol'));
      localStorage.setItem("Name",this.getAttribute('data-Name'));
      window.open ('view.html','_self',false);
});