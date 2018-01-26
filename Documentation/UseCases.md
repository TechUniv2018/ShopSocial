## Use Cases

The profound use cases of this solution are as under:

1. An administrator can **add products** to the website using pre-defined catalog.
2. An administrator can **remove products** from the website.
3. An administrator can specify **product inventory** on the website.
4. A customer can **browse for products** on the website.
5. A customer can create an **account** on the website.
6. A customer can **sign in** to the account on the website.
7. A customer can **add products** to the cart on the website.
8. A customer can **remove products** from the cart on the website.
9. A customer can **pay and checkout** from the cart on the website.
10. A customer can **chat with another shopper** on the website whilst shopping on the website.
11. A customer can **share his/her activities on screen with another shopper** on the website.
12. A customer can **sign out** of the account on the website.

## Workflow

### 1. An administrator can add products to the website using pre-defined catalog.
_Actors_ – Administrator, The Website, Catalog API
_Description_ – This use case describes how an administrator can add products to the website.

#### Normal Workflow –
  1.	The administrator will click on the **Add Products** button on the admin console.
  2.	The administrator will select the products available from the list and specifies the inventory.
  3.  The selected products will be added to the website and available to the customers.

#### Alternative Workflow -
  1. An error will be displayed on the website if API is not accessible.
  2. The administrator can retry to add the products.

### 2. An administrator can remove products available on the website.
_Actors_ – Administrator, The Website
_Description_ – This use case describes how an administrator can remove products available on the website.

#### Normal Workflow –
  1.	The administrator will click on the **Remove Products** button on the admin console.
  2.	The administrator will select the products to be removed from the list.
  3.  The selected products will be removed from the website.

### 3. An administrator can specify product inventory on the website.
_Actors_ – Administrator, The Website
_Description_ – This use case describes how an administrator can modify product quantity available on the website.

#### Normal Workflow –
  1.	The administrator will click on the **Modify Product Inventory** button on the admin console.
  2.	The administrator will select the product, whose available quantity has to be modified.
  3.	The administrator will enter the new inventory for that product.
  4.	The product quantity available will be updated on the website.

#### Alternative Workflow -
  1. An error will be displayed on the website if the values given for quantity is less than 0 or in fraction.
  2. The administrator can retry to modify the quantity by entering valid values for the products.

### 4. A customer can browse for products on the website.
_Actors_ – Customer, The Website
_Description_ – This use case describes how a customer can browse through the products available on the website.

#### Normal Workflow –
  1.	The customer will visit the website by specifying the URL on the browser.
  2.	The customer will be landed on the home page of the website.
  3.  The customer can browse through the website by interacting with the webpage.
  4.  The customer can view the description and images of the product on the product page.

### 5. A customer can create an account on the website.
_Actors_ – Customer, The Website
_Description_ – This use case describes how a customer can create a user account on the website.

#### Normal Workflow –
  1.	The customer will visit the website by specifying the URL on the browser.
  2.	The customer will be landed on the home page of the website.
  3.  The customer can click **sign-in/sign-up** button on the webpage.
  4.  The customer can choose to sign-up by clicking on the sign-up link and filling up the required details and clicking on register.
  5.  The customer will be redirected back to the home page as signed in user on successful registration.

#### Alternative Workflow -
  1. The customer will be greeted with an error on unsuccessful registration.
  2. The customer can verify the details entered to check for any errors and try again to register.

### 6. A customer can sign in to the account on the website.
_Actors_ – Customer, The Website
_Description_ – This use case describes how a customer can log-in to the website using the account created using sign-up.

#### Normal Workflow –
  1.	The customer will visit the website by specifying the URL on the browser.
  2.	The customer will be landed on the home page of the website.
  3.  The customer can click **sign-in/sign-up** button on the webpage.
  4.  The customer can enter the email-id and password used to sign-up and click on **sign-in** button.
  5.  The customer will be redirected back to the home page as signed in user on successful sign-in.

#### Alternative Workflow -
  1. The customer will be greeted with an error on unsuccessful sign-in.
  2. The customer can verify the details entered to check for any errors and try again to sign-in.

### 7. A customer can add products to the cart on the website.
_Actors_ – Customer, The Website
_Description_ – This use case describes how a customer can add products to the cart on the website.

