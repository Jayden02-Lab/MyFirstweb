# My Personal Website — ICT251 Activity 3

Student: Mukuka Patrick Mwaba
Programme: Information Technology
Course: ICT251 Web Technologies
Activity: 3 — Interactive Personal Website

## About

This is my personal student portfolio website. It contains sections for About Me, My Hobbies, My Learning Plan, My Photos, My Media, My Projects and Skills, a Study Hours Calculator, and a Contact form. The site is built with HTML5, CSS3, and vanilla JavaScript, and is deployed as a static site through GitHub and Render.

## Live Website

Live URL: https://your-render-url.onrender.com

(Replace the URL above with the actual Render link after deployment.)

## Project Structure

- index.html — main page
- css/styles.css — all styling
- js/script.js — all JavaScript features
- images/ — three photos
- videos/ — audio and video files
- README.md — this file

## Four JavaScript Features

### 1. Contact Form Validation and Preview (compulsory)
When the form is submitted, the script checks that the name is not empty or spaces only, that the email matches a valid pattern, and that the message is not empty or spaces only. If anything is wrong, red error messages appear. If everything is valid, a green message says the data was validated successfully, and a summary of the entered data is shown on the page. No data is sent anywhere.

### 2. Theme Switch
A button in the navigation switches the website between light and dark mode. Both themes keep text and controls readable.

### 3. Expandable Project Details
Each project card has a Show Details button. Clicking it reveals a hidden paragraph, and the button changes to Hide Details. Clicking again hides it.

### 4. Study Hours Calculator
The visitor enters hours per day and days per week. The script rejects blank, non-numeric or negative hours, and rejects days outside 1 to 7. On valid input, it shows the total weekly study hours.

## How to Test

1. Open the live website URL in a private browser window.
2. Click the theme toggle in the navigation. The page should switch between light and dark.
3. Scroll to the Projects section. Click Show Details on each card. The details should appear, and the button text should change.
4. Scroll to the Study Hours Calculator. Try 2 and 5. It should show 10. Try 0 and 8. It should show an error.
5. Scroll to the Contact form. Submit it with empty or spaces-only fields. You should see red errors. Submit it with a valid name, email and message. You should see a green validated message and a preview.
6. Use the Tab key to move through links and controls. Focus should be visible.

## Sources Used

- MDN Web Docs — HTML, CSS, JavaScript reference: https://developer.mozilla.org/
- W3Schools — HTML and CSS tutorials: https://www.w3schools.com/
- Course notes from ICT251 Web Technologies, Mulungushi University.

## Notes

- All content, images, audio and video are my own.
- The website is designed to work on both desktop and mobile screens.