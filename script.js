

function Sum (x,y) {
   console.log(x+y);
}

Sum(3,2);
Sum(9,7);
Sum(10,12);


function ReturnData (){
   var z=3;
   return z;
}

var ReturnZ = ReturnData();
console.log("Z est egale a : ",ReturnZ);

(function Invoke (){
   console.log('Invoked Function');
})();


var btn = document.getElementById('btn');
var Div = document.getElementById('Division');

function OnMouseOver (){
   Div.innerHTML = "Hello World";
   btn.style.backgroundColor = "red";
   Div.style.backgroundColor = "red";
   Div.style.color = "white";
   Div.style.borderRadius = "20px";
   Div.style.textAlign = "center";
   Div.style.opacity = "0.6";
}

function OnMouseLeave (){
   Div.innerHTML = "";
   btn.style.backgroundColor = "black";
   btn.style.color = "white";
   Div.style.backgroundColor = "white";
   Div.style.color = "black";
   Div.style.borderRadius = "0px";
   Div.style.textAlign = "center";
}


btn.onmouseover = OnMouseOver;

btn.onmouseleave = OnMouseLeave;


var Input = document.getElementById('Input');
var Div = document.getElementById('Division');

var yezzi = function (){
   Div.innerHTML="Yezzi 3ad";
   Div.style.backgroundColor = "red";
   Div.style.color = "white";

};

var arja3 = function (){
   Div.innerHTML = "Rja3na";
   Div.style.backgroundColor = "black";
   Div.style.opacity = "1";
   Div.style.textAlign = "center";
}


Input.addEventListener('keypress', yezzi);
Input.addEventListener('keydown', arja3);



var AllItems = document.querySelectorAll("li");

var Content = document.getElementById('Content');

var btn = document.getElementById('AddToCart');
var NbKeyboard = document.getElementById('NbKeyboard');
var NbMouse = document.getElementById('NbMouse');
var NbLap = document.getElementById('NbLap');
var TotalPriceKeyboard = document.getElementById('TotalPriceKeyboard');
var TotalPriceMouse = document.getElementById('TotalPriceMouse');
var TotalPriceLap = document.getElementById('TotalPriceLap');
var TotalPrice = document.getElementById('TotalPrice');
var Li_Keyboard = document.getElementById('Li_Keyboard');
var All_Item_Keyboard = document.querySelector("#Btn_Keyboard");


var Btn_Keyboard = document.getElementById('Btn_Keyboard');
var Btn_Mouse = document.getElementById('Btn_Mouse');
var Btn_Lap = document.getElementById('Btn_Lap');
 Content.innerHTML = "";
 var Nb_Keyboard = 0;
 var Nb_Mouse = 0;
 var Nb_Lap = 0;

 var TotalPrice_Keyboard = 0;
 var TotalPrice_Mouse = 0;
 var TotalPrice_Lap = 0;
 var Total_Price = 0;

 var btn_Add_Keyboard = document.getElementById('btn_Add_Keyboard');
 var btn_Add_Mouse = document.getElementById('btn_Add_Mouse');
 var btn_Add_Laptop = document.getElementById('btn_Add_Laptop');
 var ShoppingCart= document.getElementById('ShoppingCart');
 var Section0 = document.getElementById('Section0');
 var Close_Section = document.getElementById('Close_Section');
 var TextPart1 = document.getElementById('Text_Part1');
 var Text_Total_Price_Part2 = document.getElementById('Text_Total_Price_Part2');
 var Text2Part1 = document.getElementById('Text2_Part1');
 var Text2_Total_Price_Part2 = document.getElementById('Text2_Total_Price_Part2');
 var Text3Part1 = document.getElementById('Text3_Part1');
 var Text3_Total_Price_Part2 = document.getElementById('Text3_Total_Price_Part2');
 var RemoveKeyboard = document.getElementById('Remove_Keyboard');
 var RemoveMouse = document.getElementById('Remove_Mouse');
 var RemoveLaptop = document.getElementById('Remove_Laptop');
 

 btn_Add_Keyboard.onclick = function(){
   ShoppingCart.style.display="block";
   Section0.style.display = "none";
    
 };

 Close_Section.onclick = function(){
   ShoppingCart.style.display = "none";
   Section0.style.display = "block";
   HTMLBRElement.style.display = "none";
 };

 
 btn_Add_Mouse.onclick = function(){
   ShoppingCart.style.display="block";
   Section0.style.display = "none";
    
 };

 Close_Section.onclick = function(){
   ShoppingCart.style.display = "none";
   Section0.style.display = "block";
   HTMLBRElement.style.display = "none";
 };

 
 btn_Add_Laptop.onclick = function(){
   ShoppingCart.style.display="block";
   Section0.style.display = "none";
    
 };

 Close_Section.onclick = function(){
   ShoppingCart.style.display = "none";
   Section0.style.display = "block";
 };



