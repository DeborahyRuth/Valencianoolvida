export const dynStyles = (isMobile: boolean) => {
  return {
    button: {
      textTransform: 'capitalize',
      justifyContent: 'space-between',
      width: '181px',
      marginBottom: isMobile ? '16px' : '',
      ':not(:last-child)': {
        marginBottom: '16px',
      },
    },
    formControl: {
      maxHeight: isMobile ? 'auto' : '267px',
      textAlign: 'center'
    },
  };
};
