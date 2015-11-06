var basketModule = (function () {
    //private variables
    var basket = [];

    function pvFindItemInBasket(itemInBasket) {
        return basket.filter(function(item){
            if(itemInBasket.number === item.number) {
                return itemInBasket;
            }
        });
    }

    function pvAddItemsToBasket(itemsArray) {
        itemsArray.forEach(function(item) {
            basket.push(item);
        });
    }

    function pvRemoveItemFromBasket(itemInBasket) {
        basket = basket.filter(function(item) {
            return item.number != itemInBasket.number;
        });
    }

    function pvRemoveItemsFromBasket(arrayOfItemsToBeRemoved) {
        basket.forEach(function(itemInBasket){
            arrayOfItemsToBeRemoved.forEach(function(itemToBeRemoved){
                if(itemToBeRemoved.number === itemInBasket.number) {
                    pvRemoveItemFromBasket(itemToBeRemoved);
                }
            });
        });
    }

    function pvGetItemsInBasket() {
        basket.forEach(function(item){
            console.log(item.number);
        });
    }

    //public API
    return {
        addItemsToBasket: pvAddItemsToBasket,
        removeItemFromBasket: pvRemoveItemFromBasket,
        removeItemsFromBasket: pvRemoveItemsFromBasket,
        getAllItemsInBasket: pvGetItemsInBasket,
        findItemInBasket: pvFindItemInBasket
    }
}());
