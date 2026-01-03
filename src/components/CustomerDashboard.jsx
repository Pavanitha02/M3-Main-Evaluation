import {useState} from "react";
import {useRestaurant} from "../context/RestaurantContext.jsx";
import RestaurantCard from "./RestaurantCard.jsx";

const CustomerDashboard=()=>{
    const{restaurants}=useRestaurant();
    const[filterType,setFilterType]=useState("");
    const [parking,setParking]=useState("");
    const [search,setSearch]=useState("");
    const list=restaurants.filter((r)=>{
        let ok=true;
        if(filterType) ok=ok && r.type===filterType;
        if(parking==="yes") ok=ok && r.parkinglot;
        if(perking==="no") ok=ok && !r.parkinglot;
        if(search){
            const s=search.toLowerCase();
            ok=ok && (r.name.toLowerCase().includes(s) || r.type.toLowerCase().includes(s) || r.address.toLowerCase().includes(s));

        }
        return ok;
    });
    return(
        <div>
            <h2>Customer Dashboard</h2>
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
                <input placeholder="search by name or address" value={search} onChange={(e)=>setSearch(e.target.value)}/>
            </nav>
            <div style={{display:"flex",flexWrap:"wrap",gap:"20px",marginTop:"20px"}}>
                {list.map((r)=><RestaurantCard key={r.restaurantID} data={r}/>)}
            </div>
        </div>
    );
};
export default CustomerDashboard;