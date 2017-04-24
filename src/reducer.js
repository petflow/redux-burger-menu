import { actions } from './action';

const reducer = (state = {isOpen: false}, action) => {
  switch (action.type) {
    case actions.TOGGLE_MENU:
      const { isOpen, menuId } = action.payload
      return menuId
        ? { ...state, [menuId]: { isOpen } }
        : { ...state, isOpen }

    case actions.TOGGLE_WIDTH:
      const { width } = action.payload;
      return {...state, width }
    default:
      return state;
  }
};

export default reducer;
