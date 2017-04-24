'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _action = require('./action');

var reduxBurgerMenu = function reduxBurgerMenu(ComposedComponent, menuId) {
  var mapStateToProps = function mapStateToProps(state) {
    var burgerMenu = state.burgerMenu;

    var width = burgerMenu.width;
    var isOpen = void 0;
    if (menuId) {
      isOpen = burgerMenu[menuId] ? burgerMenu[menuId].isOpen : false;
    } else {
      isOpen = burgerMenu.isOpen ? burgerMenu.isOpen : false;
    }
    return { isOpen: isOpen, width: width };
  };

  var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
      onStateChange: function onStateChange(newState) {
        dispatch((0, _action.toggleMenu)(newState.isOpen, menuId));
        dispatch((0, _action.toggleWidth)(newState.width));
      }
    };
  };

  return (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ComposedComponent);
};

exports.default = reduxBurgerMenu;