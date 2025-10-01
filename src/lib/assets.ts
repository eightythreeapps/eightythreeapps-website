// Asset management utilities
export const ASSETS = {
  APP_ICON_LIGHT: '/AppIconLight-1024.png',
  APP_ICON_DARK: '/AppIconDark-1024.png',
  LOGO: '/logo.png',
  FAVICON: '/favicon.ico',
} as const;

export const getAppIcon = (isDark: boolean) => {
  return isDark ? ASSETS.APP_ICON_DARK : ASSETS.APP_ICON_LIGHT;
};

export const getThemeAwareAsset = (lightAsset: string, darkAsset: string, isDark: boolean) => {
  return isDark ? darkAsset : lightAsset;
};
