import React, { useEffect, useState } from 'react'
import Head from '../Head/Head'
import { useDispatch, useSelector } from 'react-redux';
import PageValidate from '../../components/PageValidate/PageValidate';
import PageIni from '../../components/PageIni/PageIni';
import { setPage } from '../../redux/configSlice';

const Home = () => {

    const dispatch = useDispatch();

    const[content, setContent]=useState(null);
    const pageSG = useSelector((state)=>state.config.page);

    useEffect(()=>{
      switch (pageSG) {
        case 'pageValidate':
            setContent(<PageValidate/>)
            break;
        case 'pageIni':
            setContent(<PageIni/>)
            break;
      
        default:
            break;
      }  
    },[pageSG])

    useEffect(()=>{
        setContent(<PageValidate/>);
        setPage('pageValidate');
    },[])

  return (
    <div className='h-full w-full fixed'>
        {/* CONTENEDOR SUPERIOR */}
        <div className='w-full h-[5vh]'>
            {/* ENCABEZADO */}
            <Head/>
        </div>
        {/* CONTENEDOR PRINCIPAL */}
        <div className='w-full h-[95vh]'>
            {/* PAGINAS DE CONTENIDOS */}
            {content}
        </div>
    </div>
  )
}

export default Home