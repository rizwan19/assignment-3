// Put the github repo here

function kilometerToMeter(distanceInKilometer)
{
    var distanceInMeter = distanceInKilometer*1000;
    return distanceInMeter;
}

function budgetCalculator(watch, mobile, laptop)
{
    var budget = watch*50 + mobile*100 + laptop*500;
    return budget;
}

function hotelCost(days)
{
    var cost;
    if(days<=10)
    {
        cost = days*100;
    }
    else if(days<=20)
    {
        cost = 10*100 + (days-10)*80;
    }
    else
    {
        cost = 10*100 + 10*80 + (days-20)*50;
    }
    return cost;
}

function megaFriend(friendList)
{
    var biggestName="";
    for(var i=0; i<friendList.length; i++)
    {
        if(friendList[i].length>biggestName.length)
            biggestName = friendList[i];
    }
    return biggestName;
}
console.log(kilometerToMeter(1.5));