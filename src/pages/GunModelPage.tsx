import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { useState } from "react"
import "./GunModelPage.css"
import gun_acp_1 from "../images/gun_acp_1.webp"
import gun_acp_2 from "../images/gun_acp_2.webp"
import gun_cqb_1 from "../images/gun_cqb_1.webp"
import gun_cqb_2 from "../images/gun_cqb_2.webp"
import gun_classic_1 from "../images/gun_classic_1.jpg"
import gun_classic_2 from "../images/gun_classic_2.jpg"
import Carousel from 'react-material-ui-carousel'

enum GunModel {
    ACP = "ACP",
    CQB = "CQB",
    Classic = "Classic",
}

const configs: any = {
    [GunModel.ACP]: {
        imageSrcs: [gun_acp_1, gun_acp_2]
    },
    [GunModel.CQB]: {
        imageSrcs: [gun_cqb_1, gun_cqb_2]
    },
    [GunModel.Classic]: {
        imageSrcs: [gun_classic_1, gun_classic_2]
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
            <Carousel className="gun-image-carousel" autoPlay={false} navButtonsAlwaysVisible={true}>
                {gunConfig.imageSrcs.map((imageSrc: string, i: number) => <img src={imageSrc} key={i}/>)}
            </Carousel>
            }
        </div>
    )
}