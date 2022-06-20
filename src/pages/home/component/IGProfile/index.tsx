//IGProfile(組件)是IG頁面右邊的小追蹤列表

import IGUser from "components/IGUser";
import { useAppSelector } from "../../../../hooks";

const IGProfile: React.FC = () => {
  // IGProfile被分成三個部分
    const friendReducer = useAppSelector((state) => state.friendReducer);
    //取的friendReducer的內容(朋友資料)
    const friends = friendReducer.friends.slice(0, 4);
    //用slice去只取得前四個-->這邊決定首頁右小追蹤列表顯示幾個人(4)
  return (
    <div className="mt-8 ml-8 shadow-lg box-border p-2">
      {/* 引入使用者球 */}
      <IGUser
        account="harry_fe"
        location="Harry Wu"
        avatar="/images/avatar.png"
        size="medium"
      />

      <p className="font-bold text-gray-400 mt-4 mx-4 mb-3 text-sm">
        You are following
      </p>
      {/* 標題字串 */}

      {friends.map((item) => {
        // 將接收到的friend資料渲染，friend有幾個就要渲染成幾個'<div>包user球'
        const { id, account, avatar, isFollowing, location } = item;
        return (
          <div className="-mt-3" key={id}>
            {/* map炫染是需要key去識別身分的，key要放在最外層 */}
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
  );
};

export default IGProfile;
