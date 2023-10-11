// import { Form } from "react-router-dom";


type Bill = {
    shop: string;
    purchaseDate: string,
    item: string,
    photoId: string,
    guaranteeExpired: boolean,
}

const bill: Bill = {
    shop: "Calzedonia",
    purchaseDate: "10.10.2023",
    item: "socks",
    photoId: "csdbjbj1bj22j3b2j",
    guaranteeExpired: false,
};


export const Bill = () => {
    return (
        <div id="contact">
            <div>
                <img
                    key={bill.photoId}
                    src={bill.photoId}
                />
            </div>

            <div>
                <h1>
                    {bill.shop || bill.item ? (
                        <>
                            {bill.shop} - {bill.item}
                        </>
                    ) : (
                        <i>No Name</i>
                    )}{" "}
                    <Expired bill={bill} />
                </h1>

                <div>
                    {/* <Form
                        method="post"
                        action="destroy"
                        onSubmit={(event) => {
                            if (
                                !confirm(
                                    "Please confirm you want to delete this record."
                                )
                            ) {
                                event.preventDefault();
                            }
                        }}
                    >
                        <button type="submit">Delete</button>
                    </Form> */}
                </div>
            </div>
        </div>

    );
}

const Expired: React.FC<{ bill: Bill }> = ({ bill }) => {
    let expired = bill.guaranteeExpired;
    return (
        <div>
            {expired ? "x" : "ok"}

        </div>
    );
}