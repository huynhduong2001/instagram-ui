import { AiOutlineHome } from "react-icons/ai";
import { GoHomeFill } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";
import { MdExplore } from "react-icons/md";
import { RiVideoLine } from "react-icons/ri";
import { RiVideoFill } from "react-icons/ri";
import { FiSend } from "react-icons/fi";
import { RiSendPlaneFill } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { CgAddR } from "react-icons/cg";
import { BiSolidPlusSquare } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

export const menu = [
  {
    title: "Trang chủ",
    icon: <AiOutlineHome className="text-2xl mr-5" />,
    iactiveIcon: <GoHomeFill className="text-2xl mr-5" />,
  },
  {
    title: "Tìm kiếm",
    icon: <IoSearchOutline className="text-2xl mr-5" />,
    iactiveIcon: <FaSearch className="text-2xl mr-5" />,
  },
  {
    title: "Khám phá",
    icon: <MdOutlineExplore className="text-2xl mr-5" />,
    iactiveIcon: <MdExplore className="text-2xl mr-5" />,
  },
  {
    title: "Reels",
    icon: <RiVideoLine className="text-2xl mr-5" />,
    iactiveIcon: <RiVideoFill className="text-2xl mr-5" />,
  },
  {
    title: "Tin nhắn",
    icon: <FiSend className="text-2xl mr-5" />,
    iactiveIcon: <RiSendPlaneFill className="text-2xl mr-5" />,
  },
  {
    title: "Thông báo",
    icon: <FaRegHeart className="text-2xl mr-5" />,
    iactiveIcon: <FaHeart className="text-2xl mr-5" />,
  },
  {
    title: "Tạo",
    icon: <CgAddR className="text-2xl mr-5" />,
    iactiveIcon: <BiSolidPlusSquare className="text-2xl mr-5" />,
  },
  {
    title: "Trang cá nhân",
    icon: <CgProfile className="text-2xl mr-5" />,
    iactiveIcon: <CgProfile className="text-2xl mr-5" />,
  },
];
