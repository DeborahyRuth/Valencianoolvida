export const dynStyles = (isMobile: boolean) => {
  return {
    card: {
      border: '1px solid white',
      borderRadius: '26px',
      backgroundColor: '#6EB0ED',
      padding: isMobile ? '16px' : '16px 64px',
      width: '100%',
    },
  };
};

export const styles = {
  body: {
    color: 'white',
    textAlign: 'right',
  },
  description: {
    marginTop: '24px',
    maxHeight: '72px',
    overflowY: 'auto',
    wordWrap: 'break-word',
    whiteSpace: 'pre-line',
  },
};
