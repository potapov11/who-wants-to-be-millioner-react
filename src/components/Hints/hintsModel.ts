export type HintButtonId = "fifty" | "hallHelp" | "friendHelp";

export type HintSoundKey = "playFiftySound" | "playPollHintSound" | "playFriendHintSound";

export type HintButtonConfig = {
	readonly id: HintButtonId;
	readonly sound: HintSoundKey;
	readonly ariaLabel: string;
};

export const HINT_BUTTONS: readonly HintButtonConfig[] = [
	{ id: "fifty", sound: "playFiftySound", ariaLabel: "Подсказка пятьдесят на пятьдесят" },
	{ id: "hallHelp", sound: "playPollHintSound", ariaLabel: "Помощь зала" },
	{ id: "friendHelp", sound: "playFriendHintSound", ariaLabel: "Звонок другу" },
] as const;
