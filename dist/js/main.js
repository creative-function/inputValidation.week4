"use strict";

console.log("Hello Chello, input validation."); //'.class' is for class names. class= is an attribute
//'#id-name' is for id names    id= is an attribute // name= is an attribute
//'[name='inputName']' for specific input attributes (wrapped in '[square brackets in string]')
//inputName is the value of name attribute.
// const isValid = new validator('.puppyForm', '[name=puppyName');

var userCode = {
  secretCode: 'bumble',
  backgroundColor: 'pink'
};
var isValidtoo = new validator('.puppyForm', '[name=puppyName]', userCode);
//# sourceMappingURL=main.js.map
