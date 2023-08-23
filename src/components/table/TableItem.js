import { styled } from "styled-components"

// const TableItem = styled.tr`

// `;
//

function TableItem({ year, totalSavings, yearlyInterest, totalInterest, investedCapital }) {
  /*
   * Component to display an individual table item
   * props used to pass down the values of each `td` element
   * field.
   *
   * This is because the values of the table items 
   * should be controlled further up in the component structure.
   * Right now, in app.js
   */
  return (
    <tr>
      <td>{year}</td>
      <td>{totalSavings}</td>
      <td>{yearlyInterest}</td>
      <td>{totalInterest}</td>
      <td>{investedCapital}</td>
    </tr>
  );
}

export default TableItem
