import React, { useState } from 'react';

const Lunch = () => {
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);

  const LoadLunch = async (e) => {
    e.preventDefault();


   
    try {
      const response = await fetch('/api/mealService', { method: 'GET' });
         if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const textData = await response.text(); // 응답 내용을 텍스트로 먼저 확인
    console.log('Response text:', textData); // HTML 오류 페이지나 다른 오류가 반환될 수 있습니다.

      const data = JSON.parse(textData); // 직접 파싱
     setResponseData(data);
     setError(null);
      
      
      console.log('Response:', data);
    } catch (err) {
      setError(err.message); // 에러 메시지
      console.error('Error fetching data:', err);
    }
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


