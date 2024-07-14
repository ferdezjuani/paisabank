import { ICardBank } from "@/types/user";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface ICardsResponse {
  success: boolean;
  data: ICardBank[];
}

const fetchCards = async (): Promise<ICardsResponse> => {
  const response = await axios.get("/api/user/cards", {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
  return response.data;
};

const useCards = () => {
  return useQuery({
    queryKey: ["cards"],
    queryFn: fetchCards,
    retry: 3,
    refetchOnWindowFocus: false,
  });
};

export default useCards;
