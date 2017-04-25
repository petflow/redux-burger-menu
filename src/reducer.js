import { actions } from './action';

const reducer = (state = {isOpen: true, width: 180}, action) => {
  switch (action.type) {
    case actions.TOGGLE_MENU:
      const { isOpen, menuId } = action.payload
      return menuId
        ? { ...state, [menuId]: { isOpen } }
        : { ...state, isOpen }

    case actions.TOGGLE_WIDTH:
      const { width } = action.payload;
      console.log(action);
      return {...state, width }
    default:
      return state;
  }
};

export default reducer;
