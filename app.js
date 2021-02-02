var app = angular.module('angularApp', []);

app.controller("mainctrl", function($http){ 

    var vm = this;

   $http.get("https://pokeapi.co/api/v2/pokemon/")
   .then(function(response) {
    console.log(response.data.results);
    vm.poke = response.data.results;
   });
// get request with error handling 

// $http({
//     method: 'GET',
//     url: "https://realtor.p.rapidapi.com/mortgage/calculate?hoi=56.0&tax_rate=1.2485549449920654&downpayment=44980&price=224900&term=30.0&rate=3.827",
//     headers: {
// 		"x-rapidapi-key": "3f4f7b0954msheca74d0db130834p12adbdjsne010e1482182",
// 		"x-rapidapi-host": "realtor.p.rapidapi.com"
// 	}
//   }).then(function successCallback(response) {
//       console.log(response.data.mortgage);
//       vm.home = response.data.mortgage;
//       //successful response
//     }, function errorCallback(error) {
//         console.log(error);
//         alert(message);
        
//      //failed response
//     });

    this.fruits = ['apples','oranges', 'grapes', 'pineapple', 'starfruit', 'canteloup', 'blueberries', 'strawberries']

    this.alertMe = function() {
        alert('food');       };
   
});

app.filter("makePlural", function() {
    return function(input) {
        return input + "s";
    }
})