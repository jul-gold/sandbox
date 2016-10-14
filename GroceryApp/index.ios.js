/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import * as firebase from 'firebase';
import React, { Component } from 'react';
import ReactNative from 'react-native';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
const StatusBar = require("./apps/components/StatusBar.js")
const ActionButton = require('./components/ActionButton');
const ListItem = require('./components/ListItem');
const styles = require('./styles.js');

const firebaseConfig = {
  apiKey: 'AIzaSyDjDZP6rrXe71HddGpyGhwRj_tBBhWtn40',
  authDomain: "groceryapp-18421.firebaseapp.com",
  databaseURL: "https://groceryapp-18421.firebaseio.com",
  storageBucket: "groceryapp-18421.appspot.com",
}
const firebaseApp = firebase.initializeApp(firebaseConfig);



class GroceryApp extends Component {
  _renderItem(item) {
      return (
        <ListItem item="{item}" onpress="{()" ==""> {}} />
      );
    }

    render() {
      return (
        <View style="{styles.container}">

          <StatusBar title="Grocery List">

          <ListView datasource="{this.state.dataSource}" renderrow="{this._renderItem.bind(this)}" style="{styles.listview}/">

          <ActionButton title="Add" onpress="{()" ==""> {}} />

        </View>
      );
    }

    constructor(props) {
      super(props);
      this.state = {
        dataSource: new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,
        })
      };
    }

    componentDidMount() {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows([{ title: 'Pizza' }])
      })
    }
}


AppRegistry.registerComponent('GroceryApp', () => GroceryApp);
