import { globalContext, type GlobalContextValue } from '@/context/GlobalContext';
import { useMobileViewport } from '@/hooks/useMobileViewport';
import { useQuizGame } from '@/hooks/useQuizGame';
import React from 'react';

interface LayoutWrapperProps {
	children: React.ReactNode;
}

export const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
	const MOBILE_VIEWPORT_MAX_PX = 800;
	const isMobile = useMobileViewport(MOBILE_VIEWPORT_MAX_PX);
	const quiz = useQuizGame();
	const containerClassName = !quiz.disabledAll ? 'container' : 'container disabled-all';

	const contextValue: GlobalContextValue = {
		numberQuestion: quiz.numberQuestion,
		arrQuestions: quiz.arrQuestions,
		openModal: quiz.openModal,
		isMobile,
	};

	return (
		<globalContext.Provider value={contextValue}>
			<div className="App">
				<div className={containerClassName}>{children}</div>
			</div>
		</globalContext.Provider>
	);
};
