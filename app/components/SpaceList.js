import React, { Component, PropTypes } from 'react'
import { ListView, View } from 'react-native'
import Space from './Space'
import styles from '../styles/SpaceList'

class SpaceList extends Component {
  render() {
    const { dataSource } = this.props

    return (
      <ListView
        dataSource={ dataSource }
        renderRow={ this.renderSpace }
        removeClippedSubviews={ true }
        enableEmptySections={ true }
        pageSize={ 10 }
        />
    )
  }

  renderSpace(space) {
    return(
      <Space key={ space.id } space={ space } />
    )
  }
}

SpaceList.propTypes = {
  dataSource: PropTypes.object.isRequired
}

export default SpaceList