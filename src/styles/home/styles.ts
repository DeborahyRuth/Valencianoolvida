export const dynStyles = (isMobile: boolean) => {
  return {
    button: {
      width: isMobile ? '222px' : '386px',
    },
  };
};

export const styles = {
  root: {
    alignItems: 'center',
  },
  h1: {
    marginBottom: '16px',
    textAlign: 'center',
  },
  body1: {
    marginBottom: '16px',
    maxWidth: '416px',
    textAlign: 'center',
  },
};
