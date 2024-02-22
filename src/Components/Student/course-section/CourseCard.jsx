import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

const CourseCard = ({ item }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("courseView/", { state: { course: item } });
  };

  return (
    <div className="single__course__item">
      <div className="course__img">
        <img src={item.image} alt="" className="w-100" />
      </div>

      <div className="course__details">
        <h6 className="course__title mb-4">{item.course_name}</h6>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="lesson d-flex align-items-center gap-1">
            <i class="ri-book-open-line"></i> {item.video_count} Lessons
          </p>

          <p className="students d-flex align-items-center gap-1">
            <i class="ri-user-line"></i>{" "}
            {item.tutor_profile.tutor_details.username}
          </p>
        </div>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="rating d-flex align-items-center gap-1">
            <i class="ri-user-heart-fill"></i> {item.likes}
          </p>

          <p className="enroll d-flex align-items-center gap-1">
            <Button onClick={handleClick}>Enrol</Button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
