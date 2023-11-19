import { Text } from "react-native";
import moment from "moment/moment";

export function companyIsOpenChecker(timeTable, isBoolean) {
  const map = {
    1: "MONDAY",
    2: "TUESDAY",
    3: "WEDNESDAY",
    4: "THURSDAY",
    5: "FRIDAY",
    6: "SATURDAY",
    7: "SUNDAY",
  };

  const today = moment().day();
  const timeTableToday = timeTable?.find((item) => item.weekday === map[today]);

  if (timeTableToday) {
    const format = "hh:mm";
    const currentTime = moment(new Date(), format);
    const startTime = moment(timeTableToday.startTime, format);
    const endTime = moment(timeTableToday.endTime, format);

    const check = currentTime.isBetween(startTime, endTime);

    if (isBoolean) {
      return check;
    } else {
      return check ? (
        <Text style={{ fontWeight: "bold", color: "#0af14b" }}>Нээлттэй</Text>
      ) : (
        <Text style={{ fontWeight: "bold", color: "orange" }}>Хаалттай</Text>
      );
    }
  } else {
    return isBoolean ? (
      false
    ) : (
      <Text style={{ fontWeight: "bold", color: "orange" }}>Хаалттай</Text>
    );
  }
}
