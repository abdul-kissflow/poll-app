import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  documentId,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "./config";

export async function getPolls(pollIds = []) {
  const q = query(collection(db, "polls"), where(documentId(), "in", pollIds));
  const querySnapshot = await getDocs(q);
  return querySnapshot.map((doc) => ({ ...doc.data() }));
}

export async function getUserDoc(userId) {
  const userDocReference = doc(db, "users", userId);
  const docSnapShot = await getDoc(userDocReference);
  if (docSnapShot.exists()) {
    return docSnapShot.data();
  }
  await setDoc(userDocReference, {
    pollIds: [],
  });
  return await getDoc(userDocReference).data();
}

export function getPollIdsFromUser(user) {
  return user.pollIds;
}

//on init
const user = getUserDoc("");
const pollIds = getPollIdsFromUser(user);
getPolls(pollIds).then().catch();

//creating a poll

export async function createPoll(userId, data) {
  // Add a new document with a generated id.
  const docRef = await addDoc(collection(db, "polls"), data);
  updateUserWithPollId(userId, docRef.id);
}

export async function updateUserWithPollId(userId, pollId) {
  const userDoc = doc(db, "users", userId);
  await updateDoc(userDoc, {
    polls: arrayUnion(pollId),
  });
}

export async function getPollDoc(pollId) {
  const pollDoc = doc(db, "polls", pollId);
  const docSnapShot = await getDoc(pollDoc);
  return docSnapShot.data();
}

export async function createResponse(pollId, data) {
  // Add a new document with a generated id.
  const docRef = await addDoc(collection(db, "responses"), data);
  updateUserWithPollId(pollId, docRef.id);
}

export async function updatePollWithResponseId(pollId, responseId) {
  const pollDoc = doc(db, "polls", pollId);
  await updateDoc(pollDoc, {
    responses: arrayUnion(responseId),
  });
}
