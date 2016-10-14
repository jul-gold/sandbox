import React, {Compoennt} from 'react';
import ReactNative from 'react-native';
const styles = require("../../styles.js")
const {View, TouchableHighlight, Text} = ReactNative;

class ListItem extends Component{
  render(){
    return(
      <TouchableHighlight onPress={this.props.onpress}>
        <View style={styles.li}>
          <Text style={styles.liText}>{this.props.item.title}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

modules.exports = ListItem;
