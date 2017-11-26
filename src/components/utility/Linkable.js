import React, { Component } from 'react';
import { withRouter } from 'react-router-native';
import PropTypes from 'prop-types';


const Linkable = Wrapped =>
  withRouter(class extends Component {
    static propTypes = {
      to: PropTypes.string,
      disabled: PropTypes.bool,
      beforeRedirect: PropTypes.func
    }

    static defaultProps = {
      to: '/',
      disabled: false,
      beforeRedirect: () => {}
    }

    handlePress() {
      if (this.disabled) { return; }
      this.beforeRedirect();
      if (this.to === '..' && this.history.index !== 0) {
        this.history.goBack();
      } else {
        this.history.push(this.to);
      }
    }

    render() {
      return <Wrapped {...this.props} onPress={this.handlePress} />;
    }
  });

export default Linkable;
