const mongoose = require('mongoose');
const Course = require('../model/course');

mongoose.connect('mongodb+srv://andreamitchell:msedatabase@cluster0.j92oqib.mongodb.net/?retryWrites=true&w=majority');
 

async function run() {
  try {
    const course = await Course.create({
      _id: "MAT401", 
      courseDescription: "Graph Theory"
    })
    console.log(course);
  } catch(err) {
    console.log(err.message);
  }
}

run()