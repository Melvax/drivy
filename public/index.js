'use strict';

//list of cars
//useful for ALL exercises
var cars = [{
  'id': 'p306',
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'id': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'id': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];

function modifyPrice(){
for(var i = 0; i < rentals.length; i++){
  rentals[i].price=0;
var returnDate2 = new Date(rentals[i].returnDate);
    var pickupDate2 = new Date(rentals[i].pickupDate);
    var timeDiff = Math.abs(returnDate2.getTime() - pickupDate2.getTime());
    var diffDays = Math.ceil(timeDiff /(1000*3600*24))+1;

var distance = cars[i].pricePerKm*rentals[i].distance;
var time = cars[i].pricePerDay*diffDays;
var newPrice = time + distance;
var deductibleReduc = diffDays*4;

rentals[i].price= newPrice;


  if(diffDays>=1 && diffDays<4)
    {
      newPrice= newPrice-newPrice*0.1;
    }

  if(diffDays>=4 && diffDays<10)
    {
      newPrice= newPrice-newPrice*0.3;
    }
  if(diffDays>=10)
    {
      newPrice= newPrice-newPrice/2;
    }  
  if(rentals[i].deductibleReduction==true)
    {
    newPrice=newPrice - deductibleReduc;
    }

rentals[i].price= newPrice;
var commission=rentals[i].price*0.3;
var insu = commission/2;
var assi = diffDays;
var dri = commission- (insu+assi);

rentals[i].drivy=dri;
rentals[i].insurance = insu;
rentals[i].assistance=assi;

  for (var j=0, l=actors[0].payment.length; j<l;j++){
 
      if(actors[i].payment[j].who=="driver"){
        actors[i].payment[j].amount=newPrice;
      }

      if(actors[i].payment[j].who=="owner"){
        actors[i].payment[j].amount=newPrice-commission;
      }

      if(actors[i].payment[j].who=="insurance"){
        actors[i].payment[j].amount=insu;
      }

      if(actors[i].payment[j].who=="assistance"){
        actors[i].payment[j].amount=assi;
      }

      if(actors[i].payment[j].who=="drivy"){
        actors[i].payment[j].amount=dri;
      }
                              
    } 
  
  }
     
}


var m =0;
var amount = 0;
function modifyAmount(){
  for(var i = 0; i < actors.length; i++){
      actors
    }
  }
//list of rentals
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var rentals = [{
  'id': '1-pb-92',
  'driver': {
    'firstName': 'Paul',
    'lastName': 'Bismuth'
  },
  'carId': 'p306',
  'pickupDate': '2016-01-02',
  'returnDate': '2016-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '2-rs-92',
  'driver': {
    'firstName': 'Rebecca',
    'lastName': 'Solanas'
  },
  'carId': 'rr-sport',
  'pickupDate': '2016-01-05',
  'returnDate': '2016-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '3-sa-92',
  'driver': {
    'firstName': ' Sami',
    'lastName': 'Ameziane'
  },
  'carId': 'p-boxster',
  'pickupDate': '2015-12-01',
  'returnDate': '2015-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}];

//list of actors for payment
//useful from exercise 5
var actors = [{
  'rentalId': '1-pb-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '2-rs-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '3-sa-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}];

//list of rental modifcation
//useful for exercise 6
var rentalModifications = [{
  'rentalId': '1-pb-92',
  'returnDate': '2016-01-04',
  'distance': 150
}, {
  'rentalId': '3-sa-92',
  'pickupDate': '2015-12-05'
}];

modifyPrice();
console.log(cars);
console.log(rentals);
console.log(actors);
//console.log(rentalModifications);