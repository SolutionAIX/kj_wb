// src/types.ts
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';
export const ACTIVATION_SUCCESS = 'ACTIVATION_SUCCESS';
export const ACTIVATION_FAIL = 'ACTIVATION_FAIL';
export const USER_LOADED_SUCCESS = 'USER_LOADED_SUCCESS';
export const USER_LOADED_FAIL = 'USER_LOADED_FAIL';
export const AUTHENTICATED_SUCCESS = 'AUTHENTICATED_SUCCESS';
export const AUTHENTICATED_FAIL = 'AUTHENTICATED_FAIL';
export const PASSWORD_RESET_FAIL = 'PASSWORD_RESET_FAIL';
export const PASSWORD_RESET_SUCCESS = 'PASSWORD_RESET_SUCCESS';
export const PASSWORD_RESET_CONFIRM_FAIL = 'PASSWORD_RESET_CONFIRM_FAIL';
export const PASSWORD_RESET_CONFIRM_SUCCESS = 'PASSWORD_RESET_CONFIRM_SUCCESS';
export const LOGOUT = 'LOGOUT';

export type ActionTypes =
  | { type: typeof LOGIN_SUCCESS; payload: { access: string; refresh: string } }
  | { type: typeof LOGIN_FAIL }
  | { type: typeof SIGNUP_SUCCESS }
  | { type: typeof SIGNUP_FAIL }
  | { type: typeof ACTIVATION_SUCCESS }
  | { type: typeof ACTIVATION_FAIL }
  | { type: typeof USER_LOADED_SUCCESS; payload: any }
  | { type: typeof USER_LOADED_FAIL }
  | { type: typeof AUTHENTICATED_SUCCESS }
  | { type: typeof AUTHENTICATED_FAIL }
  | { type: typeof PASSWORD_RESET_FAIL }
  | { type: typeof PASSWORD_RESET_SUCCESS }
  | { type: typeof PASSWORD_RESET_CONFIRM_FAIL }
  | { type: typeof PASSWORD_RESET_CONFIRM_SUCCESS }
  | { type: typeof LOGOUT };

export interface AuthState {
  access: string | null;
  refresh: string | null;
  isAuthenticated: boolean | null;
  user: any;
}
