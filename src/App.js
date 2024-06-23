// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import SectionA from './component/SectionA';
import SectionB from './component/SectionB';
import AboutUs from './component/AboutUs';
import ContactUs from './component/ContactUs';
import Footer from './component/Footer';
import ScrollToTopButton from './component/ScrollToTopButton';
import PrivacyPolicyPage from './privacyPolicy';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/privacy"
            element={<PrivacyPolicyPage />}
          />
        </Routes>
      </div>
    </Router>
  );
};

const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <SectionA />
        <SectionB />
        <AboutUs />
        <ContactUs />
      </main>
      <Footer currentPath={'home'}/>
      <ScrollToTopButton />
    </div>
  );
};

export default App;
