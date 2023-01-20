const request = require('request');


const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    let description = '';
    const data = JSON.parse(body);
    if (data.length === 0) {
      description = "Breed not found";
    } else {
      description = data[0].description;
    }
    callback(error, description);
  });
};


//logic testing consoles from before refactoring
//console.log(error)
//console.log('data:', data)
//console.log(data.length)

module.exports = { fetchBreedDescription };