export const dynStyles = (isMobile: boolean) => {
  return {
    list: {
      overflowY: isMobile ? 'unset' : 'auto',
      width: '100%',
    },
  };
};

export const styles = {
  button: {
    borderRadius: '20px',
    width: '386px',
  },
  listItemButton: {
    justifyContent: 'center',
    padding: '0px',
  },
};
