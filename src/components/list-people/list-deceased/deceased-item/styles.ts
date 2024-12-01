export const dynStyles = (isMobile: boolean) => {
  return {
    item: {
      alignItems: 'center',
      border: '1px solid white',
      borderRadius: '26px',
      padding: isMobile ? '4px 16px' : '4px 64px',
      margin: '5px 0 10px',
    },
  };
};

export const styles = {
  body: {
    color: 'white',
    textTransform: 'capitalize',
  },
};
