import { FormControlLabel, Radio } from "@mui/material";
import './RadioButtonWithImage.css'

interface RadioButtonWithImageProps {
    value: string;
    label: string;
    imgSrc: string;
    imgAlt: string;
}

export default function RadioButtonWithImage(props: RadioButtonWithImageProps): JSX.Element {
    return (
        <div className="RadioButtonWithImage">
            <FormControlLabel className="FormControlLabel" value={props.value} control={<Radio />} label={props.label} />
            <img src={props.imgSrc} alt={props.imgAlt}/>
        </div>
    )
}