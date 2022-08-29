const http = require("http");
// console.log(process.argv)

// const makeASummary = () => {
//     let sum = 1
//     for(let i = 3; i < process.argv.length; i++){
//         if(process.argv[2] === 'plus'){
//             sum += parseInt(process.argv[i])
//         }
//         else if(process.argv[2] === 'minus'){
//             sum -= parseInt(process.argv[i])
//         }
//         else if(process.argv[2] === 'kefel'){
//             sum *= parseInt(process.argv[i])
//         }
//     }
//     return sum
// }

// const sum =  makeASummary()

// console.log(sum)

// Load HTTP module

// Create HTTP server and listen on port 8000 for requests
http.createServer((request, response) => {

   // Set the response HTTP header with HTTP status and Content type
   response.writeHead(200, {'Content-Type': 'text/plain'});

   // Send the response body "Hello World"
   response.end('Hello World\n');
}).listen(8000);

// Print URL for accessing server
console.log('Server running at http://127.0.0.1:8000/');