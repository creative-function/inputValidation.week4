"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var validator = function validator(selector) {
  var _this = this;

  _classCallCheck(this, validator);

  _defineProperty(this, "formSubmitListener", function (event) {
    console.log('formSubmitListener', event);
  });

  _defineProperty(this, "setupListeners", function () {
    console.log('setupListeners', _this, _this.$form);

    _this.$form.addEventListener('sumbit', _this.formSubmitListerner);
  });

  //confirms the selector that this validator is using for output
  console.log('validator has been constructed! for:', selector); // store a refrence to our DOM element as this.$form
  //this.$form becomes a classwide variable when attached to *this*
  //so we can use it elsewhere inside THIS class / instance 

  this.$form = document.querySelector(selector);
  this.setupListeners();
}; //
//# sourceMappingURL=validator.js.map
