import React, { useState, useEffect } from 'react';

interface FilterButtonsProps {
  onSelect: (filter: string) => void;
  selectedFilter: string;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ onSelect, selectedFilter }) => {
  const [selected, setSelected] = useState(selectedFilter);

  useEffect(() => {
    setSelected(selectedFilter);
  }, [selectedFilter]);

  const handleSelect = (filter: string) => {
    setSelected(filter);
    onSelect(filter);
  };

  return (
    <div className="flex items-center space-x-2 font-medium overflow-x-auto p-1">
      {['Todos', 'Debito Aut.', 'Recibido', 'Enviado'].map((filter) => (
        <button
          key={filter}
          onClick={() => handleSelect(filter)}
          className={`w-full min-w-24 text-sm max-h-10 px-4 py-2 rounded-2xl whitespace-nowrap overflow-hidden ${
            selected === filter
              ? 'bg-secondary-gray text-white'
              : 'bg-white text-black'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
