import { Language } from "./languages";

export const EnglishLevels = [
  "Beginner",
  "Elementary",
  "Pre-Intermediate",
  "Intermediate",
  "Upper-Intermediate",
  "Advanced",
] as const;
export const RussianLevels = ["Dərəcə 1", "Dərəcə 2", "Dərəcə 3"] as const;
export const GermanLevels = ["A1", "A2", "B1", "B2", "C1", "C2"] as const;
export const AllLevels = [...EnglishLevels, ...RussianLevels, ...GermanLevels] as const;
export type Level = typeof AllLevels[number];

export function languageToLevel(language: Language) {
  const baseLang = language.split("-")[0].trim().toLocaleLowerCase("az");

  if (baseLang === "ingiliscə") {
    return EnglishLevels;
  }
  if (baseLang === "rusca") {
    return RussianLevels;
  }
  if (baseLang === "almanca") {
    return GermanLevels;
  }
}
