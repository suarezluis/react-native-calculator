import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
class OutputDisplay extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.output}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    output: state.output
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OutputDisplay);
