'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var actions = exports.actions = {
  TOGGLE_MENU: 'TOGGLE_MENU',
  TOGGLE_WIDTH: 'TOGGLE_WIDTH'
};

var toggleMenu = function toggleMenu() {
  var isOpen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var menuId = arguments[1];

  return {
    type: actions.TOGGLE_MENU,
    payload: menuId ? { isOpen: isOpen, menuId: menuId } : { isOpen: isOpen }
  };
};

var toggleWidth = function toggleWidth() {
  var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 180;

  return {
    type: actions.TOGGLE_WIDTH,
    payload: width
  };
};

var actionObj = exports.actionObj = { toggleMenu: toggleMenu, toggleWidth: toggleWidth };