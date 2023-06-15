import * as functions from "firebase-functions";
 import * as admin from "firebase-admin";
import * as sgMail from "@sendgrid/mail";

admin.initializeApp();
const sendgridApiKey=functions.config().sendgrid.apikey
sgMail.setApiKey(sendgridApiKey)

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

export const deletePlayerAccount = functions.https.onCall(async(data: any) => {
    console.log({ data });
    const id=data.id

    await admin.auth().deleteUser(id)

    const playerRef= await admin.firestore().collection('players').doc(id).get()
    await playerRef.ref.delete()
});


export const sendMallOnCreateReport = functions.firestore.document('reports/{reportId}').onCreate(async(snap,context)=>{
console.log(snap,context);
const reportData:any=snap.data()
const manageracount=await admin.auth().getUser(reportData.managerId)//管理しているマネージャーを特定
const managerEmail=manageracount.email
const msg = {
    to:managerEmail,
    from: {
        name: 'mynote',
        email: 'syouei1218@gmail.com',
    },
    subject: 'レポートが送信されました',
    text: 'レポートが送信されました。確認してください。',//メールが届いたときの内容
}

await sgMail
    .send(msg)
    .then(() => {
        console.log('Email sent')
    })
    .catch((error) => {
        console.error(error)
    })
})