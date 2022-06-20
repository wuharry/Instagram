//stroe是Redux(狀態管理器)要用到的，他會包含Reducer

import { configureStore } from "@reduxjs/toolkit";
import { homeApi } from "services/homeService"; //引入reducer
import friendReducer from "components/slices/friendSlice";

export const store = configureStore({
    //初始化store
  reducer: {
    //定義reducer(歸納函式)
    [homeApi.reducerPath]: homeApi.reducer,
    friendReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(homeApi.middleware),
    //綁定APIservice到store上
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//告訴 RootState他要接收的(store)資料是甚麼類型
//告訴AppDispatch 他要接收的(store)資料是甚麼類型

export default store;