import React from "react";
import { LinkVertical } from "@visx/shape";
import { Group } from "@visx/group";
import { hierarchy, Tree } from "@visx/hierarchy";
import { data } from "./data";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'

import "../css/content";

class TreeContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render (){
    const width = Number(this.props.width);
    const height = Number(this.props.height);
    const innerWidth = width - 60;
    const innerHeight = height - 100;
  
  
    return (
      <div id="contentDiv">

        <svg width={width} height={height}>
            
            <rect width={width} height={height} rx={0} fill="#FFFFFF" />
            <Group top={20} left={20}>
            <Tree
                root={hierarchy(data, (d) => (d.isExpanded ? null : d.children))}
                size={[innerWidth, innerHeight]}
                separation={(a, b) => (a.parent === b.parent ? 0.5 : 0.5) / a.depth}
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
                    if (depth == 1) {
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
                                <FontAwesomeIcon icon={faCircleInfo} />
                            </div>                 
                            <div className="nodes"
                                onClick = {() => {
                                setT("new")
                                }}
                                >
                                {node.data.name}
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