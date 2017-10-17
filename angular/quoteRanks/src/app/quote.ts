export class Quote {
    constructor(
    public author: string = "",
    public quoteText: string = "",
    public rating: number = 20,
    public created_at: Date = new Date(),
    public updated_at: Date = new Date()
    ){}
}
