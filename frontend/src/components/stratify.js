import stratify from 'd3-hierarchy';

const links = [
    { child: "root", parent: "" },
    { child: "child1", parent: "root" },
    { child: "child2", parent: "root" },
    { child: "grandchild1", parent: "child1" },
    { child: "grandchild2", parent: "child1" },
    { child: "grandchild3", parent: "child2" }
];

stratify = d3.stratify()
    .id(d => d["child"])
    .parentId(d => d["parent"])


const root = stratify(links);

console.log(root);