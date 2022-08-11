# Matcha-Matcha Skincare 🍵

Matcha-Matcha Skincare is an e-commerce platform selling skincare and tea products. 🌻

Users can browse through products on the Homepage, and click on a product card to open the Details page (which contains additional information such as ingredients and benefits). Users can add and remove products to their cart, as well as update the quantity. Users must be logged in to proceed to checkout. Once a user is logged in, they may checkout using the Stripe Payment service. On completion, they are shown a success screen and are redirected to the Homepage. Users can view their previous orders under the “Orders” tab in the navber.

At this time, the Stripe payment service uses a test key. Input of sensitive information is not secure. Here is a list of [Test Cards](https://stripe.com/docs/keys) from Stripe's Docs.

This project uses Redux for State Management, Local Storage for user input persistence, and includes a test version of the Stripe payment service.

## Table of Contents 🌱

- [Installation](#Installation)
- [Lessons Learned](#Lessons-Learned)
- [Documentation](#Documentation)

## Screenshots

Catalog Homepage with products displayed

![Screen Shot 2022-08-04 at 5 47 03 PM](https://user-images.githubusercontent.com/95142863/183228374-3241b297-63b3-4cf9-9e13-f8218f58222b.png)

Mobile Details Page with cart open

![Screen Shot 2022-08-04 at 5 47 28 PM](https://user-images.githubusercontent.com/95142863/183228380-b0755607-d4ba-4924-82bc-c0105ce8d395.png)

## Installation

This project requires Node.js- [here is a resouce to get started](https://nodejs.org/en/). One Node.js is installed, in the terminal:

1. Clone the Repo

```bash
git clone https://github.com/dieterichelizabeth/matcha-matcha.git
```

2. Install the dependencies

```bash
npm install
```

3. Run the seeds

```bash
npm run seed
```

4. Use [Sripe's test keys](https://stripe.com/docs/keys) in place of the following variables
```
process.env.REACT_APP_STRIPE_FRONT
process.env.STRIPE_THING
```

5. Start the project

```bash
npm run develop
```

## Technologies Used

<img src="https://img.shields.io/badge/react%20os-0088CC?style=for-the-badge&logo=reactos&logoColor=white" /> <img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" /> <img src="https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white"/> <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" /> <img src="https://img.shields.io/badge/Apollo%20GraphQL-311C87?&style=for-the-badge&logo=Apollo%20GraphQL&logoColor=white" /> <img src="https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white"/> <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white" /> <img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" />

## Lessons Learned

When starting this project, I decided to use the popular React UI library, Ant Design. After following the [Ant-Design Use Create React App Docs](https://ant.design/docs/react/use-with-create-react-app), and building the application, I began getting the error:

```
"Module not found: Can't resolve 'antd'".
```

Others who commented in [this github issue](https://github.com/ant-design/ant-design/issues/12169) seem to have had similar problems, but unfortunately the solutions posted were not working in my program. 😵‍💫 Unable to find a solution, I pulled Ant Design out in order to complete the project, and learned the importance of researching a library before diving headfirst into using an unfamiliar tool. That being said, I still plan on giving it another go in future projects because it seems like a great library, but will proceed with caution~

## Documentation

- [Apollo Client Documentation](https://www.apollographql.com/docs/react/get-started/)
- [React Redux Provider Documentation](https://react-redux.js.org/api/provider)
- [Nav Dropdown Bar W3schools](https://www.w3schools.com/howto/howto_css_dropdown_navbar.asp)

## Resources/Reading List

- [Tobiasahlin: How to Animate Box Shadow](https://tobiasahlin.com/blog/how-to-animate-box-shadow/)
- [Colbyfayock: Modal Display](https://www.youtube.com/watch?v=rWfhwW9forg&t=705s)
