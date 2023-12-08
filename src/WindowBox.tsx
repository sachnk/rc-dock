import * as React from "react";
import {BoxData, PanelData} from "./DockData";
import {WindowPanel} from "./WindowPanel";

interface Props {
  boxData: BoxData;
  onOpened?(panel: PanelData, window: Window): void;
  onClosing?(panel: PanelData, window: Window): void;
  getName?(panel: PanelData): string;
}

export class WindowBox extends React.PureComponent<Props, any> {

  static enabled = typeof window === 'object' && (window?.navigator.platform === 'Win32' || window?.navigator.platform === 'MacIntel');

  render(): React.ReactNode {
    let {children} = this.props.boxData;
    let {onOpened, onClosing, getName} = this.props;

    let childrenRender: React.ReactNode[] = [];
    for (let child of children) {
      if ('tabs' in child) {
        childrenRender.push(
          <WindowPanel key={child.id} panelData={child} onOpened={onOpened} onClosing={onClosing} getName={getName}/>
        );
      }
    }

    return (
      <>
        {childrenRender}
      </>
    );
  }
}
