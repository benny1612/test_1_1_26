export const reverse = (str) => {
  const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
  const segitr = segmenter.segment(str);
  const segarr = Array.from(segitr, ({ segment }) => segment).reverse();
  return segarr.join("");
};
