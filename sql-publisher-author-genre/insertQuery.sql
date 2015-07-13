-- Write your INSERT query here

NEW TABLE publisher
  publisher, author, genre

NEW TABLE author
  author, publisher, genre

NEW TABLE genre
  genre, author


'INSERT name, age, location
 TO USER
 VALUES (? , ? , ?);'
