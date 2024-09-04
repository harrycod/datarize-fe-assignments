const formatNumber = (num: number | string, separator = ',') => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator)
}

export default formatNumber
