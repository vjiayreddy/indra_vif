import { MdOutlineAnalytics } from "react-icons/md";
import { APP_ROUTES } from "@crema/constants/AppRoutes";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";


const routesConfig = [
  {
    id: "app",
    title: "Application",
    messageId: "sidebar.application",
    type: "group",
    children: [
      {
        id: "home",
        title: "Home",
        messageId: "sidebar.app.dashboard.home",
        type: "item",
        icon: <IoHomeOutline />,
        url: APP_ROUTES.home,
      },
      {
        id: "search",
        title: "Search",
        messageId: "sidebar.app.dashboard.search",
        type: "item",
        icon: <IoIosSearch />,
        url: APP_ROUTES.search,
      },
      {
        id: "masters",
        title: "Masters",
        messageId: "sidebar.app.dashboard.masters",
        type: "collapse",
        icon: <MdOutlineAnalytics />,
        url: "",
        children: [
          {
            id: "users",
            title: "Users",
            messageId: "sidebar.pages.admin.users",
            type: "item",
            url: APP_ROUTES.adminUsers,
          },
          {
            id: "groups",
            title: "Groups",
            messageId: "sidebar.pages.admin.groups",
            type: "item",
            url: APP_ROUTES.adminGroups,
          },
        ],
      },
    ],
  },
];
export default routesConfig;
