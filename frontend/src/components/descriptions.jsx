import React from "react";
import "../css/boxes";
import { GreyBox, MiniGreyBox } from "./Boxes";

export default function Description () {
  return (
    <div>
        <GreyBox title={"Definition"} />
        <GreyBox title={"Examples"} />
        <div className="grey-box">
            <div className="holder">
            <MiniGreyBox item={"related concept 1"} />
            <MiniGreyBox item={"another thing"} />
            <MiniGreyBox item={"and"} />
            <MiniGreyBox item={"testing"} />
            <MiniGreyBox item={"this out"} />
            </div>
        
        </div>
        <div className="grey-box">
            <div className="holder">
            <MiniGreyBox item={"CISC234"} />
            <MiniGreyBox item={"CISC234"} />
            </div>
        </div>
    </div>
  );
}