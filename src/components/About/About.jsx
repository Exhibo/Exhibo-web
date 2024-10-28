import Navbar from '../Navbar';
import Footer from '../Footer';


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
