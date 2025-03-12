# Age Calculator

This is a simple **Age Calculator** web application where users can input their birthdate (day, month, and year), and it will calculate their age based on the current date. It features **real-time validation** of inputs and a **responsive design** for different screen sizes.

---

## Features

✅ **Input Validation** – The application checks if the entered day, month, and year are valid, ensuring the birthdate is correct.  
✅ **Responsive Design** – The application adjusts itself for different screen sizes, ensuring usability on both desktop and mobile devices.  
✅ **Real-time Feedback** – If the user enters an invalid value, an error message appears below the corresponding field.  

---

## Technologies Used

- **HTML** – Provides the structure of the application.  
- **CSS** – Handles styling and responsive design.  
- **JavaScript** – Implements logic, validation, and age calculation based on user input.  

---

## How to Use

1. Enter your **day, month, and year of birth** in the respective fields.  
2. Click on the **Calculate** button.  
3. The app will display your **age in years**.  
4. If any input is invalid (e.g., a day greater than the number of days in a month), an **error message** will appear.  

---

## Code Explanation

### **HTML**
- Contains a form with three input fields (day, month, year).
- Includes a button to calculate the age.
- Display result, which is updated dynamically using JavaScript

### **CSS**
- Styles the page with a clean, modern design.
- Ensures responsiveness across different devices.

### **JavaScript**
- Handles input validation, age calculation, and real-time feedback.

#### **JavaScript Functions**
- `isLeapYear(year)`: Determines if the given year is a leap year.  
- `getDaysInMonth(month, year)`: Returns the correct number of days in a given month, considering leap years.  
- `validateDay(day, month, year)`: Validates that the day is correct for the given month and year.  
- `validateMonth(month)`: Ensures the month is between **1 and 12**.  
- `validateYear(year)`: Ensures the year is **≥ 1900** and does not exceed the current year.  
- `isDateValid(day, month, year)`: Validates all inputs for day, month, and year.  
- `calculateAge(year, month, day)`: Calculates the age based on the current date and the provided birthdate.  

---

## Installation

To run this project locally:

1. **Clone this repository:**
   ```bash
   git clone https://github.com/KhaledKhoderDev/age-calculator.git
2. **Open the project folder in your favorite code editor.**
3. **Open index.html in a web browser.**

## Contributing

We welcome contributions from the community! 🚀  

If you'd like to contribute, you can:  
- **Report Issues** – Found a bug? Have a suggestion? Open an [issue](https://github.com/KhaledKhoderDev/age-calculator/issues).  
- **Submit Pull Requests** – Want to fix a bug or add a feature? Fork the repository, make your changes, and open a pull request.  
- **Enhance the Design** – Have ideas to improve the UI/UX? Your contributions are appreciated!  

### How to Contribute:
1. **Fork the Repository**  
2. **Create a Feature Branch** (`git checkout -b feature-name`)  
3. **Commit Your Changes** (`git commit -m "Describe your changes"`)  
4. **Push to Your Branch** (`git push origin feature-name`)  
5. **Open a Pull Request**  

We appreciate your contributions! 🎉  

