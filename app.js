const fs = require('fs')
/*
- Parse text file (new line delimiter)
- Loop over each line
  - non-alpha delimiter
  - Loop over each word
    - set aside first and last characters
    - take remaining characters and determine number of uniques
*/

const uniqueCount = (chars) => {
  let count = 0
  const unique = []
  chars.split('').forEach((char) => {
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

const app = () => {
  const lines = fileParser('./data.txt')
  lines.forEach((line) => {
    console.log(lineReplacer(line))
  })
}

app()

export { uniqueCount,
         middleCharacterReplacer,
         lineSplitter,
         lineReplacer,
         fileParser }
