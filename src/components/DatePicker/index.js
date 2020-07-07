import React from "react";
import dayjs from "dayjs";
import classnames from "classnames";
import Modal from "src/components/Modal";
import useModal from "src/components/Modal/useModal";
import Style from "./style";

const DatePicker = (props) => {
  const { value = "", onChange } = props;

  const { visible, openModal, closeModal } = useModal();

  return (
    <Style>
      <input value={value} onClick={openModal}></input>
      <Modal visible={visible} onClose={closeModal}>
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
                    const date = dayjs()
                      .year(thisMonth.year())
                      .month(thisMonth.month())
                      .date(day + 1)
                      .format("YYYY-MM-DD");
                    const className = classnames("day", {
                      today: dayjs().format("YYYY-MM-DD") === date,
                    });
                    return (
                      <div
                        className={className}
                        onClick={() => {
                          onChange(date);
                          closeModal();
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
