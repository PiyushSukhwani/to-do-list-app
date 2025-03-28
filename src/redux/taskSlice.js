import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

// Fetch Weather Data (API Integration)
export const fetchWeather = createAsyncThunk(
  "tasks/fetchWeather",
  async (city = "Kolkata", { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      console.log(response.data);
      if (response.data.cod !== 200) {
        throw new Error(response.data.message); // error message
      }
      return {
        temp: response.data.main.temp,
        city: response.data.name,
        condition: response.data.weather[0].description,
      };
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to fetch weather data"
      );
    }
  }
);

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    list: JSON.parse(localStorage.getItem("tasks")) || [], // Load from localStorage
    weather: null,
    loading: false,
    error: null,
  },
  reducers: {
    addTask: (state, action) => {
      state.list.push(action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.list)); // Save to localStorage
    },
    removeTask: (state, action) => {
      state.list = state.list.filter((_, index) => index !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.list)); // Save to localStorage
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.weather = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { addTask, removeTask } = taskSlice.actions;
export default taskSlice.reducer;
