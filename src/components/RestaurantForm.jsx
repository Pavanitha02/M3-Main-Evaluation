import { useEffect,useState } from "react";
const defaultImage="https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"
const RestaurantForm=({onSubmit,initialData={}})=>{
    const [form,setForm]=useState(
        {
  "restaurantID": 26,
  "restaurantName": "1135 AD",
  "address": "Jaipur, Amber Fort, Rajasthan",
  "type": "Rajasthani",
  "parkingLot": true,
  "image": "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"
}
    );
    useEffect(()=>{
        if(initialData){
            setForm({
                restaurantName:initialData.restaurantName,
                address:initialData.address,
                type:initialData.type,
                parkingLot:initialData.parkingLot,
                image:initialData.image || defaultImage
            });
        }
    },[initialData]);

    const handleChange=(e)=>{
        const {name,value,type,checked}=e.target;
        setForm((prev)=>({
            ...prev,
            [name]:type==="checkbox"?checked:value
        }));
    };   
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!form.restaurantName || !form.address){
            alert("Please fill in all required fields");
            return;
        }
        onSubmit(form);
        if(!initialData){
            setForm({
                restaurantName:"",
                address:"", 
                type:"Rajastani",
                parkingLot:false,
                image:defaultImage
            });
        }
    };
    return(
        <form onSubmit={handleSubmit}>
            <input name="restaurantName" type="text" placeholder="Restaurant Name" value={form.restaurantName} onChange={handleChange} />
            <br/>
            <input name="address" type="text" placeholder="Address" value={form.address} onChange={handleChange} />
            <br/>
            <select name="type" value={form.type} onChange={handleChange}>
                <option>Rajastani</option>
                <option>Gujarati</option>
                <option>Mughlai</option>
                <option>Jain</option>
                <option>Thai</option>
                <option>North Indian</option>
                <option>South Indian</option>
            </select>
            <br/>
            <label>
                Parking available
                <input type="checkbox" name="parkingLot" checked={form.parkingLot} onChange={handleChange} />
            </label>
            <br/>
            <input name="image" type="text" placeholder="Image URL" value={form.image} onChange={handleChange} />
            <br/>
            <button type="submit">{initialData?"Update Restaurant":"Add"}</button>
        </form>
    );
};
export default RestaurantForm;