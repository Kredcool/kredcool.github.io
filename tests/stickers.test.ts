import { describe, expect, it } from "vitest";
import {
  countVowels,
  generateStickerSets,
  wordSets,
} from "../app/Etali_Stickers/stickers";

describe("countVowels", () => {
  it("counts unique vowels without regard to case, including y", () => {
    expect(countVowels("Ancestral")).toBe(2);
    expect(countVowels("queue")).toBe(2);
    expect(countVowels("rhythm")).toBe(1);
  });

  it("returns zero when a word has no vowels", () => {
    expect(countVowels("")).toBe(0);
    expect(countVowels("hmm")).toBe(0);
  });
});

describe("generateStickerSets", () => {
  it("selects three distinct sets and sorts them by their highest vowel count", () => {
    const selected = generateStickerSets(() => 0);

    expect(selected).toHaveLength(3);
    expect(new Set(selected).size).toBe(3);
    expect(selected.every((set) => wordSets.includes(set))).toBe(true);

    const scores = selected.map((set) =>
      Math.max(...set.map(countVowels)),
    );
    expect(scores).toEqual([...scores].sort((first, second) => second - first));
  });
});
