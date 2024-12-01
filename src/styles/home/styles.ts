export const dynStyles = (isMobile: boolean) => {
  return {
    button: {
      width: isMobile ? '222px' : '386px',
    },
    h1: {
      marginBottom: '16px',
      textAlign: 'center',
      maxWidth: '954px',
      fontSize: isMobile ? '30px!important' : '65px!important',
    },
  };
};

export const styles = {
  root: {
    alignItems: 'center',
  },
  title: {
    marginBottom: '16px',
    textAlign: 'center',
    maxWidth: '954px',
    textDecoration: 'none',
  },
  subtitle1: {
    textTransform: 'uppercase',
    color: 'white',
    textDecoration: 'none',
  },
  body1: {
    marginBottom: '16px',
    maxWidth: '416px',
    textAlign: 'center',
  },
};
