import React, { Component, PropTypes } from 'react'
import { ListView, View } from 'react-native'
import Link from './Link'

class LinksList extends Component {
  render() {
    const { dataSource } = this.props

    return (
      <ListView
        dataSource={ dataSource }
        renderRow={ this.renderLink }
        removeClippedSubviews={ true }
        enableEmptySections={ true }
        />
    )
  }

  renderLink(link) {
    return(
      <Link key={ link.id } link={ link } />
    )
  }
}

LinksList.propTypes = {
  dataSource: PropTypes.object.isRequired
}

export default LinksList