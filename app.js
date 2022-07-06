const submitButton = document.getElementById("checkButton");
console.log(submitButton);
const deleteButton = document.getElementById("clearbtn");
const message = document.getElementById("msg");
console.log(message);
const livesno = document.getElementById("yyy");
var guessNumber = Math.round(Math.random()*100);
console.log(guessNumber);
var live = 10;
var text;


submitButton.onclick =  () =>{
    live--;
    var  inputvalue = document.getElementById("textBox").value;
    console.log(inputvalue);
    console.log(guessNumber);
    console.log(live);
    if( inputvalue==guessNumber)
    {
        location.href="./win.html"
    }
    else if(live==0)
    {
        location.href="./lose.html"
    }
    else if( inputvalue > guessNumber)
    {
        text = `your guess is too high.${live} remaining`;
    }
    else if( inputvalue < guessNumber)
    {
        text = `your guess is too low .${live} remaining`;
    }
console.log(text);
message.style.display="inherit";
message.innerHTML= text;
livesno.innerHTML=live;
}

deleteButton.onclick=() =>{
    var box = document.getElementById("textBox");
    box.innerText='';
}
