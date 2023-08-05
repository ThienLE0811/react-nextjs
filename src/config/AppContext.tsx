import { AppAction, AppState } from "@/utils/type";
import { createContext, useReducer } from "react";

// Khởi tạo Context
// export const AppContext = createContext({});
const initialState: AppState = {
  showModalLogin: false,
  // Khởi tạo các trạng thái khác tùy theo ứng dụng của bạn
};

// Khởi tạo trạng thái ban đầu
// const initialState = {};

export const AppContext = createContext<{
  state: Record<string, any>;
  dispatch: React.Dispatch<AppAction>;
}>({
  state: initialState,
  dispatch: () => undefined,
});

// Khởi tạo reducer
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "ACTION_TYPE_1":
      // Xử lý và cập nhật trạng thái
      return { ...state /* updated state */ };
    case "SHOW_MODAL_LOGIN":
      // Xử lý và cập nhật trạng thái
      return { ...state, showModalLogin: action.payload };
    default:
      return state;
  }
};

// Tạo Context Provider
export const AppContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
