import React from 'react'

function Learning() {
    return (
        <>
            {/* We've done most of the part and crud in this tutorial
            Now we'll enable that feature ki 
            you can make changes in client side 
            updateTitle only if you rae logged in */}

            {/* We'll need to keep track of user id
and ensure that user that is logged in is only 
the same as that of change make */}

            {/* We'll do this using the rules section of firebase */}

            {/* In onSubmitMovie function in App.js
            we add a user id  */}
            { // The above thing will let the db enter the id of the logged in user
                //Next we will make changes in firestore rules section so to allow only the same logged in user to make changes in the title
            }

            { //Rules for only allowing delete and update only if user is logged in 
            }
            {/*     rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow create: if request.auth!=null && request.auth.uid == request.resource.data.userId;
      allow delete,update: if request.auth!=null;
      allow read: if true;
    }
  }
}*/}
        </>
    )
}

export default Learning;