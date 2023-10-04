/* eslint-disable no-self-assign */
/* eslint-disable no-debugger */
import * as ReactDOM from "react-dom";
import * as React from "react";
import { useRef } from 'react';
import { useState } from "react";
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import {
  DiagramComponent,
  SymbolInfo,
  IDragEnterEventArgs,
  SymbolPaletteComponent,
  NodeModel,
  ConnectorModel,
  PointPortModel,
  Node,
  Connector,
  GridlinesModel,
  IExportOptions,
  DiagramTools,
  NodeConstraints,
  ConnectorConstraints,
  IHistoryChangeArgs,
  ISelectionChangeEventArgs,
  IScrollChangeEventArgs,
  PrintAndExport,
  UndoRedo,
  Inject,
  AnnotationConstraints,
  SnapConstraints,
  PortConstraints,
  PortVisibility,
} from "@syncfusion/ej2-react-diagrams";
// import "./font-icons.css";
import './App.css';
import { ToolbarComponent } from "@syncfusion/ej2-react-navigations";
import { DropDownButton } from "@syncfusion/ej2-react-splitbuttons";
import { 
  UploaderComponent, 
  NumericTextBoxComponent,
  ColorPickerComponent,
} from "@syncfusion/ej2-react-inputs";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { ButtonComponent, CheckBoxComponent } from "@syncfusion/ej2-react-buttons";
import ColorPicker from './components/ColorPicker';
import FontPicker from "./components/FontPicker";
import DropDownPicker from "./components/DropDownPicker";


/**
 * Diagram Default sample
 */

//Initializes the nodes for the diagram
let nodes: NodeModel[] = [
  {
    id: "NewIdea",
    height: 60,
    offsetX: 300,
    offsetY: 80,
    shape: { type: "Flow", shape: "Terminator" },
    annotations: [
      {
        content: "Place Order"
      }
    ]
  },
  {
    id: "Meeting",
    height: 60,
    offsetX: 300,
    offsetY: 160,
    shape: { type: "Flow", shape: "Process" },
    annotations: [
      {
        content: "Start Transaction"
      }
    ]
  },
  {
    id: "BoardDecision",
    height: 60,
    offsetX: 300,
    offsetY: 240,
    shape: { type: "Flow", shape: "Process" },
    annotations: [
      {
        content: "Verification"
      }
    ]
  },
  {
    id: "Project",
    height: 60,
    offsetX: 300,
    offsetY: 330,
    shape: { type: "Flow", shape: "Decision" },
    annotations: [
      {
        content: "Credit card valid?"
      }
    ]
  },
  {
    id: "End",
    height: 60,
    offsetX: 300,
    offsetY: 430,
    shape: { type: "Flow", shape: "Decision" },
    annotations: [
      {
        content: "Funds available?"
      }
    ]
  },
  {
    id: "node11",
    height: 60,
    offsetX: 545,
    offsetY: 330,
    shape: { type: "Flow", shape: "Process" },
    annotations: [
      {
        content: "Enter payment method"
      }
    ]
  },
  {
    id: "transaction_entered",
    height: 60,
    offsetX: 300,
    offsetY: 630,
    shape: { type: "Flow", shape: "Terminator" },
    annotations: [
      {
        content: "Log transaction"
      }
    ]
  },
  {
    id: "node12",
    height: 60,
    offsetX: 480,
    offsetY: 630,
    shape: { type: "Flow", shape: "Process" },
    annotations: [
      {
        content: "Reconcile the entries"
      }
    ]
  },
  {
    id: "transaction_completed",
    height: 60,
    offsetX: 300,
    offsetY: 530,
    shape: { type: "Flow", shape: "Process" },
    annotations: [
      {
        content: "Complete Transaction"
      }
    ]
  },
  {
    id: "Data",
    height: 45,
    offsetX: 110,
    offsetY: 530,
    shape: { type: "Flow", shape: "Data" },
    annotations: [
      {
        content: "Send e-mail",
        margin: { left: 25, right: 25 }
      }
    ]
  },
  {
    id: "node10",
    height: 70,
    offsetX: 475,
    offsetY: 530,
    shape: { type: "Flow", shape: "DirectData" },
    annotations: [
      { content: "Customer Database", margin: { left: 25, right: 25 } }
    ]
  }
];
//Initializes the connector for the diagram
let connectors: ConnectorModel[] = [
  {
    id: "connector1",
    sourceID: "NewIdea",
    targetID: "Meeting"
  },
  { id: "connector2", sourceID: "Meeting", targetID: "BoardDecision" },
  { id: "connector3", sourceID: "BoardDecision", targetID: "Project" },
  {
    id: "connector4",
    sourceID: "Project",
    annotations: [{ content: "Yes", style: { fill: "white" } }],
    targetID: "End"
  },
  {
    id: "connector5",
    sourceID: "End",
    annotations: [{ content: "Yes", style: { fill: "white" } }],
    targetID: "transaction_completed"
  },
  {
    id: "connector6",
    sourceID: "transaction_completed",
    targetID: "transaction_entered"
  },
  { id: "connector7", sourceID: "transaction_completed", targetID: "Data" },
  { id: "connector8", sourceID: "transaction_completed", targetID: "node10" },
  {
    id: "connector9",
    sourceID: "node11",
    targetID: "Meeting",
    type: 'Orthogonal',
    segments: [{ direction: "Top", type: 'Orthogonal', length: 120 }]
  },
  {
    id: "connector10",
    sourceID: "End",
    annotations: [{ content: "No", style: { fill: "white" } }],
    targetID: "node11",
    type: 'Orthogonal',
    segments: [{ direction: "Right", type: 'Orthogonal', length: 100 }]
  },
  {
    id: "connector11",
    sourceID: "Project",
    annotations: [{ content: "No", style: { fill: "white" } }],
    targetID: "node11"
  },
  {
    id: "connector12",
    style: { strokeDashArray: "2,2" },
    sourceID: "transaction_entered",
    targetID: "node12"
  }
];
const sample_css = `
#conTypeBtn{
  background-color: transparent;
  border-color: transparent;
}
#exportBtn{
  background-color: transparent;
  border-color: transparent;
}
#shapesBtn{
  background-color: transparent;
  border-color: transparent;
}
#alignBtn{
  background-color: transparent;
  border-color: transparent;
}
#distributeBtn{
  background-color: transparent;
  border-color: transparent;
}
#orderBtn{
  background-color: transparent;
  border-color: transparent;
}
#groupBtn{
  background-color: transparent;
  border-color: transparent;
}
#rotateBtn{
  background-color: transparent;
  border-color: transparent;
}
#flipBtn{
  background-color: transparent;
  border-color: transparent;
}
#btnZoomIncrement{
  background-color: transparent;
  border-color: transparent;
}
.image-pattern-style {
  background-color: white;
  background-size: contain;
  background-repeat: no-repeat;
  height: 50px;
  width: calc((100% - 18px) / 3);
  cursor: pointer;
  border: 1px solid #D5D5D5;
  background-position: center;
  float: left;
}

.image-pattern-style:hover {
  border-color: gray;
  border-width: 2px;
}

.e-remove-selection .property-section-content {
  pointer-events: none;
}

.column-style {
  display: table;
  height: 35px;
  padding-right: 4px;
  padding-left: 0px;
  width: calc((100% - 12px) / 4);
}

.row {
  margin-left: 0px;
  margin-right: 0px;
}

.row-header {
  font-size: 15px;
  font-weight: 500;
}
.property-section .e-remove-selection {
  cursor: not-allowed;
}
.property-panel-header {
  padding-top: 15px;
  padding-bottom: 15px;
}

.e-checkbox-wrapper .e-label {
  font-size: 12px;
}

.e-selected-style {
  border-color: #006CE6;
  border-width: 2px;
}

.diagram-control-pane .col-xs-6 {
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 5px;
}
.e-btn {
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0), 0 2px 2px 0 rgba(0, 0, 0, 0), 0 1px 5px 0 rgba(0, 0, 0, 0);
}

.e-bigger .e-btn.e-small.e-icon-btn {
  padding: 0px;
}
`;
//Initialize the flowshapes for the symbol palatte
let flowshapes: NodeModel[] = [
  { id: "Terminator", shape: { type: "Flow", shape: "Terminator" } },
  { id: "Process", shape: { type: "Flow", shape: "Process" } },
  { id: "Decision", shape: { type: "Flow", shape: "Decision" } },
  { id: "Document", shape: { type: "Flow", shape: "Document" } },
  {
    id: "PreDefinedProcess",
    shape: { type: "Flow", shape: "PreDefinedProcess" }
  },
  { id: "PaperTap", shape: { type: "Flow", shape: "PaperTap" } },
  { id: "DirectData", shape: { type: "Flow", shape: "DirectData" } },
  { id: "SequentialData", shape: { type: "Flow", shape: "SequentialData" } },
  { id: "Sort", shape: { type: "Flow", shape: "Sort" } },
  { id: "MultiDocument", shape: { type: "Flow", shape: "MultiDocument" } },
  { id: "Collate", shape: { type: "Flow", shape: "Collate" } },
  { id: "SummingJunction", shape: { type: "Flow", shape: "SummingJunction" } },
  { id: "Or", shape: { type: "Flow", shape: "Or" } },
  { id: "InternalStorage", shape: { type: "Flow", shape: "InternalStorage" } },
  { id: "Extract", shape: { type: "Flow", shape: "Extract" } },
  { id: "ManualOperation", shape: { type: "Flow", shape: "ManualOperation" } },
  { id: "Merge", shape: { type: "Flow", shape: "Merge" } },
  {
    id: "OffPageReference",
    shape: { type: "Flow", shape: "OffPageReference" }
  },
  {
    id: "SequentialAccessStorage",
    shape: { type: "Flow", shape: "SequentialAccessStorage" }
  },
  { id: "Annotation", shape: { type: "Flow", shape: "Annotation" } },
  { id: "Annotation2", shape: { type: "Flow", shape: "Annotation2" } },
  { id: "Data", shape: { type: "Flow", shape: "Data" } },
  { id: "Card", shape: { type: "Flow", shape: "Card" } },
  { id: "Delay", shape: { type: "Flow", shape: "Delay" } }
];

