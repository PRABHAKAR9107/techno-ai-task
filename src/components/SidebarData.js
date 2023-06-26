import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import { MdCampaign } from "react-icons/md";
import { FcPodiumWithAudience } from "react-icons/fc";

export const SidebarData = [
  {
    title: "Audience",
    path: "/audience",
    icon: <FcPodiumWithAudience />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "All Contact",
        path: "/overview/users",
      },
      {
        title: "Email Subscriber List",
        path: "/overview/revenue",
      },
    ],
  },
  {
    title: "Campaign",
    path: "/campaign",
    icon: <MdCampaign />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "All Campaign List",
        path: "/reports/reports1",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      // {
      //   title: "Reports 2",
      //   path: "/reports/reports2",
      //   icon: <IoIcons.IoIosPaper />,
      //   cName: "sub-nav",
      // },
      // {
      //   title: "Reports 3",
      //   path: "/reports/reports3",
      //   icon: <IoIcons.IoIosPaper />,
      // },
    ],
  },
];
