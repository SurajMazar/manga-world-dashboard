class MangaModel{
  constructor(
    public title:string,
    public slug:string,
    public excerpt:string,
    public description:string,
    public published:boolean,
    public publish_date:Date,
    public cover_picture:string,
    public thumbnail:string,
    public status:string,
    public createdAt:Date,
    public updatedAt:Date,
  ){} 
}

export default MangaModel;