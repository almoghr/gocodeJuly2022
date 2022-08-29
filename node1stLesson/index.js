console.log(process.argv)

const makeASummary = () => {
    let sum = 1
    for(let i = 3; i < process.argv.length; i++){
        if(process.argv[2] === 'plus'){
            sum += parseInt(process.argv[i])
        }
        else if(process.argv[2] === 'minus'){
            sum -= parseInt(process.argv[i])
        }
        else if(process.argv[2] === 'kefel'){
            sum *= parseInt(process.argv[i])
        }
    }
    return sum
}

const sum =  makeASummary()

console.log(sum)