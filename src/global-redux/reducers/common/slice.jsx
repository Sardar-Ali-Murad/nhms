import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { getAllHosts, getAllEvents } from "./thunk";

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
import { toast } from "react-toastify";
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
  activeExpandId: "li-audit",
  menuItems: menuItems,
  resetRichTextFieldState: false,
  loading: false,
  open: false,
  events: [],
  hosts: [],
};

export const setupGetAllHosts = createAsyncThunk(
  "common/getAllHosts",
  async (data, thunkAPI) => {
    return getAllHosts(data, thunkAPI);
  }
);

export const setupGetAllEvents = createAsyncThunk(
  "common/getAllEvents",
  async (data, thunkAPI) => {
    return getAllEvents(data, thunkAPI);
  }
);

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

    changeActiveLink: (state, action) => {
      state.activeLink = action.payload;
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
  extraReducers: (builder) => {
    // Get All Events
    builder
      .addCase(setupGetAllEvents.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupGetAllEvents.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.events = payload?.data;
      })
      .addCase(setupGetAllEvents.rejected, (state, action) => {
        state.loading = false;
        if (action.payload?.response?.data?.message) {
          toast.error(action.payload.response.data.message);
        } else {
          toast.error("An Error has occurred");
        }
      });
    // Get All Hosts
    builder
      .addCase(setupGetAllHosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupGetAllHosts.fulfilled, (state) => {
        state.loading = false;
        state.hosts = payload?.data;
      })
      .addCase(setupGetAllHosts.rejected, (state, action) => {
        state.loading = false;
        if (action.payload?.response?.data?.message) {
          toast.error(action.payload.response.data.message);
        } else {
          toast.error("An Error has occurred");
        }
      });
  },
});

export const {
  changeShowSidebar,
  changeExpanded,
  changeActiveLink,
  InitialLoadSidebarActiveLink,
  changeOpen,
  closeOpen,
} = slice.actions;

export default slice.reducer;
