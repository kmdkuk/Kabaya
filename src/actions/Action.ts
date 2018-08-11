import ActionType from './ActionType'

export interface IActivateKabayaAction {
  type: ActionType.ACTIVATE_KABAYA;
  title: string;
}

export interface ICloseKabayaAction {
  type: ActionType.CLOSE_KABAYA;
}

export type Action = IActivateKabayaAction | ICloseKabayaAction;
export default Action;
