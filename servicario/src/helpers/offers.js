import { timestamp } from "db";

//creating a chat lobby,
export const newCollaboration = ({
  offer: { service, time, toUser, id },
  fromUser,
}) => ({
  serviceId: service.id, // define ID on offer.service
  title: service.title,
  image: service.image,
  time: time * 60 * 60,
  allowedPeople: [fromUser.uid, toUser.uid],
  joinedPeople: [],
  toUser: toUser.uid,
  fromUser: fromUser.uid,
  fromOffer: id,
  status : "pending",
  createdAt: timestamp
});

//adding a new message to the chat lobby, 
export const newMessage = ({ offer: { service, toUser }, fromUser }) => ({
  isRead: false,
  type: "invitation",
  text: `Hello ${toUser.fullName}, please join collaboration as soon as possible`,
  cta: "", // click to action
  toUser: toUser.uid,
  fromUser: {
    name: fromUser.fullName,
    avatar: fromUser.avatar,
  },
  serviceTitle: service.title,
  serviceLink: `/services/${service.id}`,
  createdAt: timestamp
});
