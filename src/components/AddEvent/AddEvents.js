import React from "react";
import { Button } from "react-bootstrap";

const AddEvents = () => {
  const allEvents = [
    {
      name: "Child Support",
      image: "/resources/images/childSupport.png",
      date: new Date(),
    },
    {
      name: "Refuge shelter",
      image: "/resources/images/refuseShelter.png",
      date: new Date(),
    },
    {
      name: "Food Charity",
      image: "/resources/images/foodCharity.png",
      date: new Date(),
    },
    {
      name: "Host a clothing swap",
      image: "/resources/images/clothSwap.png",
      date: new Date(),
    },
    {
      name: "Host a river clean-up",
      image: "/resources/images/riverClean.png",
      date: new Date(),
    },
    {
      name: "Clean water for children",
      image: "/resources/images/cleanWater.png",
      date: new Date(),
    },
    {
      name: "Good education",
      image: "/resources/images/goodEducation.png",
      date: new Date(),
    },
    {
      name: "New books for children",
      image: "/resources/images/newBooks.png",
      date: new Date(),
    },
    {
      name: "Host a study group",
      image: "/resources/images/studyGroup.png",
      date: new Date(),
    },
    {
      name: "Build birdhouses for your neighbors",
      image: "/resources/images/birdHouse.png",
      date: new Date(),
    },
    {
      name: "Organize books at the library",
      image: "/resources/images/libraryBooks.png",
      date: new Date(),
    },
    {
      name: "Give a seminar on driving safety",
      image: "/resources/images/driveSafety.png",
      date: new Date(),
    },
    {
      name: "Give free music lessons",
      image: "/resources/images/musicLessons.png",
      date: new Date(),
    },
    {
      name: "Teach people how to register to vote",
      image: "/resources/images/voteRegister.png",
      date: new Date(),
    },
    {
      name: "Clean up your local park.",
      image: "/resources/images/clearnPark.png",
      date: new Date(),
    },
    {
      name: "Give IT help to local adults",
      image: "/resources/images/ITHelp.png",
      date: new Date(),
    },
    {
      name: "Foster a shelter animal",
      image: "/resources/images/animalShelter.png",
      date: new Date(),
    },
    {
      name: "Babysit during PTA meetings",
      image: "/resources/images/babySit.png",
      date: new Date(),
    },
    {
      name: "Collect stuffed animals",
      image: "/resources/images/stuffedAnimals.png",
      date: new Date(),
    },
    {
      name: "Collect school supplies",
      image: "/resources/images/schoolSuffiles.png",
      date: new Date(),
    },
  ];

  const addEvents = () => {
    fetch("http://localhost:5000/addevents", {
      method: "POST",
      body: JSON.stringify(allEvents),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((result) => result && alert("All Events added successfully"))
      .catch((error) => alert("Something is wrong"));
  };
  return (
    <div>
      <Button onClick={addEvents} variant="info">
        Import All Events
      </Button>
    </div>
  );
};

export default AddEvents;
