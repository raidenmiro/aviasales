import dayjs from 'dayjs';

export const makeTime = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const min = hours % minutes;

  return `${hours}ч ${min}м`;
};

export const makeTransfer = (stops: string[]): string => {
  if (stops.length === 1) return stops.join('');

  return stops.join(', ');
};

export const makeTransferTitle = (stops: string[]): string => {
  if (stops.length === 0) return 'Без пересадок';
  if (stops.length === 1) return `${stops.length} пересадка`;
  if (stops.length < 4) return `${stops.length} пересадки`;

  return `${stops.length} пересадок`;
};

export const makeRouteTitle = (from: string, to: string) => {
  return `${from}-${to}`;
};

export const makePrice = (price: number): string => {
  const format = price.toLocaleString('ru');
  return `${format} Р`;
};

export const makeRouteTime = (date: string, duration: number): string => {
  const formatHours = dayjs(date, 'hh');
  const formatMinets = dayjs(date, 'mm');

  const departureHours = formatHours.format('hh');
  const departureMinets = formatMinets.format('mm');
  
  const arrivalHours = formatHours.add(duration, 'hour').format('hh');
  const arrivalMinets = formatMinets.add(duration, 'minute').format('mm');

  return `${departureHours}:${departureMinets} - ${arrivalHours}:${arrivalMinets}`;
};
