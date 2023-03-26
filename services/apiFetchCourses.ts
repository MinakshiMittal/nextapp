import axios from 'axios';
import { Course } from '~/utils/types';

export const fetchCourses = async () => {
  try {
    const data = await axios.get('./courses.json');
    console.log(data);
    if (data.status === 200) {
      return data.data.courses as Course[];
    }
    return [];
  } catch (error: unknown) {
    console.error(error, 'error');
  }
};
