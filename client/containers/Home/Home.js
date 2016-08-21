import React from 'react'

import Layer from '../../components/Layer/Layer'
import SVGFilters from '../../components/SVGFilters/SVGFilters'

import fixture from '../../fixtures/documents/oneWordSentences.json'

class Home extends React.Component {
  static displayName = 'Home'

  render() {
    const classes1 = {
      layer: null,
      phrase: null,
      word: "block",
      letter: null
    }

    const classes2 = {
      layer: "header",
      phrase: null,
      word: "block",
      letter: null
    }

    return (
      <div className="Home">
        <SVGFilters/>
        <Layer data={fixture.document} classes={classes1} />
        <Layer data={[`I am the Nucleus`]} classes={classes2} />
      </div>
    )
  }
}

export default Home
