// api/mealService.js
import axios from 'axios';

export default async (req, res) => {
  try {
    const response = await axios.get('https://open.neis.go.kr/hub/mealServiceDietInfo', {
      params: {
        KEY: 'e2d93272fec44184b467b6accf92f079',
        ATPT_OFCDC_SC_CODE: 'T10',
        SD_SCHUL_CODE: '9290083',
      },
    });
    res.status(200).json(response.data); // 데이터 반환
  } catch (error) {
    res.status(500).json({ error: '데이터를 가져오는 중 오류 발생' });
  }
};