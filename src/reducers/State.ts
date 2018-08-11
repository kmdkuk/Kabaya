import IState from '../models/State';
import ActionType from '../actions/ActionType';
import Action from '../actions/Action'

const initialState: IState = {
  title: '',
}

export default function state(state: IState = initialState, action: Action): IState {
  switch (action.type) {
    case ActionType.ACTIVATE_KABAYA:
      return {
        title: action.title
      };
    case ActionType.CLOSE_KABAYA:
      return {
        title: ''
      };
    default:
      return state;
  }
}