#### Normal Workflow –
  1.	The customer will visit the website by specifying the URL on the browser.
  2.	The customer will be landed on the home page of the website.
  3.  The customer can click **add to cart** button on the product page, on which he/she will be redirected to log-in page.
  4.  The customer can enter the email-id and password used to sign-up and click on **sign-in** button.
  5.  The customer will be redirected to the cart with the product added, on successful sign-in.

#### Alternative Workflow -
  1. The customer will be greeted with an error on unsuccessful sign-in.
  2. The customer can verify the details entered to check for any errors and try again to sign-in.

### 8. A customer can remove products from the cart on the website.
_Actors_ – Customer, The Website
_Description_ – This use case describes how a customer can remove products from the cart on the website.

#### Normal Workflow –
  1.	The customer will click the **trash** icon next to the product listing in the cart.
  2.	The product will be removed from the customer's cart and the person with whom the cart was shared with.
  3.  The customer will be present on the same cart page with other products existing in the cart.

### 9. A customer can pay and checkout from the cart on the website.
_Actors_ – Customer, The Website, The Payment Gateway
_Description_ – This use case describes how a customer can proceed to pay and checkout the products in the cart, on the website.

#### Normal Workflow –
  1.	The customer will click the **Proceed to Checkout** button in the cart.
  2.	The customer will be allotted a **Order ID** and asked to enter an address.
  3.  The customer will click the **Pay Now** button, on which he/she will be redirected to the payment gateway.
  4.  The customer can enter the Card/Net banking details, as available in the gateway, to pay for the products.
  5.  On proceeding to pay on the payment gateway, the gateway will process the payment and send a response to the website.
  6.  On successful payment, the order will be placed.

#### Alternate Workflow –
  1.	On an unsuccessful payment response from the gateway, the order will be deemed cancelled.
  2.	The customer can proceed to order the products again and complete the payment to place the order successfully.

### 10. A customer can chat with another shopper on the website whilst shopping on the website.
_Actors_ – Customer One, Customer Two, The Website
_Description_ – This use case describes how a customer can chat using text with another customer on the website.

#### Normal Workflow –
  1.	The customer will click the **Chat with Friend** button in the header of the website.
  2.	The customer will be asked to enter the email-ID of the friend with whom the customer wants to chat.
  3.  Based on the availability of the friend, the **chat window** will open for both the customers, allowing them to exchange text messages.
  4.  On successful completion of the chat, the chat session is terminated when either customer clicks on **End Chat** button on the chat window.

#### Alternate Workflow 10a -
  1.	When Customer One requests to have a chat with Customer Two, if the Customer Two is not available online, an error is displayed to Customer One.
  2.	Customer One's chat window will be closed.

#### Alternate Workflow 10b -
  1.	When Customer One requests to have a chat with Customer Two, if the Customer Two rejects the invite, a message explaining the same is displayed to Customer One.
  2.	Customer One's chat window will be closed.

### 11. A customer can share his/her activities on screen with another shopper** on the website.
_Actors_ – Customer One, Customer Two, The Website
_Description_ – This use case describes how a customer can chat using text with another customer on the website.

#### Normal Workflow –
  1.	The customer will click the **Share with Friend** button in the header of the website.
  2.	The customer will be asked to enter the email-ID of the friend with whom the customer wants to chat.
  3.  Based on the availability of the friend, the **window events** will be shared between both the customers
  4.  On successful completion of the shopping session, the share is terminated when either customer clicks on **End Share** button on the header of the website.

#### Alternate Workflow 11a -
  1.	When Customer One requests to share events with Customer Two, if the Customer Two is not available online, an error is displayed to Customer One.

#### Alternate Workflow 11b -
  1.	When Customer One requests to share events with Customer Two, if the Customer Two rejects the invite, a message explaining the same is displayed to Customer One.

###  12. A customer can sign out of the account on the website.
_Actors_ – Customer, The Website
_Description_ – This use case describes how a customer can log-out of the website, when signed-in.

#### Normal Workflow –
  1.	The customer will click the **Sign Out** button on the header of the website.
  2.	The customer will be landed on the home page of the website, with the account signed out.
