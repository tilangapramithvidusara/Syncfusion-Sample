import { ConnectorModel } from "@syncfusion/ej2-react-diagrams";

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

export {connectors};