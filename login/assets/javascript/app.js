function User(uname, pwd){
    this.username = uname;
    this.password  = pwd;
    this.stocks   = [];
};

/*
var user = {
    username: “”,
    password: “”,
    stocks: []
};
*/

/*
$("#form1").on("click", function(uname, pwd) {
    this.username = uname;
    this.password  = pwd;
    this.stocks   = [];
    console.log("OMGWTF!!!");
    console.log(this);
});
*/
  var stockSymbols = [["AAPL", "Apple", "assets/images/APPLE.jpeg"],
                       ["AXP", "American Express", "assets/images/amex.jpeg"],
                       ["BA", "Boeing", "assets/images/boeing.jpeg"],
                       ["CAT", ":Catepillar", "assets/images/cat.jpeg"],
                       ["CSCO", "Cisco Systems", "assets/images/cisco.jpeg"],
                       ["CVX", "Chevron", "assets/images/chevron.jpeg"],
                       ["KO", "Coca-Cola", "assets/images/coca-cola.jpeg"],
                       ["DD", "DuPont", "assets/images/dupont.jpeg"],
                       ["XOM", "ExxonMobil", "assets/images/exxon.jpeg"],
                       ["GE", "General Electric", "assets/images/GE.jpeg"],
                       ["GS", "Goldman Sachs", "assets/images/sachs.jpeg"],
                       ["HD", "Home Depot", "assets/images/depot.jpeg"],
                       ["IBM", "IBM", "assets/images/ibm.jpeg"],
                       ["INTC", "Intel", "assets/images/intel.png"],
                       ["JNJ", "Johnson and Johnson", "assets/images/jj.jpeg"],
                       ["JPM", "JPMorgan Chase", "assets/images/jp.jpeg"],
                       ["MCD", "McDonald's", "assets/images/donalds.jpeg"],
                       ["MMM", "3M Company", "assets/images/3m.jpeg"],
                       ["MRK", "Merck", "assets/images/merck.jpeg"],
                       ["MSFT", "Microsoft", "assets/images/microsoft.jpeg"],
                       ["NKE", "Nike", "assets/images/nike.jpeg"],
                       ["PFE", "Pfizer", "assets/images/pfizer.jpeg"],
                       ["PG", "Proctor and Gamble", "assets/images/pg.jpeg"],
                       ["TRV", "The Travallers", "assets/images/travellers.jpeg"],
                       ["UNH", "UnitedHealth", "assets/images/uh.jpeg"],
                       ["UTX", "United Technologies", "assets/images/united.jpeg"],
                       ["V", "Visa", "assets/images/visa.jpeg"],
                       ["VZ", "Verizon", "assets/images/verizon.jpeg"],
                       ["WMT", "Walmart", "assets/images/walmart.jpeg"],
                       ["DIS", "Walt Disney", "assets/images/walt.jpeg"]];

function Start(userprofile){
  window.open("dummy.html");
  var dummy = "NASDAQ:AAPL:Apple,NYSE:AXP:American Express,NYSE:DD:DuPont,NYSE:WMT:Walmart";
  var arraySymbols = [];
  var array = [];
  var array2 = [];
  var array3 = [];
  var stocksId = $("#stocks");
  var usernameId = $("#username");
  var passwordId = $("#password");
  var stockImages = $("#stockImages");
  array = dummy.split(",");



  console.log(stockSymbols);
  for(var i = 0; i < array.length; i++)
  {
    array2 = array[i].split(":");
      array3.push(array2[1]);
  }

  usernameId.text("UserName: ");
  passwordId.text("PassWord: ");
  console.log(array3);

  var stockString = "Stocks: ";
  for(var i = 0; i < array3.length; i++)
  {
  	stockString += array3[i] + ((i === array3.length - 1) ? "" : ", ");
  }

  stocksId.text(stockString);
  console.log(stocksId);

  for(var i = 0; i < array3.length; i++)
  {
     var stockImg = $("<img>");
     var z = LookUp(array3[i]);
     console.log("Z is " + z);
     stockImg.attr("src", stockSymbols[z][2]);
     var a = $("<a>")
     // a.attr();
     stockImages.append(stockImg);
  }

  var local = localStorage.getItem("stocks");
  console.log(local);
};

function LookUp(string)
{
  for(var i = 0; i < 30; i++)
  {
  	if(string === stockSymbols[i][0])
  	{
      return i;
  	}
  	else
  	{
      // console.log(string + " is not equal to " + stockSymbols[i][0])
  	}
  }
};

// Start();