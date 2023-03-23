# Lab: Odd Duck Lab 12

Read the document in its entirety before beginning your lab. To view this lab assignment in its own tab, click here.

# Problem Domain

Odd Duck Product Co is trying to decide which project from their R&D department they should invest in next to sell. They asked you to make a web page that they can run at a kiosk at the front entrance of their campus. Whenever an employee walks by, the employee can vote for 1 of the 3 products displayed that they think should be the next new product brought to market. After a week of collecting data, they would like some nice graphs to visualize the results.

To make this data collection project maximally effective, Odd Duck wants you to build an app that displays three potential products side-by-side-by-side, without favoring any single product. You'll need to manage the size and the aspect ratio of the images.

As the app's purpose is to have the staff members choose which product, of the three displayed images, that they would be most interested in seeing as a new creation, you will need to store each anonymous vote, calculate totals, and visually display the results.

To keep the product selection process as untainted as possible, you have been instructed to not allow any results to be shown to users until there have been a total of 25 selections made.

The marketing team is not only interested in the total number of clicks, but also the percentage of times that an item was clicked when it was shown. So, you'll also need to keep track of how many times each image is displayed and do the calculations.

You are also responsible for the look and feel of the app, so don't forget a custom font, color palette, layout with semantic HTML, and so on.

# Instructions

Below are your lab requirements in a user story format. Try and think up what the feature tasks would be for each story, once you are done, or you get stuck, review the provided feature tasks to see what the actual tasks are for each story.

1. As a user, I would like my data to persistently track totals between page refreshes, so that I can keep track of the aggregate number of votes.

    - Implement local storage into your current application
    - Make sure the data persists across both browser refreshes and resets
Hints:

Store the products array into local storage as a formatted JSON string

2. Retrieve the products array from local storage and then utilize the JSON.Parse() function. Remember, if your constructor utilizes prototype methods, you will have to send each item in the array back through the constructor function.


3. Run a Lighthouse Accessbility report. Make necessary updates to your application based on the report to get your score above 80.

    - Add a screenshot of your score to your README.md file.
Stretch Goals

![Lighthouse Accessbility](./Screenshot%202023-03-22%20at%209.41.17%20PM.png)

Try some additional charting types based off of some of the other data you collected and display them in addition to the required bar chart
# Resources

The assets for this lab can be found in your class11/lab/assets folder of your daily class repo.

Provided in your class repo is a suggested wireframe to follow while building out your Odd Duck Products application.

# Developer Style Guide

    - Do today’s work on a branch called dataviz.

This is an individual assignment today, but you are free to collaborate with classmates if you want. Just be sure that if you do, be sure to make note of that collaboration in your README file.

# Submission Instructions

1. When your work is complete and ready for submission, open a Pull Request from your current branch to main.
2. Submit the link to the above Pull Request to Canvas.
3. Add a comment to this Canvas submission with answers to the following questions.
- How did this go, overall?
- What observations or questions do you have about what you’ve learned so far?
- How long did it take you to complete this assignment? And, before you started, how long did you think it would take you to complete this assignment?
4. Complete the merge of your current branch to main.
5. Once you’ve completed your merge, deploy your GitHub repo using Github Pages. Submit the link to your deployed site for this project.