import IGHeader from "components/IGHeader"; //上方標題組件
import IGContainer from "components/IGContainer"; //內容框架組件
import IGUser from "components/IGUser"; //使用者球組件
import { useGetIGPostsQuery } from "services/homeService";

import Loading from "components/Loading";
//這裡是Home底下的component跟上方是公共component不同
import IGStory from "./component/IGStory"; //動態球組件
import IGPost from "./component/IGPost"; //po文組件
import IGProfile from "./component/IGProfile"; //好友小追蹤頁面表組件
import axios from "axios";
import { useEffect, useState } from "react";

const IGPostList: React.FC = () => {
  // 功能為接收api資料，並判斷web是否在loding，並把資料已map的方式套用IGPOST來達到多個貼文效果
  const { data, isLoading } = useGetIGPostsQuery("all");
  const [PostData, setPostData] = useState([]);
  //promise的運用
  //用axios申請資料(位置在最外層public資料夾)
  async function getData() {
    try {
      const get = await axios.get("./db.json");
      setPostData(get.data.posts);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData();
  },[]);


  // console.log(PostData);

  //引入資料
  return (
    <>
      {isLoading && (
        <div className="w-full flex justify-center mt-20">
          <Loading />
        </div>
      )}
      {!isLoading &&
       PostData?.map((item) => {
          const {
            id,
            location,
            account,
            avatar,
            photo,
            likes,
            description,
            hashTags,
            createTime,
          } = item;
          return (
            <IGPost
              location={location}
              account={account}
              avatar={avatar}
              photo={photo}
              likes={likes}
              description={description}
              hashTags={hashTags}
              createTime={createTime}
              key={id}
            />
          );
        })}
    </>
  );
};

const Home: React.FC = () => {
  return (
    <>
      <IGHeader></IGHeader>
      <IGContainer>
        {/* 在IGContainer中，包含三個部分(限時，文章，跟隨)，其中
      限時+文章為左，跟隨區在右
      */}

        <div className="flex lg:justify-center">
          {/* 排版設置為flex */}

          <div className="w-full lg:w-[600px]">
            {/* 左區(限時+文章) */}
            {/* 在手機頁面時=>占全版面，當頁面大於1024px(lg:) ，寬度則設為600px*/}
            <IGStory /> {/*限動 */}
            <IGPostList /> {/*po文區 */}
          </div>

          {/* 右區 */}
          <div className="hidden lg:block lg:w-[424px]">
            {/*在手機頁面時disply， 不顯示，當頁面大於1024px(lg:) ，寬度則設為424px*/}
            <IGProfile />
            {/*右邊的小追蹤頁面，他的朋友資料是要從後端傳入的，正常來說不會以props的方式傳入，而是在組件本身內部就傳好 */}
            <IGUser />
          </div>
        </div>
      </IGContainer>
    </>
  );
};

export default Home;
