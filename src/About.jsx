import Navbar from './components/Navbar';
import Footer from './components/Footer';


import * as Sentry from '@sentry/react';

const About = () => {
  return (
    <main className="bg-white">
      <Navbar />
      
      <Footer />
      
    </main>
  )
}

export default Sentry.withProfiler(About);
