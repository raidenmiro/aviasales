interface Config {
  id: string;
  title: string;
  active: boolean;
  stop: number;
}

export const isEveryActiveFilters = (filters: Config[]) => {
  return filters.slice(1).every((filter) => filter.active);
};

export const toggleSpecificFilter = (filters: Config[], type: string) => {
  return filters.map((filter) =>
    filter.id === type ? { ...filter, active: !filter.active } : filter
  );
};

export const toggleAllFilter = (filters: Config[]) => {
  const all = filters.slice(0, 1).map(({ active }) => active);

  return filters.map((filter) => ({ ...filter, active: !all }));
};
