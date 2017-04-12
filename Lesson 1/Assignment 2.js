debugger;
var itemname = prompt(" what is the item name ");
var itemprice = prompt(" what is the price of the item ");
var discountpercentage = prompt(" what is the discount percentage ");
var discountedprice = itemprice/100 *(discountpercentage);
var totalpriceafterdiscount = itemprice - discountedprice;
alert(" You bought " + itemname + " with $ " + itemprice + " at " + discountpercentage + " % . " + " The discounted amount is $ " + discountedprice + " . " + " The total price is $ " + totalpriceafterdiscount);







