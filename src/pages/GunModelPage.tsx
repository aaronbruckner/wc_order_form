import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { useState } from "react"
import "./GunModelPage.css"
import gun_acp_1 from "../images/gun_acp_1.webp"
import gun_cqb_1 from "../images/gun_cqb_1.webp"
import gun_classic_1 from "../images/gun_classic_1.jpg"

enum GunModel {
    ACP = "ACP",
    CQB = "CQB",
    Classic = "Classic",
}

const configs: any = {
    [GunModel.ACP]: {
        imageSrc: gun_acp_1
    },
    [GunModel.CQB]: {
        imageSrc: gun_cqb_1
    },
    [GunModel.Classic]: {
        imageSrc: gun_classic_1
    },
}

export default function GunModelPage(): JSX.Element {
    const [selectedModel, setSelectedModel] = useState("")

    function onSelectModelChange(event: SelectChangeEvent<string>) {
        setSelectedModel(event.target.value)
    }
    const gunConfig = configs[selectedModel]
    return (
        <div className="gun-model-page">
            <FormControl className="gun-model-selector-form-control">
                <InputLabel>Gun Model</InputLabel>
                <Select value={selectedModel} onChange={onSelectModelChange} autoWidth={true} variant="standard">
                    <MenuItem value={GunModel.ACP}>ACP</MenuItem>
                    <MenuItem value={GunModel.Classic}>Classic</MenuItem>
                    <MenuItem value={GunModel.CQB}>CQB</MenuItem>
                </Select>
            </FormControl>
            {gunConfig &&
            <img src={gunConfig.imageSrc}/>
            }
        </div>
    )
}