// 這裡的index代表限時動態欄(裡面包含多個限動)
import { useGetIGStoiesQuery } from "services/homeService"; //引入services 資料，call API
import Item from "./item"; //引入ig動態球
import Loading from "components/Loading";//引入Loading畫面
import { useEffect, useState } from "react";
import axios from "axios";

const IGStory: React.FC = () => {
  const { data, isLoading } = useGetIGStoiesQuery("all");
  // useGetIGStoiesQuery不能在"自訂義"Hooks以外的地方使用
  const [PostData, setPostData] = useState([]);
  async function getData() {
    try {
      const get = await axios.get("./db.json");
      setPostData(get.data.stories);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData();
  },[]);
    
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
        PostData?.map((item) => {
          // 如果data(來自後端/目前不是)為非空值'?'，做map
          const { id, name, avatar } = item;
          return <Item key={id} name={name} avatar={avatar} />;
        })}
    </div>
  );
};

export default IGStory;