AllItems.forEach(function(Item){
      Item.onclick = function (){
         
         
         if (Item.textContent == "Add Keyboard To Basket") {
            Nb_Keyboard = Nb_Keyboard+1;
            TextPart1.innerHTML = ("Number of "+NbKeyboard.getAttribute('Name')+"(s)");
            NbKeyboard.innerHTML = Nb_Keyboard;
            NbKeyboard.style.color = "white";
            NbKeyboard.style.textAlign = "center";
            Text_Total_Price_Part2.innerHTML =("Total Price of "+NbKeyboard.getAttribute('Name')+"(s)");
            TotalPriceKeyboard.innerHTML = TotalPrice_Keyboard+(Nb_Keyboard*AllItems[0].getAttribute('price'));
            TotalPriceKeyboard.style.color = "white"; 
            TotalPriceKeyboard.style.textAlign = "center";
            Total_Price = Total_Price + parseInt(AllItems[0].getAttribute('price'));
           
            
            
            
         };

         
          



        
         if (Item.textContent == "Add Mouse To Basket") {
               Nb_Mouse = Nb_Mouse+1;
               Text2Part1.innerHTML = ("Number of "+NbMouse.getAttribute('Name')+"(s)");
               NbMouse.innerHTML = Nb_Mouse;
               NbMouse.style.textAlign = "center";
               NbMouse.style.color = "white";
               TotalPriceMouse.style.textAlign = "center";
               Text2_Total_Price_Part2.innerHTML =("Total Price of "+NbMouse.getAttribute('Name')+"(s)");
               TotalPriceMouse.innerHTML = TotalPrice_Mouse+(Nb_Mouse*AllItems[1].getAttribute('price'));
               TotalPriceMouse.style.color = "white"; 
               Total_Price = Total_Price + parseInt(AllItems[1].getAttribute('price'));
               
               
               
         };
            
         if (Item.textContent == "Add Laptop To Basket") {
               Nb_Lap = Nb_Lap+1;
               Text3Part1.innerHTML = ("Number of "+NbLap.getAttribute('Name')+"(s)");
               NbLap.innerHTML = Nb_Lap;
               NbLap.style.textAlign = "center";
               NbLap.style.color = "white";
               TotalPriceLap.style.textAlign = "center";
               Text3_Total_Price_Part2.innerHTML =("Total Price of "+NbLap.getAttribute('Name')+"(s)");
               TotalPriceLap.innerHTML = TotalPrice_Lap+(Nb_Lap*AllItems[2].getAttribute('price'));
               TotalPriceLap.style.color = "white";
               Total_Price = Total_Price + parseInt(AllItems[2].getAttribute('price'));
               
               
         };

         TotalPrice.innerHTML = Total_Price;
         TotalPrice.style.color = "white";
         TotalPrice.style.textAlign = "center";


         
         
      };

      
    

      
      RemoveKeyboard.onclick  = function(){

         if (parseInt(NbKeyboard.textContent) > 0) {

         

            if (RemoveKeyboard.textContent == "Remove Keyboard From The Basket"){
                 


              

               Nb_Keyboard = Nb_Keyboard-1;
               TextPart1.innerHTML = ("Number of "+NbKeyboard.getAttribute('Name')+"(s)");
               NbKeyboard.innerHTML = Nb_Keyboard;
               NbKeyboard.style.color = "white";
               NbKeyboard.style.textAlign = "center";
               Text_Total_Price_Part2.innerHTML =("Total Price of "+NbKeyboard.getAttribute('Name')+"(s)");
               TotalPriceKeyboard.innerHTML = TotalPrice_Keyboard+(Nb_Keyboard*AllItems[0].getAttribute('price'));
               TotalPriceKeyboard.style.color = "white"; 
               TotalPriceKeyboard.style.textAlign = "center";
               Total_Price = Total_Price - parseInt(AllItems[0].getAttribute('price'));
               
   
   
   
            }
   
            TotalPrice.innerHTML = Total_Price;
            TotalPrice.style.color = "white";
            TotalPrice.style.textAlign = "center";
   
      } else
   
       {
         RemoveKeyboard.ariaDisabled="true";
         NbKeyboard.innerHTML = "You do not have any keyboard on the basket";
         NbKeyboard.style.color = "black";
         

       }
   
      };    
      

     
      RemoveMouse.onclick  = function(){
         
         if (parseInt(NbMouse.textContent) > 0) {

            if (RemoveMouse.textContent == "Remove Mouse From The Basket"){
               Nb_Mouse = Nb_Mouse-1;
               Text2Part1.innerHTML = ("Number of "+NbMouse.getAttribute('Name')+"(s)");
               NbMouse.innerHTML = Nb_Mouse;
               NbMouse.style.textAlign = "center";
               NbMouse.style.color = "white";
               TotalPriceMouse.style.textAlign = "center";
               Text2_Total_Price_Part2.innerHTML =("Total Price of "+NbMouse.getAttribute('Name')+"(s)");
               TotalPriceMouse.innerHTML = TotalPrice_Mouse+(Nb_Mouse*AllItems[1].getAttribute('price'));
               TotalPriceMouse.style.color = "white"; 
               Total_Price = Total_Price - parseInt(AllItems[1].getAttribute('price'));
               
   
   
   
   
            }
   
            TotalPrice.innerHTML = Total_Price;
            TotalPrice.style.color = "white";
            TotalPrice.style.textAlign = "center";

         } else
         {
            RemoveMouse.ariaDisabled="true";
            NbMouse.innerHTML = "You do not have any Mouse on the basket";
            NbMouse.style.color = "black";
         }

           

         } ;

      RemoveLaptop.onclick  = function(){

         if (parseInt(NbLap.textContent) > 0){
            
         if (RemoveLaptop.textContent == "Remove Laptop From The Basket"){
            Nb_Lap = Nb_Lap-1;
            Text3Part1.innerHTML = ("Number of "+NbLap.getAttribute('Name')+"(s)");
            NbLap.innerHTML = Nb_Lap;
            NbLap.style.textAlign = "center";
            NbLap.style.color = "white";
            TotalPriceLap.style.textAlign = "center";
            Text3_Total_Price_Part2.innerHTML =("Total Price of "+NbLap.getAttribute('Name')+"(s)");
            TotalPriceLap.innerHTML = TotalPrice_Lap+(Nb_Lap*AllItems[2].getAttribute('price'));
            TotalPriceLap.style.color = "white";
            Total_Price = Total_Price - parseInt(AllItems[2].getAttribute('price'));
               
   
         
         
   
         }
   
         TotalPrice.innerHTML = Total_Price;
         TotalPrice.style.color = "white";
         TotalPrice.style.textAlign = "center";


         } else 

         {

            RemoveLaptop.ariaDisabled="true";
            NbLap.innerHTML = "You do not have any Laptop on the basket";
            NbLap.style.color = "black";
         }



      };

         

      
      
      
});