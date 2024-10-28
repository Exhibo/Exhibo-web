import Navbar from '../Navbar';
import Footer from '../Footer';
import ContactForm from '../ContactForm';

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
