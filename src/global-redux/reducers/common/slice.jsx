import { createSlice } from "@reduxjs/toolkit";
import {
  faFile,
  faHourglassStart,
  faArrowsToEye,
  faBriefcase,
  faFolderOpen,
  faGear,
  faCheck,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";
let menuItems = [
  {
    id: "configure",
    label: "Configure",
    icon: faFile,
    active: false,
    open: false,
    subMenu: [
      {
        id: "remove-hosts",
        label: "Add/Remove Hosts",
        icon: faHourglassStart,
        route: "/",
        active: false,
      },
      {
        id: "app-settings",
        label: "App Settings",
        icon: faArrowsToEye,
        route: "/app-settings",
        active: false,
      },
      {
        id: "email-settings",
        label: "Email Settings",
        icon: faBriefcase,
        route: "/email-settings",
        active: false,
      },
      {
        id: "database-settings",
        label: "Database Settings",
        icon: faFolderOpen,
        route: "/database-settings",
        active: false,
      },
    ],
  },

  {
    id: "map",
    label: "Map",
    icon: faFolderOpen,
    route: "/map",
    active: false,
  },
  {
    id: "events",
    label: "Events",
    icon: faGear,
    route: "/events",
    active: false,
  },
  {
    id: "alarms",
    label: "Alarms",
    icon: faCheck,
    route: "/alarms",
    active: false,
  },
  {
    id: "reports",
    label: "Reports",
    icon: faChartBar,
    route: "/reports",
    active: false,
  },
  {
    id: "help",
    label: "Help",
    icon: faChartBar,
    route: "/help",
    active: false,
  },
];

const initialState = {
  showSidebar: true,
  activeLink: "li-dashboard",
  businessObjectiveDialog: false,
  activeExpandId: "li-audit",
  isExpandedAuditOpen: false,
  isExpandedReportsOpen: false,
  menuItems: menuItems,
  kickOffRequest: "",
  company: localStorage.getItem("company") || "",
  year: localStorage.getItem("year") || "",
  allCompanies: [],
  allUsers: [],
  resetRichTextFieldState: false,
  // API STATES
  loading: false,
  open: false,
};

export const slice = createSlice({
  name: "common",
  initialState,
  reducers: {
    changeShowSidebar: (state, action) => {
      state.showSidebar = action.payload;
    },
    changeOpen: (state) => {
      state.open = true;
    },
    closeOpen: (state) => {
      state.open = false;
    },
    changeCommonRichTextFieldState: (state, action) => {
      state.resetRichTextFieldState = action.payload;
    },
    changeCompany: (state, action) => {
      state.company = action.payload;
    },
    changeYear: (state, action) => {
      state.year = action.payload;
    },
    changeActiveLink: (state, action) => {
      state.activeLink = action.payload;
    },
    showBusinessObjectiveDialog: (state, action) => {
      state.businessObjectiveDialog = action.payload;
    },
    changeKickOffRequest: (state, action) => {
      state.kickOffRequest = action.payload;
    },
    InitialLoadSidebarActiveLink: (state, action) => {
      state.menuItems = state.menuItems.map((item) =>
        item?.id === action.payload ? { ...item, open: true } : item
      );
    },
    changeExpanded: (state, action) => {
      state.activeExpandId = action.payload;
      if (action.payload === "configure") {
        state.menuItems = state.menuItems.map((all) => {
          return all?.id === "configure" ? { ...all, open: !all?.open } : all;
        });
      }
    },
  },
});

export const {
  changeShowSidebar,
  changeActiveLink,
  showBusinessObjectiveDialog,
  changeExpanded,
  changeKickOffRequest,
  changeCompany,
  changeYear,
  changeCommonRichTextFieldState,
  InitialLoadSidebarActiveLink,
  changeOpen,
  closeOpen,
} = slice.actions;

export default slice.reducer;
