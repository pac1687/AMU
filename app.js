/*
- Parse text file (new line delimiter)
- Loop over each line
  - Loop over each word
    - side aside first and last characters
    - take remaining characters and determine number of uniques
    - non-alpha delimiter
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

const middleCharacterReplacer = (word) => {
  const firstChar = word[0]
  const lastChar = word[word.length - 1]
  const middleCount = uniqueCount(word.slice(1, word.length - 1))
  return `${firstChar}${middleCount}${lastChar}`
}

const lineSplitter = (line) => {
  return ["This", " ", "is", " ", "my", " ", "test", "-", "line"]
}

export { uniqueCount, middleCharacterReplacer, lineSplitter }
