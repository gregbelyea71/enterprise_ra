import * as React from 'react';
/**
 * Progress component rendering a stepper on top of the wizard
 *
 * @prop {number} currentStep Current selected step index
 * @prop {Function} onStepClick Action called when a step is clicked
 * @prop {React.ReactElement[]} steps Array of step elements
 */
export declare const WizardProgress: {
    ({ currentStep, onStepClick, steps, }: WizardFormProgressProps): JSX.Element;
    defaultProps: {
        currentStep: number;
        steps: any[];
    };
};
export declare type WizardFormProgressProps = {
    currentStep?: number;
    onStepClick?: (index: number) => void;
    steps?: React.ReactElement[];
};
//# sourceMappingURL=WizardProgress.d.ts.map