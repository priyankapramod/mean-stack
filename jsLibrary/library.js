function each(arr, callback) {
  // loop through the array
  for(var i = 0; i < arr.length; i++) {
    callback(arr[i]); // invoking the callback many times... delegation!
  }
}

var _ = {
   map: function(arr, myfunc) {
     //code here;
     var new_arr = [];
     for(var i = 0; i < arr.length; i++){
         new_arr.push(myfunc(arr[i]));
     }
     return new_arr;
   },
   reduce: function(arr, myfunc) {///not sure????? about implementation
     // code here;
     var sum = 0;
     for(var i = 0; i < arr.length;i++){
        sum = sum +  myfunc(0, arr[i]);
     }
     return sum;
 },
   find: function(arr, myfunc) {
     // code here;
        var new_arr = [];
        for(var i = 0; i < arr.length; i++){
            if(myfunc(arr[i]) && (new_arr.length ==0)){
                new_arr.push(arr[i]);
            }
        }
        return new_arr;
   },


   filter: function(arrs, myfunc) {
       var new_arr = [];
        for(var i = 0; i < arrs.length; i++){
            if(myfunc(arrs[i])){
                new_arr.push(arrs[i]);
            }
        }
        return new_arr;
   },


   reject: function(arr, myfunc) {
     // code here;
     var new_arr = [];
     for (var i = 0; i < arr.length; i++){
         if (!myfunc(arr[i])){
             new_arr.push(arr[i]);
         }
     }
     return new_arr;
   }
 }
// you just created a library with 5 methods!

var map = _.map([1, 2, 3], function(num){ return num * 3; });
console.log(map);


var sum1 = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
console.log(sum1);


var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(even);

var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens); // if things are working right, this will return [2,4,6].

//reject--- opposite of filter.
var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(odds); //[1,3,5]
