import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home/Home';
import AboutUs from './pages/about/AboutUs';
import Testimonies from './pages/testimony/Testimonies';
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
      <div className={Styles.container}>
        <BrowserRouter>
          <div className={Styles.title}>
            <Route render={() => <TitleBar />} />
            <Route render={(props) => <NavigationBar {...props} />} />
          </div>
          <div className={Styles.content}>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/about-us" component={AboutUs} exact />
              <Route path="/gallery" component={Gallery} exact />
              <Route path="/testimonies" component={Testimonies} exact />
              <Route path="/contact" component={Contact} exact />
            </Switch>
          </div>
          <div className={Styles.end}>
            <Route render={() => <Signature />} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const styles = createStyles({

})

export default withStyles(styles)(App);
