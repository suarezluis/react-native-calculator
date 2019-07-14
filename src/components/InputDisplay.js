import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
class InputDisplay extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.input}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    input: state.input
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputDisplay);
