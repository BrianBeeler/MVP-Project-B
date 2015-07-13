## Authentication
Explain why each system fails, and how to guard against that failure:
- Plaintext passwords

    Plaintext passwords can be easy accessed and used by hackers. So that passwords can not be easily found they should be encrypted.

- Encrypted passwords

    Encrypted passwords can fail, when the encryption algorithm is known, and a list of common passwords is analalysed. This allows the hack to
    search encrypted passwords in order to find the original password, and then the hacker can use these accounts. To prevent this a 'salt'
    is added to the password during encryption, so that the original password cannot be back searched

- Hashed passwords

    Not sure... maybe a hash is similar to an encryption key? The user can keep using the website as long as they have the key. The system fails
    if a hacker attains the key, and accesses the website as that user. To prevent this, apitokens should be stored in the users computer, and not
    sent in the request.

