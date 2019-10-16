//Require express dependencies
var express = require('express');

//Require module of employee from employee.js file
var empModel = require('../modules/employee');

//creat a object of route
var router = express.Router();

//query for find result from collection
var employee=empModel.find({});




// start routing.... 

router.get('/', function(req, res, next) {

  //execute object employee to fetch data
  employee.exec(function(err,data){
      if(err) throw err;   //throw err if occur
        res.render('index', { title: 'Employee Records',records:data}); //render data for ejs page
      
  });
  
});



//Export route module
module.exports = router;
