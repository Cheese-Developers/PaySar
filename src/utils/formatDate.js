import { format } from "date-fns";

export const formatDate = (dateString) => {
  try {
    const date = new Date(dateString);
    const formattedDate = format(date, "MMMM d, yyyy 'at' h:mm a");
    return formattedDate;
  } catch (error) {
    console.error("Error formatting date:", error);
    return "Invalid Date";
  }
};
