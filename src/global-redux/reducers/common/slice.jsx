import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllHosts, getAllEvents } from "./thunk";

import {
  faFolder,
  faBell,
  faCalendarDay,
  faLocationDot,
  faDatabase,
  faEnvelope,
  faSliders,
  faUserXmark,
  faGear,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
let menuItems = [
  {
    id: "configure",
    label: "Configure",
    icon: faGear,
    active: false,
    open: false,
    subMenu: [
      {
        id: "remove-hosts",
        label: "Add/Remove Hosts",
        icon: faUserXmark,
        route: "/",
        active: false,
      },
      {
        id: "app-settings",
        label: "App Settings",
        icon: faSliders,
        route: "/app-settings",
        active: false,
      },
      {
        id: "email-settings",
        label: "Email Settings",
        icon: faEnvelope,
        route: "/email-settings",
        active: false,
      },
      {
        id: "database-settings",
        label: "Database Settings",
        icon: faDatabase,
        route: "/database-settings",
        active: false,
      },
    ],
  },

  {
    id: "map",
    label: "Map",
    icon: faLocationDot,
    route: "/map",
    active: false,
  },
  {
    id: "events",
    label: "Events",
    icon: faCalendarDay,
    route: "/events",
    active: false,
  },
  {
    id: "alarms",
    label: "Alarms",
    icon: faBell,
    route: "/alarms",
    active: false,
  },
  {
    id: "reports",
    label: "Reports",
    icon: faFolder,
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
      .addCase(setupGetAllHosts.fulfilled, (state, { payload }) => {
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
