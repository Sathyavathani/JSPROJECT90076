let n=parseInt(prompt("Enter Input",0))
let sum=0
let temp=n
let digit=0
while(n!=0)
{
    digit=parseInt(n%10)
    sum=sum+Math.pow(digit,3)
    n=parseInt(n/10)
}


if(sum===temp)//which checks both value and datatype.
{
    document.writeln(`${temp} is a Armstrong number`)
}
else{
    document.writeln(`${temp} is not a Armstrong number`)
}