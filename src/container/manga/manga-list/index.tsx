import React from "react";
import {Link} from 'react-router-dom';
import MangaModel from "../../../models/manga.model";
import {Row} from "antd";
import TdSkeleton from "../../../components/common/skeletons/td.skeleton";
import {EditOutlined} from "@ant-design/icons";
import {useDispatch} from "react-redux";
import {setEM} from "../../../store/services/manga.services";
import {API_URL} from "../../../constant/app.config";
import {returnLimitedWord} from "../../../utils/common.utils";

interface props{
    mangas:MangaModel[],
    loading:boolean,
}

const MangaList:React.FC<props> = (props) =>{

    const {mangas,loading} = props;
    const dispatch = useDispatch();

    const setEditManga = (manga:MangaModel)=>{
        dispatch(setEM(manga));
    }

    return(
        <Row gutter={[16,16]} className="section-break-1">
            <div className="MWD-table-container">
                <table className="MWD-table">
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>Thumbnail</th>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Author</th>
                            <th>Publish</th>
                            <th>Status</th>
                            <th>Created at</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        loading?
                            <TdSkeleton cols={9} items={10}/>:
                        mangas && mangas.length?
                        mangas.map((manga,index)=>(
                            <tr key={manga.id}>
                                <td>{index+1}</td>
                                <td>
                                    <img src={API_URL + manga.thumbnail} alt={manga.title}
                                        style={{height:'100px'}}
                                    />
                                </td>
                                <td title={manga.title}>{returnLimitedWord(manga.title,20)}</td>
                                <td>Genre</td>
                                <td>author</td>
                                <td>publish status</td>
                                <td>{manga.status}</td>
                                <td>created date</td>
                                <td>
                                    <Link to='/mangas/edit' onClick={()=>setEditManga(manga)}>
                                        <button className="btn btn-mwd--sm">
                                            <EditOutlined />Edit
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        )) :
                        <tr>
                            <td colSpan={9}> Sorry no mangas found !!</td>
                        </tr>
                    }
                    </tbody>
                </table>
            </div>
        </Row>
    );
}

export default MangaList;