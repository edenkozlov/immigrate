export const getInputIcon = (inputValue, iconColor) => {
    if (inputValue === '') {
      return <i className="fas fa-exclamation-circle" style={{ color: iconColor }}></i>;
    } else if (inputValue.length < 7) {
      return <i className="fas fa-times-circle" style={{ color: iconColor }}></i>;
    } else if (inputValue.length >= 7) {
      return <i className="fas fa-check-circle" style={{ color: iconColor }}></i>;
    } else {
      return null;
    }
  };
  
  export const getInputIcon30 = (inputValue, iconColor) => {
    if (inputValue === '') {
      return <i className="fas fa-exclamation-circle" style={{ color: iconColor }}></i>;
    } else if (inputValue.length < 30) {
      return <i className="fas fa-times-circle" style={{ color: iconColor }}></i>;
    } else if (inputValue.length >= 30) {
      return <i className="fas fa-check-circle" style={{ color: iconColor }}></i>;
    } else {
      return null;
    }
  };
  
  