import { ConnectorModel } from "@syncfusion/ej2-react-diagrams";

//Initializes connector symbols for the symbol palette
let connectorSymbols: ConnectorModel[] = [
  {
    id: '0_to_M',
    type: 'Straight',
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 60, y: 0 },
    targetDecorator: {
      shape: 'Custom',
      pathData:
        'M11.5 8H0M11.5 8L0.5 1.5M11.5 8L0.5 13.5M11.5 8H14.5M14.5 8C14.5 10.7614 16.7386 13 19.5 13C22.2614 13 24.5 10.7614 24.5 8C24.5 5.23858 22.2614 3 19.5 3C16.7386 3 14.5 5.23858 14.5 8Z',
      style: {
        fill: 'transparent',
      },
    },
    style: { strokeWidth: 1, strokeColor: '#757575' },
  },
  {
    id: '1_to_M',
    type: 'Straight',
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 60, y: 0 },
    targetDecorator: {
      shape: 'Custom',
      pathData: 'M15 9H1M15 9L1 1M15 9L1 17M15 9V1M15 9V17',
      style: {
        fill: 'transparent',
      },
    },
    style: { strokeWidth: 1, strokeColor: '#757575' },
  },
  {
    id: '1_m',
    type: 'Straight',
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 60, y: 0 },
    targetDecorator: {
      shape: 'Custom',
      pathData: 'M3.5 0V13M10.5 0V13M14 6H0',
      style: {
        fill: 'transparent',
      },
    },
    style: { strokeWidth: 1, strokeColor: '#757575' },
  },
  {
    id: '1',
    type: 'Straight',
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 60, y: 0 },
    targetDecorator: {
      shape: 'Custom',
      pathData: 'M10.5 0V13M14 6H0',
      style: {
        fill: 'transparent',
      },
    },
    style: { strokeWidth: 1, strokeColor: '#757575' },
  },
  {
    id: '0_to_1',
    type: 'Straight',
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 60, y: 0 },
    targetDecorator: {
      shape: 'Custom',
      pathData:
        'M15.5 6.5H9M15.5 6.5C15.5 9.26142 17.7386 11.5 20.5 11.5C23.2614 11.5 25.5 9.26142 25.5 6.5C25.5 3.73858 23.2614 1.5 20.5 1.5C17.7386 1.5 15.5 3.73858 15.5 6.5ZM9 6.5H0M9 6.5V0M9 6.5V13',
      style: {
        fill: 'transparent',
      },
    },
    style: { strokeWidth: 1, strokeColor: '#757575' },
  },
  {
    id: 'M',
    type: 'Straight',
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 60, y: 0 },
    targetDecorator: {
      shape: 'Custom',
      pathData: 'M15 8.5H0.5M15 8.5L1 0.5M15 8.5L1 16.5',
      style: {
        fill: 'transparent',
      },
    },
    style: { strokeWidth: 1, strokeColor: '#757575' },
  },
  {
    id: '1_to_1',
    type: 'Straight',
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 60, y: 0 },
    sourceDecorator: {
      shape: 'Custom',
      pathData: 'M3.5 0V13M10.5 0V13M14 6H0',
      style: {
        fill: 'transparent',
      },
    },
    targetDecorator: {
      shape: 'Custom',
      pathData: 'M3.5 0V13M10.5 0V13M14 6H0',
      style: {
        fill: 'transparent',
      },
    },
    style: { strokeWidth: 1, strokeColor: '#757575' },
  },
  {
    id: 'M_to_M',
    type: 'Straight',
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 60, y: 0 },
    sourceDecorator: {
      shape: 'Custom',
      pathData: 'M15 8.5H0.5M15 8.5L1 0.5M15 8.5L1 16.5',
      style: {
        fill: 'transparent',
      },
    },
    targetDecorator: {
      shape: 'Custom',
      pathData: 'M15 8.5H0.5M15 8.5L1 0.5M15 8.5L1 16.5',
      style: {
        fill: 'transparent',
      },
    },
    style: { strokeWidth: 1, strokeColor: '#757575' },
  },
  {
    id: '1_Op_to_M_Op',
    type: 'Straight',
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 60, y: 0 },
    sourceDecorator: {
      shape: 'Custom',
      pathData:
        'M0.5 7.5H7.5M7.5 7.5V15M7.5 7.5V0M7.5 7.5H14M14 7.5C14 10.2614 16.2386 12.5 19 12.5C21.7614 12.5 24 10.2614 24 7.5C24 4.73858 21.7614 2.5 19 2.5C16.2386 2.5 14 4.73858 14 7.5Z',
      style: {
        fill: 'transparent',
      },
    },
    targetDecorator: {
      shape: 'Custom',
      pathData:
        'M11.5 8H0M11.5 8L0.5 1.5M11.5 8L0.5 13.5M11.5 8H14.5M14.5 8C14.5 10.7614 16.7386 13 19.5 13C22.2614 13 24.5 10.7614 24.5 8C24.5 5.23858 22.2614 3 19.5 3C16.7386 3 14.5 5.23858 14.5 8Z',
      style: {
        fill: 'transparent',
      },
    },
    style: { strokeWidth: 1, strokeColor: '#757575' },
  },
  {
    id: '1_m_to_1_Op',
    type: 'Straight',
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 60, y: 0 },
    sourceDecorator: {
      shape: 'Custom',
      pathData: 'M3.5 0V13M10.5 0V13M14 6H0',
      style: {
        fill: 'transparent',
      },
    },
    targetDecorator: {
      shape: 'Custom',
      pathData:
        'M11.5 8H0M11.5 8L0.5 1.5M11.5 8L0.5 13.5M11.5 8H14.5M14.5 8C14.5 10.7614 16.7386 13 19.5 13C22.2614 13 24.5 10.7614 24.5 8C24.5 5.23858 22.2614 3 19.5 3C16.7386 3 14.5 5.23858 14.5 8Z',
      style: {
        fill: 'transparent',
      },
    },
    style: { strokeWidth: 1, strokeColor: '#757575' },
  },
  {
    id: '1_m_to_M_Op',
    type: 'Straight',
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 60, y: 0 },
    sourceDecorator: {
      shape: 'Custom',
      pathData: 'M3.5 0V13M10.5 0V13M14 6H0',
      style: {
        fill: 'transparent',
      },
    },
    targetDecorator: {
      shape: 'Custom',
      pathData:
        'M11.5 7H18M11.5 7C11.5 9.76142 9.26142 12 6.5 12C3.73858 12 1.5 9.76142 1.5 7C1.5 4.23858 3.73858 2 6.5 2C9.26142 2 11.5 4.23858 11.5 7ZM18 7H27M18 7V0M18 7V14',
      style: {
        fill: 'transparent',
      },
    },
    style: { strokeWidth: 1, strokeColor: '#757575' },
  },
  {
    id: '1_m_to_M_m',
    type: 'Straight',
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 60, y: 0 },
    sourceDecorator: {
      shape: 'Custom',
      pathData: 'M3.5 0V13M10.5 0V13M14 6H0',
      style: {
        fill: 'transparent',
      },
    },
    targetDecorator: {
      shape: 'Custom',
      pathData: 'M15 9H1M15 9L1 1M15 9L1 17M15 9V1M15 9V17',
      style: {
        fill: 'transparent',
      },
    },
    style: { strokeWidth: 1, strokeColor: '#757575' },
  },
  {
    id: '1_Op_to_M-m',
    type: 'Straight',
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 60, y: 0 },
    sourceDecorator: {
      shape: 'Custom',
      pathData:
        'M0.5 7.5H7.5M7.5 7.5V15M7.5 7.5V0M7.5 7.5H14M14 7.5C14 10.2614 16.2386 12.5 19 12.5C21.7614 12.5 24 10.2614 24 7.5C24 4.73858 21.7614 2.5 19 2.5C16.2386 2.5 14 4.73858 14 7.5Z',
      style: {
        fill: 'transparent',
      },
    },
    targetDecorator: {
      shape: 'Custom',
      pathData: 'M15 9H1M15 9L1 1M15 9L1 17M15 9V1M15 9V17',
      style: {
        fill: 'transparent',
      },
    },
    style: { strokeWidth: 1, strokeColor: '#757575' },
  },
  {
    id: 'M_m_to_M_m',
    type: 'Straight',
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 60, y: 0 },
    sourceDecorator: {
      shape: 'Custom',
      pathData: 'M1 9H15M15 9L1 1M15 9L1 17M15 9V1M15 9V17',
      style: {
        fill: 'transparent',
      },
    },
    targetDecorator: {
      shape: 'Custom',
      pathData: 'M15 9H1M15 9L1 1M15 9L1 17M15 9V1M15 9V17',
      style: {
        fill: 'transparent',
      },
    },
    style: { strokeWidth: 1, strokeColor: '#757575' },
  },
  {
    id: 'M_Op_to_M_m',
    type: 'Straight',
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 60, y: 0 },
    sourceDecorator: {
      shape: 'Custom',
      pathData:
        'M11.5 8H0M11.5 8L0.5 1.5M11.5 8L0.5 13.5M11.5 8H14.5M14.5 8C14.5 10.7614 16.7386 13 19.5 13C22.2614 13 24.5 10.7614 24.5 8C24.5 5.23858 22.2614 3 19.5 3C16.7386 3 14.5 5.23858 14.5 8Z',
      style: {
        fill: 'transparent',
      },
    },
    targetDecorator: {
      shape: 'Custom',
      pathData: 'M15 9H1M15 9L1 1M15 9L1 17M15 9V1M15 9V17',
      style: {
        fill: 'transparent',
      },
    },
    style: { strokeWidth: 1, strokeColor: '#757575' },
  },
  {
    id: 'M_Op_to_M_Op',
    type: 'Straight',
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 60, y: 0 },
    sourceDecorator: {
      shape: 'Custom',
      pathData:
        'M11.5 8H0M11.5 8L0.5 1.5M11.5 8L0.5 13.5M11.5 8H14.5M14.5 8C14.5 10.7614 16.7386 13 19.5 13C22.2614 13 24.5 10.7614 24.5 8C24.5 5.23858 22.2614 3 19.5 3C16.7386 3 14.5 5.23858 14.5 8Z',
      style: {
        fill: 'transparent',
      },
    },
    targetDecorator: {
      shape: 'Custom',
      pathData:
        'M11.5 8H0M11.5 8L0.5 1.5M11.5 8L0.5 13.5M11.5 8H14.5M14.5 8C14.5 10.7614 16.7386 13 19.5 13C22.2614 13 24.5 10.7614 24.5 8C24.5 5.23858 22.2614 3 19.5 3C16.7386 3 14.5 5.23858 14.5 8Z',
      style: {
        fill: 'transparent',
      },
    },
    style: { strokeWidth: 1, strokeColor: '#757575' },
  },
  {
    id: "link104",
    type: "Bezier",
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 60, y: 60 },
    style: { strokeWidth: 1, strokeColor: '#757575' },
    targetDecorator: { shape: "None" },
    sourceDecorator: {
      shape: 'Arrow',
      style: { strokeColor: '#757575', fill: '#757575', strokeWidth: 1.0,  }
    },
  },
    {
      id: "link103",
      type: "Bezier",
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 60, y: 60 },
      sourceID: "Left",
      targetID: "Right",
      style: { strokeWidth: 1, strokeColor: '#757575' },
      sourceDecorator: {
        shape: 'Arrow',
        style: { strokeColor: '#757575', fill: '#757575', strokeWidth: 1.0,  }
      },
    },
  {
    id: "link102",
    type: "Bezier",
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 60, y: 60 },
    sourceID: "Start",
    targetID: "End",
    style: { strokeWidth: 1, strokeColor: '#757575' },
    targetDecorator: { shape: "None" },
    sourceDecorator: {
      shape: 'Arrow',
      style: { strokeColor: '#757575', fill: '#757575', strokeWidth: 1.0,  }
    },
  },
    {
      id: "link101",
      type: "Bezier",
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 60, y: 60 },
      sourceID: "Start",
      targetID: "End",
      style: { strokeWidth: 1, strokeColor: '#757575' },
      sourceDecorator: {
        shape: 'Arrow',
        style: { strokeColor: '#757575', fill: '#757575', strokeWidth: 1.0,  }
      },
    },
    {
      id: 'Link100',
      type: 'Orthogonal',
      sourceID: "Left",
      targetID: "Right",
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 60, y: 60 },
      sourceDecorator: {
        shape: 'Arrow',
        style: { strokeColor: '#757575', fill: '#red', strokeWidth: 1.0,  }
      },
      style: { strokeWidth: 1, strokeColor: '#757575' }, // #757575
    },
    {
      id: "Link0",
      type: "Straight",
      sourceID: "Start",
      targetID: "End",
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 60, y: 60 },
      targetDecorator: { shape: "OpenArrow", style: { strokeColor: '#757575', fill: '#757575', strokeWidth: 1.0,  } },
      style: { strokeWidth: 1, strokeColor: 'yellow' }, // #757575
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

  export {connectorSymbols};