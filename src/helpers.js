const formatPrice = (number) => {
  return number.toLocaleString(
    'en-us', {
      style: 'currency',
      currency: 'USD',
    }
  );
};

export {formatPrice};
