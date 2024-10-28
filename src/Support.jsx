import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

import * as Sentry from '@sentry/react';

const Support = () => {
  return (
    <main className="bg-white">
      <Navbar />
      <ContactForm />
      <Footer />
    </main>
  )
}

export default Sentry.withProfiler(Support);
