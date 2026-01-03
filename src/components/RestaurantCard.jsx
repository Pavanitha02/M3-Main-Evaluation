import {Link} from 'react-router-dom';
import {useAuth} from '../context/AuthContext.jsx';
import {useRestaurants} from '../context/RestaurantContext.jsx';

const RestaurantCard=({data}})=>{
    const {user}=useAuth();
    const {deleteRestaurant}=useRestaurants();
    const {restaurantID,restaurantName,address,type,parkingLot,image}=data;
    const handleDelete=()=>{
        if(window.confirm("Are you sure you want to delete this restaurant?")){
            deleteRestaurant(restaurantID);
        }
    };
    return(
        <div className="card">
            <img src={image} alt={restaurantName} width="200" height="150"/>
            <h3>{restaurantName}</h3>
            <p>{address}</p>
            <p>Type: {type}</p> 
            <p>Parking Lot: {parkingLot ? "Available" : "Not Available"}</p>
            {user.role==="Admin" && (
                <div>
                    <Link to={`/admin/restaurants/update/${restaurantID}`}>
                        <button>Update</button>
                        </Link>
                        <button onClick={handleDelete}>Delete</button>
                </div>
            )}
        </div>
    );
};
export default RestaurantCard;





