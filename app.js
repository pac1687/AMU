const fs = require('fs')
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
  return line.split(/([^a-z])/gmi)
}

const lineReplacer = (line) => {
  const words = lineSplitter(line)
  const newLine = words.map((word) => {
    const lowerWord = word.toLowerCase()
    return word.length <= 2 ? lowerWord : middleCharacterReplacer(lowerWord)
  })
  return newLine.join('')
}

const fileParser = (path) => {
  const lines = fs.readFileSync(path).toString().split('\n')
  return lines.filter(v => v !== '')
}

export { uniqueCount, middleCharacterReplacer, lineSplitter, lineReplacer, fileParser }
