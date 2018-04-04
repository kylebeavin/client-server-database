var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var TestModel = sequelize.import('../models/test');

/*******************************
 *  GET: Get simple message from server
 ******************************/

router.get('/helloclient', function (req,res) {
    res.send('This is a message from the server to the client.')
});

router.post('/one', function(req,res){
    res.send("Got a post request")
});

router.post('/two', function(req,res) {
    console.log(req.body);
    let testData = "Test data fro endpoint two";

    TestModel
        .create({
            testdata: testData 
        })
        res.send("Test two went through!")
    });
    
router.post('/three', function(req,res) {
    var testData = req.body.testdata.item;
    TestModel
        .create({
            testdata: testData
        })
        res.send("Test three went through!")
})

router.post('/four', function(req,res) {
    var testData = req.body.testdata.item;
    TestModel
        .create({
            testdata: testData
        })
        .then(
            function () {
                res.send("Test 4 went through!");
            }
        );
});
router.post('/five', function(req,res) {
    var testData = req.body.testdata.item;
    TestModel
        .create({
            testdata: testData
        })
        .then(
            function message(data) {
                res.send(data);
            }
        );
});

router.post('/six', function (req, res) {
    var testData = req.body.testdata.item;
    TestModel
      .create({
        testdata: testData
      })
      .then(
        function message(testdata) {
          res.json({ //1
            testdata: testdata  //2
          });
        }
      );
  });

  router.post('/seven', function(req,res) {
      var testData = req.body.testdata.item;
      TestModel
      .create({
          testdata: testData
      })
      .then(
          function createSuccess(testdata) {
              res.json({
                  testdata: testdata
              });
          },
          function createError(err) {
              res.send(500, err.message);
          }
      );
  });

module.exports = router;
// router.get('/', function(req,res) {
//     res.send('Hey!!! This is a test route!');
// });

// router.get('/about', function(req,res){
//     res.send('This is an about route');
// });

// router.get('/contact', function(req,res){
//     res.send({"user": "kenn","email": "kenn@beastmode.com"});
// });

// router.get('/projects', function(req,res){
//     res.send(["project1","project2"])
// })

// router.get('/mycontacts', function(req,res){
//     res.send([{"user": "quincy", "email":"quincy@beastmode.com"},{"user":"tom","email":"tom@beastmode.com"},{"user":"aaron","email":"aaron@beastmode.com"}]);
// });
