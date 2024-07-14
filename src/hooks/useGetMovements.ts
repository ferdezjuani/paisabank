import { Transaction } from "@/types/user";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface ITransactionsResponse {
  success: boolean;
  data: Transaction[];
}

const fetchAllMovements = async (
  filter?: string
): Promise<ITransactionsResponse> => {
  const response = await axios.get(
    `/api/movements/all${filter ? `?filter=${filter}` : ""}`,
    {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    }
  );
  return response.data;
};

const useAllMovements = (filter?: string) => {
  return useQuery({
    queryKey: ["allMovements", filter],
    queryFn: () => fetchAllMovements(filter),
    retry: 3,
    refetchOnWindowFocus: false,
  });
};

export default useAllMovements;
