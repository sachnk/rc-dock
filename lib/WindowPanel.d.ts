import * as React from "react";
import { DockContext, PanelData } from "./DockData";
interface Props {
    panelData: PanelData;
    onOpened?(panel: PanelData, window: Window): void;
    onClosing?(panel: PanelData, window: Window): void;
    getName?(panel: PanelData): string;
}
export declare class WindowPanel extends React.PureComponent<Props, any> {
    static contextType: React.Context<DockContext>;
    context: DockContext;
    _window: Window;
    onOpen: (w: Window) => void;
    onUnload: () => void;
    initPopupInnerRect: () => any;
    render(): React.ReactNode;
}
export {};
