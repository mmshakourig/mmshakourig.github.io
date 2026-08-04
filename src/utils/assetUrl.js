const assetModules = import.meta.glob('../../assets/**/*.{jpg,jpeg,png,gif,webp,pdf,svg}', { eager: true, import: 'default' });

export const assetUrl = (relativePath) => {
  const key = `../../assets/${relativePath}`;
  const resolved = assetModules[key];

  if (!resolved) {
    throw new Error(`Asset not found: ${relativePath}`);
  }

  return resolved;
};

export const assetUrlWithFragment = (relativePath, fragment) => `${assetUrl(relativePath)}${fragment}`;
