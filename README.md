# Order Tracking Interface

A responsive order tracking interface built with Next.js, React, Tailwind CSS, and HeroUI.

The application allows users to select an order and view its current delivery status through a tracking progress interface.

## Live Demo

[[Live Demo URL](YOUR_DEPLOYED_URL)](https://order-tracking-screen-pi.vercel.app/)


## Features

- Product/order list
- Track Order button
- Order tracking progress
- Multiple order tracking states
- Responsive mobile-first design
- Black and white UI theme
- Different UI for delayed and delivery issues
- Order tracking unavailable state
- HeroUI components for the interface

## Tracking Process

Clicking the **Track Order** button opens the tracking screen for the selected order.

The tracking screen displays the current state of the same order.

### Normal Tracking

The order follows this process:

```text
Processing ✓
     ↓
Shipped ✓
     ↓
Out for Delivery ●
     ↓
Delivered ○
```

The progress updates according to the current order status.

The tracking progress is displayed using HeroUI's `Progress` component.

### Expected Delivery

For an order that is currently within the expected delivery time:

```text
Expected Delivery

Today, 6–8 PM
```

### Delayed

If the expected delivery time has passed and the order has not been delivered:

```text
Delivery Delayed

Your order is taking longer
than expected.

[Contact Support]
```

### Delivered but Not Received

If the order is marked as delivered but the customer did not receive it:

```text
Delivered

Marked as delivered at 4:30 PM

Didn't receive your order?

[Report an Issue]
[Contact Support]
```

### Tracking Not Available

For a newly placed order where tracking information is not available yet:

```text
Tracking Not Available Yet

Your order has been confirmed.
Tracking details will appear
once your package is shipped.

[View Order Details]
```

## Order Statuses

The application supports the following order states:

```js
"tracking_unavailable"
"processing"
"shipped"
"out_for_delivery"
"delivered"
"delayed"
"delivered_not_received"
```

Example order data:

```js
{
  id: 1,
  name:,
  image:,
   price:,
  status: "out_for_delivery"
}
```

## Running Process

The order tracking flow works as follows:

```text
New Order
   ↓
Tracking Not Available
   ↓
Processing
   ↓
Shipped
   ↓
Out for Delivery
   ↓
Delivered
```

The same order is used throughout the tracking process. Its `status` determines which tracking state is displayed.

For example:

```js
{
  id: 1,
  name: "Product Name",
  status: "processing"
}
```

will show the Processing state.

Changing the status to:

```js
status: "shipped"
```

will show the Shipped state.

Similarly:

```js
status: "out_for_delivery"
```

will show the Out for Delivery state.

## Tech Stack

- Next.js
- React
- Tailwind CSS
- HeroUI
- JavaScript

## Setup

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Go to the project directory:

```bash
cd YOUR_PROJECT_FOLDER
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the application in your browser:

```text
http://localhost:3000
```

## Build for Production

```bash
npm run build
```

Run the production build:

```bash
npm start
```

## Deployment

The project is deployed and can be accessed through the live URL provided above.

The evaluator can access the application directly without running the project locally.
