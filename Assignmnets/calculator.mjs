import PromptSync from "prompt-sync";

let prompt = PromptSync();




let num1 = prompt("Enter your first number : ");

let num2 = prompt("Enter second number : ");


let op = prompt("Choose operations (+,-,/,*) ");


function add(){

    console.log(num1 + num2);

}

function subtract(){
    
    console.log(num1 - num2);


}

function multiply(){
    console.log(num1 * num2);
   
}

function division(){
    console.log(num1 / num2);

    
}





// let play = 'y';

// while(play == 'y' || play == 'Y')
// {
    switch(op){
        case '+':

            add();
            break;
        case '-':
            subtract();
            break;
        case '*':
            multiply();
            break;
        case '/':
            division()
            break;
        default: 
            console.log('You enterred wrong value please choose the right one');
    
            break;
        
    }
    // play = prompt("You wanna play again Reply With Y if yes other wise N");
// }