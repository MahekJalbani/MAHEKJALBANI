function calculatePercentage(number, totalAmount) {
    if (typeof number !== 'number' || typeof totalAmount !== 'number' || totalAmount === 0) {
      return "Invalid input. Both parameters should be numbers, and totalAmount should not be zero.";
    }
  
    const percentage = (number / totalAmount) * 100;
    return percentage;
  }
  
  // Example usage:
  const number = 25;
  const totalAmount = 100;
  const result = calculatePercentage(number, totalAmount);
  console.log(`The percentage is: ${result}%`);
  