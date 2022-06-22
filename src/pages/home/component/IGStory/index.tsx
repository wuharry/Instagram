// 這裡的index代表限時動態欄(裡面包含多個限動)
import { useGetIGStoiesQuery } from "services/homeService"; //引入services 資料，call API
import Item from "./item"; //引入ig動態球
import Loading from "components/Loading";//引入Loading畫面

const postdata3=[
    {
      "id": 1,
      "name": "bruce_fe",
      "avatar": "/images/avatars/a1.png"
    },
    {
      "id": 2,
      "name": "max",
      "avatar": "/images/avatars/a2.png"
    },
    {
      "id": 3,
      "name": "fm",
      "avatar": "/images/avatars/a3.png"
    },
    {
      "id": 4,
      "name": "joanne",
      "avatar": "/images/avatars/a4.png"
    },
    {
      "id": 5,
      "name": "focus",
      "avatar": "/images/avatars/a5.png"
    },
    {
      "id": 6,
      "name": "louis",
      "avatar": "/images/avatars/a6.png"
    },
    {
      "id": 7,
      "name": "alvin",
      "avatar": "/images/avatars/a7.png"
    },
    {
      "id": 8,
      "name": "grace",
      "avatar": "/images/avatars/a8.png"
    },
    {
      "id": 9,
      "name": "rance",
      "avatar": "/images/avatars/a9.png"
    },
    {
      "id": 10,
      "name": "bruce_fe",
      "avatar": "/images/avatars/a10.png"
    }
  ]
const IGStory: React.FC = () => {
  const { data, isLoading } = useGetIGStoiesQuery("all");
  // useGetIGStoiesQuery不能在"自訂義"Hooks以外的地方使用
  return (
    <div className="w-full h-[110px] box-border flex items-center overflow-x-auto overflow-y-hidden shadow-md no-scrollbar lg:my-8">
      {/* <Item name='bruce_1234' avatar='/images/avatars/a1.png' />  頭項測試*/}
      {/* 這個div==限時動態欄class為設定樣式 由左至右->設定寬度，高度，邊線，放置樣式，物件致中，設定水平滾動，隱藏垂直溢出內容，沒有移動條，RWD*/}
      {isLoading && (
        <div className="flex justify-center w-full">
          <Loading />
        </div>
      )}

      {!isLoading &&
        postdata3?.map((item) => {
          // 如果data(來自後端/目前不是)為非空值'?'，做map
          const { id, name, avatar } = item;
          return <Item key={id} name={name} avatar={avatar} />;
        })}
    </div>
  );
};

export default IGStory;
