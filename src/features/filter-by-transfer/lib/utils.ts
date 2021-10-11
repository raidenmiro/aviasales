interface Config {
  id: string;
  title: string;
  active: boolean;
  stop: number;
}

export const isEveryActiveFilters = (filters: Config[]) => {
  return filters.slice(1).every((filter) => filter.active);
};
