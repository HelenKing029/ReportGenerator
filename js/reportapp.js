var billamount = new Array();
  if (billamount == null){
    billamount = 0;
  }
var income = new Array();
  if (income == null){
    income = 0;
  }
var spending = new Array();
  if (spending == null){
    spending = 0;
  }



function insert(){
    var billamountValue = document.getElementById("billamount").value;
    var incomeValue = document.getElementById("income").value;
    var spendingValue = document.getElementById("spending").value;
    billamount[billamount.length]= parseFloat(billamountValue);
    income[income.length]= parseFloat(incomeValue);
    spending[spending.length]= parseFloat(spendingValue);
  }

function show() {
  var content="<b>The Bills and Spending you entered:</b><br>";
  for(var i = 0; i < billamount.length; i++) {
     content +=billamount[i]+"<br>";
  }	
  // for(var i = 0; i < income.length; i++) { 
  // 	content +=income[i]+"<br>"; 				
  // }
  for(var i = 0; i < spending.length; i++) {
    content +=spending[i]+"<br>";
  }
   document.getElementById('display').innerHTML = content;
}


function getSum(total, num){
 return total + num; 
}

 function sumArray (item){
  // Sum of Bill amount displayed in Output Column
  document.getElementById("demo").innerHTML = billamount.reduce(getSum); 
  // Sum of Income amount displayed in Output Column  
  document.getElementById("demo1").innerHTML = income.reduce(getSum);
  // Sum of Spending amount displayed in Output Column
  document.getElementById("demo2").innerHTML = spending.reduce(getSum);
  //Based on saving 20% of your income you should save X
  // document.getElementById("demo4").innerHTML = (income.reduce(getSum))*0.20;
  //Total the spending and bills and subtract it from the income
  // document.getElementById("demo4").innerHTML = (income.reduce(getSum))-((billamount.reduce(getSum))+(spending.reduce(getSum))) 
}


  //statements
function myFunction() {
    var MoneyLeftOver = (income.reduce(getSum))-((billamount.reduce(getSum))+(spending.reduce(getSum))); 
    var greeting;
    if (MoneyLeftOver < 0) {
        greeting = "You've spent more than you earned! Try and save more next month.";
    } else {
        greeting = "Great Job you saved $" + MoneyLeftOver;
    }
    document.getElementById("demo3").innerHTML = greeting;
}



function Reload() {
  location.reload();
}

