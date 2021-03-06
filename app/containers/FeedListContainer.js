import React, { Component } from 'react'
import { ListView, View } from 'react-native'
import { connect } from 'react-redux'
import LinksList from '../components/LinksList'
import { getFeed } from '../actions/FeedActions'

class FeedListContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getFeed())
  }

  render() {
    const { links } = this.props
    return(
      <LinksList
        dataSource={ this.dataSource(links) }
        />
    )
  }

  dataSource(links) {
    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    return ds.cloneWithRows(links)
  }
}

export default connect((state) => state.Feed)(FeedListContainer)