/**
 * Created by gaoletian on 15/11/10.
 */
var P = require('bluebird');

var keys = Object.keys(P);

//console.log(keys);

function test(){
    var args = [].slice.call(arguments);
    console.log(args);

    console.log(arguments);
}

var obj = {
    '0':'aa',
    '1':'bb'
};

var args = [].slice.call(obj);
console.log(args);

console.log([1,2,3].reverse());
console.log([1,2,3].shift());
console.log([1,2,3].pop());

var arr1 = [1,2,3];
    arr1.push(4);
console.log(arr1.pop());

//test(1,23);
//test({a:1,b:3},{a:2,b:4});