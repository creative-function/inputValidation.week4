"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var validator = //when creating a class there is no classwide variable. 
//class-wide variables are created by assigning it to *this* (i.e this.$form)
//this is the first function called wen the the class is instantiated (created) in main.js
function validator(formSelector, inputSelector, userCode) {
  var _this = this;

  _classCallCheck(this, validator);

  _defineProperty(this, "setupListeners", function () {
    console.log('setupListeners', _this.$input);

    _this.$form.addEventListener('submit', _this.formSubmitListener);

    _this.$input.addEventListener('keyup', _this.easterEggListener); //when keyup happens, call this function

  });

  _defineProperty(this, "formSubmitListener", function (aDomEvent) {
    console.log('formSubmitListener', aDomEvent);
    aDomEvent.preventDefault();
  });

  _defineProperty(this, "easterEggListener", function (anotherDomEvent) {
    var hoverBox = document.querySelector('.secret-box');
    console.log('easterEggListener is present:', anotherDomEvent, _this.userCode);

    if (_this.$input.value === _this.userCode) {
      hoverBox.style.visibility = 'visible';
      hoverBox.style.position = 'absolute';
      hoverBox.innerHTML += " " + _this.userCode;
      hoverBox.style.backgroundColor = _this.backgroundColor;
    }

    setTimeout(function () {
      hoverBox.style.visibility = 'hidden';
    }, 3000);
  });

  //confirms the selector that this validator is using for output
  console.log('validator has been constructed! for:', formSelector, inputSelector); // store a refrence to our DOM element as this.$form
  //this.$form becomes a classwide variable when attached to *this*
  //so we can use it elsewhere inside THIS class (class validator) / instance 

  this.$form = document.querySelector(formSelector);
  this.$input = document.querySelector(inputSelector);
  this.userCode = 'puppies';
  this.backgroundColor = 'orange';
  this.setupListeners();

  if (userCode != undefined) {
    this.userCode = userCode.secretCode;
    this.backgroundColor = userCode.backgroundColor;
  }
} // this is the first method called in the construcor
//so this is our next line for our logic flow
;
//# sourceMappingURL=validator.js.map
