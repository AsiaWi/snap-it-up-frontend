# Snap.it.up

Please note, this README is for front-end of a full stack application and if you click [HERE](https://snap-it-up-frontend-0a24e912efd8.herokuapp.com/), you can see live full stack deployed live website.


For details on back-end please visit this link: [BACK-END REPO](https://github.com/AsiaWi/snap-it-up-backend). The API provides a backend database to allow all [this](#site-goals) functionality. You can view the [API here](https://snap-it-up-25ef84f951df.herokuapp.com/). To view it in a nicer format install a JSON extension like [this one](https://chromewebstore.google.com/detail/jsonvue/chklaanhfefbnpoihckbnefhakgolnmc) if you're using Chrome.

 
![mockup](https://res.cloudinary.com/dmod5eglu/image/upload/v1706196668/mockup_xjpsa8.png)

## Table of Contents

- [Snap.it.up](#Snap-.-it-.-up)
  - [Table of Contents](#table-of-contents)
- [User Experience Design](#user-experience-design)
  - [The Strategy Plane](#the-strategy-plane)
    - [Site Goals](#site-goals)
    - [Agile Planning](#agile-planning)
      - [Epics](#epics)
      - [User Stories](#user-stories)
  - [The Structure Plane](#the-structure-plane)
    - [Features](#features)
    - [Features Left To Implement](#features-left-to-implement)
  - [The Skeleton Plane](#the-skeleton-plane)
    - [Wireframes](#wireframes)
      - [Desktop](#desktop)
      - [Mobile](#mobile)
  - [The Surface Plane](#the-surface-plane)
    - [Design/ Colour-Scheme/ Font/ Images](#design-colour-scheme-font-images)
- [Technolgies](#technolgies)
  - [Tools and Technologies](#tools-and-technologies)
  - [Imports](#imports)
    - [Installed Packages](#installed-packages)
- [Testing](#testing)
  - [Responsiveness](#responsiveness)
  - [Accessibility](#accessibility)
  - [Lighthouse](#lighthouse)
  - [Validator Testing](#validator-testing)
    - [HTML](#html)
    - [CSS](#css)
    - [JavaScript](#javascript)
  - [Manual Testing](#manual-testing)
    - [Functional Testing](#functional-testing)
      - [Links and Buttons](#links-and-buttons)
      - [Negative Testing](#negative-testing)
  - [Automatic Testing](#automatic-testing)
    - [Unit Tests](#unit-tests)
- [Bugs](#bugs)
- [Deployment](#deployment)
    - [Version Control](#version-control)
    - [Deploying in Heroku](#deploying-in-heroku)
    - [Cloning the Repository](#cloning-the-repository)
    - [Forking](#forking)
- [Credits](#credits)


# User Experience Design

## The Strategy Plane

### Site Goals

Snap.it.up is an application developed for users to be able to sell their unwanted items. Anyone can register, sign in and create an advert post to sell whatever they no longer need in their life. The website has been designed to be user friendly and make the experience smooth, pleasant and easy. Users can ask questions on the product if unsure of anything, they can conversate on the subject if needed by replying to the question, this way the whole conversation is in one place and users don't have to scroll to find their responses. Once buyers want to purchase an item they can make an offer by submitting a simple form. Seller can then either accept or reject an offer. Seller can accept more than one offer to ensure that item doesn't get stuck unsold if user who's offer has been accepted doesn't contact the seller. This means that whoever acts the fastest and contacts the seller to arrange collection/delivery will get the item. Once the item has been collected and paid for- seller can mark the offer as sold which will change the styling of the advert to show the advert is no longer active and has been sold. This will prevent users from wasting their time on submitting offers as they will know the item is gone. This won't however stop users to interact within the advert- ask questions etc. So if they want to ask if the item will ever be available again etc. they can. The inactive advert styling will also ensure that the seller doesn't have to delete the advert to avoid unwanted contact from users. This will create and show nice history for the seller which will help other users understand how well the seller is doing.
Additionaly users can also search and filter adverts list to easily find what they are looking for, making their experience smooth and enjoyable. Title, tags, location and item description has been included so that users can search by keywords and have bigger possibility of finding something they are looking for (ie. seller included specific key word only within the item description but not in the title). Filtering has been applied to allow users to select a category from drop down box returning a list of items within that category

### Agile Planning

The project was developed using agile methodology. Small features have been assigned to 10 EPICS. This was then divided into 4 sprints.
Labels have been used to mark which features the project : 'must have', 'should have', 'could have'. This was done so that I create a MVP in the time I have and only focus on the 'should have's' or 'could have's' if time allows. 
Each user story was closed if all acceptance criteria have been met.

Project board has been used to help me with the process [PROJECT BOARD-link](https://github.com/users/AsiaWi/projects/5/views/1?layout=board)

![PROJECT BOARD](https://res.cloudinary.com/dmod5eglu/image/upload/v1706064749/project-board_ldpjbh.png)

I have created two additional labels to indicate which user stories required backend work:
  - **API** 

and which ones required front-end work:

  - **React**. 
  
The stories that have both labels will be discussed in each README.

- REACT USER STORIES SPRINT1
![REACT_SPRINT1](https://res.cloudinary.com/dmod5eglu/image/upload/v1706197429/REACT_SPRINT1_byuss3.png)

- REACT USER STORIES SPRINT2
![REACT_SPRINT2](https://res.cloudinary.com/dmod5eglu/image/upload/v1706197431/REACT_SPRINT2_pyenmw.png)

- REACT USER STORIES SPRINT3
![REACT_SPRINT3](https://res.cloudinary.com/dmod5eglu/image/upload/v1706197433/REACT_SPRINT3_c7ajru.png)

- REACT USER STORIES SPRINT4
![REACT_SPRINT4](https://res.cloudinary.com/dmod5eglu/image/upload/v1706197435/REACT_SPRINT4_uaq2ib.png)
![REACT_SPRINT4_PART2](https://res.cloudinary.com/dmod5eglu/image/upload/v1706197437/REACT_SPRINT4_PART2_ypmlfp.png)

#### Epics

- 1-Project setup:
   This was a first task without it I wouldn't be able to continue with any of the project features so it was necessary to set up a basic structure of the project following the user stories included in this Epic.
- 2-Authentication/navigation:
   This was needed to allow users to actually use the page so that the page is interactive
- 3-Advert:
   Includes all features enabling the CRUD functionality for the user
- 4-Adverts page:
   This improves users journey throughout the page and makes it a smooth experience for everyone.
- 5-Questions:
   Includes all features enabling the CRUD functionality for the user
- 6-Replies: 
   Includes all features enabling the CRUD functionality for the user
- 7-Offers:
   Includes all features enabling the CRUD functionality for the user 
- 8-Profile:
   Allows user to CRE own details. Allows other users to find out more about user.
- 9-Rating:
  Includes all features enabling the CRUD functionality for the user
- 10-Documentation and deployment: 
   Absolutely necessary step to make sure the page is deployed with no erros and allows anyone access to all features.Needed to document the project

#### User Stories

 Each EPIC contains user stories allowing me to build up the project with small features:

- EPIC 1- Project setup
  - `As a DEVELOPER I need to SET UP THE PROJECT so that i CAN BUILD THE PAGE`
  - `As a DEVELOPER I need to ADD FAVICON TO THE PAGE so that USERS CAN EASILY FIND IT IF HAVING MULTIPLE TABS OPEN`

- EPIC 2-Authentication/navigation:
  - `As a USER I want to CREATE AN ACCOUNT to ACCESS ADDITIONAL FEATURES`
  - `As a REGISTERED USER I want to be able to SIGN IN to ACCESS MY ACCOUNT`
  - `As a USER I can SEE MY LOGGED IN STATUS so that I KNOW I NEED TO LOG IN OR LOG OUT AS NEEDED`
  - `As a LOGGED IN USER I can STAY LOGGED IN so that I CAN KEEP USING THE FEATURES UNTIL I LOG OUT MYSELF`
  - `As a USER I can SEE NAV BAR IN THE SAME PLACE so that I CAN NAVIGATE THE PAGE EASILY`
  - `As a user I can see different authentication options within nav bar depending on my log in status so that I'm not confused with my current log in status`
  - `As a user I can navigate through pages seamlessly so that I don't have to wait for page to refresh every time`
  
- EPIC 3-Advert:
  - `As a LOGGED IN USER I can ADD AN ADVERT so that I CAN SHARE IT WITH OTHERS AND SELL ITEMS`
  - `As a USER I can VIEW THE ADVERT POSTS DETAILS so that I LEARN MORE ABOUT IT`
  - `As a LOGGED IN USER I can SAVE AN ADVERT BY CLICKING ON SAVE ICON so that I CAN VIEW IT AGAINST OTHER ITEMS I SAVED/ KEEP AN EYE ON THE ITEM`
  - `As a SELLER I can EDIT MY ADVERTS so that I CAN UPDATE IT OR CORRECT IT IF NEEDED`
  - `As a LOGGED IN USER I can DELETE MY OWNS POSTS so that I CAN KEEP MY ACCOUNT UP TO DATE`
  - `As a USER I can VIEW A POSTED ADVERT so that I CAN FIND OUT ALL DETAILS ABOUT AN ITEM AND SELLER`
  - `As a SELLER OR BUYER I can COMMUNICATE PRIVATELY WITH A BUYER/SELLER ONCE OFFER HAS BEEN ACCEPTED so that I CAN ARRANGE FURTHER DETAILS`
  - `As a USER I can SEE ADVERT'S STATUS so that I KNOW IF ITEM IS AVAILABLE OR NOT`
  - `As a USER I can SEE HOW MANY VIEWS EACH POST HAD so that I KNOW HOW POPULAR ARE DIFFERENT ITEMS WITHIN THE PAGE`

- EPIC 4-Adverts page:
  - `As a USER I can VIEW A LIST OF MOST SAVED ITEMS so that I CAN FIND BEST DEALS`
  - `As a USER I can VIEW ALL ADVERTS AS A LIST STARTING WITH MOST RECENT ONES so that I CAN PICK UP ON THE NEWEST DEALS`
  - `As a USER I can SEARCH ADVERTS BY ITEM LOCATION OR KEYWORD/TAG NAME so that I CAN FIND ITEMS THAT I'M INTERESTED IN`
  - `As a USER I can VIEW ITEMS BY CATEGORY so that I CAN FIND ITEMS I NEED`
  - `As a LOGGED IN USER I can SAVE ITEMS so that I CAN GET BACK TO ADVERTS I'M INTERESTED IN EASILY`
  - `As a USER I can KEEP SCROLLING THROUGH ADVERT LIST VIEW so that I DON'T HAVE TO USE PAGINATION SYSTEM`
  - `As a User I can CLEARLY SEE CONFIRMATION OF MY SUBMISSIONS so that I AM SURE FORMS CONTENT HAS REACHED THE RIGHT PLACE`
- EPIC 5-Questions:
  - `As a LOGGED IN USER I can ASK A QUESTION ABOUT AN ADVERT so that I CAN GET MORE INFORMATION BEFORE PURCHASE`
  - `As a SELLER I can SEE A DATE WHEN QUESTION WAS ASKED so that I KNOW IF IT'S STILL RELEVANT OR URGENT`
  - `As a SELLER I want OTHER USERS TO SEE THE PREVIOUSLY ASKED QUESTIONS AND ANSWERS so that I DON'T HAVE TO ANSWER TO EVERYONE INDIVIDUALLY`
  - `As a QUESTION OWNER I can EDIT OR DELETE A QUESTION I ASKED so that I CAN CONTROL MY OUTPUT`
  - `As a USER I can SCROLL THROUGH QUESTIONS WITHOUT USING PAGE PAGINATION so that MY EXPERIENCE OS USING PAGE IS MORE SEAMLESS`

- EPIC 6-Replies:
  - `As a LOGGED IN USER I can REPLY TO QUESTIONS so that I CAN COMMUNICATE BACK WITH POTENTIAL BUYERS`
  - `As a BUYER I can VIEW REPLIES LIST TO MY QUESTION BELOW THE QUESTION so that CLARIFY MY CONCERNS`
  - `As a USER I can SEE WHEN SOMEONE REPLIED TO MY QUESTION so that I KNOW IF IT'S MOST RELEVANT`
  - `As a LOGGED IN USER I can EDIT/DELETE MY REPLY so that MANAGE MY INPUT`
  - `As a USER I can SCROLL THROUGH REPLIES WITHOUT USING PAGINATION so that MY EXPERIENCE OF USING PAGE IS MORE SEAMLESS`
- EPIC 7-Offers:
  - `As a USER I can SEE ALL PREVIOUSLY MADE OFFERS so that I DON'T WASTE MY TIME MAKING THE SAME OFFERS SELLER ALREADY WASN'T HAPPY WITH`
  - `As a LOGGED IN USER I can MAKE AN OFFER TO A SELLER so that I CAN PURCHASE THE ITEM`
  - `As a SELLER I can ACCEPT OR REJECT AN OFFER RECEIVED so that I CAN SELL AN ITEM AT PRICE I FIND ACCEPTABLE`
  - `As a SELLER I can MARK AN OFFER AS SOLD so that IT'S CLEAR WHICH OFFER WENT THROUGH`
  - `As a BUYER I can SEE SELLERS EMAIL/TEL NUMBER OR BOTH so that I CAN DISCUSS DETAILS REGARDING POSTAGE/COLLECTION once offer was accepted
  - `As a SELLER I want ALL OFFERS TO STAY VISIBLE so that OTHERS DON'T MAKE SAME OFFERS AGAIN IF I'M NOT HAPPY WITH PRICE`
- EPIC 8-Profile:
  - `As a USER I can VIEW EVERYONES PROFILE DETAILS so that I CAN LEARN MORE ABOUT SELLERS/BUYERS:(how long they're active, number of adverts posted, feedback/rating)`
  - `As a PROFILE OWNER I can EDIT MY PROFILE DETAILS so that I CAN KEEP IT UP TO DATE`
  - `As a PROFILE OWNER I can UPDATE PASSWORD AND USERNAME so that I CAN KEEP MY PROFILE SAFE`
  - `As a USER I can SEE ALL ADVERTS USER POSTED so that I CAN PURCHASE MORE IF I WANT TO`
  - `As a USER I can SEE HIGHEST RATED PROFILE LIST so that I KNOW WHAT USERS ARE MOST RECOMMENDED`

- EPIC 9-Rating:
  - `As a LOGGED IN USER I can LEAVE FEEDBACK FOR THE BUYER/SELLER so that OTHERS KNOW HOW RELIABLE THE USER IS`
  - `As a LOGGED IN USER I can RATE A PROFILE ONCE I PURCHASED SOMETHING FROM THE SELLER so that OTHERS KNOW HOW RELIABLE THE SELLER IS`
  - `As a USER I can EDIT OR DELETE RATING I HAVE LEFT so that I CONTROL MY INPUT`
  - `As a SELLER AND BUYER I can SEE WHEN RATINGS HAVE BEEN LEFT FOR USERS so that I KNOW IF IT'S SAFE TO USE THEM`

- EPIC 10-Documentation and deployment:
  - `As a DEVELOPER I need to CREATE README FILE so that I CAN DOCUMENT THE PROCESS OF CREATING THE APPLICATION`
  - `As a DEVELOPER I need to deploy both projects and link them together so that USERS CAN USE FULL STACK WEBSITE`
