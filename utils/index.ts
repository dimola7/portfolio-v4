export const getResponsiveImage = (image: any) => {
  return image.replace(/upload\//, "$&q_auto,f_auto,fl_lossy/");
};

export const isScreenWidthBelow = (breakpoint: any) => {
  return window.innerWidth <= breakpoint;
};
