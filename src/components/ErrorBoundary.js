import React from 'react';
import '../assets/errorpage.css'
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }



  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
      this.setState({ hasError: true })
      //add custom error handler
    console.log('error occured')
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <div className="errorPage">Something went wrong.</div>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;