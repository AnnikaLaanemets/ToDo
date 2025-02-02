const getWeekDay = (date:string) => 
{
  return  new Date(date).toLocaleDateString('en-US', { weekday: 'long' });
}
export default getWeekDay