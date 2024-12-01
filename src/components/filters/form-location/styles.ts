export const dynStyles = (isMobile: boolean) => {
  return {
    formControl: {
      maxHeight: isMobile ? 'auto' : '267px',
    },
    button: {
      textTransform: 'capitalize',
      width: '181px',
      marginBottom: isMobile ? '16px' : '',
      ':not(:last-child)': {
        marginBottom: '16px',
      },
    },
  };
};

export const styles = {};
