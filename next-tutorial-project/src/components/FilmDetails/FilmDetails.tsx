'use client';
import {FunctionComponent, useEffect, useState} from "react";
import {useCount} from "@/hooks/useCount";
import {FilmInfo} from "@/components/FilmInfo/FilmInfo";
import {NewReviewForm} from "@/components/NewReviewForm/NewReviewForm";

import styles from './style.module.css';
interface Props {
    title: string;
    genre: string;
    seasonCount: number;
}

export const FilmDetails: FunctionComponent<Props> = ({
    title,
    genre,
    seasonCount,
}) => {

    let {count, increment, decrement} = useCount(0)
    return (
      <div>
          <FilmInfo title={title} genre={genre} seasonCount={seasonCount}/>
          <div>
              <button onClick={decrement}>-</button>
              {count}
              <button onClick={increment}>+</button>
          </div>
          <NewReviewForm classname={styles.reviewForm}/>
      </div>
    )
};
