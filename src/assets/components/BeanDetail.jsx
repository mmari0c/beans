import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { supabase } from "../../client";
import { Link } from "react-router";
import "./BeanDetail.css";

const BeanDetail = () => {

   const {id} = useParams();
   const [bean, setBean] = useState(null);

   useEffect(() => {
      console.log(`Fetching details for bean with id: ${id}`);
      const fetchBeanDetail = async () => {
         const data = await supabase
            .from('beans')
            .select()
            .eq('id', id)
            .single();
      
         setBean(data.data);
      }
      fetchBeanDetail();
   }, [id]);
   
   console.log(bean);

   return (
      <div className="bean-detail-container">
      { !bean ? (
         <p>No Bean found</p>
      ) : (
         <div className="bean-detail-card">
            <h2>Bean: {bean.name}</h2>

            <div className="bean-stats">
            <h3>Stats</h3>
            <p><strong>Color:</strong> {bean.color}</p>
            <p><strong>Speed:</strong> {bean.speed} mph</p>
            </div>

            <Link 
            key={bean.id} 
            to={`/edit-bean/${bean.id}`} 
            state={{ bean }}
            >
            <button className="detail-edit-btn">Edit Bean</button>
            </Link>
         </div>
      )}
      </div>
   )
}

export default BeanDetail;