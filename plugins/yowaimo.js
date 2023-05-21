import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	let vn = "./media/yowaimo.mp3";
	conn.sendFile(m.chat, vn, "yowaimo.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix =
	/^(yowaimo)$/i;
handler.command = new RegExp();

export default handler;
