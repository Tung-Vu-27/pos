export class Item {
    // ItemID only used on frontend for deleting/updating items
    ItemID: string;
    Name: string;
    Quantity: number;
    UnitPrice: number;
    Subtotal: number;

    // This is used to display the number in 2 decimal places always (e.g. 2.00)
    SubtotalString: string;
}
