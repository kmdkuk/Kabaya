import { IActivateKabayaAction, ICloseKabayaAction } from "../../actions/Action";

export interface IHomeConnectedProps {
  title: string;
}

export interface IHomeDispatchProps {
  activateKabaya: (title: string) => IActivateKabayaAction;
  closeKabaya: () => ICloseKabayaAction;
}
