/* eslint-disable no-debugger */
import React, { useState } from "react";
import { SketchPicker } from "react-color";
import "./../App.css";
export default function ColorPickerComponent(
  {color, hidden, setColor, setHidden, hiddenTitle, openTitle, isFont, diagramInstance}: 
  {color: string, hidden: boolean, setColor: any, setHidden: any, hiddenTitle: string, openTitle: string, isFont?: boolean, diagramInstance?: any}) {
  
  const pickerStyle: any = {
    default: {
      picker: {
        position: "absolute",
        bottom: "30px",
        left: "100px"
      }
    }
  };
  return (
    // <div className="color-picker" style={{ background: color }}>
      <div className="color-picker-container">
        {hidden && (
          <SketchPicker
            styles={pickerStyle}
            color={color}
            onChange={(updatedColor: any) => {
              if (isFont) {
                for (let i = 0; i < diagramInstance.selectedItems.nodes.length; i++) {
                  let node = diagramInstance.selectedItems.nodes[i];
                  for (let j = 0; j < node.annotations.length; j++) {
                      node.annotations[j]
                          .style.color =
                          updatedColor.hex;
                  }
                }
              } else {
                for (let i = 0; i < diagramInstance.selectedItems.nodes.length; i++) {
                  debugger;
                  let node = diagramInstance.selectedItems.nodes[i];
                      node.style.fill = updatedColor.hex;
                }
              }
              setColor(updatedColor.hex)
            }}
          />
        )}

        <button className="color-picker-button" onClick={() => setHidden(!hidden)}>
          {hidden ? openTitle : hiddenTitle}
        </button>
      </div>
    // </div>
  );
}
