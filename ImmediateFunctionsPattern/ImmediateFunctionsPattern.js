//Useful pattern because it provides a scope sandbox for your
//initialization code
(function(){
    console.log('watch out!');
}());

//Your code has to perform some setup tasks when the page loads,
//such as attaching event handlers, creating objects etc
//All this work needs to be done only once, so there's no use
//to create a reusable function, which you won't need after the
//initialization phase
(function () {

    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        today = new Date(),
        msg = 'Today is ' + days[today.getDay()] + ', ' + today.getDate();

    console.log(msg);
}());

//Parameters of an immediate function
(function(who, when){
    console.log("I met " + who + " on " + when);
}('Cristian Drincu', new Date()));