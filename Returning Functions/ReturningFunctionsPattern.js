//Investigate further

var setup = function() {
    var count = 0;
    return function () {
        return (count += 1);
    };
};

var next = setup();
console.log(next()); //1
console.log(next()); //2
console.log(next()); //3
