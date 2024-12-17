import { useEffect, useState } from "react";


const MenuPage = () => {
   const [menuList, setMenuList] = useState([]);

   useEffect(() => {
 
      const fetchMenu = async () => {
      
            const response = await fetch("https://gogog.store:3013/menu/select");           
            const data = await response.json();
            setMenuList(data);  
         
      };

      fetchMenu(); 
   }, []);

   return (
      <>
         <h1>우리가 메뉴를 불러와서 봉려줄 페이지</h1>
         <ul>
            {menuList.map((menuItem, index) => (
               <li key={index}>{menuItem.menuName}</li> 
            ))}
         </ul>
      </>
   );
};

export default MenuPage;
