//Test setup
var testingALargeItemsArray = [];
for(var i = 0; i < 150000; i++) {
    testingALargeItemsArray.push({number: i});
}

var testingModule = basketModule;

//Beginning Test
testingModule.addItemsToBasket(testingALargeItemsArray);
testingModule.removeItemFromBasket({number: 49000});
testingModule.removeItemsFromBasket([{number: 3000}, {number: 30000}]);

var foundItemArray = testingModule.findItemInBasket({number: 39000});
if (foundItemArray.length > 0) {
    console.log('Item found... Item is: ' + foundItemArray[0].number);
} else {
    console.log('Item not found!');
}