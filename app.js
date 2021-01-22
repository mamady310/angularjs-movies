var app = angular.module('angularApp', []);

app.controller("mainctrl", function(){ 
    this.hello = "world";

    this.fruits = ['apples','oranges', 'grapes', 'pineapple', 'starfruit', 'canteloup', 'blueberries', 'strawberries']

    this.alertMe = function() {
        alert('button pressed');
    };
});