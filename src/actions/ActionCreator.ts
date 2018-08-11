import ActionType from './ActionType';
import { IActivateKabayaAction, ICloseKabayaAction } from './Action';

export function activateKabaya(title: string): IActivateKabayaAction {
  return {
    type: ActionType.ACTIVATE_KABAYA,
    title: title
  };
}

export function closeKabaya(): ICloseKabayaAction {
  return {
    type: ActionType.CLOSE_KABAYA
  };
}
