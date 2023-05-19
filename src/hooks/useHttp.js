import { useState, useCallback } from "react";
import { sendRequest } from "../utils/http-requests";

export default function useHttp() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await sendRequest(requestConfig);
      applyData(data);
    } catch (error) {
      setError(error.message || "Something went wrong!");
    }

    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    sendRequest: fetchData,
  };
}
