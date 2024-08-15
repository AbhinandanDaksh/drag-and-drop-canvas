// import { Position } from "@xyflow/react";
// import CustomHandle from "./CustomHandle";

// export function TextNode({ data }) {
//   return (
//     <>
//       <CustomHandle type="target" position={Position.Top} />
//       <div className="textNode">
        
//         <span>{data.text}</span>
//       </div>
//       <CustomHandle type="source" position={Position.Bottom} />
//     </>
//   );
// }

import React from "react";
import { Position, NodeResizer,BackgroundVariant ,Background } from "@xyflow/react";
import CustomHandle from "./CustomHandle";
// import { Background } from "react-flow-renderer";

export function TextNode({ data }) {
  return (
    <>
      <CustomHandle type="target" position={Position.Top} />
      <div className=" bg-white ">
        <NodeResizer
        //   color="blue" // Optional: set the color of the resizer
        //   minWidth={100} // Minimum width constraint
        //   minHeight={100} // Minimum height constraint
          isVisible={true} // Show the resizer controls
          width={200} // Set the default width
        height={100} // Set the default height
        minConstraints={[100, 100]} // Minimum width and height
        maxConstraints={[400, 200]} // Ma
        color="black"
        className="bg-black "
        />
        <Background color="#fff"/>
        <div className="textNode" style={{ width: '100%', height: '100%' }} >
          <span>{data.text}</span>
        </div>
      </div>
      <CustomHandle type="source" position={Position.Bottom} />
    </>
  );
}
