import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
//引入 TypedUseSelectorHook, useDispatch, useSelector
import type { RootState, AppDispatch } from "./store"; //引入參數類型

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
//重新定義useDispatch的引入type並導出
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
//重新包裝並導出