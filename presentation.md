## PFAK News Around the World

![](https://media.giphy.com/media/9JgeSP0jlRAVBOG9FD/giphy.gif)



---

## User Journey
Our user is a traveller or language learner wants to find out the trending headlines in a country of interest. The app returns the top three headlines for the selected country. 

The user can use one of the four quick search buttons, or select the country from a drop down menu. 

---

### Edge Case
If the user, does not select a country before clicking the search button, an alert message will pop up. 

---

### Code of Conduct

* Code written in ES6 + Always use === 
* Everyone needs to understand each step before moving on.
  -> That's why we start by mobbing until we arrived to the API call to all understand the construction of the project. Then, we set some task we could do in pairs and change regularly.  
* BEM class naming / branches and mobile first 
* Other pair reviews pull request 

---

### Stretch Goals 
- [x] Add alt text to images (> DOM manipulation)
- [x] Change all vars to let
- [ ] Test pure functions
- [x] Modularise Code 
- [x] Write Readme 
- [x] Add continuous integration and code coverage badges to readme
- [ ] Use CodeCov to track test coverage
- [ ] Create an svg map to select the country 

---



## What we struggled with :angry: 



---



- Working with TDD!
- We tried as much as we could, but we had few tests failing along the way that we had to commented out as we couldn't fix them.

![](https://media.giphy.com/media/HrydPrw0zphAs/giphy.gif)

---



- Adding the API key 

![](https://i.imgur.com/QyyzlV3.png)

![](https://i.imgur.com/mqTsz17.png)

---


# Git

- Readme - changing the master readme directly can cause issues. 

---

# "you assume your request will always work perfectly"

We were not passing information back the callback, just the news articles.

Added code to pass back the status codes and display 'No data' if the call fails.

---

## What we learned :satisfied:

- dotenv works better than env2 (we learnt to always look at the weekly downloads - many downloads are a positive sign )


---


![](https://i.imgur.com/JQhUPyI.png)

---

- Finally understood how the front-end talks to the back-end
- **Network** tab in Inspect

![](https://media.giphy.com/media/xMGh0bajSyNdC/giphy.gif)

---

- great tags to work with dropdown lists
- do not push changes to readme via github (to master)

---

### data-* attribute on buttons

![](https://i.imgur.com/0hdpqfh.png)


- gives ability to embed custom data attributes on all HTML elements.

- The stored (custom) data can then be used in the page's JS (without any Ajax calls or server-side database queries).

- consist of: prefix "data-" + attribute name (no uppercase, at least one character & a string)


---
### DONE :muscle: 
![](https://media.giphy.com/media/3o7qDEq2bMbcbPRQ2c/giphy.gif)

### Any questions? 
