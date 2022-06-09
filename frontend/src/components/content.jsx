import React from "react";
import { LinkVertical } from "@visx/shape";
import { Group } from "@visx/group";
import { hierarchy, Tree } from "@visx/hierarchy";
import { data } from "./data";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { Icon } from '@iconify/react';

import "../css/content";

import {stratify} from 'd3-hierarchy';

const links = [
    { name: "root", parent: "", other: "" },
    { name: "child1", parent: "root", andotherthing: 2 },
    { name: "child2", parent: "root" },
    { name: "child3", parent: "root" },
    { name: "grandchild0", parent: "child2" },
    { name: "grandchild1", parent: "child1" },
    { name: "grandchild2", parent: "child1" },
    { name: "grandchild3", parent: "child2" },
    { name: "greatgrandchild1", parent: "grandchild2" }
];

var root = stratify()
    .id(function(d) { return d.name; })
    .parentId(function(d) { return d.parent; })
    (links);


class TreeContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render (){
    const width = Number(this.props.width);
    const height = Number(this.props.height);
    const innerWidth = width - 60;
    const innerHeight = height - 150;
  
  
    return (
      <div id="contentDiv">

        <svg width={width} height={height}>
            
            <rect width={width} height={height} rx={0} fill="#FFFAFA" />
            <Group top={20} left={20}>
            <Tree
                root={hierarchy(root, (d) =>  d.children)}
                size={[innerWidth, innerHeight]}
                separation={(a, b) => (a.parent === b.parent ? 0.4 : 0.5) / a.depth}
            >
                {(tree) => (
                <Group top={0} left={0}>
                    
                    {tree.links().map((link, i) => (
                    <LinkVertical
                        
                        className="fade-in-two"
                        key={i}
                        data={link}
                        stroke="#141414"
                        strokeWidth="1"
                        fill="none"
                    />
                    
                    
                    ))}
                    

                    {tree.descendants().map((node, key) => {
                    const width = 110;
                    const height = 40;
                    const [t, setT] = useState("");

                    let top = node.y;
                    let left = node.x;
                    
        
                    let depth = Number(node.depth)
                    let fadeClass = null;
                    if (depth == 1 || depth == 0) {
                        fadeClass = "fade-in-one";
                    } else if (depth == 2) {
                        fadeClass = "fade-in-two";
                    } else if (depth == 3) {
                        fadeClass = "fade-in-three";
                    } 


                    return (
                        
                        <Group top={top} left={left} key={key}>   
                        <foreignObject x={-width/2} y={-height/2} width="110" height="100">
                        
                        <div className={fadeClass} id="nodesDiv">
                            <div className="nodes-info"> 
                            <Icon icon="carbon:text-indent-more" width="1em" color="white"/>
                            </div>                 
                            <div className="nodes"
                                onClick = {() => {
                                setT("new")
                                }}
                                >
                        
                                {node.data.id}
                                {node.depth}
                                {t}
                                   
                            </div>
                        </div>
                        </foreignObject>       
                        </Group>
                    );
                    })}
                </Group>
                )}
            </Tree>
            </Group>
        </svg>
        </div>
    )   
  }
}

export default TreeContent;