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

interface AppProps extends WithStyles<typeof styles> {

}

class App extends React.Component<AppProps> {

  render() {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        minHeight: '100vh',
      }}>
        <BrowserRouter>
          <div style={{
            minHeight: '20vh',
            height: '20vh',
          }}>
            <TitleBar />
            <Route render={(props) => <NavigationBar {...props} />} />
          </div>
          <div style={{
            minHeight: '65vh',
            display: 'flex',
            justifyContent: 'center',
            userSelect: 'none',
            paddingBottom: '2.5rem',
          }}>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/about-us" component={AboutUs} exact />
              <Route path="/gallery" component={Gallery} exact />
              <Route path="/testimonies" component={Testimonies} exact />
              <Route path="/contact" component={Contact} exact />
            </Switch>
          </div>
          <div style={{
            minHeight: '10vh',
          }}>
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
