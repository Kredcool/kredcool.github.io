"use client";

import { useState } from "react";
import {
  countVowels,
  generateStickerSets,
  type StickerSet,
} from "./stickers";

function StickerCard({
  stickerSet,
  maximumVowelCount,
}: {
  stickerSet: StickerSet;
  maximumVowelCount: number;
}) {
  return (
    <article className="sticker-card" aria-label="Sticker set">
      {stickerSet.map((word) => {
        const vowelCount = countVowels(word);
        const isMaximum = vowelCount === maximumVowelCount;

        return (
          <div key={word} className="sticker-word">
            {/* Show each word's vowel score and mark the highest-scoring words. */}
            <div className="vowel-count">
              <span aria-label={`${vowelCount} unique vowels`}>{vowelCount}</span>
              {isMaximum && <span className="max-label">max!</span>}
            </div>
            <div>
              {/* Color each vowel separately to match the original sticker display. */}
              {Array.from(word, (letter, index) => (
                <span
                  key={`${letter}-${index}`}
                  className={
                    /[aeiouy]/i.test(letter) ? letter.toLowerCase() : undefined
                  }
                >
                  {letter}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </article>
  );
}

export default function EtaliStickers() {
  const [stickerSets, setStickerSets] = useState<StickerSet[] | null>(null);

  // Pick and display a new group of sticker sheets.
  const generateNames = () => setStickerSets(generateStickerSets());

  // Find the best score across all selected sheets.
  const maximumVowelCount = stickerSets
    ? Math.max(...stickerSets.flatMap((set) => set.map(countVowels)))
    : 0;

  return (
    <>
      {/* Page title and control for generating a new name. */}
      <header className="sticker-header">
        <h1 className="sticker-title">Etali ____ Goblin mana generator</h1>
        <button
          className="generate-button"
          onClick={generateNames}
          type="button"
        >
          Generate Name
        </button>
      </header>

      <section
        className="sticker-results"
        aria-label="Generated sticker names"
        aria-live="polite"
      >
        {/* Show generated sticker sheets, or a prompt before the first draw. */}
        {stickerSets ? (
          stickerSets.map((stickerSet) => (
            <StickerCard
              key={stickerSet.join("-")}
              stickerSet={stickerSet}
              maximumVowelCount={maximumVowelCount}
            />
          ))
        ) : (
          <p className="empty-results">Push &apos;Check Set&apos; button</p>
        )}
      </section>
    </>
  );
}
