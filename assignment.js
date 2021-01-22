// https://github.com/rizwan19/assignment-3

function kilometerToMeter(distanceInKilometer)
{
    if(distanceInKilometer<0) //check for negative value
    {
        console.log("Invalid Distance! Distance cannot be negative!");
        return -1;
    }
    var distanceInMeter = distanceInKilometer*1000; // converts kilometer to meter
    return distanceInMeter;
}

function budgetCalculator(watch, mobile, laptop)
{
    if(watch<0 || mobile<0 || laptop<0) // check for invalid number of products
    {
        console.log("Error! Number of products cannot be negative!");
        return -1;
    }
    var budget = watch*50 + mobile*100 + laptop*500; // calculates budget
    return budget;
}

function hotelCost(days)
{
    var cost;
    if(days<0) // check for negative number of days
    {
        console.log("Error! Number of days cannot be negative!");
        return -1;
    }
    else if(days<=10)
    {
        cost = days*100; //finds cost for less than or equal to 10 days
    }
    else if(days<=20)
    {
        cost = 10*100 + (days-10)*80; //finds cost for less than or equal to 20 days
    }
    else
    {
        cost = 10*100 + 10*80 + (days-20)*50; //finds cost for more than 20 days
    }
    return cost;
}

function megaFriend(friendList)
{
    var biggestName="";
    if(friendList.length==0) //checks for empty array
    {
        console.log("Error 404! Friend list is empty!");
        return -1;
    }
    for(var i=0; i<friendList.length; i++) //finds the biggest name in the array
    {
        if(friendList[i].length>biggestName.length) 
            biggestName = friendList[i];
    }
    return biggestName;
}