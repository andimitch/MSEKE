
const mongoose = require('mongoose');
const Concept = require('../model/concept');

mongoose.connect('mongodb+srv://andreamitchell:msedatabase@cluster0.j92oqib.mongodb.net/?retryWrites=true&w=majority');
 

async function run() {
  try {
    const concept = await Concept.create({
        name: "Set Theory",
        parent: "Discrete Math",
        description: [],
        courses: ['MAT401'],
        related: []
    })
    console.log(concept);
  } catch(err) {
    console.log(err.message);
  }
}

run()