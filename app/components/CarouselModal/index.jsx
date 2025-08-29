"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function CarouselModal({ isOpen, onClose, images, initialIndex = 0 }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  if (!isOpen) return null;

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  return (
   <motion.div
      className="fixed inset-0 bg-black/70 dark:bg-black/90 flex items-center justify-center z-100 modal-backdrop"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Modal Content */}
      <motion.div
        className="relative w-full max-w-4xl mx-4 carousel-container"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-gray-200 dark:bg-black bg-opacity-50 rounded-full border border-gray-800 text-black dark:text-white hover:bg-opacity-70 transition-all duration-200"
        >
          {/* X Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Main Image */}
        <div className="relative w-full h-[70vh] bg-white dark:bg-[#121113] rounded-lg overflow-hidden">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={images[currentIndex] || "image"}
            className="w-full h-full object-contain image-slide"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4 }}
          />

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-gray-200 dark:bg-black bg-opacity-50 rounded-full border border-gray-800 text-black dark:text-white hover:bg-opacity-70 transition-all duration-200"
              >
                {/* Chevron Left */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-gray-200 dark:bg-black bg-opacity-50 rounded-full border border-gray-800 text-black dark:text-white hover:bg-opacity-70 transition-all duration-200"
              >
                {/* Chevron Right */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gray-200 dark:bg-black bg-opacity-50 rounded-full border border-gray-800 text-black dark:text-white text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex justify-center gap-2 mt-4 px-4">
            <div className="flex gap-2 overflow-x-auto max-w-full pb-2">
              {images.map((image, index) => (
                <button
                  key={image.id || index}
                  onClick={() => goToImage(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    index === currentIndex
                      ? "border-blue-500 opacity-100"
                      : "border-gray-400 dark:border-gray-600 opacity-60 hover:opacity-80"
                  }`}
                >
                  <img
                    src={image}
                    alt={image || "thumbnail"}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
