//這裡包含接api以及reducer

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
type IGPost = {
    id: number;
    location: string;
    account: string;
    avatar: string;
    photo: string;
    likes: number;
    description: string;
    hashTags: string;
    createTime: string;
  };
  //定義IGPost參數
  type IGStory = {
    id: number;
    name: string;
    avatar: string;
  };
  //定義IGStory參數

  export const homeApi = createApi({
    // 這個api是從基本路徑加上功能(這邊有兩個功能元件，所以可以導入兩個不同資料)去導入資料導入資料
    reducerPath: "homeApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3004/" }) 
    // 設定根路徑(所有的路徑都要經過的路徑(起點))
    ,
    endpoints: (builder) => ({
        // 功能元件1， endpoints會自動產生一個可包含多個功能元件的hook
      getIGPosts: builder.query<IGPost[], number | "all">({
        query: (id) => {
          if (id !== "all") {
            return `posts/${id}`;
          }
          return "posts";
        },
      }),

      getIGStoies: builder.query<IGStory[], number | "all">({
        //功能元件2
        query: (id) => {
          if (id !== "all") {
            return `stories/${id}`;
            // 指定單一路徑(id)
          }
        //   else 指定路徑stories
          return "stories";
        },
      }),
    }),
  });

  export const { useGetIGPostsQuery, useGetIGStoiesQuery } = homeApi;
  //匯出兩個hooks
  