'use client';
import React from "react";
import {Review as ReviewProps} from "@/types";

export const Review = (review:ReviewProps) => {
    return (
        <div key={review.id}>
            <span>{review.author}</span>
            <span>{review.text}</span>
            <span>{review.rating}</span>
        </div>
    )
}
