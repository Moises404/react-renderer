import React, { PropTypes } from 'react'

import cn from 'classnames'
import {textEffectsMap} from '../../fixtures/style/textEffectsMap'
import {backgroundEffectsMap} from '../../fixtures/style/backgroundEffectsMap'

class Layer extends React.Component {
  static displayName = 'Layer'

  static propTypes = {
    'actions': PropTypes.object,
    'layout': PropTypes.object,
    'client': PropTypes.object,
    'db': PropTypes.object,
    'data': PropTypes.array,
    'classes': PropTypes.object
  }

  constructor(props) {
    super(props)

    this.getWord = this.getWord.bind(this)
    this.getPhrases = this.getPhrases.bind(this)
    this.getLetter = this.getLetter.bind(this)

    this.randRGB = this.randRGB.bind(this)
    this.randTextColor = this.randTextColor.bind(this)
    this.randBgColor = this.randBgColor.bind(this)

    this.getBgEffect = this.getBgEffect.bind(this)
    this.getTextEffect = this.getTextEffect.bind(this)
  }

  state = {
    phrases: []
  }

  randRGB() {
    return `rgb(${Math.floor(255 * Math.random())},
                ${Math.floor(255 * Math.random())},
                ${Math.floor(255 * Math.random())})`
  }

  randTextColor() {
    return { "color": this.randRGB() }
  }

  randBgColor() {
    return { "background": this.randRGB() }
  }

  getBgEffect() {
    return backgroundEffectsMap[Math.floor((Math.random() * backgroundEffectsMap.length))]
  }

  getTextEffect() {
    return textEffectsMap[Math.floor((Math.random() * textEffectsMap.length))]
  }

  getLetter(word, wordId) {
    const wordArray = word.split("")
    const wordArrayJSX = []

    wordArray.forEach((letter, index) => {
      const classes = cn(
        'Letter', {
          '--block': this.props.classes.letter,

        }
      )

      wordArrayJSX.push(
        <div key={`${wordId}-${letter}-${index}`}
             className={classes}>
              {letter}
        </div>
      )}
    )

    return wordArrayJSX
  }

  getWord(phrase, phraseId) {
    const phraseArray = phrase.split(" ")
    const phraseArrayJSX = []

    phraseArray.forEach((word, index) => {
      // const bgEffect = this.getBgEffect()

      const classes = cn(
        'Word', {
          '--block': this.props.classes.word
        }
      )

      // const classesBg = cn('Background', `${bgEffect}`)
      // <div className={classesBg} />

      phraseArrayJSX.push(
        <div style={{"display": "inline-block"}}>
          <div key={`${phraseId}-${word}-${index}`}
               className={classes}>
                {this.getLetter(word, index)}
          </div>

        </div>
      )}
    )

    return phraseArrayJSX
  }

  getPhrases(data) {
    data.forEach((phrase, index) => {
      const textEffect = this.getTextEffect()
      const bgEffect = this.getBgEffect()

      const classes = cn(
        'Phrase',
        `${textEffect}`, {
          '--block': this.props.classes.phrase
        }
      )

      const classesBefore = cn(
        'Phrase-before',
        `${textEffect}-before`, {
          '--block': this.props.classes.phrase
        }
      )

      const classesAfter = cn(
        'Phrase-after',
        `${textEffect}-after`, {
          '--block': this.props.classes.phrase
        }
      )

      const classesBg = cn('Background', `${bgEffect}`)

      this.state.phrases.push(
        <div style={{"position": "relative", "display": "inline-block"}}>
          <div key={`${index}`}
              className={classes}
              style={{...this.randTextColor()}}>

            <div key={`${index}-before`}
              className={classesBefore}
              style={{...this.randTextColor()}}>
                {this.getWord(phrase, index)}
            </div>
            <div key={`${index}`}
              className={classes}
              style={{...this.randTextColor()}}>
                {this.getWord(phrase, index)}
            </div>
            <div key={`${index}-after`}
              className={classesAfter}
              style={{...this.randTextColor()}}>
                {this.getWord(phrase, index)}
            </div>

          </div>
          <div className={classesBg} />
        </div>
      )})
  }

  render() {
    this.getPhrases(this.props.data)

    const classes = cn(
      'Layer', {
        '--header': this.props.classes.layer
      }
    )

    return (
      <div className={classes}>
        {this.state.phrases}
      </div>
    )
  }
}

export default Layer
