import React from "react";
import dayjs from "dayjs";
import Modal from "src/components/Modal";
import Style from "./style";

const DatePicker = (props) => {
  const { value = "", onChange } = props;
  return (
    <Style>
      <input value={value}></input>
      <Modal visible={true}>
        <div className="years">
          {[...new Array(12)].map((_, i) => {
            const thisMonth = dayjs().startOf("year").add(i, "month");
            return (
              <div>
                <div>{`${thisMonth.year()} ${thisMonth.month() + 1}`}</div>
                <div className="days">
                  {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
                    <div>{d}</div>
                  ))}
                  {[...new Array(thisMonth.startOf("month").day())].map(() => (
                    <div></div>
                  ))}
                  {[...new Array(thisMonth.daysInMonth())].map((_, day) => {
                    return (
                      <div
                        onClick={() => {
                          onChange(
                            dayjs()
                              .year(thisMonth.year())
                              .month(thisMonth.month())
                              .date(day + 1)
                              .format("YYYY-MM-DD"),
                          );
                        }}
                      >
                        {day + 1}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </Modal>
    </Style>
  );
};

export default DatePicker;
