import React from 'react';
import Header from './Header';
import HeadBanner from './HeadBanner';
import WorkingOn from './WorkingOn';
import OurTeam from './OurTeam';
import Feeds from './Feeds';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <HeadBanner></HeadBanner>
      <WorkingOn></WorkingOn>
      <OurTeam></OurTeam>
      {/*<Feeds></Feeds>*/}
      <Footer></Footer>
    </div>
  );
}

export default App;
