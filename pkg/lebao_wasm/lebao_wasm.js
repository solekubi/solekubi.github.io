import * as wasm from "./lebao_wasm_bg.wasm";
import { __wbg_set_wasm } from "./lebao_wasm_bg.js";
__wbg_set_wasm(wasm);
export * from "./lebao_wasm_bg.js";
