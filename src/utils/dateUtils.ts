
// Get the current month (1-12)
export const getCurrentMonth = (): number => {
  return new Date().getMonth() + 1; // JavaScript months are 0-indexed
};

// Get month name for a given month number
export const getMonthName = (monthNumber: number): string => {
  const months = [
    "Janeiro", "Fevereiro", "Março", "Abril", 
    "Maio", "Junho", "Julho", "Agosto", 
    "Setembro", "Outubro", "Novembro", "Dezembro"
  ];
  return months[monthNumber - 1] || ""; // Adjust for 0-indexed array
};

// Get current month name
export const getCurrentMonthName = (): string => {
  return getMonthName(getCurrentMonth());
};
