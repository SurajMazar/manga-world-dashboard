class Chapter{
  constructor(
    public id:number,
    public title:string,
    public chapter_no:string,
    public pages:[],
    public published:boolean,
    public publish_date:Date,
    public free:boolean,
    public meta_title:string,
    public meta_description:string,
    public meta_keywords:string,
  ){}
}

export default Chapter;