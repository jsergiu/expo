import { NavigationActions } from 'react-navigation';
import RootNavigation from '../navigation/RootNavigation';

const firstAction = RootNavigation.router.getActionForPathAndParams('Main');
const tempNavState = RootNavigation.router.getStateForAction(firstAction);
const secondAction = RootNavigation.router.getActionForPathAndParams('Login');

const initialState = RootNavigation.router.getStateForAction(
  secondAction,
  tempNavState
);

const navigation = (state = initialState, action = {}) => {
  let nextState;

  switch (action.type) {
    case 'AUTH_LOGIN':
      nextState = RootNavigation.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    case 'AUTH_LOGOUT':
      nextState = RootNavigation.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state
      );
      break;
    default:
      nextState = RootNavigation.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
}


export default navigation