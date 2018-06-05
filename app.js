/*
- Parse text file (new line delimiter)
- Loop over each line
  - Loop over each word
    - side aside first and last characters
    - take remaining characters and determine number of uniques
    - space delimiter
*/

const uniqueCount = (chars) => {
  let count = 0
  const unique = []
  chars.split("").forEach((char) => {
    if (!unique.includes(char)) {
      unique.push(char)
      count += 1
    }
  })
  return count
}

export { uniqueCount }
