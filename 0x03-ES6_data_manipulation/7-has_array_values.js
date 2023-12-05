export default function hasValuesFromArray(set, array) {
  const arrSet = new Set(array);
  for (const el of arrSet) {
    if (!set.has(el)) return false;
  }
  return true;
}
