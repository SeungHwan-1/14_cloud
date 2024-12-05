import { useEffect, useState } from "react";


const MenuPage = () => {
   const [menuList, setMenuList] = useState([]);

   useEffect(() => {
 
      const fetchMenu = async () => {
         try {
            const response = await fetch("https://gogog.store:9999/menu/select"); 
            if (!response.ok) {
               throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setMenuList(data);  
         } catch (error) {
            console.error("Error fetching menu data:", error); 
         }
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
