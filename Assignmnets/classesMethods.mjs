import PromptSync from "prompt-sync";
const prompt = PromptSync();



class Car{


     
     

 constructor(){

    
    console.log('This is constructor');
   }


   add()
   {
    console.log('This is add method');
    // console.log(number1 + number2);
   }

 

 subtract(){
    
    console.log('This is subtract method');
    
    // console.log(num1 - num2);


}

 multiply(){

    
    console.log('This is multiply method');
    // console.log(num1 * num2);
   
}

 division(){

    console.log('This is Division method');
    // console.log(num1 / num2);

    
}


}

// let num1 = prompt("Enter your first number : ");

// let num2 = prompt("Enter second number : ");
let car = new Car();

car.add();
car.subtract();
car.multiply();
car.division();
