'use client';
import React, {FunctionComponent} from "react";
import classnames from "classnames";
import styles from './style.module.css';
interface Props {
    title: string;
    genre: string;
    seasonCount: number;
}

export const FilmInfo: FunctionComponent<Props> = ({
       title,
       genre,
       seasonCount,
    })=>{
    return (
        <>
            <p className={classnames(styles.title, styles.text)}>{title || "Неизвестный"}</p>
            <p>{Boolean(genre) && <p>{genre}</p>}</p>
            <p>{seasonCount > 0 ? `Кол-во ${seasonCount}`: 'Нет'}</p>
        </>
    )
}
