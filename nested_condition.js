/*
    Here we are exploring nested conditionals combined with logical operators.
*/ 


// Simulating a login page.
/*
    1. Will check if the user is new, if yes, tell him to create account,
                                        if no, tell him to login.
                                        but if he skips it checks if he is subscribed or not,
                                        if not, it suggests to register or subscribe,
                                        else it kicks off.
    2. Will check if user is varified and trusted, if no, it will suggest to use safe passage but show the content anyway.
    3. Will check if user is a teacher or a student, eitherway it will ask for a id, 
                            if id matches it will give a secret message based on role,
                            if id doesn't match it will give a secret naga massage.
*/ 
// 1
const isNewUser = true;
const isSubscribed = true;
// 2
const isVarified = true;
const usingTrustedSites = true;
// 3
const isStudent = true;
const studentId = "IAMASTUDENT";
const teacherId = "IAMATEACHER";