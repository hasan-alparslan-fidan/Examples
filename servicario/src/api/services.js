import { projectFirestore } from "../db/index.js";

import "firebase/compat/auth";

//SERVICES BEGIN //

//fetch service by id
export const fetchServiceById = (serviceId) =>
  projectFirestore
    .collection("services")
    .doc(serviceId)
    .get()
    .then((snapshot) => ({ id: snapshot.id, ...snapshot.data() }));

//fetch all services
export const fetchServices = () =>
  projectFirestore
    .collection("services")
    .get()
    .then((snapshot) => {
      const services = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return services;
    });

//get all the services belonging to a certain user
export const fetchUserServices = (userId) =>
  projectFirestore
    .collection("services")
    .where("  ", "==", userId)
    .get()
    .then((snapshot) => {
      const services = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return services;
    });

//create one service
export const createService = (newService) => {
  return projectFirestore
    .collection("services")
    .add(newService)
    .then((docRef) => docRef.id);
};

//SERVICES END //
