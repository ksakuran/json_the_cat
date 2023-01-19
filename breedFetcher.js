const request = require('request');
const args = process.argv.splice(2);
const searchParam = args[0];

request(`https://api.thecatapi.com/v1/breeds/search?q=${searchParam}`, (error, response, body) => {
//console.log(error)
  if (error) {
    return console.log(`Request failed. Error: ${error}`);
  }
  const data = JSON.parse(body);
  //console.log('data:', data)
  //console.log(data.length)
  if (data.length === 0) {
    return console.log("Breed not found.");
  }
  return console.log(data[0].description);
  
});