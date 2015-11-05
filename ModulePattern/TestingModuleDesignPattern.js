//Test setup
var testingALargeItemsArray = [];
for(var i = 0; i < 150000; i++) {
    testingALargeItemsArray.push({name: i});
}

var testingModule = basketModule;

testingModule.addItemsToBasket(testingALargeItemsArray);
testingModule.removeItemFromBasket({name: 49000});
testingModule.removeItemsFromBasket([{name: 3000}, {name: 30000}]);

var foundItemArray = testingModule.findItemInBasket({name: 49000});
if (foundItemArray.length > 0) {
    console.log('Item found... Item is: ' + foundItemArray[0].name);
} else {
    console.log('Item not found!');
}