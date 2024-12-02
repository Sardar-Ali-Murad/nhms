import axios from "axios";
import { baseUrl } from "../../../constants/index";

export const getAllHosts = async (_, thunkAPI) => {
  try {
    let props = await axios.get(`${baseUrl}/api/configure/getAllHosts`);
    return props.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};

export const getAllEvents = async (_, thunkAPI) => {
  try {
    let props = await axios.get(`${baseUrl}/api/event/getAll`);
    return props.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};
