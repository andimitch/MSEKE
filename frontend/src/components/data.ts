interface TreeNode {
  name: string;
  isExpanded?: boolean;
  children?: TreeNode[];
}

  
export const data: TreeNode = {
  name: "MSE U of T",
  children: [
    {
      name: "Math",
      children: [
        {
          name: "Calculus",
          children: [
            {name: "Vector Calculus"}, 
            {name: "Differential Equations"}
          ]
        },
        {
          name: "Statistics and Numerical Methods",
          children: [
            {name: "Probability"}
          ]
        }
      
      
      ]
    }, 
    {
      name: "Chemistry",
      children: [
        {name: "Oranic"}, 
        {name: "InOranic"}, 
      
     
      ]
    },
    {
      name: "Physics",
      children: [
        {name: "Diffusion and Kinetics"}, 
        {name: "Thermodynamics"}, 
        {name: "Phase Transformations"},


      ]
    },
    {
      name: "mechanics",
      children: [
        {name: "Mechanical Behaviour"}, 
       
     
      ]
    },
    
    
  ]
};


