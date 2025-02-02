import { FC } from "react";
import "./day-style.css";
import formatDate from "./utils/formatDate";
import getWeekDay from "./utils/getWeekDay";
import LeftArrow from '../public/left-arrow.png';
import RightArrow from '../public/right-arrow.png';



type Props =
{
  date: string
  setDate: React.Dispatch<React.SetStateAction<string>>
}
const  DateTime:FC<Props> = ({date,setDate}) => {
  const localeDate = new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  const nextDay = (date: string) => {
    const startDate = new Date(date);
    startDate.setDate(startDate.getDate() + 1);
    return formatDate(startDate);
  }
  const previewsDay = (date: string) => {
    const startDate = new Date(date);
    startDate.setDate(startDate.getDate() - 1);
    return formatDate(startDate);
  }
  const handleNextDay = () => {
    setDate(nextDay(date));
  }
  const handlePreviewsDay = () => {
    setDate(previewsDay(date));
  }
  const handleToday = () => {
    setDate(formatDate(new Date()));
  }


  return ( <><div className="row">
  <div>
      <img width={16}  className="pointer" onClick={handlePreviewsDay} alt="Previous Day"  src={LeftArrow}/>
  </div>
  <h4 className="pointer" onClick={handleToday}>{localeDate}</h4>

  <div>
  <img width={16} className="pointer" onClick={handleNextDay} alt="Next Day"  src={RightArrow}/>

  </div>

</div>
<h3>{getWeekDay(date)}</h3></>);
  

}

export default DateTime;