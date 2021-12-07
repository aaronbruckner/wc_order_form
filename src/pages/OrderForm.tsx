import {Button, StepLabel, Stepper, Step} from "@mui/material"
import { useState } from "react"
import CoreOptionsPage from "./CoreOptionsPage"
import TermsPage from "./TermsPage"
import UserDetailsPage from "./UserDetailsPage"

export default function OrderForm(): JSX.Element {
    const [activeStep, setActiveStep] = useState(0)

    function onPrevClick() {
        setActiveStep(activeStep - 1)
    }

    function onNextClick() {
        setActiveStep(activeStep + 1)
    }
    
    return (
        <div>
            <Stepper activeStep={activeStep}>
                <Step>
                    <StepLabel>User Details</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Terms</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Core</StepLabel>
                </Step>
            </Stepper>
            {activeStep === 0 && <UserDetailsPage/>}
            {activeStep === 1 && <TermsPage/>}
            {activeStep === 2 && <CoreOptionsPage/>}

            <Button onClick={onPrevClick}>Back</Button>
            <Button onClick={onNextClick}>Next</Button>
        </div>
    )
}