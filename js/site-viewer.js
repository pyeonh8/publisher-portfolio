export const initSiteViewer = () => {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const targetInner = isMobile ? "80vh" : "90vh";

  const lightbox = GLightbox({
    touchNavigation: true,
    loop: true,
    autoplayVideos: true,
    width: targetInner,
    height: targetInner,
  });
};
