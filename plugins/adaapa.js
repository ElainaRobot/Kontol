import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	let vn = "./media/adaapa.mp3";
	conn.sendFile(m.chat, vn, "adaapa.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix =
	/^(bot|p|pp)$/i;
handler.command = new RegExp();

export default handler;