const customConnectorTemplate = () => {
  return (
    <svg width="50" height="50">
      <image
        xlinkHref="url_to_your_image.png"
        width="50"
        height="50"
      />
    </svg>
  );
}

let fontType = [
  { type: "Arial", text: "Arial" },
  { type: "Aharoni", text: "Aharoni" },
  { type: "Bell MT", text: "Bell MT" },
  { type: "Fantasy", text: "Fantasy" },
  { type: "Times New Roman", text: "Times New Roman" },
  { type: "Segoe UI", text: "Cubic Bezier" },
  { type: '"Verdana") ', text: "Cubic Bezaier" }
];

let templateList = [
  { value: "none", text: "None" },
  { value: "industry", text: "Industry Competitors" },
  { value: "suppliers", text: "Suppliers" },
  { value: "potential", text: "Potential Entrants" },
  { value: "buyers", text: "Buyers" },
  { value: "substitutes", text: "Substitutes" }
];

//Initializes connector symbols for the symbol palette
let connectorSymbols: ConnectorModel[] = [
//   {
//     id: "connector100",
//     targetDecorator: {
//         style: {
//             strokeColor: '#6BA5D7',
//             fill: '#6BA5D7',
//             strokeWidth: 2
//         }
//     },
//     style: {
//         // Stroke color
//         strokeColor: '#6BA5D7',
//         fill: '#6BA5D7',
//         // Stroke width of the line
//         strokeWidth: 2,
//         // Line style
//         strokeDashArray: '2,2'
//     },
//     sourcePoint: {
//         x: 100,
//         y: 100
//     },
//     targetPoint: {
//         x: 200,
//         y: 200
//     },
//     segments: [{
//             type: 'Orthogonal',
//             direction: 'Right',
//             length: 50
//         }],
// },
  {
    id: "Link0",
    type: "Straight",
    sourceID: "Start",
    targetID: "End",
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 60, y: 60 },
    // segments: [{
    //   type: 'Orthogonal',
    //   // Defines the direction for the segment lines
    //   direction: "Right",
    //   // Defines the length for the segment lines
    //   length: 70,
    // }],
    
    targetDecorator: { shape: "OpenArrow", style: { strokeColor: '#757575', fill: '#757575', strokeWidth: 1.0,  } },
    style: { strokeWidth: 1, strokeColor: 'yellow' }, // #757575
  //   segments: [{
  //     type: 'Orthogonal',
  //     direction: 'Right',
  //     length: 50
  // }],
  },
  {
    id: "Link1",
    type: "Orthogonal",
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 60, y: 60 },
    targetDecorator: { shape: "Arrow", style: { strokeColor: '#757575', fill: '#757575' } },
    style: { strokeWidth: 1, strokeColor: '#757575' }
  },
  {
    id: "link3",
    type: "Orthogonal",
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 60, y: 60 },
    style: { strokeWidth: 1, strokeColor: '#757575' },
    targetDecorator: { shape: "None" },
  },
  {
    id: "Link21",
    type: "Straight",
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 60, y: 60 },
    targetDecorator: { shape: "Arrow", style: { strokeColor: '#757575', fill: '#757575' } },
    style: { strokeWidth: 1, strokeColor: '#757575' }
  },
  {
    id: "link23",
    type: "Straight",
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 60, y: 60 },
    style: { strokeWidth: 1, strokeColor: '#757575' },
    targetDecorator: { shape: "None" }
  },
  {
    id: "link33",
    type: "Bezier",
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 60, y: 60 },
    style: { strokeWidth: 1, strokeColor: '#757575' },
    targetDecorator: { shape: "None" }
  }
];
let interval: number[];
interval = [
  1,
  9,
  0.25,
  9.75,
  0.25,
  9.75,
  0.25,
  9.75,
  0.25,
  9.75,
  0.25,
  9.75,
  0.25,
  9.75,
  0.25,
  9.75,
  0.25,
  9.75,
  0.25,
  9.75
];
let gridlines: GridlinesModel = {
  lineColor: "#e0e0e0",
  lineIntervals: interval
};
let diagramInstance: any// DiagramComponent ;
let node;
let fontFamily: any;
let fontSize: NumericTextBoxComponent | null;
let fontColor;
let nodeColor;
let bold: any;
let italic: any;
let underLine: any;
let templateData: DropDownListComponent | null;
let toolbarEditor:ToolbarComponent;
let toolbarItems:any = [
  { tooltipText: 'Color Change',template: '<button onclick={colorChangeHandler} id="colorBtn" style="width:100%;"></button>',cssClass:'tb-item-middle'},
  { prefixIcon: 'e-icons e-circle-add', tooltipText: 'New Diagram' },
  { prefixIcon: 'e-icons e-folder-open', tooltipText: 'Open Diagram', },
  { prefixIcon: 'e-icons e-save', tooltipText: 'Save Diagram' },
  { prefixIcon: 'e-print e-icons', tooltipText: 'Print Diagram'},
  { type: 'Input', tooltipText: 'Export Diagram',template: '<button id="exportBtn" style="width:100%;"></button>'},
          { type: 'Separator' },
  {disabled:true, prefixIcon: 'e-cut e-icons', tooltipText: 'Cut',cssClass:'tb-item-middle tb-item-lock-category' },
  {disabled:true,  prefixIcon: 'e-copy e-icons', tooltipText: 'Copy',cssClass:'tb-item-middle tb-item-lock-category' },
  { prefixIcon: 'e-icons e-paste', tooltipText: 'Paste',disabled:true },
                      {type: 'Separator' },
  {disabled:true,  prefixIcon: 'e-icons e-undo', tooltipText: 'Undo'},
  {disabled:true,  prefixIcon: 'e-icons e-redo', tooltipText: 'Redo'},
                  { type: 'Separator',},
  { prefixIcon: 'e-pan e-icons', tooltipText: 'Pan Tool',cssClass:'tb-item-start pan-item'},
  { prefixIcon: 'e-mouse-pointer e-icons', tooltipText: 'Select Tool',cssClass:'tb-item-middle tb-item-selected'},
  { tooltipText: 'Change Connector Type',template: '<button id="conTypeBtn" style="width:100%;"></button>',cssClass:'tb-item-middle'},
  { tooltipText: 'Draw Shapes',template: '<button id="shapesBtn" style="width:100%;"></button>',cssClass:'tb-item-middle'},
  
  { prefixIcon: 'e-caption e-icons', tooltipText: 'Text Tool',cssClass:'tb-item-end' },
                  { type: 'Separator',},
  {disabled:true,  prefixIcon: 'e-icons e-lock', tooltipText: 'Lock' ,cssClass:'tb-item-middle tb-item-lock-category' },
  {disabled:true,  prefixIcon: 'e-trash e-icons', tooltipText: 'Delete',cssClass:'tb-item-middle tb-item-lock-category' },
                  { type: 'Separator',align:'Center' },
  
  {disabled:true,  type: 'Input', tooltipText: 'Align Objects',template: '<button id="alignBtn" style="width:100%;"></button>',cssClass: 'tb-item-middle  tb-item-align-category'},
  {disabled:true,  type: 'Input', tooltipText: 'Distribute Objects',template: '<button id="distributeBtn" style="width:100%;"></button>',cssClass: 'tb-item-middle tb-item-space-category'},
              { type: 'Separator', },
  {disabled:true,  type: 'Input', tooltipText: 'Order Commands',template: '<button id="orderBtn" style="width:100%;"></button>',cssClass: 'tb-item-middle tb-item-lock-category'},
                  { type: 'Separator'},
  {disabled:true,  type: 'Input', tooltipText: 'Group/Ungroup',template: '<button id="groupBtn" style="width:100%;"></button>',cssClass:'tb-item-middle tb-item-align-category'},
                  { type: 'Separator'},
  {disabled:true,  type: 'Input', tooltipText: 'Rotate',template: '<button id="rotateBtn" style="width:100%;"></button>',cssClass:'tb-item-middle tb-item-lock-category'},
                  { type: 'Separator'},
  {disabled:true,  type: 'Input', tooltipText: 'Flip',template: '<button id="flipBtn" style="width:100%;"></button>',cssClass:'tb-item-middle tb-item-lock-category'},
                  { type: 'Separator'},
  {
      cssClass: 'tb-item-end tb-zoom-dropdown-btn', template: '<button id="btnZoomIncrement"></button>',
  },
];

