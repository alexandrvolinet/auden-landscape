export function buildSrcSet(url: string, widths: number[] = [400, 800, 1200, 1600]): string {
  const base = url.replace(/([?&])w=\d+&q=\d+/, '$1');
  return widths
    .map((w) => {
      const q = w <= 400 ? 60 : w <= 800 ? 75 : 80;
      const suffix = base.includes('?') ? `&w=${w}&q=${q}` : `?auto=format&fit=crop&w=${w}&q=${q}`;
      return `${base}${suffix} ${w}w`;
    })
    .join(', ');
}

export function buildSizes(sizes: number[] = [400, 800, 1200, 1600]): string {
  if (sizes.length === 0) return '100vw';
  return sizes
    .map((s, i) => {
      if (i < sizes.length - 1) {
        return `(max-width: ${s}px) ${s}px`;
      }
      return `${s}px`;
    })
    .join(', ');
}
