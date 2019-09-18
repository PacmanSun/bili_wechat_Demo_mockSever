var express = require('express');
var router = express.Router();
const data = require('../data');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/naviList', function(req, res, next) {
  res.send(data.naviList);
});

router.get('/swiperList', function(req, res, next) {
  res.send(data.swiperList);
});

router.get('/videoList', function(req, res, next) {
  res.send(data.videoList);
  console.log("correct!!!");

});

router.get('/videoDetail', function(req, res, next) {
  let id = req.query.id
  if (id >= data.videoDetail.length) {
    id = data.videoDetail.length - 1;
  }
  res.send(data.videoDetail[id]);
});

router.get('/othersList', function(req, res, next) {
  let id = req.query.id
  if (id >= data.othersList.length) {
    id = data.othersList.length - 1;
  }
  res.send(data.othersList[id]);
});

router.get('/commentsList', function(req, res, next) {
  let id = req.query.id
  if (id >= data.commentsList.length) {
    id = data.commentsList.length - 1;
  }
  res.send(data.commentsList[id]);
});

module.exports = router;
