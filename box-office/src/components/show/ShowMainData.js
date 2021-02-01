import React from "react";
import IMG_PLACEHOLDER from "../../images/not-found.png";
import {
  MainDataWrapper,
  TagList,
  Headline,
} from "../../pages/ShowMainData.styled";
import { Star } from "../styled";

const ShowMainData = ({ name, rating, summary, tags, image }) => {
  return (
    <MainDataWrapper>
      <img src={image ? image.original : IMG_PLACEHOLDER} alt="show-cover" />
      <div class="text-side ">
        <Headline>
          <h1>{name}</h1>
          <div>
            <Star active />
            <span>{rating.average || "N/A"}</span>
          </div>
        </Headline>
        <div class="summary" dangerouslySetInnerHTML={{ __html: summary }} />

        <TagList>
          Tags:{" "}
          <div>
            {tags.map((tag, i) => (
              <span key={i}>{tag}</span>
            ))}
          </div>
        </TagList>
      </div>
    </MainDataWrapper>
  );
};

export default ShowMainData;
