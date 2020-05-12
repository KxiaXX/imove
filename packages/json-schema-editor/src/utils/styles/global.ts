import { css } from '@emotion/core';

const globalStyles = css`
  .json-schema-editor {
    * {
      font-size: 12px;
    }

    .ant-col {
      :nth-of-type(2) {
        text-align: center;
      }

      :nth-of-type(3),
      :nth-of-type(4) {
        padding-right: 10px;
      }
    }

    .ant-input {
      height: 30px;
    }

    .ant-select {
      width: 80%;
      text-align: left;
    }

    .editor-icon {
      cursor: pointer;

      svg {
        margin: 0 5px;
        font-size: 14px;
      }
    }
  }
`;

export default globalStyles;