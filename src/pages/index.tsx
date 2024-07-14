import BankCard from "@/components/BankCard/CardBank";
import { isLoggedIn } from "@/utils";
import { useEffect, useState } from "react";
import search from "@/assets/Search.svg";
import notifications from "@/assets/Notification.svg";
import Image from "next/image";
import TransactionCard from "@/components/TransactionCard";
import { Transaction } from "@/types/user";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import Spinner from "@/components/Spinner";
import { useRouter } from "next/navigation";
import RootLayout from "@/components/RootLayout";
import useCards from "@/hooks/useGetCards";
import useLastMovements from "@/hooks/useGetLastMovements";
import ErrorChip from "@/components/ErrorChip";

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    if (!isLoggedIn()) {
      router.push("/login");
    } else {
      setIsLoading(false);
    }
  }, [router]);

  const {
    data: cardsResponse,
    isError: isCardsError,
    isLoading: isLoadingCards,
  } = useCards();

  const {
    data: lastMovementsResponse,
    isError: isLastMovementsError,
    isLoading: isLoadingLastMovements,
  } = useLastMovements();

  const cards = cardsResponse?.data;
  const transactions = lastMovementsResponse?.data;

  return (
    <RootLayout>
      <main className="min-h-screen justify-between px-4 py-10 font-[Poppins]">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center h-screen">
            <Spinner />
          </div>
        ) : (
          <>
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <p className="text-tertiary-gray font-medium">Hola</p>
                <p className="text-primary-gray text-xl font-semibold">
                  Paisanx
                </p>
              </div>
              <div className="flex flex-row gap-4">
                <Image src={search} alt="search" width={20} height={20} />
                <Image
                  src={notifications}
                  alt="notifications"
                  width={20}
                  height={20}
                />
              </div>
            </div>
            {isLoadingCards ? (
              <div className="flex flex-col items-center justify-center py-2">
                <Spinner />
              </div>
            ) : (
              <div className="pt-6">
                <Swiper
                  modules={[Pagination, Navigation]}
                  spaceBetween={8}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                >
                  {cards?.map((card) => (
                    <SwiperSlide key={card.id}>
                      <BankCard {...card} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}
            {isCardsError && <ErrorChip message="¡Oops! Error al obtener tus tarjetas 👀" />}
            <div className="pt-8 text-primary-gray font-medium text-xl">
              Últimos Movimientos
            </div>
            <div className="pt-4 pb-10">
              {isLoadingLastMovements ? (
                <div className="flex flex-col items-center justify-center py-2">
                  <Spinner />
                </div>
              ) : (
                transactions?.map((transaction) => (
                  <div key={transaction.id} className="h-full py-2">
                    <TransactionCard transaction={transaction} />
                  </div>
                ))
              )}
              {isLastMovementsError && <ErrorChip message="Error al obtener tus últimos movimientos 😨" />}
            </div>
          </>
        )}
      </main>
    </RootLayout>
  );
}
