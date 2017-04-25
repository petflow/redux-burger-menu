import { connect } from 'react-redux';
import { actionObj } from './action';
const { toggleMenu, toggleWidth } = actionObj;

const reduxBurgerMenu = (ComposedComponent, menuId) => {
  const mapStateToProps = (state) => {
    const { burgerMenu } = state;
    const width = burgerMenu.width;
    let isOpen;
    if (menuId) {
      isOpen = burgerMenu[menuId] ? burgerMenu[menuId].isOpen : false;
    } else {
      isOpen = burgerMenu.isOpen ? burgerMenu.isOpen : false;
    }
    return { isOpen, width };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      onStateChange: (newState) => {
        if (newState.isOpen !== state.isOpen) dispatch(toggleMenu(newState.isOpen, menuId));
        if (newState.width !== state.width) dispatch(toggleWidth(newState.width));
      }
    };
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(ComposedComponent);
};

export default reduxBurgerMenu;
