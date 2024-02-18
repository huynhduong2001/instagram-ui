import { RiSettings2Fill } from "react-icons/ri";



const ProfileUserDetails = () => {
    return ( 
        <div className="py-10 w-full">
            <div className="flex items-center">
                <div className="w-[15%]">
                    <img className="w-32 h-32 rounded-full" src="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.6435-9/159288603_1138117993322957_6770327921972223324_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=be3454&_nc_eui2=AeFquh81vKoW5_LqSUsKJ_z3Xl5pnZ1arGJeXmmdnVqsYn6xK-UmGu8QEb0xp8UwJ_QoP4QWcLPCFspyEgWCjHKU&_nc_ohc=rpJZ49sgTSsAX96q3UO&_nc_ht=scontent.fdad3-4.fna&oh=00_AfAoWVsHQvTFvfXIdZwz5reqIaJRQIwSYka2Zbra7fYvpA&oe=65BF6734"alt="" />
                </div>
                <div className="space-y-5">
                    <div className="flex space-x-10 items-center">
                        <p>huynhduong1909</p>
                        <button>Chỉnh sửa cá nhân</button>
                        <RiSettings2Fill/>
                    </div>
                    <div className="flex space-x-10">
                        <div>
                            <span className="font-semibold mr-2">10</span>
                            <span>bài viết</span>
                        </div>
                        <div>
                            <span className="font-semibold mr-2">43</span>
                            <span>người theo dõi</span>
                        </div>
                        <div>
                            <span>Đang theo dõi</span>
                            <span className="font-semibold mx-2">7</span>
                            <span>người dùng</span>
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold">Huỳnh Dương</p>
                        <p className="font-thin text-sm">🎧 Music is life 🎶 | 🍕 Foodie at heart | 💪 Hustle + Heart = Success</p>
                    </div>
                </div>
            </div>
            
        </div>
     );
}
 
export default ProfileUserDetails;