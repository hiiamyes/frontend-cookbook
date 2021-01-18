import styled from "styled-components";

const sizes = {
  s: "16px",
  m: "24px",
  l: "32px",
};

export default styled.button`
  /* normalize */
  position: relative;
  outline: none;
  background: none;
  border: none;
  cursor: pointer;
  user-select: none;
  box-shadow: none;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  padding: 0;

  /* enabled */
  width: ${(props) => sizes[props.size]};
  height: ${(props) => sizes[props.size]};
  border-radius: ${(props) => props.theme.borderRadius};
  .icon {
    color: ${(props) => props.theme.colorEnabled};
  }
  &.with-background {
    background: ${(props) => props.theme.colorEnabled};
    .icon {
      color: white;
    }
  }

  /* focused */
  &.focused {
    .icon {
      color: ${(props) => props.theme.colorFocused};
    }
    &.with-background {
      .icon {
        color: white;
      }
      background: ${(props) => props.theme.colorFocused};
    }
  }

  /* hover  */
  &.hover {
    .icon {
      color: ${(props) => props.theme.colorHover};
    }
    &.with-background {
      .icon {
        color: white;
      }
      background: ${(props) => props.theme.colorHover};
    }
  }

  /* pressed */
  &.pressed {
    .icon {
      color: ${(props) => props.theme.colorPressed};
    }
    &.with-background {
      .icon {
        color: white;
      }
      background: ${(props) => props.theme.colorPressed};
    }
  }

  /* loading */
  &.loading {
    cursor: not-allowed;
  }

  /* disabled */
  &.disabled {
    &.with-background {
      background: ${(props) => props.theme.colorDisabled};
    }
    cursor: not-allowed;
  }
`;
