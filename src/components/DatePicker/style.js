import styled from "styled-components";

export default styled.div`
  .years {
    width: 100%;
    display: grid;
    grid: 1fr / repeat(auto-fill, 250px);
    grid-gap: 10px;
    background: white;
    margin: 20px auto;
    border-radius: 4px;
    justify-content: center;
  }
  .days {
    display: grid;
    grid: 30px / repeat(7, 30px);
    align-items: center;
    justify-items: center;
    justify-content: center;
    .day {
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      cursor: pointer;
      color: black;
      &.today {
        background: red;
        color: white;
      }
    }
  }
`;
