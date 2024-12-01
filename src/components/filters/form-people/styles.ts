export const dynStyles = (isMobile: boolean) => {
  return {
    formControl: {
      alignSelf: isMobile ? 'flex-start' : 'center',
    },
  };
};

export const styles = {
  radio: {
    color: 'white',
  },
};
