export type CardProps = {
  redItem: string;
  goldItem: string;
  checkIsCorrect: (answer: string) => void;
  hideModal: () => void;
};
