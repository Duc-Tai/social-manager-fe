import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { api } from "./utils/common";

import "./config/axios/index";

axios.defaults.baseURL = api;

Vue.use(VueAxios, axios);
