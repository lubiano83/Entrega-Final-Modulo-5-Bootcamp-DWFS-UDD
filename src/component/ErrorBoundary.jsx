import { Component } from "react";
import ErrorMessage from "./ErrorMessage";

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true }
    }
    componentDidCatch(error, errorInfo) {
        console.log('ErrorBoundary caught an error', error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return (
                <ErrorMessage isDarkMode={this.props.isDarkMode} />
            )
        }
        return this.props.children;
    }
}