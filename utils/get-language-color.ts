const languageColor = new Map([
  ["TypeScript", "blue"],
  ["C", "gray"],
  ["Python", "green"],
  ["JavaScript", "yellow"],
  ["Rust", "red"],
  ["Other", "slate"],
]);

export const getLanguageColor = (language: string) => {
  return languageColor.get(language);
};
