export function formatAxisLabel(value, fixed = 0) {
  const absValue = Math.abs(value);

  if (absValue >= 1e9) {
    return (value / 1e9).toFixed(fixed) + " B";
  } else if (absValue >= 1e6) {
    return (value / 1e6).toFixed(fixed) + " M";
  } else if (absValue >= 1e3) {
    return (value / 1e3).toFixed(fixed) + " K";
  } else {
    return value.toFixed(fixed);
  }
}
