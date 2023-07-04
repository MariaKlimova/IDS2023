'use client';
import {FunctionComponent} from "react";
import {Review as ReviewProps} from "@/types";
import {Review} from "@/components/Review/Review";


interface Props {
    reviews: ReviewProps[]
}
export const Reviews: FunctionComponent<Props> = ({reviews})=>{
    return (
        <div>
            {
                reviews?.length > 0 && reviews.map((review)=> (
                   <Review
                        key ={review.id}
                        {...review}
                   />
                ))
            }
        </div>
    )
}
