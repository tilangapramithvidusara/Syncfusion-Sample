import React, { useState } from "react";
import { SketchPicker } from "react-color";
import "./../App.css";
export default function App(
  {color, hidden, setColor, setHidden, hiddenTitle, openTitle}: 
  {color: string, hidden: boolean, setColor: any, setHidden: any, hiddenTitle: string, openTitle: string}) {
  
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
            onChange={(updatedColor: any) => setColor(updatedColor.hex)}
          />
        )}

        <button className="color-picker-button btn btn-primary" onClick={() => setHidden(!hidden)}>
          {hidden ? openTitle : hiddenTitle}
        </button>
      </div>
    // </div>
  );
}
