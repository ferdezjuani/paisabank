import { Transaction } from "@/types/user";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface ITransactionsResponse {
  success: boolean;
  data: Transaction[];
}

const fetchLastMovements = async (): Promise<ITransactionsResponse> => {
  const response = await axios.get("/api/movements/last", {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
  return response.data;
};

const useLastMovements = () => {
  return useQuery({
    queryKey: ["lastMovements"],
    queryFn: fetchLastMovements,
    retry: 3,
    refetchOnWindowFocus: false,
  });
};

export default useLastMovements;
