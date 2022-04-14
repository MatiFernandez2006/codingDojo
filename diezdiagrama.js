/*
Variables     =     Datos
Funcntion       =     hello
console.log     =     hello
console.log     =     hello
/*

function hello() {
    console.log('hello');
}
hello();
console.log('Dojo');

/*
Variables     =     Datos
function      =     hello
   return 15;
var result    =     hello
console.log   =     ('result is', result)
/*

function hello() {
    console.log('hello');
    return 15;
}
var result = hello();
console.log('result is', result);


/*
Variables     =     Datos
function      =     numPlus(num)
     return num+15;
var result    =     numPlus(3)
console.log   =     (('result is', result)     
/*


function numPlus(num) {
    console.log('num is', num);
    return num+15;
}
var result = numPlus(3);
console.log('result is', result);

/*
Variables     =     Datos
var num       =     15;
console.log(num)
function      =     logAndReturn(num2)
   console.log(num2);
return        =     num2;
var result    = logAndReturn(10);
console.log(result);
console.log(num);
/*

var num = 15;
console.log(num);
function logAndReturn(num2){
   console.log(num2);   
   return num2;
}
var result = logAndReturn(10);
console.log(result);
console.log(num);

/*
Variables     =     Datos
var num       =     15;
console.log(num);
              =     timesTwo(num2);
console.log(num2);
              =     num2*2; 
var result    =     timesTwo(10);
console.log(result)
console.log(num);
/*


var num = 15;
console.log(num);
function timesTwo(num2){
   console.log(num2);   
   return num2*2;
}
var result = timesTwo(10);
console.log(result);
console.log(num);

/*
Variables     =     Datos
timesTwoAgain(num)
console.log('num is', num);
var y         =     num*2;
return y;
var result    =      timesTwoAgain(3) + timesTwoAgain(5)
console.log('result is', result)
/*

function timesTwoAgain(num) {
    console.log('num is', num);
    var y = num*2;
    return y;
}
var result = timesTwoAgain(3) + timesTwoAgain(5);
console.log('result is', result);

/*
Variables     =     Datos
                    sumNums(num1, num2)
return        =     num+num2;
console.log(sumNums(2,3))
console.log(sumNums(3,5))
/*

function sumNums(num1, num2) {  
   return num1+num2;
}
console.log(sumNums(2,3))
console.log(sumNums(3,5))


/*
Variables     =     Datos
function      =     printSumNums(num1, num2);
console.log   =     (num1)
                    num1+num2;
console.log   =     (printSumNums(2,3))                    
console.log   =     (printSumNums(3,5))
/*

function printSumNums(num1, num2) {
   console.log(num1);   
   return num1+num2;
}
console.log(printSumNums(2,3))
console.log(printSumNums(3,5))

/*
Variables     =     Datos
Function      =     sumNums(num1, num2)
var sum       =     num1+num2;
console.log   =     ('sum is', sum)
              =     sum;
 var result   =     sumNums(2,3) + sumNums(3,5);     
console.log   =     ('result is', result);
/*

function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,5);
console.log('result is', result);

/*
Variables     =     Datos
function      =     sumNums(num1, num2)
var sum       =     num1+num2;
console.log   =     ('sum is', sum);
                    sum;
var result    =     sumNums(2,3) + sumNums(3,sumNums(2,1)) + sumNums(sumNums(2,1),sumNums(2,3));
console.log   =     ('result is', result)
/*


function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,sumNums(2,1)) + sumNums(sumNums(2,1),sumNums(2,3));
console.log('result is', result);