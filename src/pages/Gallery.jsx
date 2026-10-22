import { useState, useEffect, useCallback, useRef } from 'react';
import gallery from '../data/gallery';
import RoadSignsUI from '../components/RoadSignsUI';

function Gallery() {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const triggerRef = useRef(null);
  const closeButtonRef = useRef(null);
  const dialogRef = useRef(null);
  const wasOpenRef = useRef(false);

  const openSlider = (group, index, trigger) => {
    triggerRef.current = trigger;
    setSelectedGroup(group);
    setCurrentIndex(index);
  };

  const closeSlider = useCallback(() => {
    setSelectedGroup(null);
  }, []);

  const nextImage = useCallback(() => {
    if (selectedGroup) {
      setCurrentIndex((prev) => (prev + 1) % selectedGroup.images.length);
    }
  }, [selectedGroup]);

  const prevImage = useCallback(() => {
    if (selectedGroup) {
      setCurrentIndex(
        (prev) =>
          (prev - 1 + selectedGroup.images.length) % selectedGroup.images.length
      );
    }
  }, [selectedGroup]);

  useEffect(() => {
    if (!selectedGroup) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeSlider();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Tab') {
        const buttons = dialogRef.current?.querySelectorAll('button:not([disabled])');
        if (!buttons?.length) return;
        const first = buttons[0];
        const last = buttons[buttons.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedGroup, closeSlider, nextImage, prevImage]);

  useEffect(() => {
    if (selectedGroup) {
      wasOpenRef.current = true;
      return;
    }
    if (wasOpenRef.current) {
      wasOpenRef.current = false;
      triggerRef.current?.focus();
    }
  }, [selectedGroup]);

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center">Gallery</h1>
        <RoadSignsUI />
        {/* GROUPS */}
        {gallery.map((group) => (
          <div key={group.group} className="mt-10">
            <h3 className="text-xl font-semibold mb-4">{group.group}</h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {group.images.map((img, index) => (
                <div key={`${group.group}-${index}`} className="overflow-hidden rounded-xl shadow-md">
                  <button
                    type="button"
                    className="block w-full overflow-hidden focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-400"
                    aria-label={`View ${group.group.toLowerCase()} photo ${index + 1}`}
                    onClick={(event) => openSlider(group, index, event.currentTarget)}
                  >
                  <img
                    src={img}
                    alt=""
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition duration-300 hover:scale-105"
                  />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* MODAL SLIDER */}
        {selectedGroup && (
          <div
            onClick={(e) => {
              if (e.target === e.currentTarget) closeSlider();
            }}
            className="fixed inset-0 bg-black/85 flex items-center justify-center z-50"
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedGroup.group} photo viewer`}
            ref={dialogRef}
          >
            <button
              ref={closeButtonRef}
              onClick={closeSlider}
              className="absolute top-5 right-5 text-white text-3xl cursor-pointer hover:text-gray-300 transition"
              aria-label="Close lightbox"
            >
              ✕
            </button>

            <button
              onClick={prevImage}
              className="absolute left-5 text-white text-4xl cursor-pointer hover:text-gray-300 transition p-2"
              aria-label="Previous image"
            >
              ‹
            </button>

            <img
              src={selectedGroup.images[currentIndex]}
              alt={`Gallery image ${currentIndex + 1} of ${selectedGroup.images.length}`}
              className="max-h-[80vh] max-w-[85vw] rounded-lg select-none"
            />

            <button
              onClick={nextImage}
              className="absolute right-5 text-white text-4xl cursor-pointer hover:text-gray-300 transition p-2"
              aria-label="Next image"
            >
              ›
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Gallery;
