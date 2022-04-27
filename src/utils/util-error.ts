import axios from 'axios';

export const errorResponse = (e: any) => {
    if (axios.isAxiosError(e) && e.response) {
        const errorMessage = e.response.data.error;
        console.log(errorMessage)
    }
}