# Bonsai Branch

## Introduction

This full-stack e-commerce web app combines Handlebars and SCSS to generate the front end and style it. The back end is powered by NodeJs and Express, using Mongoose to communicate with and perform CRUD operations on the user and products in the MongoDB database. The site uses custom middleware to limit the actions of users without an account, while offering greater functionality to those who do sign up for an account.

This group project was inspired by one of our group members who recently purchased a bonsai tree, offering an aesthetically pleasing online alternative to products which are normally bought in person.


---

## Getting Started

Once the [GitHub repository] (https://github.com/felixrueckl/bonsai-shop.git) has been forked, you will need to use the commands 'npm init', then 'npm run dev' to ensure the dependencies are running. You will also need to connect to the MongoDB database. This requires permission from one of the creators of the project. The app has been deployed using fly.io and is available [here] (placeholder).

Ensure that Node.js and MongoDB are installed on your machine.
Clone the repository: git clone <repository-url>
Navigate to the project directory: cd bonsai-shop
Install the dependencies: npm install
Set up the MongoDB connection by configuring the database URL in config/database.js.
Start the application: npm start
Access the application in your web browser at http://localhost:3000.
Contribution
We welcome contributions to the Bonsai Shop application. If you would like to contribute, please follow these steps:

Fork the repository.
Create a new branch: git checkout -b my-new-feature
Make your changes and test thoroughly.
Commit your changes: git commit -am 'Add some feature'
Push the branch to your fork: git push origin my-new-feature
Submit a pull request detailing your changes.
License
The Bonsai Shop application is licensed under the MIT License. Feel free to use, modify, and distribute the application as per the terms of this license.

---

## Features and Technologies
  
The Bonsai Shop application offers the following features:

User authentication: Users can create an account, log in, and manage their profile.
Product catalog: Display a collection of bonsai plants available for sale.
Product details: Users can view detailed information about each bonsai plant, including images, descriptions, and prices.
Shopping cart: Users can add bonsai plants to their shopping cart and proceed to checkout.
Order management: Users can view and manage their orders, including order history and tracking.
Admin dashboard: Admin users have access to additional features like managing products, categories, and user accounts.
Technologies Used
The Bonsai Shop application is built on the following technologies:

Node.js: A JavaScript runtime environment that allows executing JavaScript code outside of a web browser.
Express.js: A web application framework for Node.js that simplifies the development of web applications.
Handlebars: A popular templating engine that allows creating reusable HTML templates.
MongoDB: A NoSQL document database used for storing and managing application data.
Midjourny AI: A technology used for generating images and sample texts to enhance the application's visual appeal and content.
SCSS: A preprocessor scripting language that is compiled into CSS, providing more advanced features and organization for styling the application.
Installation
To run the Bonsai Shop application locally, follow these steps:

---

## Usage

In the following section, you will see a rundown of each page and what the elements on the page do.

### Home Page


<img width="1376" alt="Screenshot 2023-07-06 at 14 30 58" src="https://github.com/felixrueckl/bonsai-shop/assets/125567008/ab344781-2afc-42ac-b6ee-2982940bb825">

The home page contains the logo, an image of a juniper bonsai as well as a short introduction to the shop. There is a nav bar linking to:

- The Shop
- The About Page
- The Sign Up Page
- The Login Page
- The Shopping Cart
- The User Profile

It is worth noting that the user profile and shopping cart pages are not accessible unless the user has created an account and is logged in. There is a custom middleware enabled that means upon clicking on these icons, the user will be automatically redirected to the login page.

### The Shop and Product Pages

![Screenshot 2023-07-06 at 16 16 06](https://github.com/felixrueckl/bonsai-shop/assets/125567008/d77ab6ca-cbd7-462e-8c42-691a958acc26)

![Screenshot 2023-07-06 at 16 16 22](https://github.com/felixrueckl/bonsai-shop/assets/125567008/2a3b4bb9-1b30-4adc-806a-0cb1b4552b87)

![Screenshot 2023-07-06 at 16 16 37](https://github.com/felixrueckl/bonsai-shop/assets/125567008/187bbd91-f5e3-4a66-82bd-1a366b56eb66)

![Screenshot 2023-07-06 at 16 18 19](https://github.com/felixrueckl/bonsai-shop/assets/125567008/7233f2db-e0b6-47a8-a828-93d569815c84)

The shop page contains 12 different products, with an image, their name, and their price. Clicking on each uses a dynamic route to take you to that particular product's page. This contains its name, an image, a description as well as an 'Add to Cart' button. Users who are not logged in will be redirected to the login page if they try to add a product to the cart. If a user is signed in, the product will be added to the cart, and a message will appear informing them of this. There is also a 'Back to shop' button, taking the user back to the shop page. All images on the shop and product pages are AI-generated.

### About Page

![Screenshot 2023-07-06 at 16 24 04](https://github.com/felixrueckl/bonsai-shop/assets/125567008/78ef8380-f3f5-418c-9f9a-48d52da14750)

![Screenshot 2023-07-06 at 16 24 18](https://github.com/felixrueckl/bonsai-shop/assets/125567008/ce670cb5-448a-4636-9349-74d02a0de91b)

![Screenshot 2023-07-06 at 16 24 25](https://github.com/felixrueckl/bonsai-shop/assets/125567008/80a4caa7-9e9a-45ac-82a5-3514d77ad95e)

![Screenshot 2023-07-06 at 16 24 34](https://github.com/felixrueckl/bonsai-shop/assets/125567008/b24b7c0e-d9ab-4483-80f9-d73c6728aa1e)

The about page contains info on the team that made the site, including some quite frankly disturbing AI-generated images of us and some silly introduction paragraphs. There is also an embedded map of where to find the fake company, and how to get there.

### Sign Up and Log In Pages

![Screenshot 2023-07-06 at 16 27 16](https://github.com/felixrueckl/bonsai-shop/assets/125567008/1ef45d86-dfe1-4c31-a4f0-0af1d75316d5)

![Screenshot 2023-07-06 at 16 27 39](https://github.com/felixrueckl/bonsai-shop/assets/125567008/77d373e5-2999-41b3-a1f2-ea43c159517a)

Both pages contain forms with input options. The sign up page prompts the user to create a username, email, and password. When the user inputs incorrect information in to any of the fields on either of these pages, one of a few error messages appears:

![Screenshot 2023-07-06 at 16 29 37](https://github.com/felixrueckl/bonsai-shop/assets/125567008/1589d448-8d36-44ab-a324-517d140eda8f)

![Screenshot 2023-07-06 at 16 30 16](https://github.com/felixrueckl/bonsai-shop/assets/125567008/5b2e3402-1290-4027-aafb-0e0d949dcbd7)

![Screenshot 2023-07-06 at 16 32 25](https://github.com/felixrueckl/bonsai-shop/assets/125567008/d7ee870e-6cfb-4f30-b39c-757caa977826)

When the user successfully inputs the required information on either page, they are redirected to their profile page.

### Profile Page

![Screenshot 2023-07-06 at 16 33 20](https://github.com/felixrueckl/bonsai-shop/assets/125567008/558f700e-a444-4b06-b9c6-32692544b059)

The profile page contains the username, a button to take the user to the shopping cart, a logout button, and a change settings link. The logout button ends the current session and redirects the logged out user to the login page, the change settings button leads the user to the edit profile page.

### Edit Profile Page

![Screenshot 2023-07-06 at 16 41 00](https://github.com/felixrueckl/bonsai-shop/assets/125567008/f6fdca9e-9d79-47bd-b918-8f63c7550fe7)

On this page, the user can change either the username or email address, or both. They can also delete their account, which will remove their data from the database, and redirects the user to the home page.

### The Shopping Cart

![Screenshot 2023-07-06 at 16 44 29](https://github.com/felixrueckl/bonsai-shop/assets/125567008/60eb5775-0659-49f1-aa35-2fcb6bef6e4a)

The shopping cart displays the items the user has added, a running price total, and a button to remove the item from the basket. It also contains a checkout button. However, this does not lead anywhere as the products cannot be bought and there is no dummy payment page.

---

## Future Changes

The additional features and improvements to the site are as follows:

- Plugging in the Stripe API to create a dummy payment page
- A favorites button for users to add items to their account for later
- A quantity feature for the shopping basket
- The ability for users to change their password

---

## Contributors

Andrew Cockroft, Felix Rückl, Alexander Ley