import React from "react";
import { LinkVertical } from "@visx/shape";
import { Group } from "@visx/group";
import { hierarchy, Tree } from "@visx/hierarchy";
import { data } from "./data";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'


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
      <div>

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
                    

                    return (
                        <Group top={top} left={left} key={key}>   
                        <foreignObject x={-width/2} y={-height/2} width="110" height="100">
                            <div style={{
                                width: "17px",
                                height: "17px",
                                borderRadius: "0 10px 0 0",
                                padding: "0px",
                                float: "right"}}
                                >
                            <FontAwesomeIcon icon={faCircleInfo} />
                            </div>
                            <div style={{background: "#2a9d8f",
                                fontSize: "12px",
                                padding: "13px 5px 13px 5px", 
                                color: "#FFFFFF",
                                fontFamily: "Arial",
                                borderRadius: "10px",
                                textAlign: "center",
                                margin: "0px"}}
                                onClick = {() => {
                                setT("new")
                                }}
                                >
                                {node.data.name}
                            
                                {t}
                          
                                
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