import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";
import millify from "millify";

export const getDetails = createAsyncThunk("covid/getDetails", async (code) => {
  const res = await api.get("/country/code", { params: { code } });

  // tarih bilgilerini güncelle
  const result = { ...res.data[0] };
  result.lastChange = new Date(result.lastChange).toLocaleDateString("tr");
  result.confirmed = millify(result.confirmed);
  result.recovered = millify(result.recovered);
  result.critical = millify(result.critical);
  result.deaths = millify(result.deaths);

  result.lastUpdate = new Date(result.lastUpdate).toLocaleDateString("tr");
  return result;
});
