## [ => Visit the website <= ](https://additionalresources.herokuapp.com/) || [ => See the server-side code <= ](https://github.com/ryanmokeefe/Project-2)

# Welcome To Additional Resources!

![alt text](https://github.com/ryanmokeefe/project-2/blob/master/public/img/screenshot.png "screenshot")

### Compile all the resources you need, in one spot!

###### Additional Resources will become a more interactive site as the developer's skills increase. Stay tuned!

## How it was built: 

### The Technology:

* ReactJS
* ~~Handlebars~~
* Node
* Mongoose 
* MongoDB
* Express
* Surge (frontend)
* Heroku (backend)
* ~~Materialize~~
* ~~Passport for authentication~~

  
### The Resources: 
  
  Resources are sorted by 2 methods: Subject and Type. A user can add any subject to the resource as they create it, and may not be limited to Web Development alone. The type is used to specify whether the resource is an article, lesson or course, lecture, podcast, or documentation. Then, the user can note whether the resource has videos or exercises. Users have the ability to up vote each resource in order to help each other determine the usefulness of each addition.
  
  Each resource can be displayed independently by clicking the name or the user can go straight to the website in question by clicking the url link included in the main page. Users can then update information on the resource's page through a form, or remove the resource, if it's no longer needed. (*In future implementations, this delete functionality will be restricted to only authorized admins or the original creator of the post.*)
  
 ## Future Plans: 
  
  #### Search:
  
   A search bar will allow users to search by keyword for any resources. 
  
  #### Category by Type:
  
  ~~A drop menu will allow users to find all resources of a certain type, i.e. article, lesson, documentation, etc.~~
  
  #### User Questions and Answers:
  
  Each resource will have an individual form for users to post questions, and in return, answer other's questions.
  
  #### Voting:
  
  ~~Users will be able to vote on the resources, as well as the questions asked, and the answers posted, in order to help others find the best information possible.~~
  
  #### React Materialize/Responsive Design:

  Convert all CSS and JS for React Materialize.
  Convert all CSS and JS for responsive design from Handlebars edition.
  Convert Carousel for React.

  #### User Authentication:

  Connect server-side User Auth with React frontend.


 ## Known Bugs: 

#### Handlebars bugs:

* Currently, passport does not keep the user logged in for a prolonged period of time. It will persist through multiple page loads, but I am unsure of what causes the user to be logged out.

#### React bugs:

* Upon delete, the redirect to the main list is not reloading data, resulting in the deleted post still being displayed until the page is refreshed.

* Upon edit - Name change ONLY: reload of component will send user back to the main list, as the name (and therefore url location) no longer exists. Fix so component reloads with new name. (possible fix: change to grab resource ID)

* GarfieldMinusGarfield redirect not implemented yet...


