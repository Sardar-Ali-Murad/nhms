import { createSlice } from "@reduxjs/toolkit";
import {
  faGauge,
  faFile,
  faHourglassStart,
  faArrowsToEye,
  faBriefcase,
  faFolderOpen,
  faListCheck,
  faFolderTree,
  faFilePen,
  faLayerGroup,
  faFileZipper,
  faFileSignature,
  faGear,
  faCheck,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";
let menuItems = [
  {
    id: "li-dashboard",
    label: "Dashboard",
    icon: faGauge,
    route: "/",
    active: true,
  },
  {
    id: "li-governance-structure",
    label: "Governance Structure",
    icon: faFolderTree,
    route: "/governance-structure",
    active: false,
  },
  {
    id: "li-strategy",
    label: "Strategy",
    icon: faFile,
    active: false,
    open: false,
    subMenu: [
      {
        id: "li-identify-risks-and-opportunities",
        label: "Identify Risks",
        icon: faHourglassStart,
        route: "/identify-risks-and-opportunities",
        active: false,
      },
      {
        id: "li-collect-data",
        label: "Collect Data",
        icon: faArrowsToEye,
        route: "/collect-data",
        active: false,
      },
      {
        id: "li-analyse-impact",
        label: "Analyse Impact",
        icon: faBriefcase,
        route: "/analyse-impact",
        active: false,
      },
      {
        id: "li-monitor",
        label: "Monitor",
        icon: faFolderOpen,
        route: "/monitor",
        active: false,
      },
      {
        id: "li-manage",
        label: "Manage",
        icon: faListCheck,
        route: "/manage",
        active: false,
      },
    ],
  },
  {
    id: "li-risk-management",
    label: "Risk Management",
    icon: faFolderOpen,
    active: false,
    open: false,
    subMenu: [
      {
        id: "li-reporting",
        label: "Reporting",
        icon: faFilePen,
        route: "/reporting",
        active: false,
      },
    ],
  },
  {
    id: "li-metrics-and-targets",
    label: "Metrics & Targets",
    icon: faLayerGroup,
    active: false,
    open: false,
    subMenu: [
      {
        id: "li-metrics-collection",
        label: "Metrics Collection",
        icon: faFileZipper,
        route: "/metrics-collection",
        active: false,
      },
      {
        id: "li-targets",
        label: "Targets",
        icon: faFileSignature,
        route: "/targets",
        active: false,
      },
    ],
  },
  {
    id: "li-report",
    label: "Report",
    icon: faFolderOpen,
    route: "/report",
    active: false,
  },
  {
    id: "li-audit-setting",
    label: "Setting",
    icon: faGear,
    route: "/setting",
    active: false,
  },
  {
    id: "li-audit-information-request",
    label: "Information Request",
    icon: faCheck,
    route: "/information-request",
    active: false,
  },
  {
    id: "li-audit-tasks-management",
    label: "Tasks Management",
    icon: faChartBar,
    route: "/task-management",
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
};

export const slice = createSlice({
  name: "common",
  initialState,
  reducers: {
    changeShowSidebar: (state, action) => {
      state.showSidebar = action.payload;
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
      if (action.payload === "li-strategy") {
        state.menuItems = state.menuItems.map((all) => {
          return all?.id === "li-strategy" ? { ...all, open: !all?.open } : all;
        });
      }
      if (action.payload === "li-risk-management") {
        state.menuItems = state.menuItems.map((all) => {
          return all?.id === "li-risk-management" ? { ...all, open: !all?.open } : all;
        });
      }
      if (action.payload === "li-metrics-and-targets") {
        state.menuItems = state.menuItems.map((all) => {
          return all?.id === "li-metrics-and-targets"
            ? { ...all, open: !all?.open }
            : all;
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
} = slice.actions;

export default slice.reducer;
