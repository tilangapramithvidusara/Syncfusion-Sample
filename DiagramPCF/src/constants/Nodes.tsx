import { NodeModel } from "@syncfusion/ej2-react-diagrams";

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

export {nodes};