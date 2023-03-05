import { qrcode } from "https://deno.land/x/qrcode@v2.0.0/mod.ts";

const imageSrc = await qrcode(Deno.args[0]);
Deno.writeTextFile("output/qrcode.html", `<img src="${imageSrc}" />`);
