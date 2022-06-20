// item代表的是一顆一顆的限動
type ItemProps = {
    // 定義item要接受的參數
  name: string;
  avatar: string;
};

const Item: React.FC<ItemProps> = ({ name, avatar }) => {
  // item接受兩個參數 姓名+大頭貼
  return (
    <div className="text-center"> {/*文字置中*/}
      <div
        className="w-[56px] h-[56px] p-[3px] ring-2 border-2 border-white ring-red-500 rounded-full mx-[11px] overflow-hidden"
        style={{
          backgroundImage: `url(${avatar})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/**ring-2在border外多一層邊線 */}
        {/* <img className="w-full rounded-full" src={avatar} /> */}
      </div>
      <p className="text-xs mt-1">{name}</p>
    </div>
  );
};

export default Item;
