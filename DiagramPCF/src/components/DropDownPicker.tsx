import { enableRipple } from '@syncfusion/ej2-base';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DropDownButtonComponent, ItemModel } from '@syncfusion/ej2-react-splitbuttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';
enableRipple(true);

// To render DropDownButton.
function DropDownPicker({setValue, value}: {setValue: any, value: string}) {
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
    setValue(value.item.properties.text);
  }

  return (
    <div>
      <DropDownButtonComponent select={(value) => selectHandler(value)} id="element" items = {items}> {value} </DropDownButtonComponent>
    </div>
  );
}
export default DropDownPicker;
// ReactDom.render(<DropDownPicker />,document.getElementById('button'));