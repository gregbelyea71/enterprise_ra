import * as React from 'react';
import { Stepper, StepButton, StepLabel, Step } from '@material-ui/core';

/**
 * Progress component rendering a stepper on top of the wizard
 *
 * @prop {number} currentStep Current selected step index
 * @prop {Function} onStepClick Action called when a step is clicked
 * @prop {React.ReactElement[]} steps Array of step elements
 */
export const WizardProgress = ({
    currentStep,
    onStepClick,
    steps,
}: WizardFormProgressProps) => {
    const handleStepClick = (index: number) => (): void => onStepClick(index);

    return (
        <Stepper activeStep={currentStep}>
            {steps.map((step, index) => {
                const label = React.cloneElement(step, { intent: 'label' });

                return (
                    <Step key={`step_${index}`}>
                        {!onStepClick ? (
                            <StepLabel>{label}</StepLabel>
                        ) : (
                            <StepButton onClick={handleStepClick(index)}>
                                {label}
                            </StepButton>
                        )}
                    </Step>
                );
            })}
        </Stepper>
    );
};

WizardProgress.defaultProps = {
    currentStep: 0,
    steps: [],
};

export type WizardFormProgressProps = {
    currentStep?: number;
    onStepClick?: (index: number) => void;
    steps?: React.ReactElement[];
};
