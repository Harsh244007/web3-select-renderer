import { useFetchDataType } from "@/types";
import { useEffect, useState } from "react";

const useFetchData = (url: string, errorText = "Something Went writing while fetching data") => {
  const [data, setData] = useState<useFetchDataType>({
    status: "Loading",
    response: null,
  });
  useEffect(() => {
    const signal = new AbortController();
    async function fetchData() {
      try {
        const res = await fetch(url, { signal: signal.signal }).then((e) => e.json());
        setData(() => {
          return {
            response: res,
            status: "Success",
          };
        });
      } catch (e) {
        console.error`Error while Fetching Data ${e} `;
        setData(() => {
          return {
            response: null,
            status: errorText,
          };
        });
      } finally {
        signal.abort();
      }
    }
    fetchData();
  }, [url]);
  return data;
};
export default useFetchData;
