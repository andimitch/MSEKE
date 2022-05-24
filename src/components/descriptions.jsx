import React from "react";
import "../css/boxes";
import { GreyBox, MiniGreyBox } from "./Boxes";

export default function Description () {
  return (
    <div>
        <GreyBox title={"andrea"} />
        <GreyBox title={"andrea"} />
        <div className="grey-box">
            <div className="holder">
            <MiniGreyBox item={"CISC234"} />
            <MiniGreyBox item={"CISC234"} />
            </div>
            <div className="holder">
            <MiniGreyBox item={"CISC234"} />
            </div>
        </div>
    </div>
  );
}