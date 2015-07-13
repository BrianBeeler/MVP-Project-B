// ========YOUR CODE HERE=========
NEW TABLE USERS
  // User id is an incrimenting integer
  USERID     (INT INC)
  // Username is varchar type with <= 10 characters
  USERNAME   (VARCHAR(10))


NEW TABLE TWEETS
  TWEETID   (INT INC)
  MESSAGE    (VARCHAR(152))
  USERNAME   (VARCHAR(10))
  TIMES      (TIMESTAMP)


// Association, don't remember syntax
USERS.USERID --> TWEETS.TWEETID

// Creating new user

var queryString =
'INSERT (u.USERID, u.USERNAME) \
FROM (USERS u) \
VALUES (? , ?)'

db.query( queryString, params, function (success, error) {})