//Apply the appearence of the Annotation
function changed(value: string) {
  if (diagramInstance && diagramInstance?.selectedItems?.nodes?.length)
    for (let i = 0; i < diagramInstance?.selectedItems?.nodes?.length; i++) {
      node = diagramInstance?.selectedItems?.nodes[i];
      if (node?.annotations?.length)
        for (let j = 0; j < node?.annotations?.length; j++) {
            if (value === "fontsize") {
                node.annotations[j].style.fontSize = fontSize?.value;
            }
            else if (value === "underline") {
                node.annotations[j].style.textDecoration === 'Underline' ? 'None' : 'Underline';
            }
            else if (value === "fontfamily") {
                node.annotations[j]
                    .style.fontFamily = fontFamily?.value.toString();
            }
            else if (value === "bold") {
                node.annotations[j].style.bold = true;
            }
            else if (value === "italic") {
              if (node?.annotations[j]?.style)
                node.annotations[j].style.italic = true;
            }
            else if (value === 'template') {
                if (templateData && templateData?.value.toString() === 'none') {
                    node.annotations[j].template = '';
                    node.annotations[j].width = undefined;
                    node.annotations[j].height = undefined;
                }
                else {
                    node.annotations[j].width = 25;
                    node.annotations[j].height = 25;
                    node.annotations[j].template =
                        '<img src="https://ej2.syncfusion.com/react/demos/src/diagram/Images/annotation/' + templateData?.value.toString() + '.svg" style="width:100%;height:100%" />';
                }
            }
            else if (value === 'interaction') {
                let annot = node.annotations[j];
                if (annot && annot.constraints) {
                    annot.constraints = annot.constraints ^ AnnotationConstraints.Interaction;
                }
            }
            diagramInstance.dataBind();
        }
    }
}

//Update the Annotation Position based on the selection
function updatePosition(id: string) {
  let target = document.getElementById(id);
if (diagramInstance && diagramInstance?.selectedItems?.nodes?.length)
  for (let i = 0; i < diagramInstance.selectedItems.nodes.length; i++) {
      node = diagramInstance.selectedItems.nodes[i];
      //we can refactor this code using a method
      for (let j = 0; j < node.annotations.length; j++) {
          let annotation = node.annotations[j];
          switch (target?.id) {
              case "left":
                  setAnnotationPosition(annotation, 0, 0, "Top", "Left", target);
                  break;
              case "right":
                  setAnnotationPosition(annotation, 1, 0, "Top", "Right", target);
                  break;
              case "bottoml":
                  setAnnotationPosition(annotation, 0, 1, "Bottom", "Left", target);
                  break;
              case "bottomr":
                  setAnnotationPosition(annotation, 1, 1, "Bottom", "Right", target);
                  break;
              case "center":
                  setAnnotationPosition(annotation, 0.5, 0.5, "Center", "Center", target);
                  break;
              case "bottomcenter_top":
                  setAnnotationPosition(annotation, 0.5, 1, "Top", "Center", target);
                  break;
          }
      }
  }
}

//set the Annotation Position
function setAnnotationPosition(//it is in dedicated line here.
annotation: { offset: { x: any; y: any; }; verticalAlignment: any; horizontalAlignment: any; margin: { left?: number; top?: number; right?: number; bottom?: number; }; }, offsetX: number, offsetY: number, vAlignment: string, hAlignment: string, target: HTMLElement | null) {
    annotation.offset.x = offsetX;
    annotation.offset.y = offsetY;
    annotation.verticalAlignment = vAlignment;
    annotation.horizontalAlignment = hAlignment;
    if (vAlignment === "Top" && hAlignment === "Left") {
        annotation.margin = { left: 3, top: 3 };
    }
    else if (vAlignment === "Top" && hAlignment === "Right") {
        annotation.margin = { right: 3, top: 3 };
    }
    else if (vAlignment === "Bottom" && hAlignment === "Left") {
        annotation.margin = { left: 3, bottom: 3 };
    }
    else if (vAlignment === "Bottom" && hAlignment === "Right") {
        annotation.margin = { right: 3, bottom: 3 };
    }
    target?.classList.add("e-selected-style");
}
//Enable or disable the property panel
function enableOptions(arg: { newValue: any[]; }) {
    let appearance = document.getElementById("propertypanel");
    let selectedElement = document.getElementsByClassName("e-remove-selection");
    if (arg.newValue) {
        if (arg.newValue[0] instanceof Node) {
            if (selectedElement.length > 0) {
                selectedElement[0].classList.remove("e-remove-selection");
            }
        }
        else {
            if (!appearance?.classList.contains("e-remove-selection")) {
                appearance?.classList.add("e-remove-selection");
            }
        }
    }
}

