// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)



// לולאת FOR

//    A           B     D
for(let j = 1; j < 11; j++){
    let kfula = ''
    for(let i = 1; i < 11; i++){
        //     C
        // kfula = kfula + i
        kfula += i*j + '\t'
    }
    console.log(kfula)
}

// לולאת WHILE

let tnay = 0
while(tnay > 18){
    console.log('congragulations you are now ' + tnay + ' years old')
    tnay++
}

do{
    console.log('congragulations you are now ' + tnay + ' years old')
    tnay++
} while(tnay > 18)


