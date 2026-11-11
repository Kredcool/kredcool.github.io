export type StickerSet = readonly [string, string, string];

// Sticker names grouped by sticker sheet.
export const wordSets: readonly StickerSet[] = [
  ["Ancestral", "Hot Dog", "Minotaur"],
  ["Eldrazi", "Guacamole", "Tightrope"],
  ["Misunderstood", "Trapeze", "Elf"],
  ["Narrow-Minded", "Baloney", "Fireworks"],
  ["Phyrexian", "Midway", "Bamaboozle"],
  ["Playable", "Delusionary", "Hydra"],
  ["Trained", "Blessed", "Mind"],
  ["Unassuming", "Gelationous", "Serpent"],
  ["Unglued", "pea-brained", "dinosaur"],
  ["unsanctioned", "ancient", "juggler"],
];

export function countVowels(word: string): number {
  // Count each vowel only once, regardless of its case.
  return new Set(word.toLowerCase().match(/[aeiouy]/g) ?? []).size;
}

function highestVowelCount(set: StickerSet): number {
  // Score a sheet by its highest-scoring word.
  return Math.max(...set.map(countVowels));
}

export function generateStickerSets(
  random: () => number = Math.random,
): StickerSet[] {
  // Copy the original sheets so selections never change the source list.
  const remaining = [...wordSets];
  const chosen: StickerSet[] = [];

  // Choose three sheets at random without selecting the same sheet twice.
  for (let index = 0; index < 3; index += 1) {
    const selectedIndex = Math.floor(random() * remaining.length);
    chosen.push(...remaining.splice(selectedIndex, 1));
  }

  // Show the sheets with the highest vowel scores first.
  return chosen.sort(
    (first, second) => highestVowelCount(second) - highestVowelCount(first),
  );
}
