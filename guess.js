secret=Math.floor(Math.random()*(9+1));
var c=0;
while(c<2)
{
    guess=prompt("guess number");
if(Number(guess)==secret)
{
    alert("you won");
    break;
}
else if(Number(guess)>secret)
{
    alert("you are high");
}
else
{
    alert("you are low");
}
c++;
}
alert("you lose");
console.log(secret);