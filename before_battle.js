exports = module.exports = before_battle;

function before_battle(character_list) {
	log("战斗开始 [%s] 遇到了 [%s]", character_list[0].name, character_list[1].name);

	// 把血都恢复到满
	character_list.forEach(function(c) {
		c.hp.current = c.hp.max;
	});
}