export const FontType = {
  small: 14,
  small2: 16,
  medium: 18,
  medium2: 20,
  medium3: 22,
  medium4: 24,
  large: 26,
  large2: 28,
  large3: 30,
  large4: 32,
  title: 34,
  title2: 36,
  title3: 38,
  titleBold: 40,
} as const;

export type FontSize = (typeof FontType)[keyof typeof FontType];
