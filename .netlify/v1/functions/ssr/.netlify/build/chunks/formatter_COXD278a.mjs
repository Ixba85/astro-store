class Formatter {
  static currency(value, decimals = 2) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "usd",
      maximumFractionDigits: decimals
    }).format(value);
  }
}

export { Formatter as F };
