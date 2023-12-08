import * as React from "react";
import { BoxData, PanelData } from "./DockData";
interface Props {
    boxData: BoxData;
    onOpened?(panel: PanelData, window: Window): void;
    onClosing?(panel: PanelData, window: Window): void;
    getName?(panel: PanelData): string;
}
export declare class WindowBox extends React.PureComponent<Props, any> {
    static enabled: boolean;
    render(): React.ReactNode;
}
export {};
