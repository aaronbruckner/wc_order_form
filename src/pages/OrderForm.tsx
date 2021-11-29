import {StepLabel, Stepper, Step} from "@mui/material"

export default function OrderForm(): JSX.Element {
    return (
        <div>
            <Stepper activeStep={0}>
                <Step>
                    <StepLabel>User Details</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Something</StepLabel>
                </Step>
            </Stepper>
        </div>
    )
}