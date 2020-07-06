import styled from "styled-components";

export default styled.div`
  .years {
    display: grid;
    grid: 1fr / repeat(auto-fill, 250px);
    grid-gap: 10px;
    background: white;
    margin: 20px auto;
    width: 800px;
    border-radius: 4px;
    justify-content: center;
  }
  .days {
    display: grid;
    grid: 20px / repeat(7, 30px);
    align-items: center;
    justify-items: center;
    justify-content: center;
    .day {
      cursor: pointer;
    }
  }
`;
