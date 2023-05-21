import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	let vn = "./media/dia pasti gay.mp3";
	conn.sendFile(m.chat, vn, "dia pasti gay.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix =
	/^(gay)$/i;
handler.command = new RegExp();

export default handler;
