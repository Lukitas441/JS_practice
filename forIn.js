const users = {
  Alan: {
    online: false,
  },
  Jeff: {
    online: true,
  },
  Sarah: {
    online: false,
  }
};

function showAllUsers(allUsers) {
    for(const user in allUsers) {
        console.log(user, allUsers[user])
    }
}

function countOnline(allUsers) {
    let onlineUsers = 0
    for(const user in allUsers){
        if(allUsers[user].online) onlineUsers++
    }
    return onlineUsers
}


/* console.log(countOnline(users)); */
showAllUsers(users)

