export default null // Force module mode

// 1. Design a way to handle errors for the following API, using one of the patterns from this chapter. 

// error handling by returning exceptions

class NoUserLoggedIn extends Error{}

type UserID = unknown

interface API {
  getLoggedInUserID(): UserID | Error
  getFriendIDs(userID: UserID): UserID[] | Error

  getUserName(userID: UserID): string | Error
}

class API2 implements API {
  getLoggedInUserID(): UserID{
    return 
  }
  getFriendIDs(userID: UserID): UserID[]{
    let uid = [userID]
    return uid
  }

  getUserName(userID: UserID): string | Error{
    return ""
  }
}

let api2 = new API2()
let loggedInUser = api2.getLoggedInUserID()
if (loggedInUser instanceof Error){
  console.error(loggedInUser.message)
} else{
  let friendsList = api2.getFriendIDs(loggedInUser)
  if (friendsList instanceof Error){
    console.error(friendsList.message)
  } else {
    for (let friend of friendsList){
      console.info(friend)
    }
  }
  let userName = api2.getUserName(loggedInUser)

  if (userName === 'string'){
    console.info("logged in user: " + userName)
  } else if (userName instanceof Error){
    console.error(userName.message)
  }
}



