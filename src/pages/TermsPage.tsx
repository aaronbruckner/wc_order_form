import {Checkbox, FormControlLabel} from "@mui/material"

export default function TermsPage(): JSX.Element {
    return (
        <div>
            <p>Please fill out this form to receive a customized quote on your Wilson Combat Firearm. We will provide a personalized quote back to you very soon.</p>
            <p>When you are ready to proceed with your order, please use our Dealer Locator to find your nearest dealer and submit the provided quote to them. This is the encouraged method.</p>
            <p>If there is not a Wilson Combat dealer in your area, you are welcome to order directly from Wilson Combat. To proceed with this process, please follow the steps below.</p>
            <p>#1 - Call Customer Service with your quote # (upper right hand corner) to turn the quote into an order and pay your deposit. (A $500 Non-Refundable deposit is due for handguns, $250 for long guns. If you cancel after the order has been started, this deposit will be forfeited.</p>
            <p>#2 - Have your local FFL dealer who will be accepting the firearm for transfer send their information to info@wilsoncombat.com. Make sure your name and order # are clearly indicated.</p>
            <p>Please Note - After the build has been started, changes to the order are prohibited. </p>
            <p>Quoted lead times on custom firearm orders are approximations based on our best estimate at the time of ordering. We do our best to adhere to these time frames but because of the variables involved in building custom firearms (these time frames can vary significantly). Please be patient while your firearm is being built as we are working diligently to complete your order.</p>
            <p>All customers located outside of the USA please contact your closest International dealer HERE.</p>
            <FormControlLabel
            control={
              <Checkbox/>
            }
            label="YES, I understand and agree to the terms and conditions"
          />
        </div>
    )
}