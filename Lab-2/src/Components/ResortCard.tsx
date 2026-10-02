import type {ResortListing} from "../data/data";

export default function ResortCard({
    pic,
    country,
    location,
    rating,
    price
}: ResortListing) {
    return (
        <div className ="ResortCard">

            <img src = {pic} alt = {location} width = "100%" height= "250px"/>

            <h2 style = {{fontSize: "17px"}}>{country}</h2>
        
            <p style = {{fontStyle: "italic", fontSize: "17px"}}>{location}</p>
        
            <p style= {{ color: rating <= 4.0 ? "red" : "green"}}>{rating}★</p>
        
            <p>${price}/night</p>

        </div>
    );
}