POS

This is a simple POS system. The frontend is built with Angular. Each time a sale is made by clicking "Cash" or "Check" with items in your cart, it will execute an HTTP request to the backend. The backend is built with .NET Core 3.1 and SQL Server database. 

Technologies used:

-Angular 8
-TypeScript
-Bootstrap
-Sql Server Db
-.NET Core 3.1
-C#
-HTML
-SASS
If you'd like to download the project to use full features with HTTP calls, follow these steps:

Download the zip and extract
cd into /client and npm install
Open /Api directory and create an appsettings.json file (this is where you can link your own sql server db)
Your appsettings.json file should follow this template: { "Logging": { "LogLevel": { "Default": "Information", "Microsoft": "Warning", "Microsoft.Hosting.Lifetime": "Information" } }, "AllowedHosts": "*", "ConnectionStrings": { "ProductionConnect": "[DATABASE LOGIN STRING GOES HERE]" } }
cd into /Api and type "dotnet run" to start the project
