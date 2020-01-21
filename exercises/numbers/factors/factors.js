// function shopping(budget){
//     if(budget>0)
//     shoe("Nike:AirForce",100);

// }


function shoe(response,budget){
    //shoe is working 

    
    
    var dict= {
        "Nike:AirForce": 100, 'Sketcher:SketcherPlus': 40, "Converse":60};
    
//     var lowest_value=dict["Nike:AirForce"];
//     for(var key in dict){

//     new_value = dict[key];
//     if(lowest_value>new_value){
//        lowest_value = new_value;
//     }
// }

    //console.log(lowest_value);

    var shoe_price = dict[response];

    var difference = budget - shoe_price;

    if(difference>=0){
        return cart(difference,response);
    }
    

       
    
      

}

function cart(difference,response){

    var cart = [];
    cart.push(response);
    var lowest_value = 40;

    if(difference < lowest_value){
        console.log("Your budget has been reached and checkout");
        console.log("Remaining balance is : $",difference);
        return cart;
    }
    else{
        //how to call input to ask what shirt they want;
    }


}

if (require.main === module) {

    console.log(shoe('Sketcher:SketcherPlus',60));

}
    
  
  
    
  
  module.exports = shoe;
  
