import { useState } from "react";
import {useRestaurant} from "../context/RestaurantContext.jsx";
import RestaurantForm from "./RestaurantForm.jsx";
import RestaurantCard from "./RestaurantCard.jsx";

const AdminDashboard=()=>{
    const{restaurants,addRestaurant}=useRestaurant();
    const[filterType,setFilterType]=useState("");
    const [parking,setParking]=useState("");

    const filtered=restaurants.filter((r)=>{
        let ok=true;
        if(filterType) ok=ok && r.type===filterType;
        if(parking==="yes") ok=ok && r.parkinglot;
        return ok;
    });

    return(
        <div style={{display:"flex",gap:"20px"}}>
            <aside>
                <h3>Add Restaurant</h3>
                <RestaurantForm onSubmit={addRestaurant}/>
            </aside>
            <main>
                <h2>Admin Dashboard</h2>
                <nav>
                    <select value={filterType} onChange={(e)=>setFilterType(e.target.value)}>
                        <option value="">All Types</option>
                        <option>Rajastani</option>
                        <option>Gujarati</option>
                        <option>Mughlai</option>
                        <option>Jain</option>
                        <option>Thai</option>
                        <option>North Indian</option>
                        <option>South Indian</option>
                        </select>
                    <select value={parking} onChange={(e)=>setParking(e.target.value)}>
                        <option value="">Parking: Any</option>
                        <option value="yes">With Parking</option>
                        <option value="no">Without Parking</option>
                    </select>
                </nav>
                <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px",marginTop:"20px"}}>
                    {filtered.map((r)=><RestaurantCard key={r.restaurantID} data={r}/>)}
                </div>
            </main>
            </div>
    );
};
export default AdminDashboard;
