import './App.css';
import React, { Component } from 'react';
import CityRoutes from './CityRoutes';
import logo from './Components/Images/headout.png';
class App extends Component {
    state = { width: 0, height: 0 };
    componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
    }
  
    componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
    }
    updateWindowDimensions = () =>
        this.setState({ width: window.innerWidth, height: window.innerHeight });
  
    render() {
        const { width } = this.state;
        const mobileTablet = width <= 1100;

        if (mobileTablet) {
            return (
            <div className="mobile-tablet">
                <img src={logo} alt="Headout" />
                <p>
                Currently, we're not supporting Mobile & Tablets{' '}
                </p>
            </div>
            );
        }
        else {
            return <CityRoutes />;
        }
    }
}
export default App;