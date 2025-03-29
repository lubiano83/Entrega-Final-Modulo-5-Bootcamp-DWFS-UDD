import { useContext } from "react";
import { ApiContext } from "../context/ApiContext";

export function useApi() {
  return useContext(ApiContext);
}