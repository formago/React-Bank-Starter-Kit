import React from 'react';
import PropTypes from 'prop-types';

export default class ErrorBoundary extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  // Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them
  // NOT for event handlers!
  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });
    // You can also log error messages to an error reporting service here
  }
  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}
ErrorBoundary.propTypes = {
  children: PropTypes.object,
};
