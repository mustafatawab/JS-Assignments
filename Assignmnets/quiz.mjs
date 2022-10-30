import PromptSync  from "prompt-sync";
const prompt = PromptSync();

let score = 0;

// const question = ['which language run in the web browser', 'What does CSS Stands for?', 'What does HTML Stands for?', 'Which Year Javascript Was Launched?'];
// const ans = ['javascript', 'cascading style sheet', 'hyper text markup language', '1995', ];
const quizData = [
     {
        question : 'which language run in the web browser',
        a: ' a : java',
        b: ' b : c++',
        c: ' c : python',
        d: ' d : javascript',
        correct : 'd',
    },

    {
        question : 'What does CSS Stands for?',
        a: ' a : Central Style Sheet',
        b: ' b : Cascadding Style Sheet',
        c: ' c : Cascadding Simple Sheet',
        d: ' d : Cars SUVs Sailboats',
        correct: 'b',


    },

    {
        question : 'What does HTML Stands for?',
        a: ' a : Hyper Text Markup Language',
        b: ' b : Hyper Text Markdown Language',
        c: ' c : Hyperloop Mechine Language',
        d: ' d : Helicopters Terminals Motorboats Lamborginis',
        correct: 'a',
    },


    
    {
        question : 'Which Year Javascript Was Launched?',
        a:  ' a: 1996',
        b: ' b: 1995',
        c: ' c: 1994',
        d: ' d: none of the above',
        correct: 'b',
    },




];


for(let i = 0; i<quizData.length; i++){

    console.log(quizData[i].question);

    console.log(quizData[i].a);
    console.log(quizData[i].b);
    console.log(quizData[i].c);
    console.log(quizData[i].d);


    // document.write(" <h1>" +quizData[i].question + " </h1>");

    // document.write(quizData[i].a);
    // document.write(quizData[i].b);
    // document.write(quizData[i].c);
    // document.write(quizData[i].d);

     let userInput = prompt("\nChoose the Right Answer : ");

    if(userInput == quizData[i].correct){
        score++;

    }

}

console.log('Your score is' + score);