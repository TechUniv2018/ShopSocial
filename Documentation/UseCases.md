# Use Cases

The profound use cases of this solution are as under:

1. An administrator can **manage products** on the website using pre-defined catalog.
2. A customer can **browse for products** on the website.
3. A customer can **purchase** products on the website.
4. A customer can **chat with another shopper** on the website whilst shopping on the website.
5. A customer can **browse and shop** with *another shopper* on the website.

## Workflow

### 1. An administrator can manage products on the website using pre-defined catalog.
> _Actors_ – Administrator, Catalog API

> _Description_ – This use case describes how an administrator can add or remove products on the website.

#### Normal Workflow – 1.a
  1.	The administrator will click on the **Add Products** button on the admin console.
  2.	The administrator will select the products available from the list and specifies the inventory.
  3.  The selected products will be added to the website and available to the customers.

#### Normal Workflow – 1.b
  1.	The administrator will click on the **Remove Products** button on the admin console.
  2.	The administrator will select the products available from the list.
  3.  The selected products will be removed from the website.

#### Alternative Workflow -
  1. An error will be displayed on the website if API is not accessible.
  2. The administrator can retry to add or remove the products.

### 2. A customer can browse for products on the website.
> _Actors_ – Customer

> _Description_ – This use case describes how a customer can browse through the products available on the website.

#### Normal Workflow –
  1.	The customer will visit the website by specifying the URL on the browser.
  2.	The customer will be landed on the home page of the website.
  3.  The customer can browse through the website by interacting with the webpage.
  4.  The customer can view the description and images of the product on the product page.

### 3. A customer can purchase products on the website.
> _Actors_ – Customer

> _Description_ – This use case describes how a customer can create a user account or sign-in to the website and purchase a product.

#### Normal Workflow – 3.a
  1.  The customer can click **sign-up** button on the webpage to create an account if it doesn't exist.
  2.  The customer can fill up the required details and click on register to create an account.
  3.  The customer will be signed-in on successful registration.
  4.  The customer can proceed to checkout by providing the delivery address and specifying the payment details.
  5.  The order will be confirmed on payment confirmation.

#### Normal Workflow – 3.a
  1.  The customer can click **sign-in** button on the webpage to sign-in to an account.
  2.  The customer will be signed-in on successful authentication.
  3.  The customer can proceed to checkout by providing the delivery address and specifying the payment details.
  4.  The order will be confirmed on payment confirmation.

#### Alternative Workflow -
  1. The customer will be greeted with an error on unsuccessful registration / unsuccessful authentication.
  2. The customer can verify the details entered to check for any errors and try again.

### 4. A customer can chat with another shopper on the website whilst shopping on the website.
> _Actors_ – Customer One, Customer Two

> _Description_ – This use case describes how a customer can chat using text with another customer on the website.

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

### 10. A customer can browse and shop with another shopper on the website.
> _Actors_ – Customer One, Customer Two

> _Description_ – This use case describes how a customer can shop with another customer *when both of them are online.*

#### Normal Workflow –
  1.	The customer will click the **Shop with A Friend** button in the header of the website.
  2.	The customer will be asked to enter the email-ID of the friend with whom the customer wants to shop.
  3.  Based on the availability of that friend, a *shared session* would be created for the pair with *screen sharing* option.
  4.  Either of them can put items into a **shared cart** which would be manageable by both and separate from their own respective carts.
  5.  **Screen Sharing** feature can be enabled when the *shared session* is created.
  6.  The order for the products in the shared cart can be placed by either customer, by completing the checkout procedure.
  7.  Both of them would receive the **same order details** in their respective own individual accounts.
  8.  On successful completion of the shopping session, the share is terminated when either customer clicks on **End Share** button on the header of the website.

#### Alternate Workflow 10a -
  1.  When Customer One sends a **Co-Shop** request to Customer Two, the other shopper happens to be offline and consequently, Customer One receives a similar informative message.

#### Alternate Workflow 11b -
  1.	When Customer One sends a **Co-Shop** request to Customer Two, should Customer Two rejects the invite, a message explaining the same is displayed to Customer One.
