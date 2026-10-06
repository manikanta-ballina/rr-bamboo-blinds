import { useCallback, useState } from 'react';
import { Lightbox } from '@/components/common';
import { Footer, Header, WhatsAppFloat } from '@/components/layout';
import { Contact, Hero, Products, Work } from '@/sections';

function App() {
  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = useCallback((image) => setLightboxImage(image), []);
  const closeLightbox = useCallback(() => setLightboxImage(null), []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products onZoom={openLightbox} />
        <Work onZoom={openLightbox} />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <Lightbox image={lightboxImage} onClose={closeLightbox} />
    </>
  );
}

export default App;
