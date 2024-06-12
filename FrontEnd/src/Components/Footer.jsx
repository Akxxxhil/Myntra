function Footer() {
    return (
        <div>
           <div className="px-3 py-3">
           <div className="grid grid-cols-4 px-4">
                <div>
                    <h4 className="font-bold ">OFFLINE STORE</h4>
                    <p className="underline text-sm">Find Stores Near Me</p>
                </div>
                <div>
                    <h4 className="font-bold ">GET TO KNOW US</h4>
                    <ul className="flex flex-col gap-1">
                        <li>Contact Us</li>
                        <li>FAQ's</li>
                        <li>Blogs</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
                <div>
                    <div>
                        <p className="font-bold ">TRACK OR</p>
                        <p className="font-bold ">RETURN/EXCHANGE ORDER</p>
                        <ul className="flex flex-col gap-1">
                            <li>Track Order</li>
                            <li>Place RETURN/EXCHANGE Request</li>
                            <li>RETURNS/EXCHANGE policy</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h4 className="font-bold ">CUSTOMER CARE</h4>
                    <ul className="flex flex-col gap-1">
                        <li>Timings: 10 AM - 7 PM (Mon - Sat)</li>
                        <li>Whatsapp : +91 6366966283</li>
                        <li>Instagram: @snitch.co.in</li>
                    </ul>
                </div>
            </div>
           </div>
        </div>
    )
}

export default Footer