# Rocket Elevators Express

I plays the role of a junior developer within Genesis Solutions.  Genesis Solutions has been working with a client, Rocket Elevators, to develop solutions specific to their company. In previous modules, we have focused on the client side of operations…the front end. In this module, we will dive into server-side operations by developing specific APIs at the client’s request.

## Tools needed
Install VsCode and Node.js.

## How to run
Use 'node [name of file]' to run every file separately or simply run 'npm start'

## CREATING API ROUTES FOR GET AND POST METHODS.

GET - /hello => 
 - Create a route that returns "Hello World!" when called

GET - /status =>
 - Create a route that returns a message containing the port number
 
GET - /error =>
 - Create a route that will return an error message if something goes wrong

GET - /email-list =>
 - Create a route that returns a comma-delimited list of emails for all the agents in the list provided

POST - /contact-us =>
 - Create a route that allows you to POST a 'first_name', 'last_name', and a 'message'

GET - /region-avg =>
 - Create a route that accepts a region as a query parameter and returns the average rating and fee for agents in that region

GET - /calc-residential =>
 - Create a route that returns the number of elevators required and total cost for a Residential building type quote based on the math of the quote form
