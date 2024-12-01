export const dynStyles = (isMobile: boolean) => {
  return {
    button: {
      color: 'white',
      borderColor: 'white',
      width: isMobile ? 'auto' : '264px',
      marginBottom: '24px',
    },
    box: {
      borderRadius: '26px',
      border: '1px solid white',
      padding: isMobile ? '16px' : '16px 36px',
      maxWidth: '411px',
    },
  };
};

export const styles = {
  root: {
    alignItems: 'center',
  },
  typography: {
    marginBottom: '16px',
  },
  subtitle1: {
    textTransform: 'uppercase',
    color: 'white',
  },
  icon: {
    color: 'white',
    height: '40px',
    width: '40px',
  },
};
