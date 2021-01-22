

function kilometerToMeter(kilometer){
    const convertRate = 1000 ;
        var meter = kilometer / convertRate ;
         return meter ;
}


// end of first problem

function budgetCalculator(watch , mobile , laptop){
    
    var perWatchPrice = 50 ;
    var totalWatchPrice = watch * perWatchPrice ;
    var perMobilePrice = 100;
    var totalMobilePrice = mobile * perMobilePrice ;
    var perLaptopPrice = 500 ;
    var totalLaptopPrice = laptop * perLaptopPrice ;
    var totalPrice = totalWatchPrice + totalMobilePrice + totalLaptopPrice ;
    return totalPrice ;


}
//  end of second problem 

var totalCost = 0;
function hotelCost(totaldays){
    if(totaldays <= 0){
        console.error("please,enter a valid number of days");;
    }
    else if (totaldays <= 10){
        totalCost = totaldays * 100 ;
    }
    else if (totaldays <=20) {
        var perDay100 = 10 * 100 ;
        var remaining = totaldays - 10 ;
        var perDay80 = remaining * 80 ;
        totalCost = perDay100 + perDay80 ;
    }
    else if (totaldays >= 20) {
        var perDay100 = 10 * 100 ;
        var perDay80 = 10 * 80 ;
        var remaining = totaldays - 20 ;
        var perDay50 = remaining * 50 ;
        totalCost = perDay100 + perDay80 + perDay50 ;
        
    }
    return totalCost ;
}

// end of third problem


function megaFriend(friendList) {
  var longest = friendList[0];
  for (i = 0; i < friendList.length; i++) {
    if (friendList[i].length > longest.length) {
      longest = friendList[i];
    }
  }
  return longest;
}
// end of 4th problem