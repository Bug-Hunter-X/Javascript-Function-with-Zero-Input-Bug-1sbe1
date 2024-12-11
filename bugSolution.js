function myFunction(a, b) {
  if (a === 0 || b === 0) {
    return 0; // Handle the case where either input is zero
  } else {
    return a / b; // Perform the calculation only if neither input is zero
  }
}