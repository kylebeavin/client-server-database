var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var TestModel = sequelize.import('../models/test');

/*******************************
 *  GET: Get simple message from server
 ******************************/

router.get('/helloclient', (req,res) => {
    res.send('This is a message from the server to the client.')
});

router.post('/one', (req,res) => {
    res.send("Got a post request")
});

router.post('/two', (req,res) => {
    console.log(req.body);
    let testData = "Test data fro endpoint two";

    TestModel
        .create({
            testdata: testData 
        })
        res.send("Test two went through!")
    });
    
router.post('/three', (req,res) => {
    var testData = req.body.testdata.item;
    TestModel
        .create({
            testdata: testData
        })
        res.send("Test three went through!")
})

router.post('/four', (req,res) => {
    var testData = req.body.testdata.item;
    TestModel
        .create({
            testdata: testData
        })
        .then(
            () => {
                res.send("Test 4 went through!");
            }
        );
});
router.post('/five', (req,res) => {
    var testData = req.body.testdata.item;
    TestModel
        .create({
            testdata: testData
        })
        .then(
            (data) => { 
                res.send(data);
            }
        );
});

router.post('/six', (req, res) => {
    var testData = req.body.testdata.item;
    TestModel
      .create({
        testdata: testData
      })
      .then(
        (testdata) => {
          res.json({
            testdata: testdata 
          });
        }
      );
  });

  router.post('/seven', (req,res) => {
      var testData = req.body.testdata.item;
      TestModel
      .create({
          testdata: testData
      })
      .then(
          createSuccess = (testdata) => {
              res.json({
                  testdata: testdata
              });
          },
          createError = (err) => {
              res.send(500, err.message);
          }
      );
  });

  router.get('/one', function(req, res) {
      TestModel
        .findAll({
            attributes: ['id', 'testdata']
        })
        .then(
            function findAllSuccess(data) {
                console.log("Controller data:", data);
                res.json(data);
            },
            function findAllError(err) {
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
