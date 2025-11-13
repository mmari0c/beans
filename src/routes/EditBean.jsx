import { useState } from "react";
import { supabase } from "../client";
import { useParams, useLocation } from "react-router";
import "./EditBean.css";

const EditBean = () => {

   const { id } = useParams();
   const { state } = useLocation();

   const beanInfo = state?.bean;
   console.log(beanInfo);

   const [bean, setBean] = useState({name: '', color: '', speed: '' });

   const handleChange = (e) => {
      const { name, value } = e.target;
      setBean( (prev) => {
         return {
            ...prev,
            [name]: value
         }
      })
   }

   const updateBean = async (event) => {
      event.preventDefault();

      await supabase
         .from('beans')
         .update({name: bean.name, color: bean.color, speed: bean.speed})
         .eq('id', id);

      window.location = "/bean-gallery"; // Redirect to beans gallery after update
   }

   const deleteBean = async (event) => {
      event.preventDefault();

      await supabase
         .from('beans')
         .delete()
         .eq('id', id);

      window.location = "/bean-gallery"; // Redirect to beans gallery after deletion
   }

   return (
      <div className="edit-bean-container">
      <h2>Update: {beanInfo.name}</h2>

      <div className="current-stats">
         <h3>Current Stats</h3>
         <p><strong>Color:</strong> {beanInfo.color}</p>
         <p><strong>Speed:</strong> {beanInfo.speed} mph</p>
      </div>

      <form className="edit-bean-form">
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

         <button type="submit" onClick={updateBean}>Edit Bean</button>
         <button
  type="button"
  className="delete-btn"
  onClick={deleteBean}
>
  Delete Bean
</button>
      </form>
      </div>

   )
}

export default EditBean;