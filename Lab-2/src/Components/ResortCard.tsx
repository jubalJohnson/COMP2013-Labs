interface ResortCardProps{
    image: string;
    country: string;
    resortName: string;
    rating: string;
    price: string;
}


export default function ResortCard(props: ResortCardProps) {
    return (
    <div className ="ResortCard">
        <img src = {props.image} alt = {props.resortName} width = "100px"/>
        <h2>{props.country}</h2>
        <h2>{props.resortName}</h2>
        <h2>{props.rating}</h2>
        <h2>{props.price}</h2>
        
        
    </div>
    );
}