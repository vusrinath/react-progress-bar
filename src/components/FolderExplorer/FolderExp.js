
import {useState} from 'react';
import './FloderExp.css';
import json from './FolderData.json';

const List = ({list}) => {
    const [isexpand, setExpand] = useState(true);

          return (list.map (node => {
                return(
                    <div className='item'>
                        <span onClick={() => setExpand((isexpand) => !isexpand)}>
                            {isexpand ? "+" : "-" }
                        </span>
                        <span>
                            {node.name}
                        </span>
                        
                            {node.children && <List list={node.children}/>}
                    </div>
                ) 
          }) 
        )
}

export default function FloderExp(){
    let [filesList, setFilesList] = useState(json);

    return(
        <div className='container'>
          <List list={filesList}/>
        </div>
    )
};