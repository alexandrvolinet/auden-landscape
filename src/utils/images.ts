export function buildSrcSet(url: string, widths: number[] = [400, 800, 1200, 1600]): string {
  const base = url.replace(/([?&])w=\d+&?q=\d+/, '$1').replace(/[?&]$/, '');
  return widths
    .map((w) => {
      const q = w <= 400 ? 50 : w <= 800 ? 65 : 75;
      const sep = base.includes('?') ? '&' : '?';
      return `${base}${sep}auto=format&fit=crop&w=${w}&q=${q}&fm=webp ${w}w`;
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
