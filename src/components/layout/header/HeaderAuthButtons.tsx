import Button from "../../ui/ButtonFull";

export default function HeaderAuthButtons(){
    return(
        <div className="hidden lg:flex items-center gap-4"> 
            <Button variant="primary" text="Get Started"/>
            <Button variant="secondary" text="Sign In" />
        </div>
    )
}