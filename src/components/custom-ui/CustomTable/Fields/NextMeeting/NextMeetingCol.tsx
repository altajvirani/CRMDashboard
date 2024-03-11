/* eslint-disable @typescript-eslint/no-explicit-any */
import Chip from "../../../Chip";

export default function NextMeetingCol({ props }: { props: any }) {
  const { nextMeetingTime } = props;

  // const getTimeDifference = () => {
  //   let difference = nextMeetingTime - new Date().getTime();

  //   const years = Math.round(difference / (1000 * 60 * 60 * 24 * 365));
  //   difference -= years * (1000 * 60 * 60 * 24 * 365);
  //   const months = Math.round(difference / (1000 * 60 * 60 * 24 * 30));
  //   difference -= months * (1000 * 60 * 60 * 24 * 30);
  //   const days = Math.round(difference / (1000 * 60 * 60 * 24));
  //   difference -= days * (1000 * 60 * 60 * 24);
  //   const hours = Math.round(difference / (1000 * 60 * 60));
  //   difference -= hours * (1000 * 60 * 60);
  //   const minutes = Math.round(difference / (1000 * 60));
  //   difference -= minutes * (1000 * 60);
  //   const seconds = Math.round(difference / 1000);

  //   let priorityIndicator = "danger";

  //   let timeString = "in ";
  //   if (months > 0) {
  //     if (years > 0) timeString += `${years} years `;
  //     else timeString += `${months} months `;
  //     priorityIndicator = "ghost";
  //   } else if (days > 0) {
  //     timeString += `${days} day${days > 1 ? "s" : ""} `;
  //     priorityIndicator = "info";
  //   } else if (seconds > 0) {
  //     if (minutes > 0) {
  //       if (hours > 0) timeString += `${hours} hours `;
  //       else timeString += `${minutes} minutes `;
  //     } else timeString += `${seconds} seconds`;
  //     priorityIndicator = "success";
  //   } else timeString = "No contact";

  //   return {
  //     timeString,
  //     priorityIndicator,
  //   };
  // };

  const getTimeDifference = () => {
    let difference = nextMeetingTime - new Date().getTime();

    const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
    difference -= years * (1000 * 60 * 60 * 24 * 365);
    const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
    difference -= months * (1000 * 60 * 60 * 24 * 30);
    const weeks = Math.floor(difference / (1000 * 60 * 60 * 24 * 7));
    difference -= weeks * (1000 * 60 * 60 * 24 * 7);
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    difference -= days * (1000 * 60 * 60 * 24);
    const hours = Math.floor(difference / (1000 * 60 * 60));
    difference -= hours * (1000 * 60 * 60);
    const minutes = Math.floor(difference / (1000 * 60));
    difference -= minutes * (1000 * 60);
    const seconds = Math.floor(difference / 1000);

    let priorityIndicator = "danger";

    let timeString = "in ";
    if (years > 0) {
      timeString += `${years > 1 ? years : "a"} year${years > 1 ? "s" : ""} `;
      priorityIndicator = "ghost";
    } else if (months > 0) {
      timeString += `${months > 1 ? months : "a"} month${
        months > 1 ? "s" : ""
      } `;
      priorityIndicator = "ghost";
    } else if (weeks > 0) {
      timeString += `${weeks > 1 ? weeks : "a"} week${weeks > 1 ? "s" : ""} `;
      priorityIndicator = "ghost";
    } else if (days > 0) {
      timeString += `${days > 1 ? days : "a"} day${days > 1 ? "s" : ""} `;
      priorityIndicator = "info";
    } else if (hours > 0) {
      timeString += `${hours > 1 ? hours : "an"} hour${hours > 1 ? "s" : ""} `;
      priorityIndicator = "success";
    } else if (minutes > 0) {
      timeString += `${minutes > 1 ? minutes : "a"} minute${
        minutes > 1 ? "s" : ""
      } `;
      priorityIndicator = "success";
    } else if (seconds > 0) {
      timeString += `${seconds > 1 ? seconds : "a"} second${
        seconds > 1 ? "s" : ""
      }`;
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
