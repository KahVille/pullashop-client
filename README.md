# pullashop-client
Front-end web client for PullaShop app

With PullaShop you are able to buy the best pasteries from the top bakeries. 

## Project status
In an active development. 
Main branch contains the production ready build. Check out the development branch for current progress.

## Planned Features
With this client app of PullaShop you are able to do the following things:

### Features that are the included in the minimum viable product:
- Browse Pasteries by categories
- Inspect Pasterie's details
- Add Pasteries to List of Favourite pasteries from Pasterie details screen
- Inspect pastries added to the favourite list
- Localization for English and Finnish languages.

### Planned Future improvements
- Account and Account Details pages
- Sign-in and Sign-up pages
- 2-factor authentication support
- Content management interation
- Shopping cart and payment functionality. Preferring to use Paypal or targetting to use PayTrail or alternatives

## Tech stack

### Client
- [Next.js](https://nextjs.org/) for client side access
- [React.js](https://reactjs.org/) used by nextjs in client side
- [Typescript](https://www.typescriptlang.org/) used by nextjs and react for programming language instead of plain JavaScript

### PullaShopApi
- [.Net](https://dotnet.microsoft.com/) used by PullaShopApi to create an web api from which Pasterie information is gathered.

GraphQL is to be considered as an alternative for pasterie information

### Backend Database
- [MySQL](https://www.mysql.com/) used as the backend where pasterie information and favourites are stored

Other possibilities for the backend solution are to be discussed. Options that are also viable are: MongoDB, SQLServer and Azure platform.
