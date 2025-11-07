import { createAsync, query } from "@solidjs/router";
import { api } from "../../../utils/fetch";

const getApi = query(async () => await api.get("cache").text(), "getApi");

const ApiTest = () => {
	return createAsync(() => getApi());
};

export default ApiTest;
export type AboutDataType = typeof ApiTest;
