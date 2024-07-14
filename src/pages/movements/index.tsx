import React, { useState } from "react";
import RootLayout from "@/components/RootLayout";
import SearchInput from "@/components/SearchInput";
import TransactionCard from "@/components/TransactionCard";
import useAllMovements from "@/hooks/useGetMovements";
import FilterButtons from "@/components/FilterButton";
import Spinner from "@/components/Spinner";
import ErrorChip from "@/components/ErrorChip";

export default function Movements() {
  const [filter, setFilter] = useState<string>("Todos");
  const {
    data: allMovementsResponse,
    isError,
    isLoading,
  } = useAllMovements(
    filter === "Todos"
      ? undefined
      : filter === "Debito Aut."
      ? "SUS"
      : filter === "Recibido"
      ? "CASH_IN"
      : "CASH_OUT"
  );

  const handleFilterSelect = (selectedFilter: string) => {
    setFilter(selectedFilter);
  };

  const allMovements = allMovementsResponse?.data;

  return (
    <RootLayout>
      <main className="min-h-screen justify-between px-4 py-6 font-[Poppins]">
        <div className="text-primary-gray font-medium text-lg">Movimientos</div>
        <div className="pt-6">
          <SearchInput />
        </div>
        <div className="pt-6">
          <FilterButtons
            onSelect={handleFilterSelect}
            selectedFilter={filter}
          />
        </div>
        <div className="pt-4 pb-20">
          {isLoading ? (
            <div className="flex items-center justify-center">
              <Spinner />
            </div>
          ) : (
            allMovements?.map((transaction) => (
              <div key={transaction.id} className="h-full py-2">
                <TransactionCard transaction={transaction} />
              </div>
            ))
          )}
          {isError && (
            <ErrorChip message="Error al obtener tus movimientos 😨" />
          )}
        </div>
      </main>
    </RootLayout>
  );
}
