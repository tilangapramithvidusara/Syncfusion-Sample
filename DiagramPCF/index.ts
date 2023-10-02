import {IInputs, IOutputs} from "./generated/ManifestTypes";
import App from "./src/App3";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion license key

export class DiagramPCF implements ComponentFramework.StandardControl<IInputs, IOutputs> {

    private container: HTMLDivElement;
    constructor()
    {

    }

    public init(
        context: ComponentFramework.Context<IInputs>,
        notifyOutputChanged: () => void,
        state: ComponentFramework.Dictionary,
        container: HTMLDivElement
      ) {
        // Save the container element for later use
        this.container = container;
    }


    public updateView(context: ComponentFramework.Context<IInputs>): void {
        // Render the React component using ReactDOM.render
        registerLicense('Ngo9BigBOggjHTQxAR8/V1NHaF5cXmtCf1NpQnxbf1xzZFxMYF1bRHRPMyBoS35RdUVqW3led3dVRWdeV0xw');
        ReactDOM.render(React.createElement(App), this.container);
    }

    /**
     * It is called by the framework prior to a control receiving new data.
     * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
     */
    public getOutputs(): IOutputs
    {
        return {};
    }

    /**
     * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
     * i.e. cancelling any pending remote calls, removing listeners, etc.
     */
    public destroy(): void
    {
        // Add code to cleanup control if necessary
    }
}