function Default() {
  const [selectedNode, setSelectedNode] = React.useState<any>();
  const [colorShape, setColorShape] = React.useState("lightblue");
  const [hiddenColorShape, setHiddenColorShape] = React.useState(false);
  const [colorFont, setColorFont] = React.useState("lightblue");
  const [hiddenColorFont, setHiddenColorFont] = React.useState(false);
  const [fontFamilys, setFontFamily] = React.useState('Segoe UI')
  console.log('setSelectedNode ==> ', selectedNode, colorShape);
  const initialColor = "#FF0000";
  const [color, setColor] = useState(initialColor);
  const [hidden, setHidden] = useState(true);
  const hiddenTitle = "Show Color Picker";
  const openTitle = "Hide Color Picker";
  const divRef = useRef(null);

  const handleCaptureScreenshot = () => {
    // Get the selected div by its class name or ID
    const selectedDiv: any = divRef?.current;
    selectedDiv.style.backgroundColor = 'white';

    // Use html2canvas to capture the screenshot
    html2canvas(selectedDiv, {
      scale: 2, // Increase scale for better quality (adjust as needed)
      useCORS: true, })
      .then((canvas) => {
        // Convert the screenshot to a data URL
        const newCanvas = document.createElement('canvas');
        const context: any = newCanvas.getContext('2d');
        newCanvas.width = canvas.width;
        newCanvas.height = canvas.height;
        context.fillStyle = 'white';
        context.fillRect(0, 0, canvas.width, canvas.height);

        // Draw the captured screenshot onto the new canvas
        context.drawImage(canvas, 0, 0);
        // selectedDiv.style.backgroundColor = 'transparent';
        const screenshotDataUrl = canvas.toDataURL('image/png');

        // Save the data URL as an image file using file-saver
        saveAs(screenshotDataUrl, 'screenshot.png');
      });
  };


  React.useEffect(() => {
    rendereComplete();
  }, []);
  const colorChangeHandler = () => {
    console.log('come ===> ');
    
  }
  
  // function rendereComplete() {
  //   addEvents();
  //   diagramInstance.fitToPage();
  // }
  const fields = { text: 'text', value: 'value' };
  function rendereComplete() {
    addEvents();
      diagramInstance.fitToPage();
      diagramInstance.select([diagramInstance.nodes[0]]);
      bold.element.onclick = () => {
          changed("bold");
      };
      italic.element.onclick = () => {
          changed("italic");
      };
      underLine.element.onclick = () => {
          changed("underline");
      };
      //Click event for Appearance of the Property Panel
      const appearanceElement = window.document.getElementById("appearance")!
      appearanceElement.onclick = (args) => {
        let target: any = args.target;
        let selectedElement = document.getElementsByClassName("e-selected-style");
        if (selectedElement.length) {
            selectedElement[0].classList.remove("e-selected-style");
        }
        if (target?.className === "image-pattern-style") {
            updatePosition(target?.id);
        }
        if (!target?.classList.contains("e-selected-style")) {
          target?.classList.add("e-selected-style");
      }
      if (target?.className === "image-pattern-style e-selected-style") {
        switch (target?.id) {
          case "shape1":
            SetShape("Rectangle");
            break;
          case "shape2":
            SetShape("Ellipse");
            break;
          case "shape3":
            SetShape("Hexagon");
            break;
          case "shape4":
            SetShape("Pentagon");
            break;
          case "shape5":
            SetShape("Polygon");
            break;
          case "straight":
            setdrawobject(null, { type: "Straight" });
            break;
          case "ortho":
            setdrawobject(null, { type: "Orthogonal" });
            break;
          case "cubic":
            setdrawobject(null, { type: "Bezier" });
            break;
          case "freehand":
            setdrawobject(null, { type: "Freehand" });
            break;
          case "path":
            getPathShape();
            target.classList.add("e-selected-style");
            break;
          case "image":
            getImageNode();
            break;
          case "svg":
            getSVGNode();
            break;
          case "text":
            getTextNode();
            break;
          default:
            if (selectedElement.length &&
                target.id !== "" &&
                target.id !== "checked") {
                selectedElement[0].classList.remove("e-selected-style");
            }
        }
      }
    };
  }
  function getPorts(): PointPortModel[] {
    let ports: PointPortModel[] = [
      { id: "port1", shape: "Circle", offset: { x: 0, y: 0.5 } },
      { id: "port2", shape: "Circle", offset: { x: 0.5, y: 1 } },
      { id: "port3", shape: "Circle", offset: { x: 1, y: 0.5 } },
      { id: "port4", shape: "Circle", offset: { x: 0.5, y: 0 } }
    ];
    return ports;
  }
  // function getPorts(obj: any) {
  //       let ports = [
  //           createPort("port1", { x: 0, y: 0.5 }),
  //           createPort("port2", { x: 0.5, y: 1 }),
  //           createPort("port3", { x: 1, y: 0.5 }),
  //           createPort("port4", { x: 0.5, y: 0 })
  //       ];
  //       return ports;
  // }

  function getPathPorts(obj: any) {
    let ports = [
        createPort("port1", { x: 0.5, y: 0 }),
        createPort("port2", { x: 0, y: 0.39 }),
        createPort("port3", { x: 1, y: 0.39 }),
        createPort("port4", { x: 0.2, y: 1 }),
        createPort("port5", { x: 0.8, y: 1 })
    ];
    return ports;
}
function getHexagonPorts(obj: any) {
    let ports = [
        createPort("port1", { x: 0, y: 0.5 }),
        createPort("port2", { x: 0.5, y: 0 }),
        createPort("port3", { x: 0.3, y: 0 }),
        createPort("port4", { x: 0.7, y: 0 }),
        createPort("port5", { x: 1, y: 0.5 }),
        createPort("port6", { x: 0.5, y: 1 }),
        createPort("port7", { x: 0.3, y: 1 }),
        createPort("port8", { x: 0.7, y: 1 })
    ];
    return ports;
}
function getPentagonPorts(obj: any) {
    let ports = [
        createPort("port1", { x: 0.5, y: 0 }),
        createPort("port2", { x: 0, y: 0.4 }),
        createPort("port3", { x: 1, y: 0.4 }),
        createPort("port4", { x: 0.2, y: 1 }),
        createPort("port5", { x: 0.85, y: 1 })
    ];
    return ports;
}
function createPort(id: string, offset: { x: number; y: number; }) {
    let port = {
        id: id,
        shape: "Square",
        offset: offset,
        constraints: PortConstraints.Draw,
        visibility: PortVisibility.Hover
    };
    return port;
}

  let isMobile: boolean;

  function addEvents(): void {
    isMobile = window.matchMedia('(max-width:550px)').matches;
    if (isMobile) {
      let paletteIcon: HTMLElement | null = document.getElementById('palette-icon');
      if (paletteIcon) {
        paletteIcon.addEventListener('click', openPalette, false);
      }
    }
  }
  function openPalette(): void {
    let paletteSpace: HTMLElement | null = document.getElementById('palette-space');
    isMobile = window.matchMedia('(max-width:550px)').matches;
    if (isMobile) {
      if (!paletteSpace?.classList.contains('sb-mobile-palette-open')) {
        paletteSpace?.classList.add('sb-mobile-palette-open');
      } else {
        paletteSpace.classList.remove('sb-mobile-palette-open');
      }
    }
  }
  
  function printDiagram(args:any) {
    let options: IExportOptions = {};
    options.mode = 'Download';
    options.region = 'Content';
    options.multiplePage = diagramInstance.pageSettings.multiplePage;
    options.pageHeight = diagramInstance.pageSettings.height;
    options.pageWidth = diagramInstance.pageSettings.width;
    diagramInstance.print(options);
  }
  function enableItems()
  {
    toolbarEditor.items[6].disabled = false;
    toolbarEditor.items[7].disabled = false;
    toolbarEditor.items[19].disabled = false;
    toolbarEditor.items[20].disabled = false;
    toolbarEditor.items[25].disabled = false;
    toolbarEditor.items[29].disabled = false;
    toolbarEditor.items[31].disabled = false;
  }
  function disableMultiselectedItems()
  {
    toolbarEditor.items[22].disabled = true;
    toolbarEditor.items[23].disabled = true;
    toolbarEditor.items[27].disabled = true;
  }
  function toolbarClick(args:any) {
    let item = args.item.tooltipText;
    switch (item) {
      case 'Undo':
        diagramInstance.undo();
        break;
      case 'Redo':
        diagramInstance.redo();
        break;
      case 'Lock':
        lockObject(args);
        break;
      case 'Cut':
        diagramInstance.cut();
        toolbarEditor.items[8].disabled = false;
        break;
      case 'Copy':
        diagramInstance.copy();
        toolbarEditor.items[8].disabled = false;
        break;
      case 'Paste':
        diagramInstance.paste();
        break;
      case 'Delete':
        diagramInstance.remove();
        break;
      case 'Select Tool':
        diagramInstance.clearSelection();
        diagramInstance.tool = DiagramTools.Default;
        break;
      case 'Text Tool':
        diagramInstance.clearSelection();
        diagramInstance.selectedItems.userHandles = [];
        diagramInstance.drawingObject = { shape: { type: 'Text' } };
        diagramInstance.tool = DiagramTools.ContinuousDraw;
        break;
      case 'Pan Tool':
        diagramInstance.clearSelection();
        diagramInstance.tool = DiagramTools.ZoomPan;
        break;
      case 'New Diagram':
        diagramInstance.clear();
        historyChange(args);
        break;
      case 'Print Diagram':
        printDiagram(args);
        break;
      case 'Save Diagram':
        console.log('diagram instance ====> ', diagramInstance)
        download(diagramInstance.saveDiagram());
        break;
      case 'Open Diagram':
        document
          ?.getElementsByClassName('e-file-select-wrap')[0]
          ?.querySelector('button')!
          .click()!;
        break;
    }
    diagramInstance.dataBind();
  }
  function zoomChange(args:any){
    let zoomCurrentValue:any = (document.getElementById("btnZoomIncrement") as any).ej2_instances[0];
    let currentZoom:any = diagramInstance?.scrollSettings?.currentZoom;
    let zoom:any = {};
        switch (args.item.text) {
            case 'Zoom In':
            diagramInstance.zoomTo({ type: 'ZoomIn', zoomFactor: 0.2 });
                zoomCurrentValue.content = (diagramInstance?.scrollSettings?.currentZoom * 100).toFixed() + '%';
                break;
            case 'Zoom Out':
            diagramInstance.zoomTo({ type: 'ZoomOut', zoomFactor: 0.2 });
                zoomCurrentValue.content = (diagramInstance?.scrollSettings?.currentZoom * 100).toFixed() + '%';
                break;
            case 'Zoom to Fit':
                zoom.zoomFactor = 1 / currentZoom - 1;
                diagramInstance.zoomTo(zoom);          
                zoomCurrentValue.content = diagramInstance?.scrollSettings?.currentZoom;
                break;
            case 'Zoom to 50%':
                if(currentZoom === 0.5){
                  currentZoom = 0;
                  zoom.zoomFactor = (0.5 / currentZoom) - 1;
                  diagramInstance.zoomTo(zoom);
                }
                else{
                  zoom.zoomFactor = (0.5 / currentZoom) - 1;
                  diagramInstance.zoomTo(zoom);
                }
                break;
            case 'Zoom to 100%':
                if(currentZoom === 1){
                  currentZoom = 0;
                  zoom.zoomFactor = (1 / currentZoom) - 1;
                  diagramInstance.zoomTo(zoom);
                }
                else{
                  zoom.zoomFactor = (1 / currentZoom) - 1;
                  diagramInstance.zoomTo(zoom);
                }
                break;
            case 'Zoom to 200%':
                if(currentZoom === 2){
                  currentZoom = 0;
                  zoom.zoomFactor = (2 / currentZoom) - 1;
                  diagramInstance.zoomTo(zoom);
                }
                else{
                  zoom.zoomFactor = (2 / currentZoom) - 1;
                  diagramInstance.zoomTo(zoom);
                }
                break;
        }
      
        zoomCurrentValue.content = Math.round(diagramInstance?.scrollSettings?.currentZoom*100) + ' %';
        
  }
  let asyncSettings:any;
  function onConnectorSelect(args:any){
    diagramInstance.clearSelection();
    diagramInstance.drawingObject = {type:args.item.text};
    diagramInstance.tool = DiagramTools.ContinuousDraw;
    diagramInstance.selectedItems.userHandles = [];
    diagramInstance.dataBind();
  }

  function onShapesSelect(args:any){
    diagramInstance.clearSelection();
    diagramInstance.drawingObject = {shape:{shape:args.item.text}};
    diagramInstance.tool = DiagramTools.ContinuousDraw;
    diagramInstance.selectedItems.userHandles = [];
    diagramInstance.dataBind();
  }
  //Export the diagraming object based on the format.
  function onselectExport(args:any) {
    let exportOptions: IExportOptions = {};
    exportOptions.format = args.item.text;
    exportOptions.mode = 'Download';
    exportOptions.region = 'PageSettings';
    exportOptions.fileName = 'Export';
    exportOptions.margin = { left: 0, top: 0, bottom: 0, right: 0 };
    diagramInstance.exportDiagram(exportOptions);
  }

  function onSelectGroup(args:any){
    if(args.item.text === 'Group'){
        diagramInstance.group();
    }
    else if(args.item.text === 'Ungroup'){
        diagramInstance.unGroup();
    }
  }

  function onSelectAlignObjects(args:any){
    let item:any = args.item.text;
    let alignType = item.replace('Align', '');
    let alignType1 = alignType.charAt(0).toUpperCase() + alignType.slice(1);
    diagramInstance.align(alignType1.trim());
  }
  function onSelectDistributeObjects(args:any){
    if(args.item.text === 'Distribute Objects Vertically'){
        diagramInstance.distribute('BottomToTop');
    }
    else{
        diagramInstance.distribute('RightToLeft');
    }
  }
  function onSelectOrder(args:any){
    switch(args.item.text){
        case 'Bring Forward':
        diagramInstance.moveForward();
        break;
        case 'Bring To Front':
        diagramInstance.bringToFront();
        break;
        case 'Send Backward':
        diagramInstance.sendBackward();
        break;
        case 'Send To Back':
        diagramInstance.sendToBack();
        break;
    }
  }

  function onSelectRotate(args:any){
    if(args.item.text === 'Rotate Clockwise'){
        diagramInstance.rotate(diagramInstance.selectedItems,90);
    }
    else{
        diagramInstance.rotate(diagramInstance.selectedItems,-90);
    }
  }
  function onSelectFlip(args:any){
    flipObjects(args.item.text);
  }

  // To flip diagram objects
  function flipObjects(flipType:any)
  {
    let selectedObjects = diagramInstance.selectedItems.nodes.concat((diagramInstance.selectedItems as any).connectors);
  for(let i:number=0;i<selectedObjects.length;i++)
  {
    selectedObjects[i].flip = flipType === 'Flip Horizontal'? 'Horizontal':'Vertical';
  }
  diagramInstance.dataBind();
  }

  function download(data:any){
    if((window.navigator as any).msSaveBlob){
        let blob: Blob  = new Blob([data], { type: 'data:text/json;charset=utf-8,' });
        (window.navigator as any).msSaveOrOpenBlob(blob, 'Diagram.json');
    }
    else {
        let dataString = 'data:text/json;charset=utf-8,' + encodeURIComponent(data);
        let ele = document.createElement('a'); 
        ele.href = dataString; 
        ele.download = 'Diagram.json';
        document.body.appendChild(ele);
        ele.click();
        ele.remove();
    }
  }

  function lockObject (args:any) {
    for (let i:number = 0; i < diagramInstance.selectedItems.nodes.length; i++) {
      let node = diagramInstance.selectedItems.nodes[i];
        if (node.constraints & NodeConstraints.Drag) {
            node.constraints = NodeConstraints.PointerEvents | NodeConstraints.Select;
        } else {
            node.constraints = NodeConstraints.Default;
        }
    }
    for (let j:number = 0; j < diagramInstance.selectedItems.connectors.length; j++) {
      let connector = diagramInstance.selectedItems.connectors[j];
        if (connector.constraints & ConnectorConstraints.Drag) {
            connector.constraints = ConnectorConstraints.PointerEvents | ConnectorConstraints.Select;
        } else {
            connector.constraints = ConnectorConstraints.Default;
        }
    }
    diagramInstance.dataBind();
  }
    
  function refreshOverflow(){
    setTimeout(() => {
        toolbarEditor?.refreshOverflow();
        
    }, 100);
  }
  asyncSettings = {
    saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
    removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove',
  };
  function onUploadSuccess(args:any) {
    let file = args.file;
    let rawFile = file.rawFile;
    let reader = new FileReader();
    reader.readAsText(rawFile);
    reader.onloadend = loadDiagram;
  }
  function loadDiagram(event:any){
    diagramInstance.loadDiagram(event.target.result);
  }
  function historyChange(args:any){
    if (diagramInstance.historyManager.undoStack.length > 0) {
        toolbarEditor.items[10].disabled = false;
      } else {
        toolbarEditor.items[10].disabled = true;
      }
      if (diagramInstance.historyManager.redoStack.length > 0) {
        toolbarEditor.items[11].disabled = false;
      } else {
        toolbarEditor.items[11].disabled = true;
      }
  }

  function onChange(args: { checked: any; }) {
    diagramInstance.tool = args.checked
        ? DiagramTools.ContinuousDraw
        : DiagramTools.DrawOnce;
  }
  //Enable drawing object.
  function setdrawobject(node: { shape: { type: string; } | { type: string; content: string; } | { type: string; source: string; } | { type: string; data: string; }; } | null, connector: { type: string; } | null) {
      let continuousDraw: any = document.getElementById("checked");
      if (!continuousDraw?.checked) {
          diagramInstance.tool = DiagramTools.DrawOnce;
      }
      if (connector == null) {
          diagramInstance.drawingObject = node;
      }
      else {
          diagramInstance.drawingObject = connector;
      }
      diagramInstance.dataBind();
  }
  //Enable drawing Tool.
  function enableTool() {
      let continuousDraw: any = document.getElementById("checked");
      if (!continuousDraw?.checked) {
          diagramInstance.tool = DiagramTools.DrawOnce;
      }
      diagramInstance.dataBind();
  }
  //Set the Shape of the drawing Object.
  function SetShape(obj: string) {
      let drawingshape;
      drawingshape = { type: "Basic", shape: obj };
      node = {
          shape: drawingshape
      };
      diagramInstance.drawingObject = node;
      enableTool();
  }
  //Set TextNode Shape.
  function getTextNode() {
      let drawingshape;
      drawingshape = { type: "Text" };
      node = {
          shape: drawingshape
      };
      setdrawobject(node, null);
  }
  //Set SVG Node
  function getSVGNode() {
      // tslint:disable-next-line:max-line-length
      let drawingshape;
      drawingshape = {
          type: "Native",
          content: getPath()
      };
      node = {
          shape: drawingshape
      };
      setdrawobject(node, null);
  }
  function getPath() {
      let str = '<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="350.000000pt" ' +
          'height="229.000000pt" viewBox="0 0 350.000000 229.000000" ' +
          'preserveAspectRatio="xMidYMid meet"> <metadata>' +
          " Created by potrace 1.11, written by Peter Selinger 2001-2013" +
          ' </metadata> <g transform="translate(0.000000,229.000000) scale(0.100000,-0.100000)"' +
          ' fill="#de6ca9" stroke="none"><path d="M0 1145 l0 -1145 1750 0 1750 0 0 1145 0 1145' +
          " -1750 0 -1750 0 0 -1145z m1434 186 c19 -8 26 -18 26 -37 0 -24 -3 -26" +
          " -27 -19 -16 3 -58 9 -94 12 -63 5 -67 4 -88 -23 -23 -29 -21 -60 6 -81 8" +
          " -6 47 -19 86 -29 55 -13 80 -25 106 -51 31 -31 33 -37 29 -88 -8 -94 -69" +
          " -133 -193 -122 -90 7 -115 20 -115 58 0 26 3 30 18 24 91 -38 168 -41 204" +
          " -8 23 21 23 75 1 96 -10 8 -49 23 -88 33 -88 22 -135 63 -135 118 0 92 67 140" +
          " 181 131 31 -2 68 -9 83 -14z m854 -6 c38 -15 42 -21 42 -51 l0 -33 -47 25" +
          " c-41 22 -58 25 -115 22 -58 -3 -72 -8 -97 -32 -79 -75 -59 -259 32 -297 35" +
          " -15 106 -18 150 -6 26 7 27 10 27 67 l0 60 -50 0 c-47 0 -50 2 -50 25 0 25" +
          " 1 25 80 25 l81 0 -3 -97 -3 -98 -40 -20 c-22 -10 -65 -21 -95 -23 -153 -11" +
          " -242 74 -243 230 0 145 93 235 233 224 30 -2 74 -12 98 -21z m-638 -169 l67" +
          " -178 40 103 c22 57 53 139 69 182 28 75 29 77 62 77 19 0 32 -4 30 -9 -1 -5" +
          " -39 -104 -83 -220 l-80 -211 -37 0 c-35 0 -37 2 -56 53 -11 28 -48 124 -81 " +
          '211 -34 87 -61 163 -61 168 0 5 14 8 32 6 31 -3 32 -5 98 -182z" />' +
          "</g> </svg>";
      return str;
  }
  function getImageNode() {
      let drawingshape;
      drawingshape = { type: "Image", source: "https://ej2.syncfusion.com/react/demos/src/diagram/employee.png" };
      node = {
          shape: drawingshape
      };
      setdrawobject(node, null);
  }
  function getPathShape() {
      // tslint:disable-next-line:max-line-length
      let drawingshape;
      drawingshape = {
          type: "Path",
          data: "M540.3643,137.9336L546.7973,159.7016L570.3633,159.7296L550.7723,171.9366L558.9053,194.9966L540.3643,179.4996L521.8223,194.9966L529.9553,171.9366L510.3633,159.7296L533.9313,159.7016L540.3643,137.9336z"
      };
      node = {
          shape: drawingshape
      };
      setdrawobject(node, null);
  }
  return (
    <div className="control-pane diagram-control-pane">
     <div className="text-right mb-10"><button className="btn btn-primary" onClick={handleCaptureScreenshot}>Capture Screenshot</button></div>
        {/* <style>{sample_css}</style> */}
      <div className="col-lg-8 control-section">
        <div style={{ width: "100%" }}>
          <div style={{display:'none'}}>
            <UploaderComponent
              id="fileUpload"
              type="file"
              showFileList={false}
              asyncSettings={asyncSettings}
              success={onUploadSuccess}
            ></UploaderComponent>
            </div>
            <div className="db-toolbar-container">
              <ToolbarComponent
                ref={(toolbar: any) => (toolbarEditor = toolbar)}
                id="toolbar_diagram"
                created={()=>{
                  if(diagramInstance!== undefined){
                    let colorBtn: any = () => {
                      console.log('mmmmmmmmm');
                      
                    }
                    let conTypeBtn:any = new DropDownButton({
                        items: [
                            {text: 'Straight',iconCss: 'e-icons e-line'},
                            {text: 'Orthogonal',iconCss: 'sf-diagram-icon-orthogonal'},
                            {text: 'Bezier',iconCss: 'sf-diagram-icon-bezier'}
                          ], iconCss:'e-diagram-icons1 e-diagram-connector e-icons',
                        select: function (args: any) {onConnectorSelect(args)}
                    });
                    conTypeBtn.appendTo('#conTypeBtn');
                    let btnZoomIncrement:any  = new DropDownButton({ items: [
                      { text: 'Zoom In' },{ text: 'Zoom Out' },{ text: 'Zoom to Fit' },{ text: 'Zoom to 50%' },
                      { text: 'Zoom to 100%' },{ text: 'Zoom to 200%' }], content: Math.round(diagramInstance?.scrollSettings?.currentZoom*100) + ' %', select: zoomChange,
                    });
                    btnZoomIncrement.appendTo('#btnZoomIncrement');
                    let shapesBtn:any  = new DropDownButton({
                        items:[
                            {text: 'Rectangle',iconCss: 'e-rectangle e-icons'},
                            {text: 'Ellipse',iconCss: ' e-circle e-icons'},
                            {text: 'Polygon',iconCss: 'e-line e-icons'}
                            ],iconCss: 'e-shapes e-icons',
                        select: function (args: any){onShapesSelect(args)}
                    });
                    shapesBtn.appendTo('#shapesBtn');
                    let exportBtn:any  = new DropDownButton({
                        items: [
                            {text:'JPG'},{text:'PNG'},{text:'SVG'}
                    ], iconCss: 'e-icons e-export',  select: function (args: any) {onselectExport(args)},
                    });
                    exportBtn.appendTo('#exportBtn');
                    
                    let groupBtn:any  = new DropDownButton({
                        items: [
                            {text:'Group',iconCss:'e-icons e-group-1'},{text:'Ungroup',iconCss:'e-icons e-ungroup-1'}
                        ], iconCss: 'e-icons e-group-1',select: function (args: any) {onSelectGroup(args)}
                    })
                    groupBtn.appendTo('#groupBtn');
                    let alignBtn:any  = new DropDownButton({
                        items:[
                          {iconCss: 'sf-diagram-icon-align-left-1', text: 'Align Left',},
                          {iconCss: 'sf-diagram-icon-align-center-1', text: 'Align Center',},
                          {iconCss: 'sf-diagram-icon-align-right-1', text: 'Align Ri ght',},
                          {iconCss: 'sf-diagram-icon-align-top-1', text: 'Align Top',},
                          {iconCss: 'sf-diagram-icon-align-middle-1', text: 'Align Middle',},
                          {iconCss: 'sf-diagram-icon-align-bottom-1', text: 'Align Bottom',},
                        ], iconCss:'e-icons e-restart-at-1',select: function (args: any) {onSelectAlignObjects(args)}
                    })
                    alignBtn.appendTo('#alignBtn');
                    
                    let distributeBtn:any  = new DropDownButton({
                        items: [
                          { iconCss: 'sf-diagram-icon-distribute-horizontal', text: 'Distribute Objects Vertically',},
                          { iconCss: 'sf-diagram-icon-distribute-vertical', text: 'Distribute Objects Horizontally',},
                        ], iconCss:'e-icons e-stroke-width',select: function (args: any) {onSelectDistributeObjects(args)}
                    });
                    distributeBtn.appendTo('#distributeBtn');
                    let orderBtn:any  = new DropDownButton({
                        items:[
                            { iconCss: 'e-icons e-bring-forward', text: 'Bring Forward'},
                            { iconCss: 'e-icons e-bring-to-front', text: 'Bring To Front'},
                            { iconCss: 'e-icons e-send-backward', text: 'Send Backward'},
                            { iconCss: 'e-icons e-send-to-back', text: 'Send To Back'}
                        ], iconCss:'e-icons e-order',select: function (args: any) {onSelectOrder(args)}
                    });
                    orderBtn.appendTo('#orderBtn');
                    let rotateBtn:any  = new DropDownButton({
                        items:[
                            {iconCss:'e-icons e-transform-right',text: 'Rotate Clockwise'},
                            {iconCss:'e-icons e-transform-left',text: 'Rotate Counter-Clockwise'}
                        ], iconCss:'e-icons e-repeat',select: function (args: any) {onSelectRotate(args)}
                    });
                    rotateBtn.appendTo('#rotateBtn');
                    let flipBtn:any  = new DropDownButton({
                        items: [
                            {iconCss:'e-icons e-flip-horizontal',text: 'Flip Horizontal'},
                            {iconCss:'e-icons e-flip-vertical',text: 'Flip Vertical'}
                        ], iconCss:'e-icons e-flip-horizontal',select: function (args: any) {onSelectFlip(args)}
                    });
                    flipBtn.appendTo('#flipBtn');
                    let fontBIUBtn: any = new DropDownButton({
                      items:[
                          {text: 'Bold',iconCss: 'e-rectangle e-icons'},
                          {text: 'Italic',iconCss: ' e-circle e-icons'},
                          {text: 'Underline',iconCss: 'e-line e-icons'}
                          ],iconCss: 'e-shapes e-icons',
                      select: function (args: any){onShapesSelect(args)}
                    });
                    fontBIUBtn.appendTo('#fontBIUBtn'); 
                    refreshOverflow();
                }
                }}
                clicked={toolbarClick}
                items={toolbarItems}
                overflowMode={'Scrollable'}
                width={'100%'}
              > 
              </ToolbarComponent>
            </div>
          <div className="sb-mobile-palette-bar">
            <div id="palette-icon" style={{ float: "right" }} className="e-ddb-icons1 e-toggle-palette"></div>
          </div>
          <div className="flex">
          <div
            id="palette-space" className="sb-mobile-palette"
          >
            <SymbolPaletteComponent
              id="symbolpalette"
              expandMode="Multiple"
              palettes={[
                {
                  id: "flow",
                  expanded: true,
                  symbols: flowshapes,
                  iconCss: "e-diagram-icons1 e-diagram-flow",
                  title: "Flow Shapes"
                },
                {
                  id: "connectors",
                  expanded: true,
                  symbols: connectorSymbols,
                  iconCss: "e-diagram-icons1 e-diagram-connector",
                  title: "Connectors"
                }
              ]}
              width={"100%"}
              height={"700px"}
              symbolHeight={60}
              symbolWidth={60}
              getNodeDefaults={(symbol: NodeModel): void => {
                if (
                  symbol.id === "Terminator" ||
                  symbol.id === "Process" ||
                  symbol.id === "Delay"
                ) {
                  symbol.width = 80;
                  symbol.height = 40;
                } else if (
                  symbol.id === "Decision" ||
                  symbol.id === "Document" ||
                  symbol.id === "PreDefinedProcess" ||
                  symbol.id === "PaperTap" ||
                  symbol.id === "DirectData" ||
                  symbol.id === "MultiDocument" ||
                  symbol.id === "Data"
                ) {
                  symbol.width = 50;
                  symbol.height = 40;
                } else {
                  symbol.width = 50;
                  symbol.height = 50;
                }
                if (symbol.style)
                  symbol.style.strokeColor = '#757575'
              }}
              symbolMargin={{ left: 15, right: 15, top: 15, bottom: 15 }}
              getSymbolInfo={(symbol: NodeModel): SymbolInfo => {
                return { fit: true };
              }}

            />
          </div>
          <div
            id="diagram-space" className="sb-mobile-diagram content-wrapper w-80"
            ref={divRef}
          >
            <DiagramComponent
              id="diagram"
              ref={diagram => (diagramInstance = diagram)}
              width={"100%"}
              height={"700px"}
              snapSettings={{
                horizontalGridlines: gridlines,
                verticalGridlines: gridlines
              }}
              nodes={nodes}
              connectors={connectors} //Sets the default values of a node
              getNodeDefaults={(node: NodeModel) => {
                if (node.width === undefined) {
                  node.width = 145;
                }
                node.style = { fill: '#357BD2', strokeColor: 'white' }; // #357BD2
                if (node?.annotations)
                  for (let i:number = 0; i < node?.annotations.length; i++) {
                    node.annotations[i].style = {
                      color: 'white',
                      fill: 'transparent',
                      fontFamily: "Segoe UI"
                    };
                  }
                //Set ports
                node.ports = getPorts();
                return node;
              }} //Sets the default values of a connector
              getConnectorDefaults={(obj: Connector) => {
                if (obj.id.indexOf("connector") !== -1) {
                  obj.targetDecorator = {
                    shape: "Arrow",
                    width: 10,
                    height: 10,
                    style: {fill: "yellow", strokeColor: "yellow"},
                  };
                }
              }}
              scrollChange={(args:IScrollChangeEventArgs) => {
                if (args.panState !== 'Start') {
                  let zoomCurrentValue:any =
                    (document?.getElementById('btnZoomIncrement') as any)
                      .ej2_instances[0];
                  zoomCurrentValue.content =
                    Math.round(
                      (diagramInstance?.scrollSettings?.currentZoom ? diagramInstance?.scrollSettings?.currentZoom : 0) * 100
                    ) + ' %';
                }
              }}
            historyChange={(args:IHistoryChangeArgs) => {
              historyChange(args);
            }}
            selectionChange={(args:ISelectionChangeEventArgs) => {
              if (args.state === 'Changed') { // NodeModel
                let selectedItems: any[] = diagramInstance.selectedItems.nodes || [];
                // console.log(selectedItems[0]?.properties?.style?.properties?.fill);
                // console.log('ffff ==> ', selectedItems?.length && hiddenColorShape, selectedItems[0].properties.style.properties.fill, colorShape);
                
                // console.log('sss11', selectedItems[0].properties.annotations[0].properties?.style.properties.color, selectedItems?.length && selectedItems[0]?.properties?.annotations[0] && hiddenColorFont, selectedItems[0]?.properties?.annotations[0], hiddenColorFont, colorFont);
                // if (selectedItems?.length && hiddenColorShape) selectedItems[0].properties.style.properties.fill = colorShape;
                // if (selectedItems?.length && selectedItems[0]?.properties?.annotations[0] && hiddenColorFont) selectedItems[0].properties.annotations[0].properties.style.properties.color = colorFont;
                // if (selectedItems?.length && selectedItems[0]?.properties?.annotations[0]) selectedItems[0].properties.annotations[0].properties.style.properties.fontFamily = fontFamilys;
                // console.log('sss', selectedItems[0].properties.annotations[0].properties?.style.properties.color, selectedItems?.length && selectedItems[0]?.properties?.annotations[0] && hiddenColorFont, selectedItems[0]?.properties?.annotations[0], hiddenColorFont, colorFont);
                
                setSelectedNode(selectedItems);
                selectedItems = selectedItems.concat(
                  (diagramInstance.selectedItems as any).connectors
                );
                if (selectedItems.length === 0) {
                  toolbarEditor.items[6].disabled = true;
                  toolbarEditor.items[7].disabled = true;
                  toolbarEditor.items[19].disabled = true;
                  toolbarEditor.items[20].disabled = true;
                  toolbarEditor.items[25].disabled = true;
                  toolbarEditor.items[29].disabled = true;
                  toolbarEditor.items[31].disabled = true;
                  disableMultiselectedItems();
                }
                if (selectedItems.length === 1) {
                  enableItems();
                  disableMultiselectedItems();

                  if (
                    selectedItems[0].children !== undefined &&
                    selectedItems[0].children.length > 0
                  ) {
                    toolbarEditor.items[27].disabled = false;
                  } else {
                    toolbarEditor.items[27].disabled = true;
                  }
                }

                if (selectedItems.length > 1) {
                  enableItems();
                  toolbarEditor.items[22].disabled = false;
                  toolbarEditor.items[23].disabled = false;
                  toolbarEditor.items[27].disabled = false;
                  if (selectedItems.length > 2) {
                    toolbarEditor.items[23].disabled = false;
                  } else {
                    toolbarEditor.items[23].disabled = true;
                  }
                }

                let selectedElement = document.getElementsByClassName("e-selected-style");
                if (selectedElement.length) {
                    selectedElement[0].classList.remove("e-selected-style");
                }
                if (args.newValue[0]) {
                    let node: any = args.newValue[0];
                    let annotations: any = node?.annotations;
                    if (node.annotations[0].offset.x === 0 &&
                        node.annotations[0].offset.y === 0) {
                        updatePosition("left");
                    }
                    else if (node.annotations[0].offset.x === 1 &&
                        node.annotations[0].offset.y === 0) {
                        updatePosition("right");
                    }
                    else if (node?.annotations[0].offset.x === 1 &&
                        node.annotations[0].offset.y === 0) {
                        updatePosition("right");
                    }
                    else if (node.annotations[0].offset.x === 0 &&
                        node.annotations[0].offset.y === 1) {
                        updatePosition("bottoml");
                    }
                    else if (node.annotations[0].offset.x === 1 &&
                        node.annotations[0].offset.y === 1) {
                        updatePosition("bottomr");
                    }
                    else if (node.annotations[0].offset.x === 0.5 &&
                        node.annotations[0].offset.y === 0.5) {
                        updatePosition("center");
                    }
                    else if (node.annotations[0].offset.x === 0.5 &&
                        node.annotations[0].offset.y === 1) {
                        updatePosition("bottomcenter_top");
                    }
                }
                enableOptions(args);
              }
              
            }}
              //Sets the Node style for DragEnter element.
              dragEnter={(args: IDragEnterEventArgs): void => {
                let obj: NodeModel = args.element as NodeModel;
                if (obj instanceof Node) {
                  let oWidth: number = obj.width;
                  let oHeight: number = obj.height;
                  let ratio: number = 100 / obj.width;
                  obj.width = 100;
                  obj.height *= ratio;
                  obj.offsetX += (obj.width - oWidth) / 2;
                  obj.offsetY += (obj.height - oHeight) / 2;
                  obj.style = { fill: "red", strokeColor: "white" }; // #357BD2
                }
              }}
            >
              <Inject services={[PrintAndExport,UndoRedo]} />
            </DiagramComponent>
          </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 property-section">
        <div className="property-panel-header">Properties</div>
        <div id="propertypanel" className="e-remove-selection">
          <div className="property-section-content">
            <div className="row property-panel-content" id="appearance">
              <div className="row-header">Alignment</div>
              <div className="flex">
                <div className="item-wrap">
                  <div className="image-pattern-style" id="left" style={{
                      backgroundImage: "url('https://ej2.syncfusion.com/react/demos/src/diagram/Images/annotation/Annotation_1.png')",
                      marginRight: "4px"
                  }}/>
                  <div className="image-pattern-style" id="right" style={{
                      backgroundImage: "url('https://ej2.syncfusion.com/react/demos/src/diagram/Images/annotation/Annotation_2.png')",
                      margin: "0px 4px"
                  }}/>
                  <div className="image-pattern-style" id="bottoml" style={{
                      backgroundImage: "url('https://ej2.syncfusion.com/react/demos/src/diagram/Images/annotation/Annotation_3.png')"
                  }}/>
                </div>
                <div className="item-wrap">
                  <div className="image-pattern-style" id="bottomr" style={{
                      backgroundImage: "url('https://ej2.syncfusion.com/react/demos/src/diagram/Images/annotation/Annotation_4.png')",
                      margin: "0px 4px"
                  }}/>
                  <div className="image-pattern-style" id="center" style={{
                      backgroundImage: "url('https://ej2.syncfusion.com/react/demos/src/diagram/Images/annotation/Annotation_5.png')",
                      marginRight: "4px"
                  }}/>
                  <div className="image-pattern-style" id="bottomcenter_top" style={{
                      backgroundImage: "url('https://ej2.syncfusion.com/react/demos/src/diagram/Images/annotation/Annotation_6.png')"
                  }}/>
          </div>
        </div>
        <div className="row property-panel-content" id="appearance">
          <div className="row-header">
            Shapes Filling
          </div>
          <div className="flex">
              <div title="Image" className="image-pattern-style" id="image" style={{
              backgroundImage: "url('https://ej2.syncfusion.com/react/demos/src/diagram/Images/drawingTool/DrawingTool_7.png')",
              marginRight: "3px"
          }}/>
              <div title="SVG" className="image-pattern-style" id="svg" style={{
              backgroundImage: "url('https://ej2.syncfusion.com/react/demos/src/diagram/Images/drawingTool/DrawingTool_8.png')",
              marginRight: "3px"
          }}/>
              <div title="Text" className="image-pattern-style" id="text" style={{
              backgroundImage: "url('https://ej2.syncfusion.com/react/demos/src/diagram/Images/drawingTool/DrawingTool_9.png')",
              marginRight: "3px"
          }}/>
          </div>
        </div>
        <div className="row property-panel-content">
          <div className="row-header">
            Node Fill
          </div>
          <div className="flex">
              {/* <ColorPickerComponent id="nodecolor" value="#000" change={(arg) => {
                  for (let i = 0; i < diagramInstance.selectedItems.nodes.length; i++) {
                      debugger
                      node = diagramInstance.selectedItems.nodes[i];
                          node.style.fill = arg.currentValue.rgba;
                  }
                }} ref={nodeColor => (nodeColor = nodeColor)}/> */}
                <ColorPicker  color={color}
        hidden={hidden}
        setColor={setColor}
        setHidden={setHidden}
        hiddenTitle={hiddenTitle}
        openTitle={openTitle}  />
          </div>
       </div>
       <div className="row property-panel-content">
          <div className="row-header">Appearance</div>
          <div className="flex">
            <div className="column-style">
              <ButtonComponent style={{ width: "100%" }} id="bold" iconCss={"e-diagram-icons e-diagram-bold"} ref={boldref => (bold = boldref)}>
                {" "}
              </ButtonComponent>
            </div>
            <div className="column-style">
              <ButtonComponent style={{ width: "100%" }} id="italic" iconCss={"e-diagram-icons e-diagram-italic"} ref={italicref => (italic = italicref)}>
                {" "}
              </ButtonComponent>
            </div>
            <div className="column-style">
              <ButtonComponent style={{ width: "100%" }} id="underline" iconCss={"e-diagram-icons e-diagram-underline"} ref={underLineref => (underLine = underLineref)}>
                {" "}
              </ButtonComponent>
            </div>
          
            <div className="column-style">
              {/* <ColorPickerComponent 
                id="fontcolor" 
                value="#000" 
                change={(arg) => {
                  for (let i = 0; i < diagramInstance.selectedItems.nodes.length; i++) {
                      node = diagramInstance.selectedItems.nodes[i];
                      for (let j = 0; j < node.annotations.length; j++) {
                          node.annotations[j]
                              .style.color =
                              arg.currentValue.rgba;
                      }
                  }
                }} ref={fontcolor => (fontColor = fontcolor)}/> */}
                    <ColorPicker  color={color}
        hidden={hidden}
        setColor={setColor}
        setHidden={setHidden}
        hiddenTitle={hiddenTitle}
        openTitle={openTitle}  />
            </div>
            <div className="column-style">
              <NumericTextBoxComponent 
                id="fontSize" 
                value={12} 
                min={0} 
                max={50} 
                step={1} 
                format="##.##" 
                change={() => {
                  changed("fontsize");
                }} ref={fontsize => (fontSize = fontsize)}/>
            </div>
            <div className="column-style">
              {/* <DropDownListComponent 
                id="fontfamily" 
                popupWidth={150} 
                width={"100%"} 
                placeholder={"select a font type"} 
                index={0} 
                dataSource={fontType} 
                change={() => {
                    changed("fontfamily");
                }} ref={(fontfamily) => (fontFamily = fontfamily)}/> */}
              <DropDownPicker setValue={fontType} value="Select a font type" />
            </div>
          </div>
      </div>
        <div className="row property-panel-content">
          <div className="row-header">
            Templates
          </div>
          <div className="flex">
            {/* <DropDownListComponent 
              id="template" 
              fields={fields} 
              popupWidth={200} 
              width={"100%"} 
              placeholder={"select a template"} 
              dataSource={templateList} 
              change={() => {
                  changed("template");
              }} ref={template => (templateData = template)}/> */}
              <DropDownPicker setValue={templateList} value="Select a template" />
          </div>
        </div>
        <div className="row property-panel-content">
            <div className="row-header">
                    Behaviour
                  </div>
            <div className="row">
                <CheckBoxComponent id="labelConstraints" label={"Label Constraints"} checked={false} change={() => {
                      changed("interaction");
                    }}/>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Default;