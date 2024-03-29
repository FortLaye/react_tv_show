import { FiveStarRating } from "../FiveStarRating/FiveStarRating";
import s from "./style.module.css";
import React from 'react';

export function TVShowDetail({tvShow}) {
  return (
    <div>
        <div className={s.title}> {tvShow?.name} </div>
        <div className={s.rating_container}>
            <FiveStarRating rating={tvShow?.vote_average/2} />
            <div className={s.rating}> {tvShow?.vote_average/2} / 5 </div>
        </div>
        <div className={s.overview}>{tvShow?.overview}</div>
    </div>
  )
}

