// const pi = 3.14;
// alert(pi);

// const web_names = ["Kushal", "Suraj", "Ajay", "Ugen", "Jugal"];
          
// alert(web_names[4]);

// map function

// var variable_name = 20;

// array => variable

// var variable = [value, value2, value3]
//     variable[0] = value
//     variable[1] = value2

// var names = ["Kushal", "Bijaya", "Binod", "Prayas", "Janak"];
// console.log(names[4]);

// const a = 23;
// console.log(a);
// a = 100;
// console.log(a);

// var variableName = value;
// var num1 = 10;
// var fullName = "Ram Thapa";

// var variableName = false;

// variable=>named location in storage
// var fullname = "Kushal Rajkarnikar";
// var odd_number = 5;

// Array = collection of values
// var variable_name = value;
// var numb = 4;
// var fullName = "Ram Thapa"

// const array_name = [multiple values];

// .map() = > JS built-in function
           
// input=> array
// items=>manipulate/change
// output=>array

const nums = [1, 3, 5, 7, 9, 11];
console.log("The original array is " + nums);
// const names = ["Kishore", "Prashnil", "Tilak", "Pawan"];

// console.log(nums[2]);


// Array => Multipe values in the same variable
              // 0  1  2  3  4

// console.log(nums[2]); //3


// console.log(nums);


// .map() function => JS built-in function

// const output_array = input_array(function(item){
//   return item - 10;
// });

// takes array as an input, manipulates array items, outputs array
// output_array = input_array.map(function(){
//   return ();  
// });

// cubes_array = [1, 27, ]
// const output_array = input_array.map(function(item){
//   return 
// });

const squares_array = nums.map(function(a) {
    return a * a; 
})

console.log("The square arary is " + squares_array);

// map jS Function takes an input array manipulates its item to generate an output array;

// const output_array = input_array.map(function(item one at a time){
//   return item manipulation;
// })

// var output_array = [];
// for (c=0; c<=5; c++){
//       output_array[c] = nums[c] * nums[c];
// }

console.log(nums);
// console.log(cubes_array);

// var name = "Kushal";
// console.log(name[3]);




const names = ["anish", "bikash", "inas", "nikita", "pankaj", "puja", "radha", "romeo", "sagar", "sandip", "soham", "suhit"]
// var firstname = "Kushal";

console.log(names);

// each string is an array of characters
// var firstName="Sita";
// console.log(firstName[3]); // a

// var fullname = "Sita";
// // String itself is an array of characters
// fullname = ["S", "i", "t", "a"];
// fullname[3]
// var names = ["Ram", "Sita", "Laxman"];


// const capitalized = names.map(function(name){
// output_array = input_array.map(function(a) {
// output_array = input_array.map((one_item) => {
//   // return 
// })

// capitalized = ["Anish", "Bikash"];
const capitalized = names.map((name) => {
return name[0].toUpperCase() + name.slice(1) 

              
});
                              
console.log(capitalized);


const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]

console.log(pokemon);
var first_name = "Ram";
var last_name = "Thapa";
console.log("Your first name is " + first_name + " and last name is " + last_name);
console.log(`Your first name is ${first_name} and last name is ${last_name}`);

const paras = pokemon.map(function(poke){
  return `<p>${poke}</p>`
  // return "<p>" + poke + "</p>"
});


const ps = pokemon.map(p=>`<p>${p}</p>`);

console.log(paras);
console.log(ps);


