# Week 05 Self-Assessment

## Guidelines

- Self-assessments are meant to give you an idea of how well you understand--or can figure out--the material that you covered recently.
- You **must** submit a pull request for all self-assessments (guidelines below). Give yourself a few minutes to do this at the end of the time allotted for the assessment.
- What you see is what you get--most of the time we don't include outside libraries
- TIP: Don't take too much time writing tests that are not required, instead use your Chrome Console for a quick and easy way to test your code.


## Grading Outline

- [ ] authentication
- [ ] fizzbuzz
- [ ] orms-save-user-sequelize
- [ ] sql-publisher-author-genre

## Self-Grading Process

After you complete each prompt, assign a grade to each item in the above Grading Outline, using this [Grading Scale](https://github.com/makersquare/student-wiki/wiki/Self-Assessments). Note your grade by editing **this file** (`README.md`), and writing your grade next to the corresponding item in the Grading Outline above. Please use the exact terms shown in the [Grading Scale](https://github.com/makersquare/student-wiki/wiki/Self-Assessments) document; do not modify or improvise them.

## Javascript Syntax Check

The file `syntaxalyze.html` is included. Open it in your browser and then drag your solution files onto the page to perform a syntax check. Fix any errors listed, then repeat the check. In order to re-check your file, you must **drag the solution file into syntaxalyze after each edit** &mdash; refreshing the page will not work. You may need to perform these steps multiple times until all the errors are fixed.

## Submitting Solutions

**VERY IMPORTANT: Before submitting your solutions, find and fix all syntax errors**

Solutions are submitted via [Pull Request](https://help.github.com/articles/using-pull-requests). Follow these steps:

1. From **your fork**, select `Pull Requests` and then create a `New pull request`. 
2. STOP. *Before* you `Click to create a pull request for this comparison` you must **adjust the target branch** (aka `base branch`) to be your username. Once chagned, the pull-request heading should look like this:

  > makersquare:username ... username:master

3. Copy and **paste the completed Grading Outline into the comment block** of your Pull Request.
4. Click `Send pull request`

---

## Authentication
Explain why each system fails, and how to guard against that failure:
- Plaintext passwords

- Encrypted passwords

- Hashed passwords


## ngFizzBuzz
* Play fizzbuzz with angular
  * [ ] Implement a counter as a service or factory
  * [ ] Increment your counter every time it is clicked
  * [ ] If the counter is divisible by three, display FIZZ
  * [ ] If the counter is divisible by five, display BUZZ
  * [ ] If the counter is divisible by both, display FIZZBUZZ
* [ ] Optionally, implement your view as a directive (but keep your logic in the controller)
* [ ] Optionally, implement your service/factory as a factory/service, and as a provider

* You'll need to serve fizzbuzz as a web page (not from a file). Now's a great time to `brew install python` and `python -m SimpleHTTPServer`.

## ORMs
Imagine you already have Sequelize installed, and don't worry about connecting to any existing database. Just write the necessary syntax as required below:
* [ ] Defining sequelize tables for users and tweets
* [ ] Declare the association that users have many tweets
* [ ] Using your definitions, write code needed to build & save a new user

## SQL
Using [WWW SQL Designer](http://ondras.zarovi.cz/sql/demo/) or [DB designer](http://dbdsgnr.appspot.com/), draw the schema for the following data
* Create the following 3 tables with the specified relationships:
  * [ ] publisher, has many authors, has one genre
  * [ ] author, has many publishers, has many genres
  * [ ] genre, has many publishers, has many authors
  * Be sure to include any foreign keys you will need, as columns of the tables you design
  * Export as an image and save to the `sql-publisher-author-genre` folder. To take a screen shot on a Mac, use the shortcut `Cmd+Shift+4` then drag a box around your desired image. The image will be saved to the desktop.
* [ ] Write an `INSERT` query that stores a new user record with a name, age, and location