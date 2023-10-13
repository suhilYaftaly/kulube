export const changeTimeFormat = (inputTime: any): string => {
  const convertDate = new Date(parseInt(inputTime));
  let hours = convertDate.getHours();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const minutes =
    convertDate.getMinutes() < 10
      ? '0' + convertDate.getMinutes()
      : convertDate.getMinutes();
  const seconds =
    convertDate.getSeconds() < 10
      ? '0' + convertDate.getSeconds()
      : convertDate.getSeconds();

  let date =
    convertDate.toLocaleDateString() +
    ', ' +
    hours +
    ':' +
    minutes +
    ':' +
    seconds +
    ' ' +
    ampm;

  return inputTime ? date : inputTime;
};
