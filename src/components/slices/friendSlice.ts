//這個物件的功能是同步狀態，當你在好友頁面追蹤朋友時，在主畫面的小好友欄位也要同步顯示
//會用到Redux，流程為 按下追蹤紐->發出追蹤action->(Reducer接受)在store裡面->store更新狀態

import { createSlice, PayloadAction } from "@reduxjs/toolkit"; 
//引入toolkit的api分別是createSlice, PayloadAction
//PayloadAction,可以讓系統知道當取消追蹤用戶時(用id辨認，而payload參數就是id)，是哪一個用戶被取消
//PayloadAction<參數>,action.payload==該參數值

type Friend = {
  id: number;
  location: string;
  account: string;
  isFollowing: boolean;
  avatar: string;
};

//朋友陣列的參數
type friendState = {
  friends: Friend[];
};
// 朋友陣列
const initialState: friendState = {
  friends: [
    {
      id: 1,
      location: "Singapore",
      account: "max_999",
      isFollowing: true,
      avatar: "/images/avatars/a1.png",
    },
    {
      id: 2,
      location: "Singapore",
      account: "fm_999",
      isFollowing: true,
      avatar: "/images/avatars/a2.png",
    },
    {
      id: 3,
      location: "Singapore",
      account: "joanne_999",
      isFollowing: true,
      avatar: "/images/avatars/a3.png",
    },
    {
      id: 4,
      location: "Singapore",
      account: "focus_999",
      isFollowing: true,
      avatar: "/images/avatars/a4.png",
    },
    {
      id: 5,
      location: "Singapore",
      account: "alvin_999",
      isFollowing: true,
      avatar: "/images/avatars/a5.png",
    },
    {
      id: 6,
      location: "Singapore",
      account: "grace_999",
      isFollowing: true,
      avatar: "/images/avatars/a6.png",
    },
    {
      id: 7,
      location: "Singapore",
      account: "rance_999",
      isFollowing: true,
      avatar: "/images/avatars/a7.png",
    },
    {
      id: 8,
      location: "Singapore",
      account: "louis_999",
      isFollowing: true,
      avatar: "/images/avatars/a8.png",
    },
    {
      id: 9,
      location: "Singapore",
      account: "bruce_999",
      isFollowing: true,
      avatar: "/images/avatars/a9.png",
    },
    {
      id: 10,
      location: "Singapore",
      account: "gogo_999",
      isFollowing: true,
      avatar: "/images/avatars/a10.png",
    },
  ],
};
//初始化的朋友們的狀態

export const friendSlice = createSlice({
  name: "friendsList",
  initialState,
  reducers: {
    // reducer底下的兩種action
    //按下按鈕後follow
    follow: (state, action: PayloadAction<number>) => {
      const friends = state.friends;
      for (let i = 0; i < friends.length; i++) {
        const friend = friends[i];
        if (friend.id === action.payload) {
          friend.isFollowing = true;
        }
      }
    },
    //取消follow
    unFollow: (state, action: PayloadAction<number>) => {
      const friends = state.friends;
      for (let i = 0; i < friends.length; i++) {
        const friend = friends[i];
        if (friend.id === action.payload) {
          friend.isFollowing = false;
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { follow, unFollow } = friendSlice.actions;
//輸出action
export default friendSlice.reducer;