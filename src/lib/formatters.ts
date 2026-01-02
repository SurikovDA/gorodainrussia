export const formatNumber = (num: number | null | undefined): string => {
  if (num === null || num === undefined) return "—";
  return new Intl.NumberFormat('ru-RU').format(num);
};

export const formatCurrency = (num: number | null | undefined): string => {
  if (num === null || num === undefined) return "—";
  return `${new Intl.NumberFormat('ru-RU').format(num)} ₽`;
};

export const formatShortCurrency = (num: number | null | undefined): string => {
  if (num === null || num === undefined) return "—";
  
  if (num >= 1000000) {
    const millions = num / 1000000;
    return `${millions.toFixed(1).replace('.0', '')} млн ₽`;
  }
  
  if (num >= 1000) {
    const thousands = num / 1000;
    return `${thousands.toFixed(0)} тыс. ₽`;
  }
  
  return `${num} ₽`;
};

export const formatPopulation = (num: number | null | undefined): string => {
  if (num === null || num === undefined) return "—";
  
  if (num >= 1000000) {
    const millions = num / 1000000;
    return `${millions.toFixed(1).replace('.0', '')} млн`;
  }
  
  if (num >= 1000) {
    const thousands = num / 1000;
    return `${thousands.toFixed(0)} тыс.`;
  }
  
  return formatNumber(num);
};
