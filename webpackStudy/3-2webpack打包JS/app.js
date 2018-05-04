//es6 module 模块化规范
import sum from './sum';

//commonJS 模块化规范
var minus = require('./minus');

//AMD
require(['./muti'], function(muti){
    console.log('muti(23, 24)=', muti(23, 24));
})
console.log('minus(23, 24)= ', minus(23, 24));
console.log('sum(23, 24) = ', sum(23, 24));