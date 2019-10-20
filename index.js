module.exports = (arr = [], needle) => {
  let start = 0
  let end = arr.length, med
  while (start < end) {
    med = Math.floor((start + end)/2)
    const lookup = arr[med]
    if (lookup < needle) {
      start = med + 1
    } else if (lookup > needle) {
      end = med - 1
    } else {
      return med
    }
  }
  return -1
}