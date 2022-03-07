const mostWordsFound = (sentences) => {
  let max= 0
  for (let i = 0; i < sentences.length; i ++) {
    //separated by " " into sub-array
    const sentenceLength = sentences[i].split(' ').length
    if (max< sentenceLength) {
      max = sentenceLength
    }
  }
  return max
}
