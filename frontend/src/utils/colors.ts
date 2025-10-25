const GOLD_START = [255, 231, 194]
const GOLD_END = [244, 198, 120]
const SLATE = [110, 118, 163]

const lerp = (start: number[], end: number[], t: number) =>
  start.map((value, index) => Math.round(value + (end[index] - value) * t))

export const confidenceColor = (confidence: number) => {
  const mix = confidence ** 0.8
  const [r, g, b] = lerp(SLATE, lerp(GOLD_START, GOLD_END, mix), mix)
  return `rgba(${r}, ${g}, ${b}, 0.92)`
}
