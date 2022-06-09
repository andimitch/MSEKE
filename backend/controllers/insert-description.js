const mongoose = require('mongoose');
const Description = require('../model/description');

mongoose.connect('mongodb+srv://andreamitchell:msedatabase@cluster0.j92oqib.mongodb.net/?retryWrites=true&w=majority');
 

async function run() {
  try {
    const description = await Description.create({
      title: "Definition", 
      body: "In mathematics, graph theory is the study of graphs, which are mathematical structures used to model pairwise relations between objects. A graph in this context is made up of vertices which are connected by edges."
    })
    console.log(description);
  } catch(err) {
    console.log(err.message);
  }
}

run()