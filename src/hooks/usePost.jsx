import { useState } from "react";
import axios from "axios";

const baseURL = "https://localhost:7069/api/";

export const usePost = ({ consulta }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const PostData = async (DATA) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${baseURL}${consulta}`, DATA, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 500) {
        await new Promise((resolve) => setTimeout(resolve, 500));
      } else {
        setError(error);
        console.error("Error:", error.response ? error.response.data : error.message);
        throw error;
      }
    } finally {
      setLoading(false);
    }
  };

  return [PostData, loading, error];
};
