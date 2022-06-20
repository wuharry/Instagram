//這裡是post文章區
import IGUser from "components/IGUser";
import Comment from "./Comment";
type IGPostProps = {
    account: string; //使用者球所需要的參數
    location: string;//使用者球所需要的參數
    avatar: string;//使用者球所需要的參數
    photo: string;
    likes: number;//點讚數
    description: string;//描述
    hashTags: string;//標記
    createTime: string;//發文時間
  };

//Post文章區被劃分為三個部分，這三個部分別用三個組件去分開處裡，方便以後維護
  const IGPost: React.FC<IGPostProps> = ({
    // 傳入的參數
    account,
    location,
    avatar,
    photo,
    likes,
    description,
    hashTags,
    createTime,
  }) => {
    return (
      <div className="shadow-md pb-4 lg:mb-8">
        {/**整體(contaner)的布局 */}
        <IGUser account={account} location={location} avatar={avatar} />
        {/*引入用戶球(Post頁面上方的部分) */}

        <img src={photo} />
         {/*引入照片Post頁面中間內容的部分 */}

         {/*引入評論區 Post頁面下面的部分 */}
        <Comment
          account={account}
          likes={likes}
          description={description}
          hashTags={hashTags}
          createTime={createTime}
        />
      </div>
    );
  };
  
  export default IGPost;