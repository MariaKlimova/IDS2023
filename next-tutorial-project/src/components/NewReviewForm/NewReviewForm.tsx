import {ChangeEvent, ChangeEventHandler, useCallback, useEffect, useReducer, useRef} from "react";
import {element} from "prop-types";


const FORM_ACTIONS = {
    setName: 'setName',
    setText: 'setText',
    setRating: 'setRating'
}
export const NewReviewForm = () => {

    const setFocus = useCallback((element: HTMLInputElement)=>{element.focus()},[])
    const reducer = (state: {name: string, text: string, rating: number}, action: {type: string, payload?: any}) => {
        switch (action?.type){
            case FORM_ACTIONS.setName:
                return {name: action.payload.name, text: "", rating: 0};
            case FORM_ACTIONS.setText:
                return {...state, text: action.payload.text};
            case FORM_ACTIONS.setRating:
                return {...state, rating: action.payload.rating};
            default:
                return state;
        }
    }
    const initialState = {
        name: '',
        text: '',
        rating: 0
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    const onNameChange = (event: ChangeEvent<HTMLInputElement>) => dispatch(
        {type: FORM_ACTIONS.setName, payload: {name: event.target.value}}
    )
    return(
      <div>
          <label>
              Name:
              <input
                  onChange={onNameChange}
                  value={state.name}
                  type='text'
                  ref={setFocus}
              />
          </label>
          <label>
              Text:
              <input type='text'/>
          </label>
          <label>
              Rating:
              <input type='number'/>
          </label>
      </div>
    )
}
