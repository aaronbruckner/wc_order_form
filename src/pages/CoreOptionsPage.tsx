import { RadioGroup } from "@mui/material";
import finishesCombatTuffWhiteBlack from "../images/finishes_combat_tuff_white_black.jpg"
import finishesCombatTuffBurntBronzeBlack from "../images/finishes_combat_tuff_burnt_bronze_black.jpg"
import RadioButtonWithImage from "../components/RadioButtonWithImage";

export default function CoreOptionsPage(): JSX.Element {
    return (
        <div>
            <RadioGroup>
                <RadioButtonWithImage label="Combat Tuff White/Black" value="todo" imgSrc={finishesCombatTuffWhiteBlack} imgAlt="todo"/>
                <RadioButtonWithImage label="Combat Tuff Burnt Bronze/Black" value="todo" imgSrc={finishesCombatTuffBurntBronzeBlack} imgAlt="todo"/>
            </RadioGroup>
        </div>
    )
}