import type { Day } from "~/types/date";

export const toFrenchDay = (day: Day) => {
  switch (day) {
    case "sunday":
      return "Dimanche";
    case "monday":
      return "Lundi";
    case "tuesday":
      return "Mardi";
    case "wednesday":
      return "Mercredi";
    case "thursday":
      return "Jeudi";
    case "friday":
      return "Vendredi";
    case "saturday":
      return "Samedi";
    default:
      throw new Error(`Unknown day: ${day}`);
  }
};
