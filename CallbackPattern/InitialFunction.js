var initialFunction = (function(){

    var elements = [];
    var elementIndex = 0;
    function pvPopulateNumbers() {
        for (var i = 0; i < 10; i++) {
            elements.push({number: i});
        }
    }

    function pvFindElement(elementToBeFound, callbackDisplayNumbers) {
        if(typeof callbackDisplayNumbers !== 'function') {
            callbackDisplayNumbers = false;
        }
        elements.forEach(function(element) {
            if(element.number === elementToBeFound.number) {
                elementIndex = elements.indexOf(element);
                if(callbackDisplayNumbers) {
                    callbackDisplayNumbers(elementToBeFound, elementIndex);
                }
            }
        });

        return -1;
    }

    return {
        populateNumbers: pvPopulateNumbers,
        findElement: pvFindElement
    }

}());
