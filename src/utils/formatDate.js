import { format } from "date-fns";
export const formatDate = (date) => {
  try {
    return format(new Date(date), "yyyy MMM d");
  } catch (error) {
    console.error("Error formatting date:", error);
    return "Invalid Date";
  }
};
