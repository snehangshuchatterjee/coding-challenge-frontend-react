import axios from "axios";

class AxiosController {

    public getData = (url: string) => {
        return axios.get(url);
    }

    public getDataPerPage = (url: string, pageNumber: number, itemPerPage: number) => {
        const pageUrl = url + "&page=" + pageNumber + "&per_page=" + itemPerPage;

        return this.getData(pageUrl);
    }
}

export default AxiosController;
