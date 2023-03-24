////////////////qustion 5//////////////////
let arr = [1,2,3,4,5,6,7,8,9,10];

/////////////////////////////////////////////////
console.log("questoin 5 using for loop: ")
console.log(fun(arr))


function fun(a){
    let newArr = [];
    for(x in a){
        newArr.push(Math.pow(2,a[x]));
    }
    return newArr
}
//////////////////////////////////////////////

let newArr = [];
arr.forEach((value)=>{
    newArr.push(Math.pow(2,value));
})
console.log("questoin 5 using for forEach: ")
console.log(newArr)

/////////////////////////////////////////////////

newArr =arr.map((value) =>{
    return Math.pow(2,value)
})
console.log("questoin 5 using for map: ")
console.log(newArr)

////////////////qustion 6//////////////////

let arr2 = [1 , 2 , 5 ,"amro" , 10 , "khaled","orange"]

console.log("questoin 6 result: ")
console.log(funQ6(arr2)) 

function funQ6(a){
    let newA = a.map((value)=>{
        if(isNaN(value)){
            return "string"
        }else{
            if(value%2 == 0){
                return "even"
            }else{
                return "odd"
            }
        }
    })
    return newA
}

////////////////qustion 7//////////////////

let arr3 = [1,3,10,5,15,30,20,40,7];
console.log("question 7 result: ");
console.log(funQ7(arr3));

function funQ7(a){
    let newA=a.map((value)=>{
        if(value%3 == 0 && value%5 == 0){
            return "Fizz Buzz";
        }else if(value%3 == 0){
            return "Fizz";
        }else if(value%5 == 0){
            return "Buzz";
        }else return value;
    })
    return newA
}

