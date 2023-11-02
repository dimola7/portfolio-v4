import { AiFillHome } from "react-icons/ai";
import { IoMdInformationCircleOutline, IoMdPaper } from "react-icons/io";
import { RiSuitcaseLine, RiContactsBookLine } from "react-icons/ri";

export const NavData = [
  {
    title: "Home",
    path: "/",
    icon: <AiFillHome />,
  },
  {
    title: "About",
    path: "/about",
    icon: <IoMdInformationCircleOutline />,
  },
  {
    title: "Projects",
    path: "/projects",
    icon: <RiSuitcaseLine />,
  },
  {
    title: "Resume",
    path: "/resume",
    icon: <IoMdPaper />,
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <RiContactsBookLine />,
  },
];
