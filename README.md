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

## The Structure Plane

### Features

All features have been implemented with user stories in mind 

#### Favicon

``As a DEVELOPER I need to ADD FAVICON TO THE PAGE so that USERS CAN EASILY FIND IT IF HAVING MULTIPLE TABS OPEN``

![favicon_image](https://res.cloudinary.com/dmod5eglu/image/upload/v1706203930/favicon_image_revvnf.png)

- Favicon icon displayed within a tab.
- The aim of the feature is for user to easily find the tab if for example having a lot of sites open at the same time 

#### Navigation menu

``As a USER I can SEE NAV BAR IN THE SAME PLACE so that I CAN NAVIGATE THE PAGE EASILY``

``As a user I can see different authentication options within nav bar depending on my log in status so that I'm not confused with my current log in status``

`As a USER I can SEE MY LOGGED IN STATUS so that I KNOW I NEED TO LOG IN OR LOG OUT AS NEEDED`

* Nav bar/ large screens/ user unauthorised:
![nav_bar_large_screens_UNAUTHORISED](https://res.cloudinary.com/dmod5eglu/image/upload/v1706201613/NAVBAR_LARGE_SCREEN_UNAUTHORISED_cjlluc.png)
* Nav bar/ large screens/ user authorised:
![nav_bar_large_screens_AUTHORISED](https://res.cloudinary.com/dmod5eglu/image/upload/v1706201613/NAVBAR_LARGE_SCREEN_AUTHORISED_pt8mha.png)

* Nav bar/ small screens/ user unauthorised:

![nav_bar_small_screens_UNAUTHORISED](https://res.cloudinary.com/dmod5eglu/image/upload/v1706201613/NAVBAR_SMALL_SCREEN_UNAUTHORISED_mmhq9i.png)
* Nav bar/ small screens/ user authorised:

![nav_bar_small_screens_AUTHORISED](https://res.cloudinary.com/dmod5eglu/image/upload/v1706201613/NAVBAR_SMALL_SCREEN_AUTHORISED_k02dhm.png)


- This is shown the same on all pages for consistent design and good UX. Responsive design allows for hamburger bar on smaller screens. When user is logged in - a username is displayed.
- The aim of the feature is so that the user can easily navigate around the page. Username shown is there for confirmation of logged in state for user on each page.  Options the user can select differ based on wheter the user is logged in or not. This is so that the nav bar isn't overcrowded and is simple to use.
     - Home - for all users
     - Snap.it.up logo - taking users to home page-for all users
     - Register - for unauthorised users
     - Sign in - for unauthorised users
     - Sign-out- for authorised users
     - Saved - for authorised users 
     - 'username' - for authorised users
     - Sell !t - for authorised users

#### Sign-In/ Sign-Up/ Log-Out

Each of the following pages are accessible through the navigation menu as explained above.

Implementing this user story allows users to register:

`` As a USER I want to CREATE AN ACCOUNT to ACCESS ADDITIONAL FEATURES``

FEATURE DESIGN FOR LARGE AND SMALL SCREENS:
![REGISTER_LARGESCREENS](https://res.cloudinary.com/dmod5eglu/image/upload/v1706204429/REGISTER_LARGESCREEN_uwj28p.png)
![REGISTER_SMALLSCREENS](https://res.cloudinary.com/dmod5eglu/image/upload/v1706204428/REGISTER_SMALLSCREEN_uepmc7.png)

Link to sign-in if user entered incorrect page have been provided for better UX.

Implementing this user story allows users to sign-in:

``As a REGISTERED USER I want to be able to SIGN IN to ACCESS MY ACCOUNT``

FEATURE DESIGN FOR LARGE AND SMALL SCREENS:
![SIGNIN_LARGESCREENS](https://res.cloudinary.com/dmod5eglu/image/upload/v1706204422/SIGN-IN-LARGESCREENS_wcttjo.png)
![SIGNIN_SMALLSCREENS](https://res.cloudinary.com/dmod5eglu/image/upload/v1706204422/SIGN-IN-SMALLSCREENS_vqdysn.png)

Link to register if user entered incorrect page have been provided for better UX.

Implementing this user story improves user experience whilst using the page, it keeps user logged in and allows for sign-out from nav menu rather than logging out on every refresh:

``As a LOGGED IN USER I can STAY LOGGED IN so that I CAN KEEP USING THE FEATURES UNTIL I LOG OUT MYSELF ``

![sign_OUT](https://res.cloudinary.com/dmod5eglu/image/upload/v1706204655/SIGN-OUT_tfulux.png)


- These pages allow the user to sign up so that they have more options to interact with other users/adverts or post their own content.
- The aim of these features is so that the page is more interactive and users have access to CRUD of their own content.


### Home/Advert List View

`As a USER I can VIEW ALL ADVERTS AS A LIST STARTING WITH MOST RECENT ONES so that I CAN PICK UP ON THE NEWEST DEALS`
- When entering page for the first time, the user can see list of adverts straight away. They can see all the additional functionality which already
suggests the experience here is smooth and easy. Adverts are listed based on created and updated date in descending order, this was done so that if seller updates price of item to lower one for example - people can easily pick it up. If I have included only created date, these updated adverts would have gone lost down the bottom of the list so people could not see sales/bargains straight away.

`As a USER I can KEEP SCROLLING THROUGH ADVERT LIST VIEW so that I DON'T HAVE TO USE PAGINATION SYSTEM`
- Infinite scroll has been implemented so that the user doesn't have to use page pagination which makes the experience nice and smooth.

`As a user I can navigate through pages seamlessly so that I don't have to wait for page to refresh every time`
- Routing has been implemented to seamlessly navigate through content without having to wait for page refresh every time user clicks on something. This has been done throughout the entire page.

Home page view/desktop:

![home_page_DESKTOP](https://res.cloudinary.com/dmod5eglu/image/upload/v1706206029/HOME_PAGE_DESKTOP_qbead0.png)

Home page view/mobile:

![home_page_mobile](https://res.cloudinary.com/dmod5eglu/image/upload/v1706206028/HOME_PAGE_MOBILE_uobzhe.png)

EACH FEATURE DESCRIPTION BUILDING UP THE LIST VIEW IN DETAIL AS FOLLOWS:

#### MOST SAVED ADVERTS SIDEBAR

`As a USER I can VIEW A LIST OF MOST SAVED ITEMS so that I CAN FIND BEST DEALS`

- Desktop view:

![MOST_SAVED_ADVERTS_SIDEBAR_DESKTOP](https://res.cloudinary.com/dmod5eglu/image/upload/v1706207153/MOST_SAVED_ADVERTS_SIDEBAR_DESKTOP_zpxj2d.png)
- Mobile view:

![MOST_SAVED_ADVERTS_SIDEBAR_MOBILE](https://res.cloudinary.com/dmod5eglu/image/upload/v1706207152/MOST_SAVED_ADVERTS_SIDEBAR_MOBILE_fgwcof.png)

- This feature allows users to see top most saved adverts, (3 for mobile)
- The aim of this feature is both: to encourage users to be more active on the page and boost the pages and to improve the UI for desktop page

#### Search adverts

`As a USER I can SEARCH ADVERTS BY ITEM LOCATION OR KEYWORD/TAG NAME so that I CAN FIND ITEMS THAT I'M INTERESTED IN`

* Search bar view from large screens/ right side:
![SEARCH_LARGE_SCREEN](https://res.cloudinary.com/dmod5eglu/image/upload/v1706207516/SEARCH_SELECT_LARGE_SCREENS_piyjke.png)
* Search bar view from medium to small screens:

![SEARCH_small_SCREEN](https://res.cloudinary.com/dmod5eglu/image/upload/v1706207516/SEARCH_SMALL_SCREEN_zbkbwv.png)

- This feature allows users to search adverts by keywords, title, item description, tags and location has been included in this search bar to allow users to find items more easily.
This is so that for exmaple if seller includes key work within item description but not title- potential buyers can still find it with the help of search bar. Location included in search here refers to item location which has been implemented seperately to profile location so that the seller isn't restricted to only sell items from own location(they might want to sell something on behalf of their parents for example).

- The aim of this feature is to make user experience as smooth and easy as possible

#### Categories selection
`As a USER I can VIEW ITEMS BY CATEGORY so that I CAN FIND ITEMS I NEED`

* Select categories drop-down view from large screens/ left side:

![SELECT_LARGE_SCREEN](https://res.cloudinary.com/dmod5eglu/image/upload/v1706207516/SEARCH_SELECT_LARGE_SCREENS_piyjke.png)
* Search bar view from medium to small screens:

![Select_small_SCREEN](https://res.cloudinary.com/dmod5eglu/image/upload/v1706207522/SELECT_SMALL_SCREEN_gzbfrp.png)

* CATEGORIES AVAILABLE:
   * 'Clothing'
   * 'Electronics'
   * 'HomeDeco/Furniture'
   * 'Games'
   * 'Books'
   * 'Beauty/Personal Care'
   * 'Home appliances'
   * 'Vintage'
   * 'Baby'
   * 'Pets'
   * 'Sports'
   * 'Other'

- This feature allows user to select category they might be interested in to view items related to it. This has been done as a search field on backend which means it will also pick up string from other search fields (title, item description etc. -as above, to broaden the search and pick up all related ads)
- The aim of this feature is to again broaden the search for the potential buyer.

#### Advert
`As a USER I can VIEW THE ADVERT POSTS DETAILS so that I LEARN MORE ABOUT IT`

* Advert view / medium to large screens:

![ADVERT_VIEW_FROM_LISTVIEW_LARGE_TO_MEDIUM_SCREENS](https://res.cloudinary.com/dmod5eglu/image/upload/v1706209272/ADVERT_VIEW_FROM_LISTVIEW_LARGE_TO_MEDIUM_SCREENS_f9jly1.png)
* Advert view / small screens:

![ADVERT_VIEW_FROM_LISTVIEW_SMALL_SCREENS](https://res.cloudinary.com/dmod5eglu/image/upload/v1706209273/ADVERT_VIEW_FROM_LISTVIEW_SMALL_SCREENS_e3bayl.png)

- This is in regards to being able to see some of the adverts details straight away with the aim of not having to click to detail view. User can see :
   - title (optional)
   - sellers avatar and name
   - sellers location
   - item description
   - item image
   - item key details:
      - price
      - item location
      - added/updated date
      - contact details for seller
      - payment options
      - delivery/collection option
      - Page Views number
      - Number of how many times ad was saved
      - tags
      - icon to save an item
      - icon to show user can click to detail view to ask question
      - icon to show user can click to detail view to make an offer

- This feature allows all users those who are logged in and not- to view posts shared by other users.
-The aim of this feature having this content is so that firstly- user can see from the moment they enter the page what is the aim of the page,keep anyone who just entered the page interested and encourage to explore it more, and secondly-it saves the user on clicking to another page for actual content if I was to include the adverts list view on another page.

 ##### Save advert
 `` As a LOGGED IN USER I can SAVE ITEMS so that I CAN GET BACK TO ADVERTS I'M INTERESTED IN EASILY ``

bookmark before item is saved/ bookmark available from advert view as described here: [Advert](#advert)

 ![SAVE_ADVERT_BOOKMARK_not_saved](https://res.cloudinary.com/dmod5eglu/image/upload/v1706218623/bookmark_not_saved_vimuec.png)

 `As a LOGGED IN USER I can SAVE AN ADVERT BY CLICKING ON SAVE ICON so that I CAN VIEW IT AGAINST OTHER ITEMS I SAVED/ KEEP AN EYE ON THE ITEM`

List of saved items available through 'saved' option from nav bar/ please note as this advert was saved the bookmark within the ad shows solid:

 ![SAVE_ADVERTS_LIST](https://res.cloudinary.com/dmod5eglu/image/upload/v1706218626/saved_list_kicrg9.png)

 - This feature allows any logged in user who is not an advert owner, to save an advert they are interested in.
   - Unauthorised user - will be taken to 'sign-in' page and upon successful login will be taken back to the same page as they were before.
   - Authorised user - if didn't previously like the post - hollow bookmark icon will be displayed -if clicked - the icon will change to solid one and the 'saved' number within the add will increase by 1.
   - Authorised user - if previously saved the post- solid bookmark icon will be shown- if clicked- the icon will change to hollow one and the 'saved' number within the add will decrease by one.
  - advert owner will get an overlay text to say they can't save their own posts as can view their own within their own profile page.
  

##### Page views

`As a USER I can SEE HOW MANY VIEWS EACH POST HAD so that I KNOW HOW POPULAR ARE DIFFERENT ITEMS WITHIN THE PAGE`

![page_views](https://res.cloudinary.com/dmod5eglu/image/upload/v1706219011/page_views_dpb6ov.png)
- The page views increment when user enters detail view, per session. The page views are visible from the [advert](#advert) (list view and detail view). 

- The aim of this is to increase users interest when scrolling through list view, knowing a lot of people are interested too.

#### Add Advert

`` As a LOGGED IN USER I can ADD AN ADVERT so that I CAN SHARE IT WITH OTHERS AND SELL ITEMS``

![ADD_ADVERT](https://res.cloudinary.com/dmod5eglu/image/upload/v1706210440/ADD_ADVERT_xq08lz.png)

- This feature allows user to add their own advert/entry. Available through nav bar 'sell !t' option. The following fields have been added to form once entered the sell it:
   - Activity Title - optional , this has been made optional as there is already a lot of other content wo describe item like tags, which could be easier for users to express then thinking of a title.
   - Currency- set to GBP and disabled as the page is a UK website
   - Add image- required
   - Price - required
   - Tags - required
   - Item description - required
   - Contact details - required
   - Item location - required, this has been marked specifically as 'item location' as users can also add their profile location. This means that users can sell items from more than one   location.
   - Payment options - default set to 'Cash or Paypal', can be changed to 'Cash only' or 'Paypal only'
   - Shippment options - default set to 'Collection or delivery', can be changed to 'Collection only' or 'Delivery only'
   - Categories - default set to clothing, can be changed to any of the categories described here : [Categories selection](#categories-selection)
   
- This is a main feature of the page without which the page intent would not be fullfilled.
- The aim of the feature is to allow users to post and sell their unwanted items

### Advert detail view
`As a USER I can VIEW A POSTED ADVERT so that I CAN FIND OUT ALL DETAILS ABOUT AN ITEM AND SELLER`

This feature opens up when clicked on the advert from list view, The features that build it up are as follows:

#### Advert
Advert has the same view as: [Advert view from list View](#advert-view-from-list-view)

##### Edit or Delete Advert

`` As a SELLER I can EDIT MY ADVERTS so that I CAN UPDATE IT OR CORRECT IT IF NEEDED``

 `` As a LOGGED IN USER I can DELETE MY OWNS POSTS so that I CAN KEEP MY ACCOUNT UP TO DATE ``

![EDIT_OR_DELETE_ADVERT](https://res.cloudinary.com/dmod5eglu/image/upload/v1706210442/EDIT_OR_DELETE_ADVERT_suwcko.png)

 - CRUD functionality. This feature is available only if user is logged in and post belongs to the logged in user,when clicked on the three dots menu:
   - user will see an icon to edit and icon to delete
   - if user clicks on edit- this will take them to already filled in advert form which looks the same as the add advert form above. User can change whatever they want and save an item to    keep changes.
   - if user submits changes, a message confirming those updates were saved will display if successful or a toast error will display to inform the user the changes were unsuccessful
   - The aim of this is so that is user makes any errors/ wants to update the post- they can update it here. 
   - if user selects delete option which is the ' trash-bin' icon, the advert will get deleted -if successful a message confirming deletion will show, if unsuccessful an error toast message will display.
   - The aim of this is for user to be able to delete any unwanted content 

#### Questions

`As a SELLER I want OTHER USERS TO SEE THE PREVIOUSLY ASKED QUESTIONS AND ANSWERS so that I DON'T HAVE TO ANSWER TO EVERYONE INDIVIDUALLY`

 - Questions list is a feature available to all users regardless of auth state, it shows within a tab under an advert view. This tab has been set as a default one when advert detail view is opened so that both tabs don't show as closed, this is so user doesn't open half empty page with no content different to what they already seen in advert list view.

Questions list view when logged in:

![QUESTIONS_LIST_QS_EXIST_USER_LOGGED_IN](https://res.cloudinary.com/dmod5eglu/image/upload/v1706216324/QUESTIONS_LIST_QS_EXIST_USER_LOGGED_IN_dexn9e.png)

Questions list view when logged out:

![QUESTIONS_LIST_QS_EXIST_USER_SIGNED_OUT](https://res.cloudinary.com/dmod5eglu/image/upload/v1706216323/QUESTIONS_LIST_QS_EXIST_USER_SIGNED_OUT_p1k78g.png)

- When no questions has been asked yet a message informing users of this will show:

when logged in:

![NO_QUESTIONS_YET_LOGGED_IN](https://res.cloudinary.com/dmod5eglu/image/upload/v1706216325/NO_QUESTIONS_YET_LOGGED_IN_mblog8.png)

when signed-out:

![NO_QUESTIONS_YET_SIGNED_OUT](https://res.cloudinary.com/dmod5eglu/image/upload/v1706216326/NO_QUESTIONS_YET_SIGNED_OUT_acdid1.png)

- The aim of the questions list is so that potential buyers can see previously asked questions and not ask the same thing twice.

   `As a SELLER I can SEE A DATE WHEN QUESTION WAS ASKED so that I KNOW IF IT'S STILL RELEVANT OR URGENT`

- This feature shows human friendly timestamp displayed next to question owner
- The aim of all this is to make seller aware how long potential buyers have been waiting for reply.

   `As a USER I can SCROLL THROUGH QUESTIONS WITHOUT USING PAGE PAGINATION so that MY EXPERIENCE OS USING PAGE IS MORE SEAMLESS`

- The aim of infinite scroll is to make users experience as enjoyable as possible without having to use page pagination.

`` As a LOGGED IN USER I can ASK A QUESTION ABOUT AN ADVERT so that I CAN GET MORE INFORMATION BEFORE PURCHASE ``

-  if user is logged in they will see a form to leave a question, once submitted- a confirmation message will display at top of the screen and the question will display below within questions list view

when no questions exists yet:

![QUESTION_FORM_NO_QUESTIONS_YET_LOGGED_IN](https://res.cloudinary.com/dmod5eglu/image/upload/v1706216325/NO_QUESTIONS_YET_LOGGED_IN_mblog8.png)

when questions already exist:

![QUESTION_FORM_QUESTIONS_LIST_QS_EXIST_USER_LOGGED_IN](https://res.cloudinary.com/dmod5eglu/image/upload/v1706216324/QUESTIONS_LIST_QS_EXIST_USER_LOGGED_IN_dexn9e.png)


 - The aim of this feature is to allow users to ask questions if they have any concerns regarding the item advertised.
 
 - If user isn't logged in they will see sign in prompt, once logged in they will be taken back to advert page
      - Prompt to log in when questions exist:

    ![LOG_IN_QUESTIONS_EXIST](https://res.cloudinary.com/dmod5eglu/image/upload/v1706216323/QUESTIONS_LIST_QS_EXIST_USER_SIGNED_OUT_p1k78g.png)
      - Prompt to log in when no questions has been asked:

    ![LOGIN_NO_QUESTIONS_YET](https://res.cloudinary.com/dmod5eglu/image/upload/v1706216326/NO_QUESTIONS_YET_SIGNED_OUT_acdid1.png)

 `` As a QUESTION OWNER I can EDIT OR DELETE A QUESTION I ASKED so that I CAN CONTROL MY OUTPUT``
 
 ![EDIT_OR_DELETE_ADVERT](https://res.cloudinary.com/dmod5eglu/image/upload/v1706210442/EDIT_OR_DELETE_ADVERT_suwcko.png)

 - CRUD functionality. This feature is available only if user is logged in only within their own questions,when clicked on the three dots menu:
   - user will see an icon to edit and icon to delete
   - if user clicks on edit- this will bring up the question within edit form, user can make any changes and press 'save' or 'cancel' if changed mind
   - if user submits changes a message confirming that updates were saved will display if successful, or toast error message if unsuccessful.
   - The aim of this is so that is user can edit questions if they made any mistakes. 
   - if user selects delete option which is the ' trash-bin' icon, the advert will get deleted -if successful a message confirming deletion will show, if unsuccessful an error toast message will display.
   - The aim of this is for user to be able to delete any unwanted content 

#### Replies

`As a BUYER I can VIEW REPLIES LIST TO MY QUESTION BELOW THE QUESTION so that CLARIFY MY CONCERNS`

 - Replies list is a feature available to all users regardless of auth state, list of replies related to each question can be accessed within each question by clicking on '{number} Replies' button, when clicked the button text will change to 'Hide {number} replies', user can hide the replies list by clicking the button again.

Here you can see 2 buttons related to that specific question: 'Reply' button and Replies list button '1 Replies` before it has been clicked to reveal the list:

![Replies_button](https://res.cloudinary.com/dmod5eglu/image/upload/v1706224255/REPLIES_BUTTONS_ryo1rm.png)

Replies list view when logged in/ '1 replies' button has already been clicked so the button text changed to 'Hide 1 Replies':

![REPLIES_LIST_EXIST_USER_LOGGED_IN](https://res.cloudinary.com/dmod5eglu/image/upload/v1706225394/REPLIES_LIST_EXIST_USER_LOGGED_IN_owt48v.png)

Replies list view when logged out/ here the 'Reply' button is no longer displayed as user is logged out, 'Replies' button view before it has been clicked :

![REPLIES_LIST_EXIST_USER_SIGNED_OUT](https://res.cloudinary.com/dmod5eglu/image/upload/v1706225394/REPLIES_LIST_EXIST_USER_SIGNED_OUT_zy9ebo.png)

Replies list view when logged out/ here the 'Reply' button is no longer displayed as user is logged out, 'Replies' button view AFTER it has been clicked shows 'Hide replies' and a list of replies shows below/ as user is logged out that is where it prompts them to log in :

![REPLIES_LIST_EXIST_USER_SIGNED_OUT](https://res.cloudinary.com/dmod5eglu/image/upload/v1706225394/REPLIES_LIST_EXIST_USER_SIGNED_OUT_LIST_SHOWN_ks5jpt.png)

- When no replies exists yet, a message informing users of this will show:

when logged in:

![NO_REPLIES_YET_LOGGED_IN](https://res.cloudinary.com/dmod5eglu/image/upload/v1706225394/NO_REPLIES_YET_LOGGED_IN_x3pkym.png)

when signed-out:

![NO_REPLIES_YET_SIGNED_OUT](https://res.cloudinary.com/dmod5eglu/image/upload/v1706225394/NO_REPLIES_YET_SIGNED_OUT_tgfz1b.png)

- The aim of the replies list is so that potential buyers can see answers to previously asked questions should they be interested, and not ask the same thing twice. The reason I created the replies model is that I think it's better to keep the conversation in one place rather then search through a list of random comments to see if anyone already replied to something similar. The reason why I implemented the feature to hide and display is so that if there is many replies to a question, users who are not interested in the specific topic can scroll through questions easier.

   `As a USER I can SEE WHEN SOMEONE REPLIED TO MY QUESTION so that I KNOW IF IT'S MOST RELEVANT`

- This feature shows human friendly timestamp displayed next to reply owner
- The aim of this is so that potential buyers can see when replies have been submitted and if since then no offers higher than they were willing to put were made.

   `As a USER I can SCROLL THROUGH REPLIES WITHOUT USING PAGINATION so that MY EXPERIENCE OF USING PAGE IS MORE SEAMLESS`

- The aim of infinite scroll is to make users experience as enjoyable as possible without having to use page pagination.

`` As a LOGGED IN USER I can REPLY TO QUESTIONS so that I CAN COMMUNICATE BACK WITH POTENTIAL BUYERS ``

-  if user is logged in they will see a button within each question saying 'REPLY', they can click on the button which will open up a form where they can type a reply and press post to send it, once submitted- a confirmation message will display at top of the screen, the reply will display within replies list view and a number of replies within replies button will increase by 1



![REPLY_FORM_NO_REPLIES_YET_LOGGED_IN](https://res.cloudinary.com/dmod5eglu/image/upload/v1706225394/REPLY_FORM_NO_REPLIES_YET_LOGGED_IN_lxzlto.png)


 - The aim of this feature is to allow users to reply to any asked questions.
 
 - If user isn't logged in they will not see 'REPLY' button, instead they will only see replies list and when clicked they will see sign in prompt, once logged in they will be taken back to the same page
      - Promped to log in when replies exist:

    ![LOG_IN_replies_EXIST](https://res.cloudinary.com/dmod5eglu/image/upload/v1706225394/REPLIES_LIST_EXIST_USER_SIGNED_OUT_LIST_SHOWN_ks5jpt.png)
      - Prompt to log in when no replies has been provided yet:

    ![LOGIN_NO_REPLIES_YET](https://res.cloudinary.com/dmod5eglu/image/upload/v1706225394/NO_REPLIES_YET_SIGNED_OUT_tgfz1b.png)

 `` As a LOGGED IN USER I can EDIT/DELETE MY REPLY so that MANAGE MY INPUT``
 
 [EDIT_OR_DELETE_MENU](https://res.cloudinary.com/dmod5eglu/image/upload/v1706210442/EDIT_OR_DELETE_ADVERT_suwcko.png)

 - CRUD functionality. This feature is available only if user is logged in and only within replies they have posted,when clicked on the three dots menu:
   - user will see an icon to edit and icon to delete
   - if user clicks on edit- this will bring up edit form looking the same as add form but already with reply content, user can make any changes and press 'save' or 'cancel' if changed mind
   - if user submits changes a toast message confirming that updates were saved will display if successful, or toast error message if unsuccessful.
   - The aim of this is so that users can update their own content should they need to
   - if user selects delete option which is the ' trash-bin' icon, the reply will get deleted -if successful a toast message confirming deletion will show, if unsuccessful an error toast message will display.
   - The aim of this is for user to be able to delete any unwanted content 

   #### Offers

`As a USER I can SEE ALL PREVIOUSLY MADE OFFERS so that I DON'T WASTE MY TIME MAKING THE SAME OFFERS SELLER ALREADY WASN'T HAPPY WITH`

 - Offer list is a feature available to all users regardless of auth state, list of offers related to each question can be accessed by clicking on the tab next to questions tab- below advert within advert details page.

There is an offer 'how-to' box at the top of the offer tab, for all users so that they understand the process if using the app for the first time:

![how_to_offer](https://res.cloudinary.com/dmod5eglu/image/upload/v1706229712/offer_info_oy799q.png)

Offers list looks different to advert owner and to all other users:

offers list for advert owner(so logged in of course):

![OFFER_LIST_ADVERT_OWNER](https://res.cloudinary.com/dmod5eglu/image/upload/v1706228259/OFFER_LIST_ADVERT_OWNER_obfwys.png)

Offers list for all other users:
-when logged in/ logged out when offers already exist:

![OFFER_LIST_ALL_USERS](https://res.cloudinary.com/dmod5eglu/image/upload/v1706228350/OFFER_LIST_ALL_USERS_bcnzr4.png)

-when no offers has been made and logged in:

![NO_OFFERS_YET_LOGGED_IN](https://res.cloudinary.com/dmod5eglu/image/upload/v1706228442/NO_OFFERS_YET_LOGGED_IN_ceuith.png)

-when no offers has been made and logged out:

![NO_OFFERS_YET_LOGGED_OUT](https://res.cloudinary.com/dmod5eglu/image/upload/v1706228596/NO_OFFERS_YET_LOGGED_OUT_eo3ldc.png)

- The aim of keeping the offers as list view helps other users to know what amounts seller is not willing to accept

`` As a LOGGED IN USER I can MAKE AN OFFER TO A SELLER so that I CAN PURCHASE THE ITEM ``

available to all logged in users right above offers list/ only numbers can be submitted which keeps the intent of offers and questions in place:

![OFFER_FORM](https://res.cloudinary.com/dmod5eglu/image/upload/v1706228672/OFFER_FORM_kiwdhu.png)

- This feature has been provided to submit an offer of how much the buyer would like to purchse the product
- The aim of this is to provide straight forward system to check with seller what amount they are happy with
 
`As a SELLER I want ALL OFFERS TO STAY VISIBLE so that OTHERS DON'T MAKE SAME OFFERS AGAIN IF I'M NOT HAPPY WITH PRICE`

- This feature means that an option to delete and edit the offers by the user who initially submitted it, noone but advert owner has access to the buttons to change offer status, offers can't be deleted, this functionality has been disabled.

- The aim of this is to ensure that all offers stay on and other users not repeat offers with the same or lower amounts

`` As a SELLER I can ACCEPT OR REJECT AN OFFER RECEIVED so that I CAN SELL AN ITEM AT PRICE I FIND ACCEPTABLE``

![offer_status_change](https://res.cloudinary.com/dmod5eglu/image/upload/v1706228259/OFFER_LIST_ADVERT_OWNER_obfwys.png)

- This feature allows seller to have an access to change displayed within the received offer- offer status, the seller has access to three buttons: 'accept', 'reject' and 'sold'
The first two change the offer status. If seller rejects it, potential buyers can see what seller isn't willing to accept, if seller accepts it, this means two things: first- the buyer who submitted the offer can contact the seller via provided contact details to arrange the sale, but also second- if any other potential buyer sees that the seller is happy with the amount but really wants the item, they can raise a higher amount to bid it. 

- The aim of this feature is to provide a clear signal to the buyer if they should contact the seller rather then receiving a lot of messages or calls via personal contact means, for offers they are not happy with.

`As a SELLER I can MARK AN OFFER AS SOLD so that IT'S CLEAR WHICH OFFER WENT THROUGH`

`As a USER I can SEE ADVERT'S STATUS so that I KNOW IF ITEM IS AVAILABLE OR NOT`

![item_sold](https://res.cloudinary.com/dmod5eglu/image/upload/v1706229040/sold_riwnki.png)

- Once the seller received a payment for the item and the item has been collected, this feature allows the seller to mark the winning offer to SOLD which will also change the advert active status from active to inactive- which will change the styling of the advert to clearly display that the item has been sold. (Once seller marked the offer sold - this can't be undone as it has been set up with the intention that sellers will only set it to such status if the item is gone. Even if another user sent an offer (even if seller accepted such offer by mistake) - the advert status would stay inactive).The Info box at the top of the offers tab clearly explains the process.

- The aim of this feature is to stop sellers from receiving a lot of contact/offers for products they no longer have but at the same time not have to delete the advert. This will keep nice history of sellers activity improving sellers 'reputation' in a long run if successful. As you can see the image above- the offer there has status SOLD, this would have changed the advert status to inactive which would trigger the advert styling : I have reduced opacity of displayed advert and added clear red 'item sold' sign to make it clear that item is no longer available.

### Profile Page

![PROFILE_PAGE](https://res.cloudinary.com/dmod5eglu/image/upload/v1706231920/PROFILE_PAGE_pmjn1q.png)

This feature has been implemented to keep track of most important key events for the users. Profile can be accessed by clicking on profiles avatar or username link within nav bar if logged in, the profile page has been build up of the following features:


#### Profile details feature
`As a USER I can VIEW EVERYONES PROFILE DETAILS so that I CAN LEARN MORE ABOUT SELLERS/BUYERS:(how long they're active, number of adverts posted, feedback/rating)`

![PROFILE_FEATURE](https://res.cloudinary.com/dmod5eglu/image/upload/v1706231918/profile_feature_nnpcl1.png)

This feature displays profile details, You can see profile image, profile location if provided, number of adverts posted by the profile owner, number of ratings received by the profile owner, an average rating for those and lastly how long the profile owner has been a page member.

- The aim of this is for other user to quickly see key profile events that draw a general picture of how reliable the user is should they want to purchase anything from them.

`As a PROFILE OWNER I can EDIT MY PROFILE DETAILS so that I CAN KEEP IT UP TO DATE`
`As a PROFILE OWNER I can UPDATE PASSWORD AND USERNAME so that I CAN KEEP MY PROFILE SAFE`

![EDIT_PROFILE_MENU](https://res.cloudinary.com/dmod5eglu/image/upload/v1706232156/profile_edit_uklsx4.png)

CRUD functionality. This feature is available only if user is logged in only within their own profile, when clicked on the three dots menu:
user will see three options:
    - edit profile (location, image)

![edit_profile_form](https://res.cloudinary.com/dmod5eglu/image/upload/v1706232154/profile_edit_form_zjkkms.png)

    - change username

![profile_edit_username](https://res.cloudinary.com/dmod5eglu/image/upload/v1706232155/profile_edit_username_ciiu2s.png)

    - change password

![profile_edit_password](https://res.cloudinary.com/dmod5eglu/image/upload/v1706232153/profile_edit_password_tvyrny.png)

Regardless which option user selects, it will take them to an edit form where they can process the changes and save or cancel if they change their mind. On save - user will either receive a toast message confirmation to say it has been successfull or a toast error to say it has been unsuccessful.

#### Highest Rated profile list sidebar

`As a USER I can SEE HIGHEST RATED PROFILE LIST so that I KNOW WHAT USERS ARE MOST RECOMMENDED`

![HIGHEST_RATED_PROFILES_SIDEBAR](https://res.cloudinary.com/dmod5eglu/image/upload/v1706231918/highest_rated_profiles_ebtkvk.png)

- This feature has only been implemented for desktop view, it displays highest average_rated profiles which might incentify some sellers.

- The aim of this was to reward the most reliable users but also to improve UI for desktop view, I havent added this to mobile view as I didn't want to overcrowd the content as I assume the user who clicked on the profile avatar to get to the profile page had an intent of finding out more information about that specific profile. As it's a selling site, users would only be interested in other users if they are interested in specific item so didn't see the need to ovecrowd the page.

#### Profiles own adverts tab
`As a USER I can SEE ALL ADVERTS USER POSTED so that I CAN PURCHASE MORE IF I WANT TO`

![PROFILES_ADS](https://res.cloudinary.com/dmod5eglu/image/upload/v1706231919/profiles_adverts_zprgu4.png)

- This feature sits below the profile content within one of the tabs

- The aim of this feature is both: for profile owner to have easy access to own content and for other users to search through their ads, I imagine this might help users sales- buyers might have one product that they want to purchase from the seller and check if maybe seller has anything else they are interested in to purchase at the same time.

#### Profiles ratings received from other users

`As a SELLER AND BUYER I can SEE WHEN RATINGS HAVE BEEN LEFT FOR USERS so that I KNOW IF IT'S SAFE TO USE THEM`

Rating list/ ratings exist/ NOT OWN PROFILE/ when logged in:

![ratings_list_exists_loggedin](https://res.cloudinary.com/dmod5eglu/image/upload/v1706233925/rating_list_logged_in_j5fkn5.png)

Rating list/ ratings don't exist yet / NOT OWN PROFILE/ when logged in:

![ratings_list_not_yet_logged_in](https://res.cloudinary.com/dmod5eglu/image/upload/v1706234027/no_ratings_yet_logged_in_dims4s.png)

Rating list/ ratings exist/OWN PROFILE/ when logged in:

![ratings_list_exists_loggedin_own_profile](https://res.cloudinary.com/dmod5eglu/image/upload/v1706237884/ratings_received_own_profile__asendg.png)

Rating list/ ratings don't exist yet / OWN PROFILE/ when logged in:

![ratings_list_not_yet_logged_in_own_profile](https://res.cloudinary.com/dmod5eglu/image/upload/v1706234196/no_ratings_own_profile_jzjzht.png)

Rating list when signed out:

when no ratings received yet:

![ratings_list_signed_out](https://res.cloudinary.com/dmod5eglu/image/upload/v1706234331/no_ratings_yet_logged_out_cwtyyi.png)

when ratings received:

![ratings_list_signed_out](https://res.cloudinary.com/dmod5eglu/image/upload/v1706237788/ratings_received_signed_out_mk1byz.png)


- The feature of viewing ratings is available to all users 

- The aim of this feature is to keep all users safe knowing they can choose who they want to buy from based on previous experience, and make them accountable- sellers as well as buyers

`As a LOGGED IN USER I can RATE A PROFILE ONCE I PURCHASED SOMETHING FROM THE SELLER so that OTHERS KNOW HOW RELIABLE THE SELLER IS`

`As a LOGGED IN USER I can LEAVE FEEDBACK FOR THE BUYER/SELLER so that OTHERS KNOW HOW RELIABLE THE USER IS`

![Rating_form](https://res.cloudinary.com/dmod5eglu/image/upload/v1706238481/rating_form_dcqrn6.png)

- This feature is available to all logged in users apart from the profile owner. User can submit feedback message as an optional field, star rating is required to submit a form as it provides average rating to the profile. User can simply hover over the stars, the stars will change color to indicate how many stars will get ticked off.

- The aim of this is so users can let each other know how they enjoyed their experience with one another. The form does not display to profile owner so that they can't raise their own average score and rate themselves.

`As a USER I can EDIT OR DELETE RATING I HAVE LEFT so that I CONTROL MY INPUT`

![ratings_edit](https://res.cloudinary.com/dmod5eglu/image/upload/v1706210442/EDIT_OR_DELETE_ADVERT_suwcko.png)

- This feature is available to users who are logged in and only within the ratings they have left.

CRUD functionality. This feature is available only if user is logged in only within the ratings they have left ,when clicked on the three dots menu:
  - user will see an icon to edit and icon to delete
  - if user clicks on edit- this will bring up the rating form where the feedback message is optional again and the star rating is required, the form will have previously submitted content and it looks exactly the same as the initial create form, to change star rating user can simply click on another star, user can make any changes and press 'save' or 'cancel' if changed mind
  - if user submits changes a message confirming that updates were saved will display if successful, or toast error message if unsuccessful.
  - The aim of this is so that is user can edit or update their rating- they could have left a nasty rating and then when seller rectified or clarified anything - they might want to change it. 
  - if user selects delete option which is the ' trash-bin' icon, the advert will get deleted -if successful a message confirming deletion will show, if unsuccessful an error toast message  will display.
  - The aim of this is for user to be able to delete any unwanted content.

 ### Toast messages

As a User I can CLEARLY SEE CONFIRMATION OF MY SUBMISSIONS so that I AM SURE FORMS CONTENT HAS REACHED THE RIGHT PLACE

All forms within the page have has the toast messages implemented
 
When submission is successful user will receive a green message / text content has been personalised to each form action to communicate it in clear matter however the style is the same:

![Success-message](https://res.cloudinary.com/dmod5eglu/image/upload/v1706239042/success_gaia1o.png)

In case of unsuccessful submission user will receive an error toast message in this style:

![Error-message](https://res.cloudinary.com/dmod5eglu/image/upload/v1706239037/error_vnbjdf.png)

- the aim of this was to communicate to users if their submissions have been successful or not. 

#### FORMS WARNINGS

All forms  with more than one field have warning messages added into required fields so that it is easier for users to understand why or which fields cause error and stop from submitting.

![warning](https://res.cloudinary.com/dmod5eglu/image/upload/v1706239709/warnings_wvjvfy.png)

all this has been done to improve user experience.

#### Errors covered

In case of user going to incorrect address use rwill see Page not found error:

![page_not_found](https://res.cloudinary.com/dmod5eglu/image/upload/v1706241638/page_not_found_bmxs3h.png)

In case of no results to users search, user will see:

![no_results](https://res.cloudinary.com/dmod5eglu/image/upload/v1706241643/no_results_found_faj8if.png)

in both cases user will still have a nav bar to navigate from the page.

The aim of this is to improve users experience and not encourance users to leave the website.

### Features Left To Implement

`As a SELLER OR BUYER I can COMMUNICATE PRIVATELY WITH A BUYER/SELLER ONCE OFFER HAS BEEN ACCEPTED so that I CAN ARRANGE FURTHER DETAILS`

I have initially created an offer model with private messages however I realised this would not work in a way I intended. I would like to create a seperate model in the future with permissions to only view by two parties involved ( the initial message owner who would like to purchase an item and the user the owner is sending it to (advert owner)), this way they could share personal details only privately to arrange collection etc. and possibly not even have to share tel numbers as users could chat within the website. Unfortunately I did not have time to create this at this moment.

## The Skeleton Plane

### Wireframes

<details><summary>Homepage [Logged out user]</summary>

![]()
</details>

## The Surface Plane

### Design/ Colour-Scheme/ Font/ Images

The design of the page has been kept clean and simple. Page isn't overcrowded and easily accessible.

- Main colors used were light, warm and natural to show a bit of a clean but vintage style with it being a page selling pre-owned stuff.

- Font imported from google and used throughout the entire page

- Logo has been created in ![rawpixel](https://www.rawpixel.com/) and ![canva](https://www.canva.com/)

- All images from ![pexels](https://www.pexels.com/) including profile pictures.

# Technolgies
## Tools and Technologies

* Node - package manager used to install dependencies
* React - framework used for UI
* Bootstrap React - CSS framework used for responsive design 
* Visual Studio Code - used to develop the website
* Github - used to host source code and deploy on Github Pages
* Git- used to commit and push code 
* HTML - used for static content sporadically
* CSS- used for website styling
* JavaScript- main language used to make page interactive
* Heroku - to deploy the app 
* [toastify](https://www.npmjs.com/package/react-toastify?activeTab=versions)
* [Balsamiq](https://balsamiq.com/wireframes/)- used to create wireframes
* [Favicon](https://favicon.io/favicon-generator/) - used to create favicon for the page
* [Font Awesome](https://fontawesome.com/) - used to add icons for the page
* [Wave Evaluation Tool](https://wave.webaim.org/)- used for checking accessibility
* [Techsini](https://techsini.com/multi-mockup/index.php)- used for creating mockup image
* [W3C Validator](https://validator.w3.org/)- used for checking HTML and CSS for errors
* ESLINT - tool installed and used to check java script code meets standards and has no errors
* [Table Markdown](https://tabletomarkdown.com/)- to create tables in readme 
* Lighthouse - used to check performance of the page

## Testing
### Responsiveness

Website has been checked for responsiveness through Development tools. In order to do this, the following steps have been taken:
1. Open browser
2. Navigate to Snap.it.up at https://snap-it-up-frontend-0a24e912efd8.herokuapp.com/
3. Right click anywhere on the page and go to "Inspect" to open Development Tools
4. Click on drop down menu: "Dimensions: Responsive" and choose "Responsive"
5. Drag the side of the screen and change screen size, make sure the website looks good from 320px and up. Make sure no side 
   scroll bar is showing.

* Expected- page is user friendly when viewing the website on small and large screens.
* Actual- website looks good, no bottom scroll bar showing, all content clearly visible. Website is user friendly on all screen sizes.

* The following devices have been used to check responsiveness:
    * Iphone 13 Pro
    * Google Pixel 7 Pro 
    * Asus Vivobook

* The following browsers have been used to check responsiveness:
    * Chrome
    * Microsoft Edge 
    * Firefox

Unable to use the app on Iphone, it registers the account as shown in admin panel however it won't allow to sign in, I have found that everyone submitting the project has the same issue and this can not be fixed. [Sean explains it here](https://code-institute-room.slack.com/archives/C02MTH5MBDG/p1659719243446449?thread_ts=1659705919.570999&cid=C02MTH5MBDG)

### Accessibility

Each page checked with the help of [WAVE Accessibility tool](https://wave.webaim.org/). Each page passes accesibility test with no error for:
* contrast
* aria- labels for users who use screen-readers
* alternative text as a function for screen readers or in events when images don't load
* structural elements - for users of assistive technology as well as visual and semantic meaning
* language of the document- for screen readers

* alerts coming up 'Reduntant link-Adjacent links go to the same URL', however as it doesn't come up as an error, I have left it in. This is due to the instructional icon to click to detail view if user want's to ask a question/ make an offer/also two links to home page from 'home' link and logo.

### Lighthouse

* HOME PAGE (desktop & mobile)

![lighthouse_desktop](https://res.cloudinary.com/dmod5eglu/image/upload/v1706243998/lighthouse_desktop_home_cessny.png)

![lighthouse_mobile](https://res.cloudinary.com/dmod5eglu/image/upload/v1706243996/lighthouse_mobile_home_weckz4.png)

*  ADVERTS DETAIL VIEW (desktop & mobile)

![lighthouse_desktop_advert_view](https://res.cloudinary.com/dmod5eglu/image/upload/v1706244005/LIGHTHOUSE_DESKTOP_ADVERT_i0biam.png)

![lighthouse_mobile_advert_view](https://res.cloudinary.com/dmod5eglu/image/upload/v1706243994/LIGHTHOUSE_MOBILE_ADVERT_hlq14r.png)

* PROFILE PAGE (desktop & mobile)

![lighthouse_desktop_profile_page_view](https://res.cloudinary.com/dmod5eglu/image/upload/v1706244003/LIGHTHOUSE_DESKTOP_PROFILE_pqpvbg.png)

![lighthouse_mobile_profile_page_view](https://res.cloudinary.com/dmod5eglu/image/upload/v1706244000/LIGHTHOUSE_mobile_PROFILE_ajrxvl.png)

The performance is lower due to the fact that the page is heavy on images, fixes can be applied in the future as time won't allow me for it now.

### Validator Testing

#### HTML

Only index.js page has HTML code and this comes up clear of errors in [W3C VALIDATOR](https://validator.w3.org/).

In order to check HTML code in dynamic website:

* go to the live page
* click right and select 'Inspect' then click right and select 'View page source'
* code will open in new tab - copy the code
* paste the code in the validator as 'direct input'

#### CSS

No errors were found when passing all CSS files through the official Jigsaw W3 Validator

![css_validator_check](https://res.cloudinary.com/dmod5eglu/image/upload/v1706245588/CSS_VALIDATION_q19x4k.png)


### JavaScript

Each file has been opened in a workspace to check it with ESLINT however I am getting a warning:

![eslint_warning](https://res.cloudinary.com/dmod5eglu/image/upload/v1706246313/eslint_warning_nuxuyh.png)

I was unable to fix it, I tried multiple ways, used createRoot, installed different React version but it seemed to have cause more issues. As it is not an error but a warning I have left it in for now.

All other files show:

![eslint_no_problems](https://res.cloudinary.com/dmod5eglu/image/upload/v1706246311/eslint_no_problems_ubtukt.png)

### Manual Testing

#### Functional Testing
##### Links and Buttons
##### Negative Testing
### Automatic Testing
#### Unit Tests

No unit testing performed at this stage. 

## Bugs

Warning as mentioned [here](#javascript)

### Console warnings
 
## Deployment

### Version Control

* Git 
    Code has been pushed with git commands to remote repository on Github with commands:

   `` git add .`` - to add files ready to commit

   ``git commit -m "message"`` - to commit the code to local 
    repository ready to be pushed

   ``git push`` - final command used to push commited code to remote repo on Github
   
### Deploying in Heroku 

* The project has been deployed on Heroku as follows:
     * Use: ``pip freeze > requirements.txt`` to add external libraries to deployed app.
     * Create Heroku account ( step by step guide [here](https://coding-boot-camp.github.io/full-stack/heroku/deploy-with-heroku-and-mysql))
     * In the top right, click 'New'
     * Click 'Create new app'
     * Give your app a name and select your region from drop down 
     * Click 'Create new app' 
     * Scroll down to 'Buildpacks' section
     * Click 'Add buildpack'
     * Add Python as first dependency and select 'Save changes'
     * Add node.js as a second dependency and save again
     (This is settings section done)
     * Select 'Deploy' tab at the top
     * Select ' Github' from 'Deployment method'
     * type the name of how you called project in Github and click 'search'
     * Scroll down and select manual deployment method
     * Auto method has also been selected to allow the project to update every time i push the code from Gitpod
     * You can now click to view the app ready and running

* Once you have the deployment of front end-done you can connect it to API:

   * Go to your drf api in Heroku
   * Add Config Vars within settings section:
     - 'CLIENT_ORIGIN_DEV' as key with a value of: link to your local host (front-end) no quote marks no forward slash at the end.
     - 'CLIENT_ORIGIN' as key and value of: URL to your deployed front end repo from heroku
     - in front end workspace install ``npm install axios``
     - create a folder 'API' --> AND FILE : 'axiosDefaults'.
     - at the top of the file import axios at the top of the file
     - define your baseURL which is the URL of your deployed API project
     - set content-type header to multi-part/form-data as the API will need to deal with images as well as text in it's requests.
     - to avoid any CORS issues, set withCredentials to True.
     - import this file into App.js to be used across all pages


### CLONING THE REPOSITORY

1. On Github navigate to repository
2. Click "Code" a green button shown right above the file list
3. Copy the URL of the repo using HTTPS, SSH OR Github CLI
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory
6. Type git clone, and then paste the URL you copied earlier
7. Press enter to create local Clone

For more details on how to clone the remote repo in order to create a local copy for own use, please click [here](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)


### FORKING

1. On Github navigate to repository
2. click "Fork" located towards the top right corner
3. Select "owner" for the forked repo, from the dropdown menu under "owner" Under "Owner"
4. It will create forked repo under the same name as orinial by default but you can type a name in "Repository name" or add a description in "Description" box.
5. Click "Create fork" !

Forking allows you to make any changes without affecting original project. You can send the suggestions over by submitting pull request. Project owner can review the pull request before accepting the suggestions and merging them.


For more details on how to fork the repo, in order to for example suggest any changes to the project you can click [here](https://docs.github.com/en/get-started/quickstart/fork-a-repo) 


When you have fork to a repository you don't have access to files locally on your device, for this you will need to clone the forked repo.

## Credits

- Code institues learning material for advanced front end which I have used as a base of this project
- [STAR RATING](https://dev.to/kartikbudhraja/creating-a-dynamic-star-rating-system-in-react-2c8)
- Logo created with [rawpixel](https://www.rawpixel.com/) and [canva](https://www.canva.com/)
- all images from [pexels](https://www.pexels.com/)
- [Tom Alumnus](https://code-institute-room.slack.com/team/U02DP5GEYKE) from Slack, for creating ESLINT file with configs.

## Acknowledgements

My mentor [Daisy Mc Girr](https://github.com/Daisy-McG) for helping me fix the app when it completely crashed due to incorrectly react version  installed and all the help throughout the process.