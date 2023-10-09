import { enableRipple } from '@syncfusion/ej2-base';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DropDownButtonComponent, ItemModel } from '@syncfusion/ej2-react-splitbuttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';
enableRipple(true);

// To render DropDownButton.
function DropDownPicker({setValue, value, changed, changedType, diagramInstance}: {setValue: any, value: string, changed?: any, changedType?: string, diagramInstance?: any}) {
  let items: object[] = [
    { text: 'Segoe UI', value: 'Segoe UI' },
    { text: 'Arial', value: 'Arial,Helvetica,sans-serif' },
    { text: 'Courier New', value: 'Courier New,Courier,monospace' },
    { text: 'Georgia', value: 'Georgia,serif' },
    { text: 'Impact', value: 'Impact,Charcoal,sans-serif' },
    { text: 'Calibri Light', value: 'CalibriLight' }
  ];
  
  const selectHandler = (value: any) => {
    console.log('vallll ====> ', value.item.properties.text)
    // setValue(value.item.properties.text);
    for (let i = 0; i < diagramInstance.selectedItems.nodes.length; i++) {
      let node = diagramInstance.selectedItems.nodes[i];
      for (let j = 0; j < node.annotations.length; j++) {
          node.annotations[j]
              .style.fontFamily =
              value.item.properties.text;
      }
    }
    setValue(value.item.properties.text);
    // if (selectedItems?.length && selectedItems[0]?.properties?.annotations[0]) selectedItems[0].properties.annotations[0].properties.style.properties.fontFamily = value.item.properties.text;
  }

  return (
    <div>
      <DropDownButtonComponent select={(value) => selectHandler(value)} id="element" items = {items}> {value} </DropDownButtonComponent>
    </div>
  );
}
export default DropDownPicker;
// ReactDom.render(<DropDownPicker />,document.getElementById('button'));