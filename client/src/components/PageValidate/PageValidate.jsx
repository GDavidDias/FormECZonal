import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setForm, setPage } from '../../redux/configSlice';

const PageValidate = () => {
    const dispatch = useDispatch();

    const formSG = useSelector((state)=>state.config.form);

    const [error, setError] = useState('');
    const [habilita, setHabilita] = useState(false);

    const handleChangeDni = (event) =>{
        const{name, value}=event.target;
        dispatch(setForm({
            ...formSG,
            [name]:value
        }));

        const valido = /^[0-9]{7,8}$/.test(value);
        //console.log('que tiene valido: ', valido);

        if (!valido && value!='') {
            setError('Ingrese un DNI valido, entre 7 y 8 digitos');
            setHabilita(false);
        }else{
            setError('');
            setHabilita(true);
        }
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('se presiona boton SIGUIENTE');
        dispatch(setPage('pageDatosPersonales'))
    };

    useEffect(()=>{
        console.log('que tiene formSG: ', formSG);
    },[formSG])

  return (
    <div className=''>
        <form onSubmit={handleSubmit}>
            <div className='flex flex-col'>
                <div>
                    <label>Ingrese DNI:</label>
                    <input
                        className='border-[1px] border-gray-500 rounded-sm mx-2 px-2 focus:outline-none'
                        type='number'
                        id='dni'
                        name='dni'
                        onChange={handleChangeDni}
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

export default PageValidate