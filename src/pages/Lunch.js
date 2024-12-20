import React, { useState } from 'react';

const Lunch = () => {
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);

  const LoadLunch = async (e) => {
    e.preventDefault();


    const neis = require("neis");
    let meal = await neis.createSchool(neis.REGION.BUSAN, "C100000394", neis.TYPE.HIGH).getMeal(2019, 8);

    
    // try {
    //   const response = await fetch('/api/mealService', { method: 'GET' });
      
    //   if (!response.ok) {
    //     throw new Error('Network response was not ok');
    //   }
      
    //   const data = await response.json();
    //   setResponseData(data); // 데이터 저장
    //   setError(null); // 에러 초기화
    //   console.log('Response:', data);
    // } catch (err) {
    //   setError(err.message); // 에러 메시지
    //   console.error('Error fetching data:', err);
    // }
  };

  return (
    <>
      <form onSubmit={LoadLunch}>
        <label htmlFor="testInput">Test Input:</label>
        <button type="submit">Submit</button>
      </form>

      {responseData && <pre>{JSON.stringify(responseData, null, 2)}</pre>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
    </>
  );
};

export default Lunch;


