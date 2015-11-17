var initialFunction = (function(){

    var elements = [];
    var elementIndex = 0;
    function pvPopulateNumbers() {
        for (var i = 0; i < 10; i++) {
            elements.push({number: i});
        }
    }

    function pvFindElement(elementToBeFound, fnCallbackDisplayNumbers) {
        if(typeof fnCallbackDisplayNumbers !== 'function') {
            fnCallbackDisplayNumbers = false;
        }
        elements.forEach(function(element) {
            if(element.number === elementToBeFound.number) {
                elementIndex = elements.indexOf(element);
                if(fnCallbackDisplayNumbers) {
                    fnCallbackDisplayNumbers(elementToBeFound, elementIndex);
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
