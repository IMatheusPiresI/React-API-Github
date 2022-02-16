import React from "react";

class ErrorBoundary extends React.Component {
    
    state = {
        hasError: false,
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { 
          hasError: true,
          errorMessage:error.message,
        };
    }
  
    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      //logErrorToMyService(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1 style={{
          color: 'white',
        }}>Usuário não encontrado.</h1>;
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary