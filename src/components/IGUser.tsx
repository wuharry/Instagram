//IGuser是指在po文左上方的那一顆使用者球，
//同時那顆使用者球也會出現在following，homepage，所以她不會是home的專屬component(即使他跟動態球很像)
import { useAppDispatch } from "../hooks";
import { follow, unFollow } from "../components/slices/friendSlice";
//匯入follow ,unfollow的action
import { memo } from "react";

type IGUserProps = {
  size?: "medium" | "small"; // 因為之後要放在following+homepage，所以要兩個不同的頁面
  showFollow?: boolean; //是否展現follow按鈕的切換(followpage會用到)
  isFollowing?: boolean; //使用者的追蹤狀態
  account?: string; //顯示名字跟location
  location?: string;
  avatar?: string;
  id?: number;
};

//上面是設定傳入參數的type

const IGUser: React.FC<IGUserProps> = memo(({
  size = "small",
  showFollow = false,
  isFollowing = false,
  account,
  location,
  avatar,
  id,

  //上面是初始化，如果沒傳入參數/更改，就是以以上參數帶入
}) => {
    const dispatch = useAppDispatch();

    function followClickHandler() {
      //點擊follow後，要送action出去
      if (id === undefined) return;
      //ID未知就算了
      if (isFollowing) {
        //如果是追蹤，則送出取消追蹤的action(id用來辨別是哪一位)
        dispatch(unFollow(id));
      } else {
        //反之
        dispatch(follow(id));
      }
    }
  return (
    <div className="flex h-[70px] items-center box-border px-4">
      {/* 外層div以flex布置，來達到水平布局 */}
      <div
        className={`${
          size === "small" ? "w-[40px] h-[40px]" : "w-[60px] h-[60px]"
        } overflow-hidden rounded-full`}
        style={{
          backgroundImage: `url(${avatar})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      {/* 上面是顯示大頭貼的設定 */}

      <div className="ml-4">
        {/*p標籤換行*/}
        <p className="font-bold text-sm">{account}</p>
        <p className="text-gray-400 text-xs">{location}</p>
      </div>
      {/*上面是大頭貼文字設定*/}

      {showFollow && (
        <p
          className={`${
            isFollowing ? "text-gray-700" : "text-blue-400"
          } ml-auto text-xs font-bold cursor-pointer`}
            onClick={followClickHandler}
        >
          {isFollowing ? "FOLLOWING" : "FOLLOW"}
          {/*決定follow紐要顯示FOLLOWING/FOLLOW */}
        </p>
      )}

      {/*上面是JSX if判斷式-> showFollow==true(在follow頁/區) ，當整段判別不成立時，不顯示按鈕*/}
      {/*值得一提的是它是用&&去做判斷 因為&&右邊是組件所以必定true ，所以if判斷只要看左邊 */}
    </div>
  );
});

export default IGUser;
