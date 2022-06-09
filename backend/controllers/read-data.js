const mongoose = require('mongoose');
const Course = require('../model/course');
const Concept = require('../model/concept');
const Desciption = require('../model/description');
const Tree = require('../model/tree');

mongoose.connect('mongodb+srv://andreamitchell:msedatabase@cluster0.j92oqib.mongodb.net/?retryWrites=true&w=majority');
 
// parameters: 
//      - the root node ID that we are looking for 
//      - the current size of the screen 
async function run() {
    try {
      //const course = await Course.findById('CSC400');  // returns one thing
      //const course1 = await Course.find({courseDescription: "Graph Theory"});  // returns a list
      //const course2 = await Course.findOne({courseDescription: "Graph Theory"});  // returns onething
      //   const concept = await Concept.findOne({name: "Graph Theory"});
      //   const data = concept.description[0];
      //   const body = await description.findById(data);
      //   const children = await Concept.find({parent: "Discrete Math"});

      // single object hold root node
      var root = await Tree.findOne({name: '1A'});   
      root.parent = ''   // set the parent to '' to make it the psudo root node
    
      // array holds all children
      // we always want to display all children (because otherwise there would be no way to access them)
      // ideally we want less than 7 children
      var children = await Tree.find({parent: root.name});   

      // array holds all grandchildren
      // want to start cutting them out if there are more than max amount that we want on the screen
      var grand_children = [];   
      for (i in children) {
        var child = children[i]
        var grand_children = grand_children.concat(await Tree.find({parent: child.name}));
      }

      // array holds all great-grandchildren
      var great_grand_children = [];   
      for (i in grand_children) {
        var grand_child = grand_children[i]
        var great_grand_children = great_grand_children.concat(await Tree.find({parent: grand_child.name}));
      }
      
      var arr = [root].concat(children, grand_children, great_grand_children);
    
      //console.log(arr);

      
    } catch(err) {
      console.log(err.message);
    }
  }
  
  run()