function Add_num(num)
{
    if(num>1000||num<0)
    {
        {
            return "Number must be positive and between 1 to 1000";
        }
    }
    else
    {
        var i,total=0;
        for(i=1;i<=num;i++)
        {
            total=total+i;
    
        }
        return  total;
    }
}

console.log(Add_num(600));