/* eslint-disable @typescript-eslint/no-explicit-any */
import Chip from "../../../Chip";

export default function NextMeetingCol({ props }: { props: any }) {
  const { nextMeetingTime } = props;

  const getTimeDifference = () => {
    let difference = nextMeetingTime - new Date().getTime();

    const years = Math.round(difference / (1000 * 60 * 60 * 24 * 365));
    difference -= years * (1000 * 60 * 60 * 24 * 365);
    const months = Math.round(difference / (1000 * 60 * 60 * 24 * 30));
    difference -= months * (1000 * 60 * 60 * 24 * 30);
    const days = Math.round(difference / (1000 * 60 * 60 * 24));
    difference -= days * (1000 * 60 * 60 * 24);
    const hours = Math.round(difference / (1000 * 60 * 60));
    difference -= hours * (1000 * 60 * 60);
    const minutes = Math.round(difference / (1000 * 60));
    difference -= minutes * (1000 * 60);
    const seconds = Math.round(difference / 1000);

    let priorityIndicator = "danger";

    let timeString = "in ";
    if (months > 0) {
      if (years > 0) timeString += `${years} years `;
      else timeString += `${months} months `;
      priorityIndicator = "ghost";
    } else if (days > 0) {
      timeString += `${days} day${days > 1 ? "s" : ""} `;
      priorityIndicator = "info";
    } else if (seconds > 0) {
      if (minutes > 0) {
        if (hours > 0) timeString += `${hours} hours `;
        else timeString += `${minutes} minutes `;
      } else timeString += `${seconds} seconds`;
      priorityIndicator = "success";
    } else timeString = "No contact";

    return {
      timeString,
      priorityIndicator,
    };
  };

  const meetingChip = getTimeDifference();

  return (
    <Chip
      theme={meetingChip.priorityIndicator}
      content={meetingChip.timeString}
      isClickable={true}
    />
  );
}
