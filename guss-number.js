let score = 0;
let r = Math.ceil(Math.random());
console.log(r)
for(let i = 1;i <= 100; i++){
    let userInput = Number(prompt("Enter your number"));
    if(r > userInput){
        score+=1;
    }
    else if(r < userInput){
        score+=1;
    }
    else{
        break;
    }
}
let res = (100 - score);
console.log(res);