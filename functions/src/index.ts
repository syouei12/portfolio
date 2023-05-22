import * as functions from "firebase-functions";
 import * as admin from "firebase-admin";

admin.initializeApp();
export const createPlayerAccount = functions.https.onCall(async(data: any) => {
    console.log({ data });
    const email=data.email
    const name=data.name
    const password=data.password
    const managerId=data.managerId

    const user=await admin.auth().createUser({//管理者権限を使用してアカウントを作成している
        email,
        password,
    })

    await admin.firestore().collection('players').doc(user.uid).set({
        email:email,
        id:user.uid,
        name:name,
        managerId: managerId,
    })
  });//コードを追記などしたらターミナルで更新「firebase deploy --only functions 」