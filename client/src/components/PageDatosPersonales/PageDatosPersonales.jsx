import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../redux/configSlice';

const PageDatosPersonales = () => {
    const dispatch = useDispatch();
    const formSG = useSelector((state)=>state.config.form);

    const [error, setError] = useState('');
    const [habilita, setHabilita] = useState(false);


    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('se presiona boton SIGUIENTE');
        dispatch(setPage('pageDatosPersonales'))
    };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className='flex flex-col'>
                <div>
                    <label>Ingrese DNI:</label>
                    <input
                        className='border-[1px] border-gray-500 rounded-sm mx-2 px-2 focus:outline-none'
                        type='number'
                        id='dni'
                        name='dni'
                        //onChange={handleChangeDni}
                    ></input>
                    {error && <p className='italic text-red-500'>{error}</p>}

                </div>
                <div>
                    <button 
                        type='submit'
                        className={`w-40 h-8  my-2 px-2 py-1 text-base font-medium text-white  shadow-md rounded desktop-xl:h-10 desktop-xl:text-xl
                            ${(habilita)
                                ?`bg-[#729DA6] hover:bg-[#6A88F7] cursor-pointer`
                                :`bg-slate-200 hover:bg-slate-200`
                            }
                            `}
                        disabled={!habilita}
                    >Siguiente</button>   
                </div>
            </div>
        </form>
    </div>
  )
}

export default PageDatosPersonales