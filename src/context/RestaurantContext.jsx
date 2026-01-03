import { createContext,useContext,useState,useEffect, use } from "react";
import {getRestaurantsFromLS,saveRestaurantsToLS} from "../util/localStorage.jsx";
const RestaurantContext=createContext(null);
export const RestaurantProvider=({children})=>{
    const[restaurants,setRestaurants]=useState([]); 
    useEffect(()=>{
        setRestaurants(getRestaurantsFromLS());
    },[]);
    useEffect(()=>{
        saveRestaurantsToLS(restaurants);
    },[restaurants]);
    const addRestaurant=(rest)=>{
        setRestaurants((prev)=>{...rest,restaurantID:
        Date.now()}
    );

    };
    const updateRestaurant=(id,updated)=>{
        setRestaurants((prev)=>prev.map((r)=>(r.restaurantID===id?{...r,...updated}:r)));
    };
    const deleteRestaurant=(id)=>{
        setRestaurants
        ((prev)=>prev.filter((r)=>r.restaurantID!==id));
    };
    return(
        <RestaurantContext.Provider value={{restaurants,addRestaurant,updateRestaurant,deleteRestaurant}}>  
            {children}
        </RestaurantContext.Provider>
    );  
};
export const useRestaurant=()=>{
    return useContext(RestaurantContext);
};