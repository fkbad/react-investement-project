import logo from './assets/investment-calculator-logo.png';

import Table from './components/table/Table'
import InvestmentForm from './components/form/InvestmentForm'
import { useState } from 'react';
function App() {

  const [tableData, setTableData] = useState([])


  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    // unary + turns things into a number
    let currentSavings = +userInput['currentSavings'];
    const yearlyContribution = +userInput['yearlyContribution'];
    const expectedReturn = +userInput['expectedInterest'] / 100;
    const duration = +userInput['investmentDuration'];

    // variable to keep track of the invested capital
    // this is the amount of money put in
    let investedCapital = currentSavings
    let totalInterest = 0

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;

      investedCapital += yearlyContribution;

      totalInterest += yearlyInterest;

      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        totalSavings: currentSavings,
        investedCapital: investedCapital,
        totalInterest: totalInterest,
      });
    }
    setTableData(yearlyData)
  };

  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>


      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      <InvestmentForm calculationHandler={calculateHandler} />
      <Table items={tableData} />
    </div>
  );
}

export default App;
