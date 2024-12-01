export const dynStyles = (isMobile: boolean) => {
  return {
    container: {
      backgroundSize: 'cover',
      margin: isMobile ? '24px' : '41px',
      width: 'auto',
    },
    main: {
      alignContent: 'center',
      borderColor: 'pink',
      minHeight: isMobile ? 'calc(100vh - 220px)' : 'calc(100vh - 100px)',
      padding: '32px',
      maxWidth: '1000px',
    },
  };
};

export const styles = {
  heartIcon: {
    color: 'white',
    fontSize: '17px',
  },
  divider: {
    borderColor: 'white',
  },
  bold: {
    fontWeight: 700,
  },
};
