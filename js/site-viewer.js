export const initSiteViewer = () => {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const targetWidth = isMobile ? "100vw" : "85vw";
  const targetHeight = isMobile ? "80vh" : "90vh";

  const lightbox = GLightbox({
    touchNavigation: true,
    loop: true,
    autoplayVideos: true,
    width: targetWidth,
    height: targetHeight,
  });
};
