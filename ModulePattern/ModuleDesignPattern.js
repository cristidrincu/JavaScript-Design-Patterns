var basketModule = (function () {
    //private variables
    var basket = [];

    function pvFindItemInBasket(itemInBasket) {
        return basket.filter(function(item){
            if(itemInBasket.name === item.name) {
                return itemInBasket;
            }
        });
    }

    function pvAddItemsToBasket(itemsArray) {
        itemsArray.forEach(function(item) {
            basket.push(item);
        });

        return basket;
    }

    function pvRemoveItemFromBasket(itemInBasket) {
        basket = basket.filter(function(item) {
            return item.name != itemInBasket.name;
        });

        return basket;
    }

    function pvRemoveItemsFromBasket(arrayOfItemsToBeRemoved) {
        basket.forEach(function(itemInBasket){
            arrayOfItemsToBeRemoved.forEach(function(itemToBeRemoved){
                if(itemToBeRemoved.name === itemInBasket.name) {
                    pvRemoveItemFromBasket(itemToBeRemoved);
                }
            });
        });
    }

    function pvGetItemsInBasket() {
        basket.forEach(function(item){
            console.log(item.name);
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
