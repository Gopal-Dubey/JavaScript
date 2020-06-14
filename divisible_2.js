function divisibility(a,b)
{
    if( a < b)
    {
        alert("a must be greater than b") ;
    }
    else if(a % b==0)
    {
        return "true";
    }
    else{
        return "False";
    }
} 
console.log(divisibility()) ;

