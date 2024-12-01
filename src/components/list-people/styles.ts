export const dynStyles = (isMobile: boolean) => {
  return {
    button: {
      borderColor: 'white',
      color: 'white',
      justifyContent: 'space-between',
      textTransform: 'capitalize',
      width: isMobile ? '86px ' : '150px',
      padding: isMobile ? '6px' : 'auto',
      height: isMobile ? '24px' : 'auto',
    },
    textField: {
      width: isMobile ? '120px' : 'auto',
    },
    body1: {
      color: 'white',
      alignSelf: isMobile ? 'flex-end' : 'center',
    },
  };
};

export const styles = {
  stack: {
    margin: '24px 0 8px',
  },
  input: {
    borderColor: 'white',
    borderRadius: '26px',
  },
  subtitle1: {
    textTransform: 'capitalize',
  },
  divider: {
    borderColor: 'white',
    margin: '8px 0',
  },
  modalContainer: {
    display: 'flex',
    p: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#6EB0ED',
    borderRadius: '26px',
  },
};

export default styles;
