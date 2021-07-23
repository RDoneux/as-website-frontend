import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import AboutUs from './pages/about/AboutUs';
import Testimonies from './pages/Testimonies';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import React from 'react';
import NavigationBar from './pages/components/navigation/NavigationBar';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import TitleBar from './pages/components/title/TitleBar';

interface AppProps extends WithStyles<typeof styles> {

}

class App extends React.Component<AppProps> {

  render() {
    return (
      <div style={{padding: '0px', margin: '0px', display: 'flex',flexGrow: 1, flexFlow: 'column', height: '100vh'}}>
        <BrowserRouter>
          <TitleBar />
          <Route render={(props) => <NavigationBar {...props} />} />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about-us" component={AboutUs} exact />
            <Route path="/gallery" component={Gallery} exact />
            <Route path="/testimonies" component={Testimonies} exact />
            <Route path="/contact" component={Contact} exact />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const styles = createStyles({

})

export default withStyles(styles)(App);