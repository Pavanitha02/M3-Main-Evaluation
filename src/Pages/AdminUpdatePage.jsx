import {useNavigate,useParms} from "react-router-dom";
import {useRestaurants} from "../context/RestaurantContext.jsx";
import RestaurantForm from "../components/RestaurantForm.jsx";
const AdminUpdatePage=()=>{
    const {id}=useParms();
    const Navigate=useNavigate();
    const{restaurants,updateRestaurant}=useRestaurants();
    const rest=restaurants.find((r)=>r.restaurantID===Number(id));
    const handleUpdate=(data)=>{
        if(window.confirm("Are you sure you want to update this restaurant?")){
            updateRestaurant(rest.restaurantID,data);
            Navigate("/admin/dashboard");
        }
    };

    if(!rest)return <div>Restaurant not found</div>;
    return(
        <div>
            <h2>Update Restaurant</h2>
            <RestaurantForm initialData={rest} onSubmit={handleUpdate}/>
        </div>
    );
};
export default AdminUpdatePage;
