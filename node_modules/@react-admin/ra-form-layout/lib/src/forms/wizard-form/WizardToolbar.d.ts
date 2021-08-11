import { ComponentProps } from 'react';
import { Toolbar } from 'react-admin';
/**
 * The Toolbar displayed at the bottom of WizardForm.
 *
 * @prop {boolean} hasPreviousStep Optionnal. Does the wizard have a previous step?
 * @prop {boolean} hasNextStep Optionnal. Does the wizard have a next step?
 * @prop {Function} onPreviousClick Optionnal. Previous button click action
 * @prop {Function} onNextClick Optionnal. Next button click action
 * @prop {...BaseToolbarSubmitProps}
 */
export declare const WizardToolbar: ({ hasPreviousStep, hasNextStep, onPreviousClick, onNextClick, handleSubmit, handleSubmitWithRedirect, invalid, redirect, saving, submitOnEnter, }: WizardToolbarProps) => JSX.Element;
declare type BaseToolbarSubmitProps = Pick<ComponentProps<typeof Toolbar>, 'handleSubmit' | 'handleSubmitWithRedirect' | 'invalid' | 'redirect' | 'saving' | 'submitOnEnter'>;
export declare type WizardToolbarProps = {
    hasPreviousStep?: boolean;
    hasNextStep?: boolean;
    onPreviousClick?: () => void;
    onNextClick?: () => void;
} & BaseToolbarSubmitProps;
export {};
//# sourceMappingURL=WizardToolbar.d.ts.map