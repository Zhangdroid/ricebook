var express = require('express'),
  router = express.Router(),
  food = require('../models/food');


module.exports = function (app) {
  app.use('/', router);
};
router.get('/', function (req, res, next) {
    var foods = [
      {
        "id": 14529733723963,
        "title": "还原日本盛行的洋派居酒屋出品 一元居酒屋双人料理",
        "description": "一次足享5道隐藏菜式",
        "price": 238,
        "people": 2,
        "remainDays": 21,
        "remainNumer": 5,
        "tag":"和食季·物"
      }, {
        "id": 14529733723963,
        "title": "还原日本盛行的洋派居酒屋出品",
        "description": "一次足享5道隐藏菜式",
        "price": 238,
        "people": 1,
        "remainDays": 21,
        "remainNumer": 5
      }, {
        "id": 14529733723963,
        "title": "还原日本盛行的洋派居酒屋出品 一元居酒屋双人料理",
        "description": "一次足享5道隐藏菜式",
        "price": 238,
        "people": 3,
        "remainDays": 21,
        "remainNumer": 5
      }, {
        "id": 14529733723963,
        "title": "还原日本盛行的洋派居酒屋出品 一元居酒屋双人料理",
        "description": "一次足享5道隐藏菜式",
        "price": 238,
        "people": 2,
        "remainDays": 21,
        "remainNumer": 5
      }, {
        "id": 14529733723963,
        "title": "还原日本盛行的洋派居酒屋出品 一元居酒屋双人料理",
        "description": "一次足享5道隐藏菜式",
        "price": 238,
        "people": 1,
        "remainDays": 21,
        "remainNumer": 5
      }, {
        "id": 14529733723963,
        "title": "还原日本盛行的洋派居酒屋出品 一元居酒屋双人料理",
        "description": "一次足享5道隐藏菜式",
        "price": 238,
        "people": 4,
        "remainDays": 21,
        "remainNumer": 5
      }, {
        "id": 14529733723963,
        "title": "还原日本盛行的洋派居酒屋出品 一元居酒屋双人料理",
        "description": "一次足享5道隐藏菜式",
        "price": 238,
        "people": 2,
        "remainDays": 21,
        "remainNumer": 5
      }, {
        "id": 14529733723963,
        "title": "还原日本盛行的洋派居酒屋出品 一元居酒屋双人料理",
        "description": "一次足享5道隐藏菜式",
        "price": 238,
        "people": 2,
        "remainDays": 21,
        "remainNumer": 5
      }, {
        "id": 14529733723963,
        "title": "还原日本盛行的洋派居酒屋出品 一元居酒屋双人料理",
        "description": "一次足享5道隐藏菜式",
        "price": 238,
        "people": 2,
        "remainDays": 21,
        "remainNumer": 5
      }
    ];
    res.render('index', {
      title: 'ENJOY-精选限量美食',
      foods: foods
    });
});
