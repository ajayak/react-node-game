import * as types from './actionTypes';

// TODO: Implement loading component later
export function beginAjaxCall() {
  return { type: types.AJAX_CALL_BEGIN };
}

export function ajaxCallError() {
  return { type: types.AJAX_CALL_ERROR };
}