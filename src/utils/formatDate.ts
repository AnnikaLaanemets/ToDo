const formatDate = (date: Date) => {
  return date.toISOString().split('T')[0];
}

export default formatDate