import { useHints, type HintsProps } from "./useHints";
import styles from "./Hint.module.scss";

export type { HintsProps };

export const Hints = (props: HintsProps) => {
	const { buttons } = useHints(props);

	return (
		<div className={styles.hints}>
			{buttons.map(({ config, className, onClick }) => (
				<button key={config.id} type="button" className={className} aria-label={config.ariaLabel} onClick={onClick} />
			))}
		</div>
	);
};
