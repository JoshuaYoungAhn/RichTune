var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/richtune');

var products = [
new Product ({
    imagePath: "http://www.turbo.com.sg/products/holset-turbo2.jpg",
    title: "Turbo",
    description: "makes car go pshhhh sst",
    price: 300
}),
new Product ({
    imagePath: "https://whipplesuperchargers.com/images/product/rotors.gif",
    title: "SuperCharger",
    description: "Push that baby to its limits with this SuperCharger",
    price: 600
}),
new Product ({
    imagePath: "http://www.intercoolerkits.com/wp-content/themes/limauorange/images/banner.jpg",
    title: "Intercooler",
    description: "every car thats being pushed, needs a set of these",
    price: 150
}),
new Product ({
    imagePath: "http://www.autoaccessoriesgarage.com/img/group/icon/4989.jpg",
    title: "Cold-air Intake",
    description: "every car thats being pushed, needs a set of these",
    price: 60
}),
];
var done = 0;
for (var i=0; i < products.length; i++){
  products[i].save(function(err, result){
    done++;
      if( done === products.length) {
        exit();
      }
  })
};

function exit() {
  mongoose.disconnect();
}
