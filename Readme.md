# Tax Calculator Form

This is a web application that allows users to calculate their overall income after tax deductions based on their gross annual income, extra income, age group, and total applicable deductions.

## Features

- Collects input for gross annual income, extra income, age group, and total applicable deductions.
- Provides informational icons with tooltips to guide users on each input field.
- Calculates tax deductions based on the provided inputs.
- Displays the overall income after tax deductions in a modal.

## Technologies Used

- HTML
- CSS (Bootstrap)
- JavaScript (jQuery)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/tax-calculator.git
    ```

2. Open the project directory in your code editor.
3. Open `index.html` in your web browser to view the form.

## Usage

1. Fill in the form with the required information:
   - Gross annual income
   - Extra income
   - Age group
   - Total applicable deductions
2. Submit the form to calculate the overall income after tax deductions.
3. View the result in the modal.

## Images 

 ![Image 1](./assets/Screenshot%20from%202024-04-09%2023-41-39.png)
  ![Image 1](./assets/Screenshot%20from%202024-04-09%2023-41-55.png)


## Testing

### Unit Tests

- **Scenario 1:** Calculate overall income with valid inputs.
  - **Inputs:** 
    - Gross annual income: 50,000
    - Extra income: 10,000
    - Age group: Below 40
    - Total applicable deductions: 5,000
  - **Expected Output:** Overall income should be 55,000 after deductions.

- **Scenario 2:** Calculate overall income with zero extra income and 41-60 age.
  - **Inputs:** 
    - Gross annual income: 60,000
    - Extra income: 0
    - Age group: 41 - 60
    - Total applicable deductions: 7,000
  - **Expected Output:** Overall income should be 53,000 after deductions.

- **Scenario 3:** Calculate overall income with zero extra income and Above 60.
  - **Inputs:** 
    - Gross annual income: 60,000
    - Extra income: 0
    - Age group: Above 60
    - Total applicable deductions: 7,000
  - **Expected Output:** Overall income should be 53,000 after deductions.

### Integration Tests

- **Scenario:** Submitting the form with valid inputs except age group.
  - **Inputs:** 
    - Gross annual income: 70,00,000
    - Extra income: 5,000
    - Age group: Select age group
    - Total applicable deductions: 10,000
  - **Expected Result:** Form should not submit and show invalid input in age group input .

  - **Scenario:** Submitting the form with valid inputs.
  - **Inputs:** 
    - Gross annual income: 70,00,000
    - Extra income: 5,000
    - Age group: Below 40
    - Total applicable deductions: 10,000
  - **Expected Result:** Overall income should be 4896502.4 after deductions.
  
  - **Scenario:** Submitting the form with valid inputs.
  - **Inputs:** 
    - Gross annual income: 70,00,000
    - Extra income: 5,000
    - Age group:Above 60
    - Total applicable deductions: 10,000
  - **Expected Result:** Overall income should be 4197003.199999999 after deductions.

   - **Scenario:** Submitting the form with valid inputs.
  - **Inputs:** 
    - Gross annual income: 70,00,000
    - Extra income: 5,000
    - Age group: 41 - 60
    - Total applicable deductions: 10,000
  - **Expected Result:** Overall income should be 6295500.8 after deductions.

- **Scenario:** Submitting the form with invalid inputs (e.g., non-numeric values).
  - **Inputs:** 
    - Gross annual income: "abc"
    - Extra income: "xyz"
    - Age group: Select age group
    - Total applicable deductions: "123"
  - **Expected Result:** Form should not submit, and appropriate error messages should be displayed.

### End-to-End Tests

- **Scenario:** Fill in the form and submit.
  - **Expected Result:** Overall income displayed in the modal should match the calculated result based on the provided inputs.
