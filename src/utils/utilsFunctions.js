//Simulate a click when user press "Enter" key
export const buildHandleEnterKeyPress = (onClick) => ({ key }) => {
    if (key === 'Enter') { 
      onClick(); 
    }
  };