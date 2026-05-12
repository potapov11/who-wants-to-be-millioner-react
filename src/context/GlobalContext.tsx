import { createContext } from 'react';
import type { Question } from '@/types/question';

export type GlobalContextValue = {
	numberQuestion: number;
	arrQuestions: Question[];
	openModal: boolean;
	isMobile: boolean;
};

export const globalContext = createContext<GlobalContextValue | null>(null);
