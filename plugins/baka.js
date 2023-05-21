import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	let vn = "./media/baka.mp3";
	conn.sendFile(m.chat, vn, "baka.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix =
	/^(bodoh|bdh|baka|🗿)$/i;
handler.command = new RegExp();

export default handler;
