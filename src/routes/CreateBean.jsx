import { useState } from "react";
import { supabase } from "../client";
import "./CreateBean.css";

const CreateBean = () => {

   const [beanAttributes, setBeanAttributes] = useState({ color: "", speed: "", name: "" });

   const handleChange = (e) => {
      const { name, value } = e.target;
      setBeanAttributes( (prev) => {
         return {
            ...prev,
            [name]: value
         }
      })
   }

   const CreateBean = async (event) => {
      event.preventDefault();
      
      await supabase
      .from('beans')
      .insert({name: beanAttributes.name, color: beanAttributes.color, speed: beanAttributes.speed})
      .select()

      window.location = "bean-gallery" // Change to beans gallery after creation
   }

   return (
      <div className="create-bean-container">
      <h2>Create your Bean!</h2>
      <form className="create-bean-form">
         <label htmlFor="name">Name:</label>
         <input type="text" id="name" name="name" onChange={handleChange} />

         <label htmlFor="color">Color:</label>
         <select id="color" name="color" onChange={handleChange}>
            <option value="">Select a color</option>
            <option value="Pastel Pink">Pastel Pink</option>
            <option value="Mint Green">Mint Green</option>
            <option value="Baby Blue">Baby Blue</option>
            <option value="Sunny Yellow">Sunny Yellow</option>
            <option value="Lavender">Lavender</option>
         </select>

         <label htmlFor="speed">Speed:</label>
         <input type="text" id="speed" name="speed" onChange={handleChange} />

         <button type="submit" onClick={CreateBean}>Create Bean</button>
      </form>
      </div>

   )
}

export default CreateBean;
