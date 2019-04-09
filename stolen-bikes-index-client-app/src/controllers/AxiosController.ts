import axios from "axios";

class AxiosController {

    public getData = (url: string) => {
        return axios.get(url);
    }

    public getTotalData = (url: string) => {
        const pageUrl = url + "&page=" + 1 + "&per_page=" + 300;
        return axios.get(pageUrl);
    }

    public getDataPerPage = (url: string, pageNumber: number, itemPerPage: number) => {
        const pageUrl = url + "&page=" + pageNumber + "&per_page=" + itemPerPage;

        return this.getData(pageUrl);
    }
}

export default AxiosController;
