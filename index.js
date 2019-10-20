module.exports = (arr = [], needle) => {
  let start = 0
  let end = arr.length, med
  while (start < end) {
    med = Math.floor((start + end)/2)
    const lookup = arr[med]
    if (lookup < needle) {
      start = med + 1, med = start
    } else if (lookup > needle) {
      end = med - 1, med = end
    } else {
      return med
    }
  }
  return arr[med] !== undefined && arr[med] === needle ? med : -1
}