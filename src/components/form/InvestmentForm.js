import { useState } from "react";

function InvestmentForm({ calculationHandler }) {
  /*
   * Component to fully manage the submission form
   *
   * Props:
   *    calculationHandler: function from parent component
   *                        to be called when the form has
   *                        sucessfully processed data.
   *
   *                        This is because the form data
   *                        will be used to generate the table
   *                        entries, which are not children
   *                        to this component, so we pass state
   *                        up and leave the calculation to the
   *                        parent (right now, <App>)
   */
  // const [currentSavings, setCurrentSavings] = useState('')
  // const [yearlyContribution, setYearlyContribution] = useState('')
  // const [expectedInterest, setExpectedInterest] = useState('')
  // const [investmentDuration, setInvestmentDuration] = useState('')

  const [currentSavings, setCurrentSavings] = useState('0')
  const [yearlyContribution, setYearlyContribution] = useState('10000')
  const [expectedInterest, setExpectedInterest] = useState('10')
  const [investmentDuration, setInvestmentDuration] = useState('100')


  function onSubmitHandler(event) {
    /*
     * function to handle the submission event for our form
     */
    // stop from refreshing the page
    event.preventDefault();
    console.group("Submission Handler called:", event)
    console.info("Handling submission!")

    const formData = {
      currentSavings: currentSavings,
      yearlyContribution: yearlyContribution,
      expectedInterest: expectedInterest,
      investmentDuration: investmentDuration,
    };

    console.info("generated formData:", formData)

    setCurrentSavings('')
    setYearlyContribution('')
    setExpectedInterest('')
    setInvestmentDuration('')

    calculationHandler(formData)

    console.groupEnd()
  }

  // form change handlers
  function handleFormChange(type, value) {
    /* generalized form change handler
     * 
     * Inputs:
     *    type: a string with accepted values:
                currentSavings
                yearlyContribution
                expectedInterest
                investmentDuration

          value: whatever the input form was changed to
     */
    console.group("Form Change Happening");
    console.info("with (type:value):", type, value);

    if (type === "currentSavings") {
      setCurrentSavings(value)

    } else if (type === "yearlyContribution") {
      setYearlyContribution(value)

    } else if (type === "expectedInterest") {
      setExpectedInterest(value)

    } else if (type === "investmentDuration") {
      setInvestmentDuration(value)

    } else {
      console.error("generic form change handler called with invalid type:", type)
    }
    console.groupEnd()
  }

  return (
    <form onSubmit={onSubmitHandler} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            value={currentSavings}
            onChange={({ target: { value } }) => handleFormChange("currentSavings", value)}
            type="number"
            id="current-savings" />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Contribution</label>
          <input
            value={yearlyContribution}
            onChange={({ target: { value } }) => handleFormChange("yearlyContribution", value)}
            type="number"
            id="yearly-contribution" />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            value={expectedInterest}
            onChange={({ target: { value } }) => handleFormChange("expectedInterest", value)}

            type="number"
            id="expected-return" />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            value={investmentDuration}
            onChange={({ target: { value } }) => handleFormChange("investmentDuration", value)}

            type="number"
            id="duration" />
        </p>
      </div>

      <p className="actions">
        <button type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>

  );
}

export default InvestmentForm
