export interface AppContextProps {
  state: any;
  dispatch: any;
}

export interface AppAction {
  type: "SHOW_MODAL_LOGIN" | "OTHER_ACTION";
  payload?: boolean;
}

export interface AppState {
  // Thêm các trạng thái tùy theo ứng dụng của bạn
  showModalLogin: boolean;
}
