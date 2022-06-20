//following頁面，不是組件!

import IGHeader from "components/IGHeader";
import IGContainer from "components/IGContainer";
import IGUser from "components/IGUser"; //使用者球組件
import { useAppSelector } from "../../hooks";

//取的friendReducer的內容(朋友資料)

const Following: React.FC = () => {
  const friendReducer = useAppSelector((state) => state.friendReducer);
  const friends = friendReducer.friends;


  return (
    <>
      <IGHeader />
      {/* 上方 */}
      <IGContainer>
        {/* 內容區 */}
        <p className="my-8 font-bold text-2xl px-4 box-border">Following</p>
        {/* 標題 */}
        <div className="shadow-md mt-8 mx-2 box-border">
          {/* 追蹤列表格式+排版 */}

          {friends.map((item) => {
            // 把所有好友列表渲染出來
            const { id, account, avatar, isFollowing, location } = item;
            return (
              <div className="-mt-3" key={id}>
                {/* key 一定要放在最外層的div */}
                <IGUser
                  id={id}
                  account={account}
                  avatar={avatar}
                  location={location}
                  isFollowing={isFollowing}
                  showFollow
                />
              </div>
            );
          })}
        </div>
      </IGContainer>
    </>
  );
};

export default Following;
