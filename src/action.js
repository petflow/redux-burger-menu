export const actions = {
  TOGGLE_MENU: 'TOGGLE_MENU',
  TOGGLE_WIDTH: 'TOGGLE_WIDTH'
}

const toggleMenu = (isOpen = true, menuId) => {
  return {
    type: actions.TOGGLE_MENU,
    payload: menuId ? { isOpen, menuId } : { isOpen }
  };
};

const toggleWidth = (width = 180) => {
  return {
    type: actions.TOGGLE_WIDTH,
    payload: width
  };
};

export const actionObj = { toggleMenu, toggleWidth };
