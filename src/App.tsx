import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import AboutUs from './pages/about/AboutUs';
import Testimonies from './pages/Testimonies';
import Contact from './pages/contact/Contact';
import Gallery from './pages/Gallery';
import React from 'react';
import NavigationBar from './pages/components/navigation/NavigationBar';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import TitleBar from './pages/components/title/TitleBar';
import Signature from './pages/components/title/Signature';
import Styles from './App.module.css'

interface AppProps extends WithStyles<typeof styles> {

}

class App extends React.Component<AppProps> {

  render() {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    window.onorientationchange = function () {
      var orientation = window.orientation;
      switch (orientation) {
        case 0:
        case 90:
        case -90: window.location.reload();
          break;
      }
    };

    return (
      <div className={Styles.container}
      // style={{
      //   display: 'flex',
      //   flexDirection: 'column',
      //   position: 'relative',
      //   minHeight: '100vh',
      // }}
      >
        <BrowserRouter>
          <div className={Styles.title}
            style={{
              minHeight: '20vh',
              height: '20vh',
            }}
          >
            <TitleBar />
            <Route render={(props) => <NavigationBar {...props} />} />
          </div>
          <div className={Styles.content}
          // style={{
          //   minHeight: '65vh',
          //   display: 'flex',
          //   justifyContent: 'center',
          //   userSelect: 'none',
          //   paddingBottom: '2.5rem',
          // }}
          >
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/about-us" component={AboutUs} exact />
              <Route path="/gallery" component={Gallery} exact />
              <Route path="/testimonies" component={Testimonies} exact />
              <Route path="/contact" component={Contact} exact />
            </Switch>
          </div>
          <div className={Styles.signature}
          // style={{
          //   minHeight: '10vh',
          // }}
          >
            <Signature />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const styles = createStyles({

})

export default withStyles(styles)(App);
