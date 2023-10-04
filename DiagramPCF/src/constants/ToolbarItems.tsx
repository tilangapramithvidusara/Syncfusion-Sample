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

export {toolbarItems}