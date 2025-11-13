import { useEffect, useState } from "react";
import { supabase } from "../client";
import { Link } from "react-router";
import Card from "../assets/components/Card";


const BeanGallery = () => {

   const [beans, setBeans] = useState([]);

   useEffect(() => {
      const fetchBeans = async () => {
         const { data} = await supabase
            .from('beans')
            .select().order('created_at', { ascending: false });
         
            setBeans(data);
      }
      fetchBeans();
   }, []);

   return (
<div className="beans-gallery">
  <h2>Your Beans Gallery</h2>

  {beans && beans.length > 0 ? (
    <div className="beans-list">
      {beans.map((bean) => (
        <Link key={bean.id} to={`/bean/${bean.id}`}>
          <Card
            name={bean.name}
            color={bean.color}
            speed={bean.speed}
          />
        </Link>
      ))}
    </div>
  ) : (
    <div className="empty-gallery">
      <p>You haven't made a bean yet. Create some beans to see them here!</p>
      <Link to="/create-bean">
        <button>Create a Bean</button>
      </Link>
    </div>
  )}
</div>
   )
}

export default BeanGallery;