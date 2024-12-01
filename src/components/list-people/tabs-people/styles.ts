export const dynStyles = (isMobile: boolean) => {
  return {
    tabStyle: {
      height: isMobile ? '40px' : 'auto',
      width: isMobile ? 'auto' : '100%',
    },
  };
};
