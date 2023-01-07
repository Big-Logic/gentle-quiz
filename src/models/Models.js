import { QUIZ_API_ENDPOINT } from "./Constants";

export const getQuizQuestions = async (categories,limit,difficulty) => {
    try {
        const response = await fetch(`${QUIZ_API_ENDPOINT}categories=${categories}&limit=${limit}&difficulty=${difficulty}`);

        if(!response.ok) {
            throw new Error('An error occurred why trying to fetch question!!');
        }

        const responseData = await response.json();
        return responseData;
    } catch (err) {

    }
}