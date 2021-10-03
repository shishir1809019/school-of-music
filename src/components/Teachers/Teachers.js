import React from "react";
import { Row } from "react-bootstrap";
import Teacher from "../Teacher/Teacher";

const Teachers = () => {
  const teachers = [
    {
      id: 1,
      name: "Jems",
      description:
        "Musicians and Music Composers like Lucky Akhand, Manam Ahmed, Prince Mahmud and Shawkat have also composed songs for him. ",
      url: "https://www.arthosuchak.com/wp-content/uploads/2015/03/james-f.jpg",
    },
    {
      id: 1,
      name: "Andru kishor",
      description:
        "Musicians and Music Composers like Lucky Akhand, Manam Ahmed, Prince Mahmud and Shawkat have also composed songs for him. ",
      url: "https://bholarbani.com/wp-content/uploads/2020/07/FB_IMG_1594042782373.jpg",
    },
    {
      id: 1,
      name: "Tahsan",
      description:
        "Musicians and Music Composers like Lucky Akhand, Manam Ahmed, Prince Mahmud and Shawkat have also composed songs for him. ",
      url: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Tahsan_Rahman_Khan_%28cropped%29.jpg",
    },
  ];
  return (
    <div>
      <h3 className="my-3">Our Teachers</h3>
      <Row xs={1} md={3} className="g-4 container w-75 mx-auto">
        {teachers.map((teacher) => (
          <Teacher teacher={teacher}></Teacher>
        ))}
      </Row>
    </div>
  );
};

export default Teachers;
