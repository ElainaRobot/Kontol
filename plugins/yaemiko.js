import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	let vn = "./media/kenapa.mp3";
	conn.sendFile(m.chat, vn, "kenapa.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix =
	/^(hab|bot|wahab|sayang|inory|inori)$/i;
handler.command = new RegExp();

export default handler;
