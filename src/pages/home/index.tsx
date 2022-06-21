import IGHeader from "components/IGHeader"; //上方標題組件
import IGContainer from "components/IGContainer"; //內容框架組件
import IGUser from "components/IGUser"; //使用者球組件
import { useGetIGPostsQuery } from "services/homeService";
import Loading from "components/Loading";
//這裡是Home底下的component跟上方是公共component不同
import IGStory from "./component/IGStory"; //動態球組件
import IGPost from "./component/IGPost"; //po文組件
import IGProfile from "./component/IGProfile"; //好友小追蹤頁面表組件

const IGPostList: React.FC = () => {
  // 功能為接收api資料，並判斷web是否在loding，並把資料已map的方式套用IGPOST來達到多個貼文效果
  const { data, isLoading } = useGetIGPostsQuery("all");
  //引入資料
   const postdata2=[
    {
      "id": 1,
      "location": "布魯斯前端",
      "account": "bruce_1234",
      "avatar": "/images/avatars/a1.png",
      "photo": "/images/posts/main1.png",
      "likes": 999,
      "description": "我的老天鵝！",
      "hashTags": "#鵝鵝",
      "createTime": "1 HOURS AGO"
    },
    {
      "id": 2,
      "location": "7-11你好門市",
      "account": "__0831_xxx__",
      "avatar": "/images/avatars/a2.png",
      "photo": "/images/posts/main2.png",
      "likes": 333,
      "description": "我的老天鵝！",
      "hashTags": "#鵝鵝",
      "createTime": "5 HOURS AGO"
    },
    {
      "id": 3,
      "location": "Taipei",
      "account": "gogogo_0214",
      "avatar": "/images/avatars/a3.png",
      "photo": "/images/posts/main3.png",
      "likes": 777,
      "description": "我的老天鵝！",
      "hashTags": "#鵝鵝",
      "createTime": "6 HOURS AGO"
    },
    {
      "id": 4,
      "location": "信義區",
      "account": "zoe_0000",
      "avatar": "/images/avatars/a4.png",
      "photo": "/images/posts/main4.png",
      "likes": 824,
      "description": "我的老天鵝！",
      "hashTags": "#鵝鵝",
      "createTime": "7 HOURS AGO"
    },
    {
      "id": 5,
      "location": "南港區",
      "account": "zoe_0000",
      "avatar": "/images/avatars/a5.png",
      "photo": "/images/posts/main5.png",
      "likes": 98,
      "description": "我的老天鵝！",
      "hashTags": "#鵝鵝",
      "createTime": "10 HOURS AGO"
    }
  ]
  
  
  
  
  
  
  
  return (
    <>
      {isLoading && (
        <div className="w-full flex justify-center mt-20">
          <Loading />
        </div>
      )}
      {!isLoading &&
       postdata2?.map((item) => {
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
