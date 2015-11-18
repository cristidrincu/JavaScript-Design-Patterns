//This pattern uses an object with an init() method,
//which is executed immediately after the object is created
//The init() function takes care of all initialization tasks

({
    maxwidth: 600,
    maxheight: 400,

    gimmeMax: function() {
        return this.maxwidth + "x" + this.maxheight;
    },

    //initialize
    init: function () {
        console.log(this.gimmeMax());
    }
}.init());
