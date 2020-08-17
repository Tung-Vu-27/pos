POS

This is one of my personal programming projects. It is a simple POS system. The frontend is built with Angular. Each time a sale is made by clicking "Cash" or "Check" with items in your cart, it will execute an HTTP request to the backend. The backend is built with .NET Core 3.1 and SQL Server database. The entire project is deployed on Microsoft Azure with a free trial account.
For the purposes of saving costs, I disabled the HTTP call features. You can test the HTTP disabled site here: 
https://icecreampos.azurewebsites.net

Technologies used:
- Angular 8
- TypeScript
- Bootstrap
- Sql Server Db
- .NET Core 3.1 
- C#
- HTML
- SASS


If you'd like to download the project to use full features with HTTP calls, follow these steps:
1. Download the zip and extract
2. cd into /client and npm install
3. Open /Api directory and create an appsettings.json file (this is where you can link your own sql server db)
4. Your appsettings.json file should follow this template:
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft": "Warning",
      "Microsoft.Hosting.Lifetime": "Information"
    }
  },
  "AllowedHosts": "*",
  "ConnectionStrings": {
    "ProductionConnect": "[DATABASE LOGIN STRING GOES HERE]"
  }
}
5. cd into /Api and type "dotnet run" to start the project

Problems I faced during development:
The biggeset hurdle I faced was wrapping my heading around asynchronous programming and utilizing Observables and Promises
when making a request to the backend. You can view all of the sales made on the admin page, and it was difficult at first to
make sure that the admin page was being updated each time a sale was made. Eventually, after much research and googling, I got the hang of asynchronous calls and I was able to update the admin page each time a new sale was made. 

-Tony
