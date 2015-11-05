var basketModule = (function () {
    //private variables
    var basket = [];

    function pvFindItemIndexInBasket(itemInBasket) {
        basket.filter(function(item){
            if(itemInBasket.name === item.name) {
                return itemInBasket;
            }
        });
    }

    function pvAddItemToBasket(itemsArray ,cb) {
        itemsArray.forEach(function(item) {
            basket.push(item);
        });

        cb(basket);
    }

    function pvRemoveItemFromBasket(itemName, cb) {
        basket = basket.filter(function(item) {
            return item.name != itemName;
        });

        cb(basket);
    }

    function pvGetItemsInBasket() {
        basket.forEach(function(item){
            console.log(item.name);
        });
    }

    //public API
    return {
        addItemToBasket: pvAddItemToBasket,
        removeItemFromBasket: pvRemoveItemFromBasket,
        getAllItemsInBasket: pvGetItemsInBasket
    }
}());

var itemsArray = [
    {name: 'Cristian'},
    {name: 'Robert'},
    {name: 'Flavius'},
    {name: 'Dragos'}
];
basketModule.addItemToBasket(itemsArray, function() {
    basketModule.getAllItemsInBasket()
});

basketModule.removeItemFromBasket('Robert', function() {
    console.log('AFTER REMOVING AN ITEM!');
    basketModule.getAllItemsInBasket();
});
