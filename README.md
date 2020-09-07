# POS
#### Summary 
This is one of my first personal programming projects that was built with an Angular + .NET stack. It is a simple POS system for an ice cream shop. 

#### Directory
Backend: /api/Apps/Pos
Frontend /client/src/pos

#### Key Technologies:
- Angular
- TypeScript
- .NET Core 3.1
- C#
- PostgreSQL
- HTML
- SCSS
- Bootstrap

#### Encountered Issues
- The biggest hurdle I faced was wrapping my head around asynchronous programming and utilizing Observables and Promises when making a request to the backend. There’s a feature where you can view all of the sales made by navigating to the admin page. It was difficult at first to make sure that the admin page was being updated each time a sale was made. Eventually, after much research and googling, I got the hang of asynchronous calls and I was able to update the admin page each time a new sale was made.

#### Lessons Learned: 
- The overall structure and general practices of .NET Core 3.1 Web api project
- How to make HTTP requests across separate servers utilizing CORS
- Wiring up an external database to the backend
