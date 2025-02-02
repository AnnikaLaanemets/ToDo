import { FC } from "react";
import "./day-style.css";
import formatDate from "./utils/formatDate";
import getWeekDay from "./utils/getWeekDay";

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
      <span  className="pointer" onClick={handlePreviewsDay} title="Previous Day">
      ⮜
      </span>
  </div>

  <h4 className="pointer" onClick={handleToday}>{localeDate}</h4>

  <div>
     <span className="pointer" onClick={handleNextDay} title="Next Day">
     ⮞
      </span>
  </div>

</div>
<h3>{getWeekDay(date)}</h3></>);
  

}

export default DateTime;