import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	let vn = "./media/toxic.mp3";
	conn.sendFile(m.chat, vn, "toxic.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix =
	/^(kontol|asu|tai|memek|ngentot|ngentod|pantek|anjing|ajg|anjg)$/i;
handler.command = new RegExp();

export default handler;
