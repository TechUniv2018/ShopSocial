## User Stories

### Customer Management 
_As a developer, I want people to be able to **create and manage their accounts** so that they can shop on the website._

**1. Customer Sign Up**

- As an unregistered customer, I want a link to a signup page so that I am able to create a new account.

- As a customer, I must be able to create an account on the website by providing my basic details and new user credentials.

**2. User Login**

- As a registered user, I want a link to login page *on all possible pages* so that I can log in to my account.

- As a registered user, I want to be able to login with my username and password so that I can access my account for shopping or viewing my profile.

**3. Logout**

-  As a developer, I want the session to end gracefully when a user logs out so that he or she stays on the same page, if permissible.

**4. Orders**

- As a customer, I would want to see both my previous as well as current orders' information.

- As a customer, I want to be able to able to cancel orders from the list of my currently placed orders.

### Administrator Management
_As an admin, I want complete access to product set on the website so that I can manage products efficiently._

**1. Administrator Login**

- As an admin, I want to be able to log in through a different portal to my account so that I can add or remove products from the website.

**2. Populate product inventory**

- As an admin, I would like to populate, initially or otherwise, my website with product data from an external API.

- As an admin, I want to be able to populate products **one-by-one** using product ID.

- As an admin, I want to be able to remove **one or more products** on display so that only *relevant and available products* are displayed.

### Product Display
_As a customer, I want to be able to view products in a convenient fashion with grouping and details as necessary._

**1. Product Links (Permalink)**

- As a customer, I want a unique link to every product in the catalog in a specified structure so that it *can be easily read and remembered by a human.*

**2. Product Category**

- As a customer,  I would want to filter the products by a **price range**.

- As a dev, I want to allow users to search for products using **only the keywords** associated with a particular product.

**3. Product View**

- As a customer, I must be able to browse and view products listed on the website.

- As a customer, I expect to be able to view information related to product like images of the product, description, specification and price.


### Cart Management
_As a shopper, I want a container to hold the products that I'm interested in buying till I check out._

**1. Addition to Cart**

- As a customer, I must be able to select product(s) I want to purchase.

**2. Updating Cart**

- As a customer, I want *an option for each product in the cart* so that I can change the number of items present in the cart.

- As a customer, I want to be able to remove items from the cart prior to checkout.

**3. Display Total and Products**

- As a customer, I want to see the total costs of items in my cart before tax and shipping charges are added.

- As a shopper, I want a user to be able to navigate to the product's page so that I can review the product in my order before check out.

**4. Social Cart**

- As a customer, I would like the items in the cart to be checked out by having **only either of the co-shoppers** to pay for it.


### Payment Management
_As a product owner, I want a customer to pay for the products in his cart so that his products are confirmed and delivered to him._

**1. Checkout**

- As a customer, I must be able to pay for all the items in the cart.

**2. Payment Options**

- As a customer, I want the option to pay using **Cash on Delivery** where I can pay by either cash or card.

**3. Co-Shop Options**

- After the payment is successful, a record/order detail must be made available to both the user(s) in case of group shopping activity.


### Chat Management
_As a user, I want to be able to chat with fellow customers so that I am able to make better shopping decisions._

**1. Chat Initiation**

- As a user, I would want to search for registered users using their **email-ids** so that I can connect and chat with them.

- As a developer, I want to *directly* connect **people who are online** so that they could start chatting instantly.

**2. Chat**

- As a customer, I want to be able to **exchange messages** with the second party I am chatting with.

- As a customer, I want to be able to **send products links** to my chat buddy with **just the click of a button** so that I can discuss with them the product I am viewing at the moment.

2. **Chat Termination**

- As a customer, I want to be able to **minimize or close** the chat window without ending the chat session.


### Shared Experience Management
_As a user, I want to be able to merge sessions to co-shop with other users._

**1. Screen Share Initiation**

- As a developer, I want a customer to be able to share his screen with **only one other person** in a session.

- As a customer, I want to be able to start sharing the activities on my screen by adding another customer by their **email address.**

**2. Screen Share**

- As a user of screen sharing, I would want my **chat window and cursor** to be decoupled from the events and activities that are shared with my fellow shopper.

**3. Shared Cart**

- As a user, I would want a **common cart** for my fellow shopper and I, so that any updates made to the common cart be reflected to each other, also enabling either to make those updates.

- As a co-shopper, I would like that, irrespective of who makes the purchase, there should be a **unique order transaction record** created which must reflect on both of their individual accounts later.

**4. Screen share termination**

- As a co-shopper, I want to be able to still browse, select and purchase products with the shared cart even if my fellow shopper _logs out or has his or her session abruptly disconnected._

- As a developer, I want to end the shared session when both of the users leave the session.

