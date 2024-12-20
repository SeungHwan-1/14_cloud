import React, { useState } from 'react';



const Lunch = () => {
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);
const LoadLunch = async (e) => {
  

  e.preventDefault();

  try {
    const response = await fetch(
      '	https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=e2d93272fec44184b467b6accf92f079&ATPT_OFCDC_SC_CODE=T10&Type=json&pIndex=1&pSize=100&ATPT_OFCDC_SC_CODE=T10&SD_SCHUL_CODE=9290083',
      { method: 'GET',
        headers: {
          'Accept': 'application/json',  // 응답으로 JSON을 요구
        }
       }
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`); // 응답 코드 체크
    }

    const data = await response.json(); // JSON 형식으로 파싱
    setResponseData(data);
    setError(null);
    console.log('Response:', data);
  } catch (err) {
    setError(err.message);
    console.error('Error fetching data:', err);
  }

}

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


