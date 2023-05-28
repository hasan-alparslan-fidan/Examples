import React from "react";
import { Route, Routes } from "react-router-dom";

//pages
import Faq from "pages/Faq";
import Home from "pages/Home";
import Login from "pages/Login";
import Profile from "pages/Profile";
import Register from "pages/Register";
import ServiceDetail from "pages/ServiceDetail";
import ServiceCreate from "pages/services/ServiceCreate.js";
import UserServices from "pages/services/UserServices.js";
import Services from "pages/Services";
import SecretPage from "pages/Secret";
import SendOffersPage from "pages/offers/SentOffers.js"
import ReceivedOffers from "pages/offers/ReceivedOffers.js"
import ReceivedCollaborations from "pages/collaborations/ReceivedCollaborations";
import CollaborationDetail from "pages/collaborations/CollaborationDetail";

//define routes here/ add new ones
const RoutesS = () => (
  <Routes>
    <Route path="secret" element={<SecretPage />} />
    <Route path="services" element={<Services />} />
    <Route path="collaborations/me" element={< ReceivedCollaborations/>} />
    <Route path="collaborations/:id" element={< CollaborationDetail/>} />
    <Route path="offers/sent" element={< SendOffersPage/>} />
    <Route path="offers/received" element={<ReceivedOffers  />} />
    <Route path="services/me" element={<UserServices />} />
    <Route path="services/new" element={<ServiceCreate />} />
    <Route path="services/:serviceId" element={<ServiceDetail />} />
    <Route path="profile" element={<Profile />} />
    <Route path="faq" element={<Faq />} />
    <Route path="/" element={<Home />} />
    <Route path="register" element={<Register />} />
    <Route path="login" element={<Login />} />
  </Routes>
);

export default RoutesS;
