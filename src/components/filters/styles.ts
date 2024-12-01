export const dynStyles = (isMobile: boolean) => {
  return {
    root: {
      border: '1px solid white',
      borderRadius: '26px',
      padding: '16px',
      width: isMobile ? '250px' : '500px',
      overflow: 'auto',
      height: isMobile ? '367px' : 'auto',
    },
    dividerH: {
      borderColor: 'white',
      marginBottom: '16px',
      width: isMobile ? '200px' : 'auto',
    },
  };
};

export const styles = {
  list: {
    maxHeight: '450px',
    overflowY: 'auto',
    width: '100%',
  },
  dividerV: {
    borderColor: 'white',
  },
};
